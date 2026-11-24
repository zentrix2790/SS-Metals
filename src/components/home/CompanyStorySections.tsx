import Image from "next/image";
import { ArrowRight, Handshake, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import "@/app/company-profile/page.module.css";

// The company profile stylesheet intentionally uses these global class names.
// Keep the homepage leadership section on the exact same visual system.
const styles = {
  leadership: "leadership",
  wrap: "wrap",
  sectionIntro: "sectionIntro",
  eyebrow: "eyebrow",
  leaderGrid: "leaderGrid",
  leaderCard: "leaderCard",
  leaderMedia: "leaderMedia",
  leaderPlaceholder: "leaderPlaceholder",
  leaderCopy: "leaderCopy",
  role: "role",
  joined: "joined",
};

const leaders = [
  ["RA", "Mr. Raman Lal Agarwal (CA)", "Founder", ""],
  ["SK", "Mr. Sarvesh Kumar", "Founding Associate", ""],
  ["PA", "Mr. Pulkit Agarwal (CA)", "Next-Generation Leadership", "Part of the business since 2013"],
] as const;

const relationships = [
  ["VINOD", "Historical Distribution Association", "/images/company-profile/vinod-logo.png"],
  ["Bansal Wire Industries", "Industry Relationship", "/images/company-profile/bansal-wire-logo-alt.png"],
  ["Jindal Stainless Limited", "Industry Association", "/images/company-profile/jindal-stainless-official-logo.png"],
] as const;

const milestones = [
  [Handshake, "Trust", "Relationships built over decades"],
  [UserRound, "2013", "A new operating outlook"],
  [Settings, "Today", "Modern production capability"],
] as const;

export default function CompanyStorySections({ section = "all" }: { section?: "story" | "leadership" | "legacy" | "closing" | "all" }) {
  const showLeadership = section === "story" || section === "leadership" || section === "all";
  const showLegacy = section === "story" || section === "legacy" || section === "all";
  const showClosing = section === "closing" || section === "all";
  return (
    <>
      {showLeadership && <>
      <section className={styles.leadership}>
        <div className={styles.wrap}>
          <div className={styles.sectionIntro} data-aos="fade-up">
            <h2>The People Driving Our Journey.</h2>
            <p>Meet the visionary leaders steering SS Metals with rich experience, strategic growth, and modern engineering.</p>
          </div>
          <div className={styles.leaderGrid}>
            {leaders.map(([initials, name, role, note], index) => <article key={name} data-aos="fade-up" data-aos-delay={index * 80} className={styles.leaderCard}>
              <div className={styles.leaderMedia}><div className={styles.leaderPlaceholder} aria-hidden="true" /></div>
              <div className={styles.leaderCopy}><h3>{name}</h3><p className={styles.role}>{role}</p>{note && <span className={styles.joined}>{note}</span>}</div>
            </article>)}
          </div>
        </div>
      </section>
      </>}

      {showLegacy && <>
      <section className="section overflow-hidden bg-ink text-white">
        <div className="wrap grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-aos="fade-right">
            <p className="badge bg-brass text-ink">Our Story</p>
            <h2 className="h-section mt-3">From legacy to innovation.</h2>
            <p className="mt-4 max-w-2xl text-steel-200">Our trading foundation evolved into a modern processing and manufacturing business through customer trust, operational efficiency, and investment in the right technology.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {milestones.map(([Icon, title, text]) => <div key={title} className="border-l-2 border-brass pl-3"><Icon className="h-5 w-5 text-brass" /><p className="mt-2 font-display text-lg font-bold">{title}</p><p className="text-sm text-steel-300">{text}</p></div>)}
            </div>
            <Link href="/company-profile" className="btn btn-brass mt-8">Explore our journey <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="overflow-hidden rounded" data-aos="fade-left"><Image src="/images/company-profile/transformation-2013-illustrative.png" alt="SS Metals' modern manufacturing transformation" width={1200} height={800} className="aspect-[4/3] w-full object-cover" /></div>
        </div>
      </section>
      </>}

      {showClosing && <>
      <section className="section overflow-hidden bg-steel-50">
        <div className="wrap">
          <div className="max-w-2xl" data-aos="fade-up"><h2 className="h-section mt-3">Associations that strengthen our supply chain.</h2><p className="mt-3 text-steel-700">Connections across the sector broaden access to established material and product ecosystems.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{relationships.map(([name, label, logo], index) => <article key={name} data-aos="fade-up" data-aos-delay={index * 80} className="rounded border border-steel-200 bg-white p-6"><div className="flex h-20 items-center"><Image src={logo} alt={`${name} logo`} width={220} height={80} className="max-h-16 w-auto object-contain" unoptimized /></div><p className="mt-4 font-display text-lg font-bold text-ink">{name}</p><p className="mt-1 text-sm text-steel-600">{label}</p></article>)}</div>
        </div>
      </section>
      </>}
    </>
  );
}
