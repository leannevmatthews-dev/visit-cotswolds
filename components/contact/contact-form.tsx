"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@visitcotswolds.uk";

const fieldInputClassName =
  "w-full appearance-none rounded-none border-0 border-b border-limestone/40 bg-transparent py-3 font-body-sm text-on-surface shadow-none outline-none ring-0 transition-colors focus:border-limestone";

const fieldLabelClassName =
  "font-label-caps text-[10px] text-limestone tracking-widest uppercase";

const PREFERRED_CONTACT_OPTIONS = [
  { value: "", label: "Please select" },
  { value: "Email", label: "Email" },
  { value: "Phone", label: "Phone" },
  { value: "WhatsApp", label: "WhatsApp" },
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const bodyLines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      preferredContact ? `Preferred contact method: ${preferredContact}` : null,
      "",
      message.trim(),
    ].filter((line) => line !== null);

    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-body-lg text-on-surface-variant leading-relaxed">
        Thank you for getting in touch. Your email client should open shortly —
        if it doesn&apos;t, you can reach us directly at{" "}
        <a
          className="text-limestone underline underline-offset-4 transition-colors hover:text-on-surface"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldInputClassName}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldInputClassName}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Phone Number</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={fieldInputClassName}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Preferred contact method</span>
        <select
          name="preferredContact"
          value={preferredContact}
          onChange={(event) => setPreferredContact(event.target.value)}
          className={fieldInputClassName}
        >
          {PREFERRED_CONTACT_OPTIONS.map((option) => (
            <option key={option.value || "placeholder"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Message</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldInputClassName} resize-y`}
        />
      </label>

      <button
        type="button"
        onClick={handleSubmit}
        className="self-start bg-limestone px-10 py-4 font-label-caps text-label-caps text-primary-container transition-colors hover:bg-on-background"
      >
        Send Message
      </button>
    </div>
  );
}
