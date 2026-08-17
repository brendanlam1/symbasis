import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AuroraField } from "@/components/AuroraField";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ScanDivider } from "@/components/ScanDivider";
import { MetaStrip } from "@/components/MetaStrip";

export const metadata: Metadata = {
  title: "About",
  description:
    "Symbasis is a full-service marketing agency built on the belief that growth compounds when strategy, creative, and performance work as one system.",
};

const beliefs = [
  {
    title: "Symbiosis, not silos",
    description:
      "Your marketing should behave like one organism. We build campaigns where strategy, creative, and media strengthen each other instead of competing for credit.",
  },
  {
    title: "Evidence over opinion",
    description:
      "Taste matters, but it doesn't get the final word. Every big call is checked against data before it ships.",
  },
  {
    title: "Speed is a strategy",
    description:
      "Slow, precious campaigns lose to fast, iterative ones. We'd rather ship an 80% idea this week than a perfect one next quarter.",
  },
  {
    title: "Plain language, always",
    description:
      "No jargon dressed up as insight. If we can't explain a recommendation simply, we haven't earned the right to make it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <AuroraField intensity="bright" />
        {/* Thin enough to let the aurora glow through — it used to sit at 55%,
            which flattened the colour field into a dark tint. */}
        <div aria-hidden="true" className="absolute inset-0 bg-background/25" />
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-15"
        />

        <Container className="relative z-10 grid grid-cols-1 items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="index-tag">[SB.06]</span>
              <span aria-hidden="true" className="hidden h-px w-10 bg-border-strong sm:block" />
              <span className="mono-label">About Symbasis</span>
            </div>

            {/* Single column here on purpose: this headline sits in a half-width
                column, too narrow for the paired two-column treatment. */}
            <h1 className="display max-w-2xl text-[clamp(2.1rem,4.6vw,3.25rem)]">
              Named for the way{" "}
              <span className="text-signal">good growth</span>{" "}
              <span className="text-muted">actually works.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Symbasis takes its name from symbiosis: two systems growing
              together, each making the other stronger. That&apos;s the standard
              we hold every piece of work to: does this make the rest of the
              marketing better, or does it just exist on its own?
            </p>

            <MetaStrip className="mt-2 border-t border-border pt-6" />
          </div>

          <figure className="photo-record group flex w-full max-w-sm flex-col gap-4 lg:ml-auto">
            <div className="photo-treated relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface">
              <Image
                src="/images/opera-house-sails.jpg"
                alt="Close view of the Sydney Opera House sails against a pale blue sky"
                fill
                preload
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover"
                style={{ objectPosition: "50% 78%" }}
              />
              <div
                aria-hidden="true"
                className="scanlines absolute inset-0 opacity-20"
              />
              {/* No scrim: nothing but the self-contrasting catalog chip sits on
                  this image, so the pale sky stays pale. */}
              <span className="catalog-chip">SYD.001</span>
            </div>
            <figcaption className="mono-label text-foreground/70">
              Bennelong Point / Sydney, AU
            </figcaption>
          </figure>
        </Container>
      </section>

      <ScanDivider code="Operating beliefs" />

      {/* ------------------------------------------------ Beliefs — bright */}
      {/* Flat cream, like every bright section: the aurora only glows on dark. */}
      <section className="on-paper relative isolate overflow-hidden py-24 sm:py-32">

        <Container className="relative z-10">
          <SectionHeading
            index="SB.07"
            label="Beliefs"
            title="What we believe"
          />

          <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            {beliefs.map((belief, index) => (
              <Reveal key={belief.title} delay={index * 80}>
                <div className="flex h-full flex-col bg-background p-8 sm:p-10">
                  <span className="font-mono text-2xl tabular-nums text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-6 text-xl text-foreground sm:text-2xl">
                    {belief.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {belief.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24 sm:py-28">
        <Container>
          <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="index-tag">[SB.08]</span>
                <span aria-hidden="true" className="hidden h-px w-8 bg-border-strong sm:block" />
                <span className="mono-label">The team</span>
              </div>
              <h2 className="display text-3xl text-foreground sm:text-4xl">
                Small, senior,
                <br />
                <span className="text-muted">and hands-on.</span>
              </h2>
            </div>
            <p className="border-l-2 border-signal pl-6 text-lg leading-relaxed text-muted sm:text-xl">
              We stay deliberately lean. Every client works directly with the
              people planning and running their marketing, not an account
              manager relaying notes to someone else&apos;s team. That&apos;s
              how we keep the strategy and the execution in sync.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------------------- Outro — ember flood */}
      <section className="on-ember relative isolate overflow-hidden py-28 sm:py-32">
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-20"
        />

        <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
          <Reveal className="flex flex-col items-center gap-7">
            <span className="mono-label">Next step</span>
            <h2 className="display max-w-2xl text-4xl text-foreground sm:text-5xl">
              Let&apos;s see if we&apos;re a fit
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              A short call is enough to know. No lengthy pitch process required.
            </p>
            <Button href="/contact">Start a project</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
