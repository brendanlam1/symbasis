import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { AuroraField } from "@/components/AuroraField";
import { Reveal } from "@/components/Reveal";
import { MetaStrip, SYDNEY_COORDS } from "@/components/MetaStrip";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Symbasis where growth is stalling and we'll tell you what we'd do about it.",
};

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <AuroraField intensity="bright" />
      <div aria-hidden="true" className="absolute inset-0 bg-background/25" />
      <div
        aria-hidden="true"
        className="scanlines absolute inset-0 opacity-15"
      />

      <Container className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="index-tag">[SB.09]</span>
            <span aria-hidden="true" className="hidden h-px w-10 bg-border-strong sm:block" />
            <span className="mono-label">Contact</span>
          </div>

          <h1 className="display text-[clamp(2.1rem,5.6vw,3.5rem)] text-foreground">
            Let&apos;s talk
            <br />
            <span className="text-signal">growth.</span>
          </h1>

          <p className="max-w-sm text-base leading-relaxed text-muted sm:text-lg">
            Tell us where things are stalling. We&apos;ll reply within one
            business day with next steps. No lengthy pitch process.
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-6 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <dt className="mono-label text-foreground/70">Email</dt>
              <dd className="mt-2">
                <a
                  href="mailto:hello@symbasis.com.au"
                  className="inline-flex tap-target items-center text-base text-foreground transition-colors hover:text-signal"
                >
                  hello@symbasis.com.au
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono-label text-foreground/70">Based in</dt>
              <dd className="mt-2 text-base text-foreground">
                Sydney, Australia
              </dd>
              <dd className="mono-data mt-1.5">{SYDNEY_COORDS}</dd>
            </div>
          </dl>

          <figure className="photo-record group mt-4 hidden flex-col gap-4 lg:flex">
            <div className="photo-treated relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-border bg-surface">
              <Image
                src="/images/bondi-icebergs.jpg"
                alt="Bondi Icebergs ocean pool with swimmers, waves breaking over the edge"
                fill
                sizes="24rem"
                className="object-cover"
                style={{ objectPosition: "50% 58%" }}
              />
              <div
                aria-hidden="true"
                className="scanlines absolute inset-0 opacity-20"
              />
              <span className="catalog-chip">SYD.002</span>
            </div>
            <figcaption className="mono-label text-foreground/70">
              Bondi / Sydney, AU
            </figcaption>
          </figure>
        </div>

        {/* The form is the bright panel on this page: a near-white translucent
            card lifted off the dark canvas, with full-brightness content on it
            rather than another dark-on-dark surface. */}
        <Reveal>
          <div className="on-paper border border-border-strong bg-background/92 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="flex flex-col gap-1 border-b border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-10">
              <span className="mono-label text-foreground/70">
                Project enquiry
              </span>
              <span className="mono-data">Required fields marked *</span>
            </div>
            <div className="p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="relative z-10 mt-16">
        <MetaStrip className="border-t border-border pt-6" />
      </Container>
    </section>
  );
}
