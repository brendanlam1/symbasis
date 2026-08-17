import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuroraField } from "@/components/AuroraField";
import { Reveal } from "@/components/Reveal";
import { ScanDivider } from "@/components/ScanDivider";
import { MetaStrip } from "@/components/MetaStrip";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, creative, performance, SEO, social, and web: the full stack of marketing services under one roof at Symbasis.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <AuroraField intensity="soft" />
        <div aria-hidden="true" className="absolute inset-0 bg-background/50" />
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-15"
        />

        <Container className="relative z-10 flex flex-col gap-7 py-20 sm:py-28">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />

          <div className="flex items-center gap-3">
            <span className="index-tag">[SB.02]</span>
            <span aria-hidden="true" className="h-px w-10 bg-border-strong" />
            <span className="mono-label">
              Capabilities / {String(services.length).padStart(2, "0")} services
            </span>
          </div>

          <h1 className="display grid max-w-4xl grid-cols-1 gap-x-10 gap-y-1 text-[clamp(2.1rem,6vw,3.75rem)] sm:grid-cols-[0.8fr_1.2fr] sm:gap-y-2">
            <span>The full stack.</span>
            <span className="text-signal">One team.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            No hand-offs between five different vendors. We run strategy,
            creative, and media together so nothing gets lost in translation.
          </p>

          <MetaStrip className="mt-4 border-t border-border pt-6" />
        </Container>
      </section>

      <ScanDivider code="Service index" />

      <section className="relative isolate py-20 sm:py-24">
        <Container>
          <div className="border-t border-border">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-1 gap-6 border-b border-border px-1 py-10 transition-colors duration-300 hover:bg-surface/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal lg:grid-cols-[6rem_1.1fr_1fr] lg:items-start lg:gap-12 lg:px-6"
                >
                  <span className="mono-data text-2xl text-faint transition-colors duration-300 group-hover:text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="display flex items-center gap-3 text-2xl text-foreground transition-colors duration-300 group-hover:text-signal-soft sm:text-3xl">
                      {service.title}
                      <span
                        aria-hidden="true"
                        className="text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border py-28 sm:py-32">
        <AuroraField intensity="faint" />
        <div aria-hidden="true" className="absolute inset-0 bg-background/50" />

        <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
          <Reveal className="flex flex-col items-center gap-7">
            <span className="mono-label">Next step</span>
            <h2 className="display max-w-2xl text-4xl text-foreground sm:text-5xl">
              Not sure which service you need?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Most clients don&apos;t start with a clear brief. Tell us the
              problem and we&apos;ll scope the right mix.
            </p>
            <Button href="/contact">Start a project</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
