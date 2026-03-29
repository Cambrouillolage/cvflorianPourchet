import Section from "@/components/ui/Section";

const stackGroups = [
  {
    label: "IA & Automatisation",
    icon: "🧠",
    items: [
      { name: "OpenAI API", desc: "GPT-4o, embeddings, vision" },
      { name: "Claude (Anthropic)", desc: "Raisonnement, longues chaînes" },
      { name: "LangChain", desc: "Orchestration LLM" },
      { name: "LlamaIndex", desc: "RAG avancé" },
      { name: "n8n", desc: "Automatisation visuelle" },
      { name: "Pinecone", desc: "Base vectorielle" },
    ],
  },
  {
    label: "Dev & Infrastructure",
    icon: "⚙️",
    items: [
      { name: "Next.js", desc: "Apps web full-stack" },
      { name: "TypeScript", desc: "Fiabilité côté front" },
      { name: "Python", desc: "Scripts, pipelines, APIs" },
      { name: "FastAPI", desc: "Microservices IA" },
      { name: "PostgreSQL", desc: "Données structurées" },
      { name: "Vercel / Railway", desc: "Déploiement rapide" },
    ],
  },
  {
    label: "PM & Méthode",
    icon: "📐",
    items: [
      { name: "Notion", desc: "Doc & gestion produit" },
      { name: "Jira", desc: "Tickets & roadmap" },
      { name: "Figma", desc: "Maquettes & design" },
      { name: "FigJam", desc: "Ateliers & mapping" },
    ],
  },
];

export default function Stack() {
  return (
    <Section id="stack">
      {/* Title */}
      <div className="mb-12 reveal">
        <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
          Outillage
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
          Stack & méthode
        </h2>
      </div>

      {/* Stack groups */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {stackGroups.map((group) => (
          <div
            key={group.label}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 card-hover reveal"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{group.icon}</span>
              <h3 className="font-bold text-[var(--color-foreground)]">{group.label}</h3>
            </div>
            <div className="space-y-2">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-[var(--color-border)]/50 last:border-0">
                  <span className="text-sm font-medium text-[var(--color-foreground)]">{item.name}</span>
                  <span className="text-xs text-[var(--color-muted)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
