import Section from "@/components/ui/Section";
import Image from "next/image";

interface Experience {
  period: string;
  role: string;
  org: string;
  desc: string[];
  tags: string[];
  color: string;
  highlight?: boolean;
  logo?: string;
  website?: string;
}

const experiences: Experience[] = [
  
  {
    period: "2016-2018",
    role: "Formation",
    org: "Efrei Paris",
    desc: ["École d'ingénieurs du numérique."],
    tags: ["Ingénierie", "Data", "Tech", "Culture produit"],
    color: "from-stone-500 to-amber-900",
    logo: "/assets/logos/efrei.png",
  },
    {
    period: "2016-2018",
    role: "Chef de projet digital",
    org: "Société Générale",
    desc: [
      "Pilotage de projets digitaux dans un grand groupe bancaire.",
      "Transformation des parcours clients.",
      "Coordination d'équipes tech et métier.",
    ],
    tags: ["Gestion de projet", "Digital", "Finance"],
    color: "from-red-600 to-red-400",
    logo: "/assets/logos/sg.png",
  },
  
  {
    period: "2018-2024",
    role: "Product Manager",
    org: "Modulotech",
    desc: [
      "Pilotage de projets digitaux pour des grands comptes (Somfy, Atlantic, Brandt).",
      "Lead produit sur Kaze, solution de Field Service Management développée from scratch.",
      "Construction d'un produit de A à Z : discovery, priorisation, delivery.",
      "Traduction des besoins métiers en solutions concrètes et fonctionnelles.",
      "Identification et pilotage de partenaires techniques.",
      "Animation de réunions techniques pour comprendre les interfaçages et les APIs.",
      "Collaboration étroite avec les équipes techniques et partenaires externes.",
    ],
    tags: ["Product", "Créativité", "API"],
    color: "from-amber-500 to-yellow-400",
    logo: "/assets/logos/modulotech.png",
  },
  {
    period: "2024-Aujourd'hui",
    role: "Product manager & IA engineer",
    org: "Dealt",
    desc: [
      "Solution servicielle pour les e-commerçants et retailers français.",
      "Lead des sujets IA et automatisation dans une plateforme B2B.",
      "Conception et déploiement de 40+ automatisations (sales, marketing, opérations).",
      "Développement et intégration de solutions IA : contrôle de documents, assistant support client, envoi d'avis et de factures.",
      "Mise en place d'une couche d'A/B testing sur les tunnels de vente pour optimiser la conversion.",
      "Transformation de processus manuels en workflows automatisés à forte valeur.",
      "Pilotage produit de bout en bout : discovery, priorisation, delivery.",
      "Création d'outils internes et dashboards pour améliorer la performance opérationnelle.",
    ],
    tags: ["RAG", "LLM", "Python", "n8n"],
    color: "from-orange-500 to-amber-500",
    highlight: true,
    logo: "/assets/logos/dealt.png",
    website: "https://www.dealt.fr/",
  }
];

export default function Timeline() {
  return (
    <Section id="experiences">
      {/* Title */}
      <div className="mb-12 reveal">
        <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
          Expériences
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)]">
          Mon parcours
        </h2>
      </div>

      {/* Desktop: horizontal line */}
      <div className="hidden lg:block relative w-full">
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

        <div className="grid grid-cols-4 gap-5 w-full">
          {experiences.map((exp, i) => (
            <div key={i} className="relative reveal h-full">
              {/* Dot on line */}
              <div
                className={`relative z-10 mb-6 w-5 h-5 rounded-full border-2 border-[var(--color-background)] bg-gradient-to-br ${exp.color} shadow-lg`}
              />

              {/* Card */}
              <div
                className={`h-full flex flex-col bg-[var(--color-surface)] border rounded-2xl p-5 card-hover ${
                  exp.highlight
                    ? "border-amber-400/70 shadow-[0_0_24px_rgba(235,133,54,0.16)]"
                    : "border-[var(--color-border)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-mono text-[var(--color-muted)]">
                    {exp.period}
                  </span>
                    {exp.logo ? (
                      <div className="h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1">
                        <Image
                          src={exp.logo}
                          alt={`Logo ${exp.org}`}
                          width={56}
                          height={56}
                          className={`object-contain w-full h-full ${
                            exp.org === "Société Générale" ? "scale-[1.9]" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="h-14 w-14 shrink-0 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-background)]/60" />
                    )}
                </div>
                <h3 className="mt-1 font-bold text-[var(--color-foreground)]">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent-2)] mb-2">
                  {exp.org}
                </p>
                <ul className="text-sm text-[var(--color-muted)] leading-relaxed list-disc pl-5 space-y-1">
                  {exp.desc.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-amber-100 border border-amber-300 text-amber-900 rounded-full px-2 py-0.5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-xs font-semibold text-[var(--color-accent-2)] hover:text-[#b96322]"
                    >
                      Visiter le site →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="lg:hidden space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-4 reveal">
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} mt-1.5 shrink-0`}
              />
              {i < experiences.length - 1 && (
                <div className="w-px flex-1 bg-[var(--color-border)] my-2" />
              )}
            </div>
            <div
              className={`flex-1 min-h-[280px] flex flex-col bg-[var(--color-surface)] border rounded-xl p-4 mb-2 ${
                exp.highlight
                  ? "border-amber-400/70"
                  : "border-[var(--color-border)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-mono text-[var(--color-muted)]">
                  {exp.period}
                </span>
                  {exp.logo ? (
                    <div className="h-12 w-12 shrink-0 rounded-md overflow-hidden bg-white flex items-center justify-center p-0.5">
                      <Image
                        src={exp.logo}
                        alt={`Logo ${exp.org}`}
                        width={44}
                        height={44}
                        className={`object-contain w-full h-full ${
                          exp.org === "Société Générale" ? "scale-[1.85]" : ""
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 shrink-0 rounded-md border border-dashed border-[var(--color-border)] bg-[var(--color-background)]/60" />
                  )}
              </div>
              <h3 className="font-bold text-[var(--color-foreground)] mt-0.5">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-[var(--color-accent-2)] mb-1">
                {exp.org}
              </p>
              <ul className="text-sm text-[var(--color-muted)] list-disc pl-5 space-y-1">
                {exp.desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-100 border border-amber-300 text-amber-900 rounded-full px-2 py-0.5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs font-semibold text-[var(--color-accent-2)] hover:text-[#b96322]"
                  >
                    Visiter le site →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thread line */}
      <p className="mt-16 lg:mt-20 text-center text-[var(--color-muted)] text-sm italic reveal">
        Un fil conducteur : partir du problème, construire ce qui fonctionne, mettre en prod.
      </p>
    </Section>
  );
}
