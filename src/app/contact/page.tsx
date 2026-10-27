import type { Metadata } from "next";
import { Suspense } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactFormFromQuery from "@/components/ContactFormFromQuery";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Enquiry & Contact" };

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4275.283955109856!2d78.7458092!3d28.787674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afd178307073f%3A0xc5860a89ebc02066!2sSS%20METALS!5e0!3m2!1sen!2sin!4v1791954183413!5m2!1sen!2sin";

const GOOGLE_MAPS_DIRECT_URL =
  "https://www.google.com/maps/place/SS+METALS/@28.787674,78.7458092,17z/data=!3m1!4b1!4m6!3m5!1s0x390afd178307073f:0xc5860a89ebc02066!8m2!3d28.787674!4d78.7458092!16s%2Fg%2F11w43p0w1_";

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <h1 className="h-page">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Tell us what you need. We reply with specifications, pricing and dispatch time.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div data-aos="fade-right">
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromQuery />
            </Suspense>
          </div>
          <div>
            <aside className="space-y-5 text-sm lg:sticky lg:top-24">
              <div className="rounded border border-steel-200 bg-white p-5 shadow-xs" data-aos="fade-left" data-aos-delay="100">
                <h2 className="font-display text-xl font-semibold">Office & Works</h2>
                <div className="mt-3 space-y-3 text-steel-700">
                  <div>
                    <span className="font-semibold text-ink">Office:</span>
                    <p className="mt-0.5 leading-relaxed">{SITE.officeAddress}</p>
                  </div>
                  <div className="pt-2 border-t border-steel-100">
                    <span className="font-semibold text-ink">Works:</span>
                    <p className="mt-0.5 leading-relaxed">{SITE.worksAddress}</p>
                  </div>
                </div>
              </div>
              <div className="rounded border border-steel-200 bg-white p-5 shadow-xs" data-aos="fade-left" data-aos-delay="200">
                <h2 className="font-display text-xl font-semibold">Call us</h2>
                <p className="mt-2">
                  <a className="text-brand hover:underline" href="tel:+919410480440">
                    +91 9410480440
                  </a>
                </p>
                
                <p className="mt-2 text-steel-600">{SITE.proprietor}</p>
                <p className="mt-3">
                  <a className="text-brand hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="300">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  Chat on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section - Right above Footer */}
      <section className="border-t border-steel-200 bg-white py-12 sm:py-16 overflow-hidden">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6" data-aos="fade-up">
            <div>
              <span className="badge bg-brand-light text-brand mb-2 inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Find Us On Google Maps
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Visit Our Works & Office
              </h2>
              <div className="mt-2 space-y-1 text-sm text-steel-600 max-w-xl">
                <p><strong className="text-ink font-semibold">Office:</strong> {SITE.officeAddress}</p>
                <p><strong className="text-ink font-semibold">Works:</strong> {SITE.worksAddress}</p>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 shrink-0 self-start sm:self-auto hover:bg-steel-50 transition"
              title="Open SS METALS in Google Maps"
            >
              <span>Get Directions</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div
            className="group relative overflow-hidden rounded-xl border border-steel-300 bg-steel-100 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Embedded Google Map */}
            <iframe
              src={MAP_EMBED_SRC}
              title="SS METALS Location Map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[380px] sm:h-[460px] pointer-events-none transition-transform duration-300 group-hover:scale-[1.005]"
            />

            {/* Entire Map Clickable Overlay */}
            <a
              href={GOOGLE_MAPS_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open SS METALS in Google Maps"
              className="absolute inset-0 z-10 flex items-end justify-end p-4 sm:p-6 bg-transparent transition-all group-hover:bg-brand/5"
            >
              <span className="inline-flex items-center gap-2 rounded-lg bg-ink/90 backdrop-blur-sm px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-transform duration-200 group-hover:scale-105 group-hover:bg-brand">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Click to view full map & directions</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
