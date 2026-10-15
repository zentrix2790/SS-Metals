"use client";

import { useState } from "react";
import { submitSiteEnquiry } from "@/lib/ss-flow-enquiry";

export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries());
    const data = {
      name: String(raw.name ?? ""),
      company: String(raw.company ?? ""),
      phone: String(raw.phone ?? ""),
      email: String(raw.email ?? ""),
      product_interest: String(raw.product_interest ?? ""),
      message: String(raw.message ?? ""),
      website: String(raw.website ?? ""),
    };
    try {
      await submitSiteEnquiry(data);
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded border border-emerald-300 bg-emerald-50 p-6" role="status">
        <h2 className="font-display text-2xl font-semibold text-emerald-900">Enquiry received</h2>
        <p className="mt-1 text-sm text-emerald-900">
          Thank you. Our team will contact you shortly. For urgent requests, call +91 9412236335.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required className="field" autoComplete="name" />
        </div>
        <div>
          <label className="label" htmlFor="company">
            Company
          </label>
          <input id="company" name="company" className="field" autoComplete="organization" />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <input id="phone" name="phone" type="tel" required className="field" autoComplete="tel" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="field" autoComplete="email" />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="product_interest">
          Product or grade of interest
        </label>
        <input
          id="product_interest"
          name="product_interest"
          defaultValue={defaultProduct}
          className="field"
          placeholder="e.g. 304 seamless pipe, SS flanges"
        />
      </div>
      <div>
        <label className="label" htmlFor="message">
          Your requirement *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field"
          placeholder="Quantity, size, grade, delivery location..."
        />
      </div>
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}
      <button className="btn btn-primary" disabled={state === "sending"} type="submit">
        {state === "sending" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
