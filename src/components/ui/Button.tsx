import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent-2)]";

  const variants = {
    primary:
      "gradient-btn text-[#17130f] shadow-lg shadow-[#d79c1122] hover:shadow-[#eb853633] hover:scale-[1.02]",
    secondary:
      "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[color:var(--color-accent-2)]/60 hover:bg-[var(--color-surface-hover)]",
    ghost:
      "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (href.startsWith("#")) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
