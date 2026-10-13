import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerProductLinks, navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <Link href="/" className="inline-block rounded-xl bg-white p-3 sm:p-3.5 shadow-md transition-opacity hover:opacity-95">
              <Image
                src="/logo.png"
                alt={site.name}
                width={260}
                height={88}
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Leading manufacturer and exporter of pipes & tubes, flanges,
            fasteners, round bars, sheets, plates & coils with Urgent Requirement and
            customized solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link
                  href={link.href}
                  className="transition hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/faq"
                className="transition hover:text-amber-400"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Pipes & tubes
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {footerProductLinks.pipes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Round bars
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {footerProductLinks.roundBars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>{site.address}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
