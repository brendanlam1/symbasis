"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { services } from "@/lib/services";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-px">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border-gradient w-64 rounded-2xl bg-background-elevated p-3 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="mt-1 block rounded-lg px-3 py-2.5 text-sm font-semibold text-teal hover:text-teal-light"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 4.5H17M1 9H17M1 13.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
            >
              Services
            </Link>
            <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-background"
            >
              Start a project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
