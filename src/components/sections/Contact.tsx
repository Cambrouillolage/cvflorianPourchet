import Section from "@/components/ui/Section";

const EMAIL = "flopourchet@gmail.com";
const PHONE = "0627211471";


export default function Contact() {
  return (
    <Section id="contact" className="bg-[var(--color-surface)]/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="reveal">
          <p className="text-xs font-mono text-[var(--color-accent-2)] uppercase tracking-widest mb-6">
            Contact
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-base text-[var(--color-muted)] reveal">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a
              href={`tel:${PHONE}`}
              className="hover:text-[var(--color-accent-2)] transition-colors font-medium"
            >
              {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-[var(--color-accent-2)] transition-colors font-medium"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
