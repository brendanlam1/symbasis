"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { services } from "@/lib/services";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // The drawer is open only for the route it was opened on, so *any* navigation
  // closes it — including back/forward, where an onClick handler never runs.
  // Derived rather than synchronised in an effect: no cascading render, and no
  // frame where the drawer is still open over the new page.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  // While the drawer is open the page behind it must not scroll, or a swipe
  // on the drawer drags the page instead. Escape closes it, matching the
  // desktop Services menu.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      // `setOpenedOn` directly rather than the `setOpen` wrapper: the setter is
      // stable, so the effect does not re-subscribe on every render.
      if (event.key === "Escape") setOpenedOn(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setServicesOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setServicesOpen(false);
            }}
          >
            <Link
              href="/services"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="tap-target flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className="mt-px"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-opacity duration-150 ${
                servicesOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="w-72 border border-border-strong bg-surface/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                {services.map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="tap-target flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    <span className="font-mono text-[0.625rem] tracking-widest text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="tap-target mt-1 flex items-center gap-2 border-t border-border px-3 py-2.5 text-sm font-semibold text-signal transition-colors hover:text-signal-soft"
                >
                  All services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tap-target flex items-center text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="tap-target inline-flex items-center bg-signal px-5 py-2.5 text-sm font-semibold tracking-wide text-on-accent transition-colors hover:bg-signal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center border border-border-strong text-foreground transition-colors hover:border-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M1 4.5H17M1 9H17M1 13.5H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        // Capped to the space below the bar and scrollable inside it: the full
        // list (5 services + 2 links + CTA) is taller than a landscape phone,
        // and `dvh` keeps it correct while mobile browser chrome slides away.
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-5">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center px-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              Services
            </Link>
            <div className="ml-3 flex flex-col border-l border-border pl-3">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center gap-3 px-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  <span className="font-mono text-[0.625rem] tracking-widest text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service.title}
                </Link>
              ))}
            </div>

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center px-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center bg-signal px-5 text-center text-sm font-semibold tracking-wide text-on-accent"
            >
              Start a project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
