import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-gradient-brand text-background hover:opacity-90 hover:-translate-y-0.5",
    secondary:
      "border border-border text-foreground hover:border-teal/60 hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
