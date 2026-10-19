import { Mail, MapPin, Phone } from "lucide-react";
import MainNav from "@/components/MainNav";
import { SITE } from "@/lib/site";

export default function SiteHeader() {
  return (
    <>
      {/* Fixed Header: Stays pinned at top on both mobile and desktop */}
      <header className="fixed top-0 inset-x-0 z-50 w-full bg-white shadow-xs">
        {/* Topbar: Contact & Address */}
        <div className="border-b border-white/10 bg-ink text-xs text-steel-200">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
            {/* Left: Phone numbers */}
            <div className="flex items-center gap-x-3 sm:gap-x-4 whitespace-nowrap">
              <a
                href="tel:+919412236335"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-brass" />
                <span>+91 9412236335</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:+919458771652"
                className="hidden sm:inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-brass" />
                <span>+91 9458771652</span>
              </a>
            </div>

            {/* Right: Email and Address */}
            <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-4 whitespace-nowrap">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-brass" />
                <span>{SITE.email}</span>
              </a>
              <span className="hidden md:inline text-white/20">|</span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-steel-400">
                <MapPin className="h-3.5 w-3.5 text-brass" />
                <span>{SITE.addressShort}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <MainNav />
      </header>

      {/* Spacer to guarantee page content is never covered by the fixed header */}
      <div
        className="h-[110px] sm:h-[118px] lg:h-[126px] shrink-0 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
