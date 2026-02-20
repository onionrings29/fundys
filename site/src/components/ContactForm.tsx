"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value || "Anonymous",
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

  const inputClass =
    "w-full rounded-lg border border-cream/25 bg-black/20 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 focus:bg-black/30 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-lg space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-cream/50">
            Name <span className="normal-case text-cream/30">(optional)</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-cream/50">
            Email <span className="text-cream/60">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-cream/50">
          Message <span className="text-cream/60">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Order inquiries, bulk orders, or just say hi!"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="rounded-lg border-2 border-cream px-6 py-2.5 text-[13px] font-medium uppercase tracking-widest text-cream transition-all duration-300 hover:bg-cream hover:text-brand-red disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : status === "success" ? "Sent ✓" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-cream/70">We&apos;ll get back to you soon!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-cream/70">Something went wrong — try messaging us on Instagram.</p>
        )}
      </div>
    </form>
  );
}
