"use client";

import { useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdAHpd1X0D1VsN2VLV39MLx1ZXURmVWCO13i_TOqE2fU7er1A/formResponse";
const EMAIL_ENTRY = "entry.1507137931";

export function BetaSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const body = new FormData();
      body.append(EMAIL_ENTRY, email);
      await fetch(FORM_URL, { method: "POST", body, mode: "no-cors" });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-gray-900 px-8 py-24">
      <div className="container mx-auto max-w-xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-indigo-400">
          Early Access
        </p>
        <h2 className="mb-4 text-4xl font-extrabold text-white">
          Join the Beta
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-white/70">
          Be the first to experience SnapQuest.
          <br />
          Sign up as a beta tester and help shape the future of the app.
        </p>

        {status === "done" ? (
          <div className="rounded-2xl bg-indigo-600 px-8 py-10">
            <p className="text-2xl font-bold text-white">You&apos;re in! 🎮</p>
            <p className="mt-2 text-white/80">
              We&apos;ll reach out when beta access opens.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder-white/40 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl bg-indigo-500 px-8 py-4 font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-60"
            >
              {status === "loading" ? "Reserving…" : "Get Early Access"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="mt-4 text-sm text-white/60">
          Android only for now · No spam, ever
        </p>
      </div>
    </section>
  );
}

export default BetaSignup;
