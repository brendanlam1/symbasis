import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { SYDNEY_COORDS } from "./MetaStrip";
import { services } from "@/lib/services";

const columns = [
  {
    title: "Services",
    links: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
  },
  {
    title: "Company",
    links: [
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
    <footer className="relative isolate overflow-hidden border-t border-border bg-surface/40">
      <div
        aria-hidden="true"
        className="scanlines absolute inset-x-0 top-0 h-24 opacity-40"
      />

      <Container className="relative grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A full-service marketing agency built for brands that refuse to
            blend in.
          </p>
          <p className="mono-data mt-6">Transmitting from {SYDNEY_COORDS}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mono-label text-foreground/70">{col.title}</h3>
            <ul className="mt-5 space-y-3">
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

      <Container className="relative flex flex-col items-start justify-between gap-3 border-t border-border py-6 sm:flex-row sm:items-center">
        <p className="mono-data">
          © {new Date().getFullYear()} Symbasis — All rights reserved
        </p>
        <p className="mono-label flex items-center gap-2 text-foreground/70">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
          />
          Signal status: open for new work
        </p>
      </Container>
    </footer>
  );
}
