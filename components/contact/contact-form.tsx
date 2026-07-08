"use client";

import { useState } from "react";

const CONTACT_EMAIL = "info@visitcotswolds.uk";

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

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          preferredContactMethod: preferredContact,
          message: message.trim(),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again later.",
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not send your message. Please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <p className="font-body-lg text-on-surface-variant leading-relaxed">
        Thank you for getting in touch. Your message has been sent — we&apos;ll
        get back to you as soon as we can. If you don&apos;t hear from us, you can
        reach us directly at{" "}
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
    <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldInputClassName}
          disabled={status === "loading"}
          required
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
          disabled={status === "loading"}
          required
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
          disabled={status === "loading"}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className={fieldLabelClassName}>Preferred contact method</span>
        <select
          name="preferredContact"
          value={preferredContact}
          onChange={(event) => setPreferredContact(event.target.value)}
          className={fieldInputClassName}
          disabled={status === "loading"}
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
          disabled={status === "loading"}
          required
        />
      </label>

      {status === "error" && errorMessage ? (
        <p className="font-body-sm text-error leading-relaxed" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start bg-limestone px-10 py-4 font-label-caps text-label-caps text-primary-container transition-colors hover:bg-on-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
