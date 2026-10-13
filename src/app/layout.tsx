import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import AosInit from "@/components/AosInit";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${ibmPlex.variable} scroll-smooth`}>
      <body className="min-h-full">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <AosInit />
      </body>
    </html>
  );
}
