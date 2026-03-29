"use client";

import { useEffect, useState } from "react";
import ChatPanel from "@/components/chat/ChatPanel";

export default function StickyChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div
        className="fixed bottom-5 right-4 sm:right-5 z-[80]"
        style={{ right: "max(1rem, env(safe-area-inset-right))" }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="sticky-shine gradient-btn text-[#17130f] shadow-lg shadow-[#d79c1122] rounded-full px-4 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform"
          aria-expanded={isOpen}
          aria-controls="sticky-chat-drawer"
        >
          {isOpen ? "Fermer le chat" : "Pose-moi une question"}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div
            className="absolute inset-0 bg-black/30 pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />
          <aside
            id="sticky-chat-drawer"
            className="absolute bottom-20 !left-auto !right-4 sm:!right-5 z-[70] w-[min(460px,calc(100vw-2rem))] pointer-events-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl"
            style={{ right: "max(1rem, env(safe-area-inset-right))" }}
            role="dialog"
            aria-label="Chat IA"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
              <div>
                <p className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest">
                  Chat IA
                </p>
                <p className="text-sm text-[var(--color-foreground)] font-semibold">
                  Posez-moi une question
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            <ChatPanel compact />
          </aside>
        </div>
      )}
    </>
  );
}
