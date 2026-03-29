import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="a-propos">
      <div className="max-w-3xl reveal">
          <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-2">
            À propos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] mb-6">
            Je suis builder entre <span className="gradient-text">le PM et l&apos;ingénieur</span>
          </h2>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              J&apos;ai commencé comme Product Manager — à comprendre les besoins, structurer les problèmes,
              travailler avec les équipes tech. Puis j&apos;ai appris à coder, à utiliser les APIs LLM,
              à déployer des pipelines automatisés.
            </p>
            <p>
              Résultat : je suis à l&apos;intersection du PM et de l&apos;ingénieur IA. Je construis des outils
              qui fonctionnent vraiment, pas des démos impressionnantes qui restent en sandbox. Basé sur une approche produit, j&apos;aime livrer des solutions utiles et concrètes.
            </p>
          </div>
      </div>
    </Section>
  );
}
