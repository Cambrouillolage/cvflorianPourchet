"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Stack", href: "#stack" },
  { label: "Lab", href: "#lab" },
  { label: "À propos", href: "#a-propos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#hero"
            className="font-bold text-lg tracking-tight text-[var(--color-foreground)] hover:text-[var(--color-accent-2)] transition-colors"
          >
            Florian<span className="text-[var(--color-accent-2)]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)] transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 gradient-btn text-[#17130f] text-sm font-semibold px-4 py-2 rounded-xl shadow-lg shadow-[#d79c1122] hover:scale-[1.02] transition-all"
            >
              Me contacter
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-background)]/95 backdrop-blur-xl border-b border-[var(--color-border)] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)] transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--color-border)]">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center gradient-btn text-[#17130f] text-sm font-semibold px-4 py-2.5 rounded-xl"
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
