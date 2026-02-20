"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-lg space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-cream/50">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded border border-cream/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none focus:ring-1 focus:ring-cream/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-cream/50">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded border border-cream/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none focus:ring-1 focus:ring-cream/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-cream/50">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Order inquiries, bulk orders, or just say hi!"
          className="w-full resize-none rounded border border-cream/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none focus:ring-1 focus:ring-cream/20 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="rounded border-2 border-cream px-6 py-2.5 text-[13px] font-medium uppercase tracking-widest text-cream transition-all duration-300 hover:bg-cream hover:text-brand-red disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-cream/70">We&apos;ll get back to you soon!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-cream/70">Something went wrong. Try messaging us on Instagram.</p>
        )}
      </div>
    </form>
  );
}
