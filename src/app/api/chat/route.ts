import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET;

// Simple in-memory rate limit: max 20 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRealIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 20) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { error: "Service de chat indisponible." },
      { status: 503 }
    );
  }

  const ip = getRealIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de messages. Patientez une minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Validate shape
  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).message !== "string" ||
    !(body as Record<string, unknown>).message
  ) {
    return NextResponse.json({ error: "Message manquant." }, { status: 400 });
  }

  const payload = body as {
    message: string;
    history?: Array<{ role: string; content: string }>;
  };

  // Sanitise: trim and cap message length
  const message = payload.message.trim().slice(0, 1000);
  const history = Array.isArray(payload.history) ? payload.history.slice(-20) : [];

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (WEBHOOK_SECRET) {
    headers["X-Webhook-Secret"] = WEBHOOK_SECRET;
  }

  let n8nRes: Response;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);
    try {
      n8nRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          message,
          history,
          metadata: { lang: "fr", source: "cv" },
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return NextResponse.json(
        { error: "Le service met trop de temps à répondre. Réessayez." },
        { status: 504 }
      );
    }
    console.error("[chat] n8n fetch error:", err);
    return NextResponse.json(
      { error: "Service indisponible. Réessayez dans quelques instants." },
      { status: 502 }
    );
  }

  if (!n8nRes.ok) {
    console.error("[chat] n8n returned", n8nRes.status);
    return NextResponse.json(
      { error: "Erreur du service de chat." },
      { status: 502 }
    );
  }

  let data: unknown;
  try {
    data = await n8nRes.json();
  } catch {
    return NextResponse.json(
      { error: "Réponse invalide du service." },
      { status: 502 }
    );
  }

  // Accept {response: string} or {output: string} or {text: string}
  const responseText =
    typeof (data as Record<string, unknown>).response === "string"
      ? (data as Record<string, unknown>).response
      : typeof (data as Record<string, unknown>).output === "string"
      ? (data as Record<string, unknown>).output
      : typeof (data as Record<string, unknown>).text === "string"
      ? (data as Record<string, unknown>).text
      : null;

  if (typeof responseText !== "string") {
    console.error("[chat] unexpected n8n payload shape:", data);
    return NextResponse.json(
      { error: "Réponse inattendue du service." },
      { status: 502 }
    );
  }

  return NextResponse.json({ response: responseText });
}
