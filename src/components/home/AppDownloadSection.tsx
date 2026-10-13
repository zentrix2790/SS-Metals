import { appDownload } from "@/lib/site-data";
import { Check, Smartphone } from "lucide-react";

function StoreBadge({
  label,
  store,
  href,
}: {
  label: string;
  store: "ios" | "android";
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      {store === "ios" ? (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-slate-900" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-slate-900" aria-hidden>
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.012 2.012 0 01-.465-.635 1.957 1.957 0 01-.146-.742V3.191c0-.261.05-.52.146-.742a2.012 2.012 0 01.465-.635zm3.408 2.432l9.675 5.612-2.492 2.492-7.183-4.154V4.246zm0 15.508l7.183-4.154 2.492 2.492-9.675 5.612a1.957 1.957 0 01-.146-.742V4.246c0 .261.05.52.146.742v13.232zM14.5 12.866l2.356-2.356 3.037 1.758a1.98 1.98 0 010 3.464l-3.037 1.758L14.5 12.866z" />
        </svg>
      )}
      <span className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wide text-slate-500">
          {store === "ios" ? "Download on the" : "Get it on"}
        </span>
        <span className="text-sm font-semibold text-slate-900">{label}</span>
      </span>
    </a>
  );
}

export function AppDownloadSection() {
  return (
    <section
      id="app"
      className="scroll-mt-24 border-y border-slate-200/80 bg-gradient-to-br from-stone-50 via-white to-amber-50/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-800">
              Mobile app
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f1e3d] sm:text-4xl">
              {appDownload.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {appDownload.subtitle}
            </p>
            <ul className="mt-6 space-y-3">
              {appDownload.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <StoreBadge
                store="ios"
                label="App Store"
                href={appDownload.iosUrl}
              />
              <StoreBadge
                store="android"
                label="Google Play"
                href={appDownload.androidUrl}
              />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              App Store and Play Store links are placeholders — connect your
              live listings when ready.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm justify-center lg:mx-0 lg:justify-end">
            <div className="relative rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-100 to-white px-5 pb-8 pt-10">
                <div className="mx-auto mb-6 flex h-8 w-24 items-center justify-center rounded-full bg-slate-900" />
                <div className="flex items-center gap-2 text-[#0f1e3d]">
                  <Smartphone className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-bold">SS Metals</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">Urgent Requirement · Quotes · Track</p>
                <div className="mt-6 space-y-3">
                  {["304 Coil", "SS Pipe", "Kalvat Mug"].map((line) => (
                    <div
                      key={line}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700"
                    >
                      {line}
                      <span className="float-right text-emerald-600">In stock</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
