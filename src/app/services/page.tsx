import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, creative, performance, SEO, social, and web — the full stack of marketing services under one roof at Symbasis.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-radial-glow">
        <Container className="flex flex-col gap-6 py-24 sm:py-28">
          <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted w-fit">
            Services
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The full stack. <span className="text-gradient">One team.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            No hand-offs between five different vendors. We run strategy,
            creative, and media together so nothing gets lost in translation.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 gap-8 border-b border-border pb-16 last:border-b-0 last:pb-0 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-12"
            >
              <span className="text-sm font-semibold text-gradient">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-md text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-lg text-muted">
            Most clients don't start with a clear brief. Tell us the problem and we'll scope the right mix.
          </p>
          <Button href="/contact">Start a project</Button>
        </Container>
      </section>
    </>
  );
}
