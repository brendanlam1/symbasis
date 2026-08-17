"use client";

import { useState, type FormEvent } from "react";

const budgets = ["Under $5k / month", "$5k–15k / month", "$15k–40k / month", "$40k+ / month"];

const fieldClass =
  "w-full border border-border-strong bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-faint focus:border-signal focus-visible:ring-2 focus-visible:ring-signal/40";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-signal/40 bg-surface p-10 text-center"
      >
        <p className="mono-label text-signal">Message received</p>
        <h3 className="display mt-4 text-2xl text-foreground">
          Thanks for reaching out.
        </h3>
        <p className="mt-3 text-muted">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" spellCheck={false} required />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" autoComplete="organization" />
        <div>
          <label htmlFor="budget" className="mono-label mb-2.5 block text-foreground/80">
            Monthly budget
          </label>
          <select id="budget" name="budget" className={fieldClass}>
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mono-label mb-2.5 block text-foreground/80">
          What are you looking to achieve?
          <span aria-hidden="true" className="text-signal">
            {" "}
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
        />
      </div>

      {status === "error" && (
        <p role="alert" aria-live="polite" className="border border-signal/50 bg-signal/10 px-4 py-3 text-sm text-signal-soft">
          Something went wrong sending your message. Email us directly at{" "}
          <a href="mailto:hello@symbasis.com.au" className="underline">
            hello@symbasis.com.au
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 bg-signal px-8 py-3.5 text-sm font-semibold tracking-wide text-on-accent transition-colors hover:bg-signal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden="true">→</span>
        </button>
        <p className="mono-data">Reply within 1 business day</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  spellCheck,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  spellCheck?: boolean;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono-label mb-2.5 block text-foreground/80">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-signal">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}
