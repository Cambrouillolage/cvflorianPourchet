import Button from "@/components/ui/Button";

// Remplace par ton vrai ID YouTube ou chemin vidéo locale
const YOUTUBE_VIDEO_ID = "97ua7C2pgL0";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full py-14 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        {/* Colonne gauche — texte */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-[0.28em] text-[var(--color-accent-2)]">
              IA opérationnelle + produit + création
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[var(--color-foreground)]">
              CV de Florian Pourchet
            </h1>
          </div>

          <div className="space-y-4 max-w-2xl">
            <p className="text-lg lg:text-xl text-[var(--color-foreground)] leading-relaxed">
              Product Manager de métier, je conçois et déploie des produits IA opérationnels depuis plus d'un an et demi, de l'automatisation au RAG, du prototype à la mise en production, toujours en lien étroit avec les équipes.
            </p>
            <p className="text-base lg:text-lg text-[var(--color-muted)] leading-relaxed">
              En parallèle, j’ai également créé mon propre jeu de société et lancé ma maison d’édition, Fiascogames
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#projets" variant="primary">
              Voir mes projets
            </Button>
            <Button
              href="https://fiascogames.fr/cambrouillolage/"
              variant="secondary"
              external
            >
              Découvrir mon jeu →
            </Button>
          </div>
        </div>

        {/* Colonne droite — vidéo 9:16 */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[220px] sm:w-[260px] lg:w-[280px] xl:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[var(--color-border)] shadow-2xl shadow-[#d79c1130] glow">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Présentation Florian — AI Builder"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-xs font-mono text-[var(--color-muted)]">1 min 30 · Pour me découvrir</p>
        </div>
      </div>
    </section>
  );
}
