import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";

const columns = [
  {
    title: "Agency",
    links: [
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { href: "mailto:hello@symbasis.com.au", label: "hello@symbasis.com.au" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            A full-service marketing agency built for brands that refuse to blend in.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Symbasis. All rights reserved.</p>
        <p>Sydney, Australia</p>
      </Container>
    </footer>
  );
}
