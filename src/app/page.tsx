import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ParallaxImage } from "@/components/ParallaxImage";
import { AuroraField } from "@/components/AuroraField";
import { MetaStrip, SYDNEY_COORDS } from "@/components/MetaStrip";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ScanDivider } from "@/components/ScanDivider";
import { PinnedProcess, type ProcessStep } from "@/components/PinnedProcess";
import { PhotoRecord, type PhotoRecordItem } from "@/components/PhotoRecord";
import { services } from "@/lib/services";

const process: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your market, your data, and your customers until the real opportunity is obvious.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Strategy becomes a system: messaging, creative, and channels built to reinforce each other.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We ship fast, in public, with tracking baked in from day one, not bolted on after.",
  },
  {
    step: "04",
    title: "Compound",
    description:
      "Every campaign feeds the next. We double down on what works and kill what doesn't, on a set cadence.",
  },
];

const principles = [
  {
    title: "One system, not six vendors",
    description:
      "Strategy, creative, and media sit under one roof so your channels reinforce each other instead of competing for the same budget.",
  },
  {
    title: "Built on your data",
    description:
      "Every recommendation traces back to a number. If we can't measure it, we don't pitch it.",
  },
  {
    title: "Senior hands, every project",
    description:
      "No junior hand-off after the pitch. The people who plan the work are the people who run it.",
  },
];

const records: PhotoRecordItem[] = [
  {
    src: "/images/opera-house-sails.jpg",
    alt: "Close view of the Sydney Opera House sails against a pale blue sky",
    code: "SYD.001",
    place: "Bennelong Point",
    caption:
      "Proof that a strong silhouette outlasts every campaign written to explain it.",
    objectPosition: "50% 72%",
  },
  {
    src: "/images/bondi-icebergs.jpg",
    alt: "Bondi Icebergs ocean pool with swimmers, waves breaking over the edge",
    code: "SYD.002",
    place: "Bondi",
    caption:
      "The local institution playbook: show up every day, in every season, in the same place.",
    objectPosition: "50% 55%",
  },
  {
    src: "/images/cbd-tram-street.jpg",
    alt: "George Street in the Sydney CBD looking down the light rail tracks toward the city towers",
    code: "SYD.003",
    place: "George Street",
    caption:
      "Where attention is actually won: at street level, in daylight, against everything else.",
    objectPosition: "50% 42%",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden">
        <ParallaxImage
          src="/images/sydney-harbour.jpg"
          alt="Aerial view of Sydney Harbour at golden hour with the Opera House and Harbour Bridge"
          objectPosition="52% 38%"
          factor={0.22}
          preload
        />

        {/* The text block occupies the bottom 70% of the hero, so the scrim
            holds a near-solid floor to exactly that height and then clears hard
            — the top ~25% is close to bare photograph, where the old grade was
            a murky 0.3–0.5 the whole way up and the harbour never read at all.
            The floor is not a guess: the harbour reaches luminance 0.77 behind
            the headline, and 11px mono labels sit two-thirds up the hero, so
            0.93 there is the minimum that keeps every element over its
            threshold against the brightest pixel it crosses. Measured per
            element — see the ramp stops against public/__hero.js reasoning in
            the PR. Do not lighten these stops without re-measuring. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(10,11,13,0.96) 0%, rgba(10,11,13,0.95) 50%, rgba(10,11,13,0.93) 70%, rgba(10,11,13,0.26) 80%, rgba(10,11,13,0.04) 100%)",
          }}
        />
        <AuroraField intensity="bright" />
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-15"
        />

        <Container className="relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="index-tag">[SB.01]</span>
            <span aria-hidden="true" className="hidden h-px w-10 bg-border-strong sm:block" />
            <span className="mono-label">Full-service marketing agency</span>
          </div>

          <h1 className="display mt-8 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-1 text-[clamp(2.1rem,6vw,3.75rem)] sm:grid-cols-[0.85fr_1.15fr] sm:gap-y-2">
            <span>Marketing</span>
            <span className="text-muted">built in</span>
            <span className="text-signal">symbiosis</span>
            <span className="text-muted">with your business.</span>
          </h1>

          <p className="mt-9 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We fuse strategy, creative, and performance into a single system, so
            every channel compounds instead of competing for budget.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Start a project</Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>

          <MetaStrip className="mt-14 border-t border-border pt-6" />
        </Container>
      </section>

      <ScanDivider code="Signal acquired / Sydney, AU" />

      {/* ------------------------------------------- Capabilities — bright */}
      {/* First hard cut from the dark hero into a full cream surface. Flat by
          design: no aurora, no scrim, nothing between the cream and the type. */}
      <section className="on-paper relative isolate overflow-hidden py-24 sm:py-32">
        <Container className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              index="SB.02"
              label="Capabilities"
              title={
                <>
                  Everything a growth team needs.
                  <br />
                  <span className="text-muted">Under one roof.</span>
                </>
              }
            />
            <Reveal delay={120}>
              <Link
                href="/services"
                className="mono-label inline-flex tap-target items-center gap-2 text-signal transition-colors hover:text-signal-soft"
              >
                All services <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-data text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </div>
                  <h3 className="display mt-8 text-2xl text-foreground transition-colors group-hover:text-signal-soft">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------- Pinned process reveal */}
      <PinnedProcess
        steps={process}
        src="/images/opera-house-sunset.jpg"
        alt="Sydney Opera House at dusk beneath a pink and blue harbour sky"
        objectPosition="72% 64%"
        index="SB.03"
        eyebrow="Method"
        title={
          <>
            How we work,
            <br />
            <span className="text-muted">in four moves.</span>
          </>
        }
      />

      {/* --------------------------------------- Field records — bright */}
      {/* The specimen photographs are daylight shots; on cream at close to
          natural exposure they carry the brightest block on the page. */}
      <section className="on-paper on-paper--warm relative isolate overflow-hidden py-24 sm:py-32">
        <Container className="relative z-10">
          <SectionHeading
            index="SB.04"
            label="Field records"
            title={
              <>
                Made in Sydney.
                <br />
                <span className="text-muted">Built to travel.</span>
              </>
            }
            lede="We're a Sydney agency, and the city is a decent teacher: the things that last here are the ones with a clear point of view and the discipline to keep showing up."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {records.map((item, index) => (
              <Reveal key={item.code} delay={index * 110}>
                <PhotoRecord item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ScanDivider code={SYDNEY_COORDS} />

      {/* ----------------------------------------------- Operating principles */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <AuroraField intensity="soft" />

        <Container className="relative z-10">
          <SectionHeading
            index="SB.05"
            label="Operating principles"
            title="Why brands work with us"
          />

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 90}>
                <div className="flex h-full flex-col border-t border-border-strong pt-6">
                  <span className="font-mono text-3xl tabular-nums text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-xl text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------------------- Outro — ember flood */}
      {/* Closing CTA as a full accent flood. Same treatment on every page, so
          the last thing a visitor scrolls into is always the brightest. */}
      <section className="on-ember relative isolate overflow-hidden py-28 sm:py-36">
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-20"
        />

        <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
          <Reveal className="flex flex-col items-center gap-7">
            <span className="mono-label">Next step</span>
            <h2 className="display max-w-3xl text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Ready to build something that compounds?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Tell us where growth is stalling. We&apos;ll tell you what
              we&apos;d do about it. No deck, no fluff.
            </p>
            <Button href="/contact">Start a project</Button>
            <MetaStrip className="justify-center pt-4" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
