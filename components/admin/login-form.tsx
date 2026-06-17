"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirectTo") ?? "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push(redirectTo.startsWith("/") ? redirectTo : "/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="glass w-full max-w-md rounded p-6 md:p-8">
      <div className="mb-6 text-center">
        <p className="font-label-caps text-label-caps mb-2 text-limestone/70 tracking-[0.2em]">
          Admin
        </p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">
          Sign in
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <span className="font-label-caps text-[10px] text-limestone/60 tracking-widest">
            EMAIL
          </span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-b border-outline/30 bg-transparent py-2 font-body-sm text-on-surface outline-none transition-colors focus:border-primary"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-label-caps text-[10px] text-limestone/60 tracking-widest">
            PASSWORD
          </span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-b border-outline/30 bg-transparent py-2 font-body-sm text-on-surface outline-none transition-colors focus:border-primary"
            placeholder="••••••••"
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 font-body-sm text-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-limestone px-8 py-3 font-label-caps text-label-caps text-primary-container transition-colors hover:bg-white disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
