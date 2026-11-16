import type { Metadata } from "next";
import AosInit from "@/components/AosInit";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
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
