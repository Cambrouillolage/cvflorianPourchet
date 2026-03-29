"use client";

import { useEffect, useRef } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("visible");
                (child as HTMLElement).style.animationDelay = `${i * 80}ms`;
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
