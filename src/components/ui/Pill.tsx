interface PillProps {
  children: React.ReactNode;
  color?: "indigo" | "violet" | "emerald" | "slate";
  size?: "sm" | "md";
}

export default function Pill({
  children,
  color = "indigo",
  size = "sm",
}: PillProps) {
  const colors = {
    indigo: "bg-amber-100 text-amber-900 border-amber-300",
    violet: "bg-orange-100 text-orange-900 border-orange-300",
    emerald: "bg-lime-100 text-lime-900 border-lime-300",
    slate: "bg-stone-100 text-stone-700 border-stone-300",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono font-medium ${colors[color]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
