import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, Boxes, Building2, CalendarDays, CircleDot,
  Gem, Handshake, MapPin, PackageCheck, Repeat2, Ruler, Scissors, Settings,
  ShieldCheck, Sprout, Target, TrendingUp, UserRound,
} from "lucide-react";
import "./page.module.css";

const styleNames = [
  "associationGrid", "beginning", "beginningImage", "capabilities", "chapter", "chapterCopy",
  "chapterImage", "credibility", "credibilityGrid", "cta", "ctaInner", "darkButton", "disclaimer",
  "editorialCopy", "eyebrow", "eyebrowLight", "founderLine", "goldButton", "hero", "heroActions",
  "heroCopy", "heroCopyInner", "heroImage", "heroText", "heroTitle", "infrastructure",
  "infrastructureHeader", "joined", "journey", "leaderCopy", "leaderGrid", "leadership", "locationCard",
  "machineGrid", "machineImage", "monogram", "page", "philosophy", "primaryButton", "quoteBlock",
  "relationships", "role", "secondaryButton", "sectionIntro", "sectionIntroLeft", "timeline",
  "timelineIcon", "timelineNumber", "valueGrid", "wordmark", "wrap", "wrapGrid",
] as const;
const styles = Object.fromEntries(styleNames.map((name) => [name, name])) as Record<(typeof styleNames)[number], string>;

const journey = [
  [CircleDot, "The Beginning", "Started with Salem stainless steel coils."],
  [Handshake, "Building Trust", "Focused on quality, consistent material, and long-term customer relationships."],
  [PackageCheck, "VINOD Association", "Worked as a distributor for VINOD in Western Uttar Pradesh."],
  [UserRound, "2013 — Next Generation", "Mr. Pulkit Agarwal (CA) joined with a focus on automation and bulk production."],
  [Settings, "Manufacturing Transformation", "Invested in circle production, coil slitting, and length cutting machinery."],
  [TrendingUp, "Today", "A stronger business built around sourcing, processing capability, and relationships."],
] as const;

const machines = [
  [CircleDot, "Automatic Circle Production", "Automated stainless-steel circle production designed to support bulk processing and consistent dimensions.", "/about/ss-metals-showcase.png", "50% 75%"],
  [Scissors, "Automatic Coil Slitting Line", "Processing stainless-steel coils into required widths for industrial and manufacturing applications.", "/products/perforated-sheets.png", "center"],
  [Ruler, "Automatic Length Cutting", "Controlled length cutting for stainless-steel material processing and downstream production requirements.", "/about/plant-overview.jpg", "70% 55%"],
] as const;

const associations = [
  ["VINOD", "Historical Distribution Association", "Previously worked as a distributor for VINOD, a recognised stainless-steel cookware and utensil brand, serving Western Uttar Pradesh."],
  ["Bansal Wire Industries", "Industry Relationship", "SS Metals works with Bansal Wire Industries, a manufacturer associated with stainless-steel wire and rod products."],
  ["Jindal Stainless Limited", "Industry Association", "SS Metals maintains an industry relationship with Jindal Stainless Limited."],
] as const;

const values = [
  [Gem, "Quality First", "Material and processing decisions guided by consistency and customer expectations."],
  [Handshake, "Long-Term Relationships", "Building dependable connections through service and reliability."],
  [Repeat2, "Continuous Improvement", "Strengthening processes and equipment as business requirements evolve."],
  [Sprout, "Responsible Growth", "Developing capability while maintaining a commitment to quality."],
] as const;

const leaders = [
  ["RA", "Mr. Raman Lal Agarwal (CA)", "Founder", "Established the company’s foundation with a focus on stainless-steel quality, dependable supply, and long-term customer relationships.", ""],
  ["SK", "Mr. Sarvesh Kumar", "Founding Associate", "Associated with the company’s early journey and development.", ""],
  ["PA", "Mr. Pulkit Agarwal (CA)", "Next-Generation Leadership", "Joined the business in 2013 with an increased focus on automation, production efficiency, and bulk processing.", "Joined in 2013"],
] as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}>{children}</p>;
}

export default function CompanyProfileExperience() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><div className={styles.heroCopyInner}>
        <Eyebrow>Company Profile</Eyebrow>
        <h1 className={styles.heroTitle} data-aos="fade-up">Built on Trust.<span>Evolved through Manufacturing.</span></h1>
        <p className={styles.heroText} data-aos="fade-up" data-aos-delay="80">From stainless steel trading to modern bulk processing, SS Metals has evolved through industry experience, customer trust, and a constant focus on quality.</p>
        <p className={styles.founderLine} data-aos="fade-up" data-aos-delay="140">Founded by <strong>Mr. Raman Lal Agarwal (CA)</strong> along with <strong>Mr. Sarvesh Kumar</strong></p>
        <div className={styles.heroActions} data-aos="fade-up" data-aos-delay="200">
          <Link href="#journey" className={styles.primaryButton}>Our Journey <ArrowDown /></Link>
          <Link href="/infrastructure" className={styles.secondaryButton}>Explore Infrastructure <ArrowRight /></Link>
        </div>
      </div></div>
      <div className={styles.heroImage} data-aos="fade-left">
        <Image src="/about/ss-metals-showcase.png" alt="Illustrative stainless-steel processing facility with coils and production machinery" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        <div className={styles.locationCard} data-aos="fade-up" data-aos-delay="280"><MapPin /><div><strong>Moradabad, Uttar Pradesh</strong><span>Stainless Steel · Processing · Manufacturing</span></div></div>
      </div>
    </section>

    <section className={styles.beginning}><div className={styles.wrapGrid}>
      <figure className={styles.beginningImage} data-aos="fade-right">
        <Image src="/about/plant-overview.jpg" alt="Illustrative industrial view representing the company’s early stainless-steel trading story" fill sizes="(max-width: 900px) 100vw, 48vw" />
        <figcaption><span>Our Beginning</span>Starting with Salem Stainless Coils</figcaption>
      </figure>
      <div className={styles.editorialCopy} data-aos="fade-left"><Eyebrow>Our Beginning</Eyebrow><h2>A Foundation Built Around Quality.</h2>
        <p>SS Metals began its journey under the leadership of <strong>Mr. Raman Lal Agarwal (CA)</strong>, along with <strong>Mr. Sarvesh Kumar</strong>, starting with Salem stainless steel coils.</p>
        <p>From the beginning, the philosophy was simple — source dependable material, maintain consistency, and deliver the best possible quality to every customer.</p>
        <small>The image is an illustrative industrial view, not presented as an archival company photograph.</small>
      </div>
    </div></section>

    <section id="journey" className={styles.journey}><div className={styles.wrap}>
      <div className={styles.sectionIntro} data-aos="fade-up"><Eyebrow>Our Story · The SS Metals Journey</Eyebrow><h2>From Trading to a Stronger, Modern Setup</h2><p>Six defining milestones shaped by trust, relationships, and continuous improvement.</p></div>
      <ol className={styles.timeline}>{journey.map(([Icon, title, text], index) => <li key={title} data-aos="fade-up" data-aos-delay={index * 70}><span className={styles.timelineNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.timelineIcon}><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </div></section>

    <section className={styles.chapter}>
      <div className={styles.chapterCopy}><div data-aos="fade-right"><Eyebrow light>2013</Eyebrow><h2>A New Chapter Began.</h2><p>Mr. Pulkit Agarwal (CA) joined the business, marking a new phase focused on automated processing, operational efficiency, and bulk production.</p>
        <div className={styles.capabilities}>
          <div data-aos="fade-up"><Settings /><span>Process Automation</span></div>
          <div data-aos="fade-up" data-aos-delay="80"><Boxes /><span>Bulk Production</span></div>
          <div data-aos="fade-up" data-aos-delay="160"><Target /><span>Precision Processing</span></div>
        </div>
      </div></div>
      <div className={styles.chapterImage} data-aos="fade-left"><Image src="/about/ss-metals-showcase.png" alt="Illustrative stainless-steel processing machinery" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
    </section>

    <section className={styles.infrastructure}><div className={styles.wrap}>
      <div className={styles.infrastructureHeader} data-aos="fade-up"><div><Eyebrow>Technology Behind Our Production</Eyebrow><h2>Modern Machinery for Consistent Quality.</h2><p>Investment in automated processing has strengthened SS Metals’ ability to support repeatable production and bulk material requirements.</p></div><Link href="/infrastructure" className={styles.secondaryButton}>Explore Infrastructure <ArrowRight /></Link></div>
      <div className={styles.machineGrid}>{machines.map(([Icon, title, text, src, position], index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 80}><div className={styles.machineImage}><Image src={src} alt={`Illustrative view for ${title}`} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectPosition: position }} /><span><Icon /> Processing Capability</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className={styles.relationships}><div className={styles.wrap}>
      <div className={styles.sectionIntroLeft} data-aos="fade-up"><Eyebrow>Industry Relationships</Eyebrow><h2>Associations That Strengthen Our Supply Chain.</h2><p>Over the years, SS Metals has developed relationships across India’s stainless-steel industry.</p></div>
      <div className={styles.associationGrid}>{associations.map(([name, label, text], index) => <article key={name} data-aos="fade-up" data-aos-delay={index * 80}><div className={styles.wordmark}>{name}</div><span>{label}</span><p>{text}</p></article>)}</div>
      <p className={styles.disclaimer}>Brand names are shown as text pending approval of official logo assets and usage permissions.</p>
    </div></section>

    <section className={styles.philosophy}><div className={styles.wrap}>
      <div className={styles.quoteBlock} data-aos="fade-up"><Eyebrow>Our Philosophy</Eyebrow><h2>One Principle Has Remained Unchanged.</h2><blockquote>“Deliver the Best Quality Possible to the Customer.”</blockquote></div>
      <div className={styles.valueGrid}>{values.map(([Icon, title, text], index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 70}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className={styles.leadership}><div className={styles.wrap}>
      <div className={styles.sectionIntroLeft} data-aos="fade-up"><Eyebrow>Leadership Behind SS Metals</Eyebrow><h2>The People Driving Our Journey.</h2></div>
      <div className={styles.leaderGrid}>{leaders.map(([initials, name, role, text, note], index) => <article key={name} data-aos="fade-up" data-aos-delay={index * 80}><div className={styles.monogram}>{initials}</div><div className={styles.leaderCopy}><h3>{name}</h3><p className={styles.role}>{role}</p>{note && <span className={styles.joined}>{note}</span>}<p>{text}</p></div></article>)}</div>
      <p className={styles.disclaimer}>Monograms are used until approved leadership portraits and the official designation for Mr. Sarvesh Kumar are supplied.</p>
    </div></section>

    <section className={styles.credibility} aria-label="Company credibility"><div className={styles.credibilityGrid}>
      <div><ShieldCheck /><p><strong>Established Industry Experience</strong><span>Stainless-steel sourcing and processing</span></p></div>
      <div><CalendarDays /><p><strong>2013 Transformation</strong><span>Next-generation leadership and automation</span></p></div>
      <div><MapPin /><p><strong>Moradabad, Uttar Pradesh</strong><span>Office and processing operations</span></p></div>
      <div><Building2 /><p><strong>Registered Business</strong><span>Public registration details available on request</span></p></div>
    </div></section>

    <section className={styles.cta}><Image src="/about/ss-metals-showcase.png" alt="" fill sizes="100vw" aria-hidden="true" /><div className={styles.ctaInner} data-aos="fade-up"><h2>Looking for a Dependable Stainless-Steel Partner?</h2><p>Connect with SS Metals to discuss material sourcing, processing capabilities, and bulk production requirements.</p><div><Link href="/contact?type=urgent" className={styles.goldButton}>Discuss Your Requirement <ArrowRight /></Link><Link href="/infrastructure" className={styles.darkButton}>View Infrastructure <ArrowRight /></Link></div></div></section>
  </div>;
}
