import ChatPanel from "@/components/chat/ChatPanel";

export default function Chat() {
  return (
    <section id="chat" className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 reveal">
          <p className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest mb-2">
            Chat
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
            Posez-moi une question
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Un LLM connecté à mes données répond à vos questions sur mon parcours.
          </p>
          <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-[var(--color-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Powered by RAG + n8n + LLM
          </div>
        </div>
        <div className="reveal">
          <ChatPanel />
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs text-center text-[var(--color-muted)]">
          Les reponses sont generees par IA a partir de mes donnees. Elles peuvent etre imprecises.
        </p>
      </div>
    </section>
  );
}
