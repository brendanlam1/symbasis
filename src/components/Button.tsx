import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-signal text-on-accent hover:bg-signal-soft motion-safe:hover:-translate-y-0.5",
    secondary:
      "border border-border-strong text-foreground hover:border-signal hover:text-signal-soft motion-safe:hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 motion-safe:group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
