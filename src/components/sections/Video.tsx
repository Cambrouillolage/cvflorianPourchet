import Section from "@/components/ui/Section";

// Replace VIDEO_ID with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "TODO_REPLACE_WITH_VIDEO_ID";

export default function Video() {
  return (
    <Section id="video" className="bg-[var(--color-surface)]/30">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="mb-8 text-center reveal">
          <p className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest mb-2">
            Présentation
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
            1 minute pour me découvrir
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Ce que je fais, pourquoi, et comment je travaille — en moins d&apos;une minute.
          </p>
        </div>

        {/* Video embed */}
        <div className="reveal">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl shadow-[#d79c1118] glow">
            {YOUTUBE_VIDEO_ID === "TODO_REPLACE_WITH_VIDEO_ID" ? (
              // Placeholder until real video is set
              <div className="absolute inset-0 bg-[var(--color-surface)] flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-btn flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-[#17130f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[var(--color-muted)] text-sm font-mono">
                  Vidéo à venir — remplace VIDEO_ID dans Video.tsx
                </p>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Présentation Florian — AI Builder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          <p className="mt-4 text-center text-xs text-[var(--color-muted)] font-mono">
            Construit en vrai · Déployé en vrai · Mesuré en vrai
          </p>
        </div>
      </div>
    </Section>
  );
}
