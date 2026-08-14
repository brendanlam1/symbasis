import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

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
      <section className="relative overflow-hidden border-b border-border">
        <Image
          src="/images/mountain-summit.jpg"
          alt="Snow-capped mountain peak lit by sunset light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <Container className="relative flex flex-col gap-6 py-24 sm:py-28">
          <span className="w-fit rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            About Symbasis
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Named for the way{" "}
            <span className="text-gradient">good growth</span> actually works.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Symbasis takes its name from symbiosis: two systems growing
            together, each making the other stronger. That&apos;s the standard we
            hold every piece of work to: does this make the rest of the
            marketing better, or does it just exist on its own?
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What we believe
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <div key={belief.title}>
                <h3 className="text-lg font-semibold text-foreground">
                  {belief.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Small, senior, and hands-on
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            We stay deliberately lean. Every client works directly with the
            people planning and running their marketing, not an account
            manager relaying notes to someone else&apos;s team. That&apos;s how we keep
            the strategy and the execution in sync.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s see if we&apos;re a fit
          </h2>
          <p className="max-w-lg text-muted">
            A short call is enough to know. No lengthy pitch process required.
          </p>
          <Button href="/contact">Start a project</Button>
        </Container>
      </section>
    </>
  );
}
