interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 ${hover ? "card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
