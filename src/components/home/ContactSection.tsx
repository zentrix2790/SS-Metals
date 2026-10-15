"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { submitSiteEnquiry } from "@/lib/ss-flow-enquiry";
import { site } from "@/lib/site-data";

export function ContactSection() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await submitSiteEnquiry({
        name: String(raw.name ?? ""),
        phone: String(raw.phone ?? ""),
        email: String(raw.email ?? ""),
        message: String(raw.message ?? ""),
        website: String(raw.website ?? ""),
      });
      setState("done");
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-semibold tracking-tight">
                Request a quote
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Need pipes, tubes, flanges, fasteners, round bars, or perforated
                sheets? Share sizes, grades, and quantities — we respond with
                competitive pricing, MTC details, and dispatch timelines.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}?subject=Business%20Enquiry%20-%20SS%20Metals`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" />
                  Send enquiry
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-slate-800 bg-slate-950/50 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Contact details
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {site.address}
                </li>
                {site.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
              {state === "done" ? (
                <p className="mt-8 rounded-xl border border-emerald-700/50 bg-emerald-950/40 p-4 text-sm text-emerald-200">
                  Enquiry received — our team will contact you shortly.
                </p>
              ) : (
                <form className="mt-8 space-y-3" onSubmit={onSubmit} aria-label="Quick enquiry form">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name *"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your requirement..."
                    rows={3}
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <div className="hidden" aria-hidden>
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  {state === "error" && (
                    <p className="text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="w-full rounded-xl bg-amber-700 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-60"
                  >
                    {state === "sending" ? "Sending…" : "Submit enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
