import Section from "@/components/ui/Section";

const projects = [
  {
    number: "01",
    title: "Contrôle de documents officiels",
    problem:
      "Vérifier manuellement des centaines de documents réglementaires prenait plusieurs heures par semaine.",
    solution:
      "Pipeline OCR + LLM qui extrait les champs clés, vérifie la conformité réglementaire et génère un rapport d'alerte automatique.",
    role: "Architecture, choix du modèle, prompting, intégration API",
    impact: "−80 % de temps de vérification · Zéro document manqué",
    stack: ["Python", "OpenAI", "LangChain", "FastAPI"],
    accent: "indigo",
  },
  {
    number: "02",
    title: "Assistant chat client",
    problem:
      "L'équipe support répondait aux mêmes questions en boucle, sur des sujets déjà documentés dans la base de connaissances.",
    solution:
      "Chatbot RAG indexé sur toute la documentation interne, connecté au CRM, avec mémoire de conversation.",
    role: "RAG de bout en bout, interface Next.js, intégration CRM",
    impact: "−60 % de tickets niveau 1 · Équipe support libérée pour les cas complexes",
    stack: ["Next.js", "OpenAI", "Pinecone", "n8n"],
    accent: "violet",
  },
  {
    number: "03",
    title: "Automatisation collecte d'avis",
    problem:
      "Les retours clients étaient dispersés sur plusieurs canaux, non exploités, et analysés manuellement une fois par trimestre.",
    solution:
      "Pipeline automatisé qui collecte, regroupe, clustérise et résume les avis via LLM, avec rapport hebdomadaire auto.",
    role: "Conception pipeline, prompting, orchestration n8n",
    impact: "Analyse hebdomadaire automatique · Équipe alignée sur les vrais problèmes",
    stack: ["Python", "n8n", "Claude API", "Notion"],
    accent: "emerald",
  },
];

const methodSteps = [
  {
    n: "1",
    title: "Comprendre",
    desc: "Je pars du problème, pas de la techno. Pas de stack impressionnante pour rien.",
  },
  {
    n: "2",
    title: "Prototyper",
    desc: "MVP en quelques jours. Tester avec les vrais utilisateurs avant d'investir.",
  },
  {
    n: "3",
    title: "Connecter",
    desc: "Intégrer dans le contexte existant — outils, données, workflows.",
  },
  {
    n: "4",
    title: "Livrer",
    desc: "Déployer, mesurer, itérer. La prod, pas le PowerPoint.",
  },
];

const accentColors: Record<string, { border: string; badge: string; number: string }> = {
  indigo: {
    border: "border-amber-400/90 hover:border-amber-500",
    badge: "bg-amber-100 border border-amber-400 text-amber-900",
    number: "text-amber-500",
  },
  violet: {
    border: "border-orange-400/90 hover:border-orange-500",
    badge: "bg-orange-100 border border-orange-400 text-orange-900",
    number: "text-orange-500",
  },
  emerald: {
    border: "border-lime-400/90 hover:border-lime-500",
    badge: "bg-lime-100 border border-lime-400 text-lime-900",
    number: "text-lime-700",
  },
};

export default function Projects() {
  return (
    <Section id="projets" className="bg-[var(--color-background)]">
      {/* Title */}
      <div className="mb-12 reveal">
        <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
          Cas concrets
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
          3 produits IA déployés chez{" "}
          <span className="gradient-text">Dealt</span>
        </h2>
      </div>

      {/* Project cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-20">
        {projects.map((p) => {
          const c = accentColors[p.accent];
          return (
            <div
              key={p.title}
              className={`bg-[var(--color-surface)] border rounded-2xl p-6 flex flex-col gap-4 card-hover transition-all duration-200 reveal ${c.border}`}
            >
              {/* Number */}
              <span className={`text-4xl font-black font-mono ${c.number} leading-none`}>
                {p.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--color-foreground)] leading-snug">
                {p.title}
              </h3>

              {/* Problem / Solution */}
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-[var(--color-muted)] uppercase tracking-wider text-xs">
                    Problème
                  </span>
                  <p className="mt-1 text-[var(--color-foreground)] leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-muted)] uppercase tracking-wider text-xs">
                    Solution
                  </span>
                  <p className="mt-1 text-[var(--color-foreground)] leading-relaxed">{p.solution}</p>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-muted)] uppercase tracking-wider text-xs">
                    Mon rôle
                  </span>
                  <p className="mt-1 text-[var(--color-muted)]">{p.role}</p>
                </div>
              </div>

              {/* Impact */}
              <div className="gradient-btn rounded-xl px-4 py-2.5 text-sm font-bold text-[#17130f]">
                📈 {p.impact}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono bg-amber-100 border border-amber-300 text-amber-900 rounded-full px-2.5 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Method */}
      <div className="reveal">
        <div className="mb-8">
          <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
            Méthode
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
            Ma façon de travailler
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodSteps.map((step) => (
            <div
              key={step.n}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 card-hover"
            >
              <div className="text-3xl font-black font-mono text-[var(--color-accent)] mb-3">
                {step.n}
              </div>
              <h4 className="font-bold text-[var(--color-foreground)] mb-1">{step.title}</h4>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
