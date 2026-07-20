"use client";

import { useState, type FormEvent } from "react";

const PDF_URL =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/downloads/little-black-book.pdf";
const PDF_FILENAME = "The-Little-Black-Book-of-the-Cotswolds.pdf";

// Hidden pre-launch: PDF not yet built. Re-enable once guide is ready.
const SHOW_LITTLE_BLACK_BOOK = false;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function downloadPdf(): Promise<void> {
  const response = await fetch(PDF_URL);

  if (!response.ok) {
    throw new Error("Download failed");
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = PDF_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [downloadError, setDownloadError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError("");
    setDownloadError(false);

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      await downloadPdf();
      setIsComplete(true);
    } catch {
      setDownloadError(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (!SHOW_LITTLE_BLACK_BOOK) {
    return null;
  }

  return (
    <section
      className="border-y border-outline-variant/20 bg-surface-container-low px-margin-mobile py-24 text-center md:px-margin-desktop md:py-32"
      aria-labelledby="newsletter-signup-heading"
    >
      <div className="mx-auto max-w-xl space-y-8">
        <h2
          id="newsletter-signup-heading"
          className="font-display-lg text-display-lg-mobile italic leading-tight md:text-5xl"
        >
          The Little Black Book of the Cotswolds
        </h2>
        <p className="font-body-lg text-on-surface-variant">
          A carefully chosen collection of places to stay, eat, visit, and
          explore. No endless lists. Just twelve places we&apos;d genuinely
          recommend to a friend.
        </p>
        {isComplete ? (
          <p className="font-body-lg text-on-surface-variant pt-4">
            Your guide is downloading. Enjoy the Cotswolds.
          </p>
        ) : (
          <>
            {validationError ? (
              <p className="font-body-lg text-on-surface-variant">
                {validationError}
              </p>
            ) : null}
            {downloadError ? (
              <p className="font-body-lg text-on-surface-variant">
                Something went wrong. Please try again.
              </p>
            ) : null}
            <form
              className="flex flex-col gap-4 pt-4 md:flex-row"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="newsletter-signup-email">
                Email address
              </label>
              <input
                id="newsletter-signup-email"
                className="flex-grow border-b border-outline-variant/40 bg-transparent px-4 py-3 font-label-caps text-xs transition-colors focus:border-limestone focus:outline-none"
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setValidationError("");
                  setDownloadError(false);
                }}
                disabled={isLoading}
                aria-invalid={validationError ? true : undefined}
              />
              <button
                className="bg-limestone px-10 py-4 font-label-caps text-[10px] tracking-widest text-primary-container transition-colors hover:bg-on-background disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? "DOWNLOADING..." : "Get The Guide"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
