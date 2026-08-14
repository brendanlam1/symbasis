"use client";

import { useState, type FormEvent } from "react";

const budgets = ["Under $5k / month", "$5k–15k / month", "$15k–40k / month", "$40k+ / month"];

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
        className="border-gradient rounded-2xl bg-background-elevated p-10 text-center"
      >
        <h3 className="text-xl font-semibold text-foreground">Message sent.</h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" spellCheck={false} required />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" autoComplete="organization" />
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
            Monthly budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
          >
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
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          What are you looking to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
        />
      </div>

      {status === "error" && (
        <p role="alert" aria-live="polite" className="text-sm text-red-400">
          Something went wrong sending your message. Email us directly at{" "}
          <a href="mailto:hello@symbasis.com.au" className="underline">
            hello@symbasis.com.au
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
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
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
      />
    </div>
  );
}
