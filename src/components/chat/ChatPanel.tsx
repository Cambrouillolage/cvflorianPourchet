"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const EXAMPLES = [
  "Quel est son jeu préféré ?",
  "Sa dernière expérience ?",
  "Quel est son parcours ?",
  "Quels projets IA a-t-il déployés ?",
];

const STORAGE_KEY = "cv_chat_history";
const MAX_HISTORY = 10;

function loadHistory(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(-MAX_HISTORY);
  } catch {
    return [];
  }
}

function saveHistory(msgs: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-MAX_HISTORY)));
  } catch {
    // storage indisponible
  }
}

interface ChatPanelProps {
  compact?: boolean;
}

export default function ChatPanel({ compact = false }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>(() => loadHistory());
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    saveHistory(messages);
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.content,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (res.status === 429) {
        setError("Trop de messages envoyes. Patientez une minute puis reessayez.");
        return;
      }

      const data: { response?: string; error?: string } = await res.json();

      if (!res.ok || !data.response) {
        setError(data.error ?? "Reponse inattendue. Reessayez.");
        return;
      }

      setMessages([...next, { role: "assistant", content: data.response }]);
    } catch {
      setError("Impossible de joindre le service. Verifiez votre connexion.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const isEmpty = messages.length === 0;

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <div className={`${compact ? "h-64" : "h-80"} overflow-y-auto p-5 space-y-4`}>
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-[var(--color-muted)]">
              Essayez une de ces questions pour commencer :
            </p>
            <div className="grid sm:grid-cols-2 gap-2 w-full">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => sendMessage(ex)}
                  className="text-left text-sm bg-[var(--color-background)] border border-[var(--color-border)] hover:border-amber-400 text-[var(--color-muted)] hover:text-[var(--color-foreground)] rounded-xl px-4 py-3 transition-all duration-150"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "gradient-btn text-[#17130f]"
                      : "bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-foreground)]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center">
                <p className="text-sm text-red-400 bg-red-950/40 border border-red-800/40 rounded-xl px-4 py-2">
                  {error}
                </p>
              </div>
            )}
            <div ref={bottomRef} />
          </>
        )}
      </div>

      <div className="border-t border-[var(--color-border)] p-4 flex gap-3 items-end">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Posez votre question..."
          rows={1}
          className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 resize-none leading-relaxed"
          aria-label="Message"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={isLoading || !input.trim()}
          className="gradient-btn text-[#17130f] p-2.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 transition-transform"
          aria-label="Envoyer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
