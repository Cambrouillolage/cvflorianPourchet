import Section from "@/components/ui/Section";

const labProjects = [
  {
    title: "Mon jeu de société : Cambrouillolage",
    desc: "Création de A à Z d'un jeu, une idée qui me trottait dans la tête depuis très longtemps ! Petit + IA, j'ai ajouté mes règles dans un chat pour les joueurss qui veulent un rappel rapide pendant la partie.",
    tags: ["Jeu de société", "Création", "IA"],
    status: "En vente",
    statusColor: "emerald",
    href: "https://fiascogames.fr/cambrouillolage/",
  },
  {
    title: "Assistant pour remplir les appréciations sur le bulletin des élèvess",
    desc: "Un prof remplie 150 fois, 3 fois dans l'année des appréciations de bulletins scolaires, souvent très similaires d'un élève à l'autre. L'idée : un assistant qui génère une appréciation personnalisée à partir des notes et d'un bref commentaire du prof. Gain de temps et de créativité pour les profs, et des appréciations plus riches pour les élèves !",
    tags: ["Next.js", "IA", "RAG", "TypeScript"],
    status: "En cours",
    statusColor: "emerald",
    href: null,
  },
  
];

const statusColors: Record<string, string> = {
  emerald: "bg-lime-100 border-lime-300 text-lime-800",
  yellow: "bg-amber-100 border-amber-300 text-amber-800",
  slate: "bg-stone-100 border-stone-300 text-stone-700",
};

export default function Lab() {
  return (
    <Section id="lab" className="bg-[var(--color-surface)]/30">
      {/* Title */}
      <div className="mb-12 reveal">
        <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
          Projets perso
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
          Ce que je construis à titre personnel
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {labProjects.map((project) => (
          <div
            key={project.title}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-4 card-hover reveal"
          >
            {/* Status */}
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-mono border rounded-full px-2.5 py-0.5 ${statusColors[project.statusColor]}`}
              >
                ● {project.status}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-bold text-[var(--color-foreground)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-amber-100 border border-amber-300 text-amber-900 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link if available */}
            {project.href && (
              <a
                href={project.href}
                className="text-xs text-[var(--color-accent-2)] hover:text-[#b96322] font-medium transition-colors"
              >
                Voir le jeu →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
