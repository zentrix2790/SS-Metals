import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, Award, BadgeCheck, Boxes, Briefcase, Building2, CalendarDays, CircleDot,
  ClipboardCheck, Gem, Handshake, Layers, MapPin, MessageSquareText, Repeat2, Ruler, Scissors, Settings,
  ShieldCheck, Sprout, Target, TrendingUp, Truck, User, UserRound, Utensils,
} from "lucide-react";
import { GRADES, SITE } from "@/lib/site";
import "./page.module.css";

const styleNames = [
  "associationGrid", "associationLogo", "beginning", "beginningImage", "capabilities", "chapter", "chapterCopy",
  "chapterImage", "credibility", "credibilityGrid", "cta", "ctaInner", "darkButton", "disclaimer",
  "editorialCopy", "eyebrow", "eyebrowLight", "factCard", "factCardHeader", "factCardsGrid", "factContent",
  "factIconWrap", "factLabel", "factSub", "factValue", "founderLine", "goldButton", "hero", "heroActions",
  "heroCopy", "heroCopyInner", "heroImage", "heroImageInner", "heroText", "heroTitle", "infrastructure",
  "infrastructureHeader", "joined", "journey", "leaderCopy", "leaderGrid", "leadership", "leaderCard", "leaderMedia", "leaderImg", "leaderPlaceholder", "locationCard",
  "journeyBadge", "journeyEra", "journeyProgress", "journeyStage", "journeyStageContent", "journeyStageImage", "journeyStory",
  "machineGrid", "machineImage", "monogram", "page", "philosophy", "primaryButton", "quoteBlock",
  "relationships", "role", "secondaryButton", "sectionIntro", "sectionIntroLeft", "specifications", "timeline",
  "timelineIcon", "timelineNumber", "valueGrid", "wordmark", "wrap", "wrapGrid",
  "workflow", "workflowGrid", "workflowStep",
] as const;
const styles = Object.fromEntries(styleNames.map((name) => [name, name])) as Record<(typeof styleNames)[number], string>;

const journey = [
  {
    icon: CircleDot,
    era: "The Beginning",
    title: "A Trading Foundation",
    text: "The journey began with Salem stainless-steel coils and a disciplined focus on dependable material.",
    image: "/images/company-profile/company-beginning-illustrative.png",
    tone: "archive",
  },
  {
    icon: Handshake,
    era: "Trust & Association",
    title: "Relationships Built the Reach",
    text: "Consistent service strengthened customer confidence, while the VINOD association expanded activity across Western Uttar Pradesh.",
    image: "/about/plant-overview.jpg",
    tone: "heritage",
  },
  {
    icon: UserRound,
    era: "2013 · Next Generation",
    title: "A New Operating Outlook",
    text: "Mr. Pulkit Agarwal (CA) joined the business and advanced the shift toward automation, efficiency, and bulk production.",
    image: "/images/company-profile/transformation-2013-illustrative.png",
    tone: "transition",
  },
  {
    icon: Settings,
    era: "Manufacturing Transformation",
    title: "Capability Moved In-House",
    text: "Circle production, coil slitting, and cut-to-length machinery created a stronger value-added processing setup.",
    image: "/images/company-profile/coil-slitting-line-illustrative.png",
    tone: "industry",
  },
  {
    icon: TrendingUp,
    era: "Today",
    title: "Stronger. Modern. Trusted.",
    text: "Sourcing knowledge, modern infrastructure, and established industry relationships now operate as one connected capability.",
    image: "/images/company-profile/hero-steel-coils-generated.png",
    tone: "today",
  },
] as const;

const machines = [
  [CircleDot, "Automatic Circle Production", "Stainless-steel circles prepared for repeatable downstream forming.", "/images/company-profile/automatic-circle-production-illustrative.png", "center", "Circle Forming"],
  [Scissors, "Automatic Coil Slitting Line", "Wide coils converted into application-specific strip widths.", "/images/company-profile/coil-slitting-line-illustrative.png", "center", "Width Processing"],
  [Ruler, "Automatic Length Cutting", "Sheet material cut to controlled lengths for planned production use.", "/images/company-profile/length-cutting-line-illustrative.png", "center", "Cut-to-Length"],
] as const;

const workflow = [
  [MessageSquareText, "Understand the Requirement", "Grade, finish, dimensions, quantity, and intended use are clarified first."],
  [ClipboardCheck, "Plan the Material Route", "The team identifies a practical sourcing or processing path for the request."],
  [Settings, "Execute the Right Operation", "Relevant machinery is selected only where conversion work is required."],
  [Truck, "Coordinate Order Readiness", "Final details are aligned before the material moves toward dispatch."],
] as const;

const associations = [
  ["VINOD", "Historical Distribution Association", "Previously worked as a distributor for VINOD, serving Western Uttar Pradesh.", "/images/company-profile/vinod-logo.png"],
  ["Bansal Wire Industries", "Industry Relationship", "Associated with Bansal Wire Industries for stainless-steel wire and rod products.", "/images/company-profile/bansal-wire-logo-alt.png"],
  ["Jindal Stainless Limited", "Industry Association", "SS Metals maintains an industry relationship with Jindal Stainless Limited.", "/images/company-profile/jindal-stainless-official-logo.png"],
] as const;

const factCards = [
  {
    icon: Building2,
    label: "Company",
    value: SITE.name,
    sub: "Est. 1987 · 39+ Years in Business",
  },
  {
    icon: User,
    label: "Proprietor",
    value: SITE.proprietor,
    sub: "Executive Leadership & Operations",
  },
  {
    icon: Briefcase,
    label: "Business Type",
    value: "Manufacturer & Stockist",
    sub: "Manufacturer, exporter, supplier and raw material stockist",
  },
  {
    icon: MapPin,
    label: "Office & Works",
    value: "Moradabad, Uttar Pradesh",
    sub: `Office: ${SITE.officeAddress}\nWorks: ${SITE.worksAddress}`,
  },
  {
    icon: Utensils,
    label: "Specialisation",
    value: "Utensils & Farma Design",
    sub: "Unfinished (Kalvat) stainless steel utensils, barware, bathware & farma profiles",
  },
  {
    icon: Layers,
    label: "Raw Materials",
    value: "Coils, Sheets & Blanks",
    sub: "Patta, patti, coil, circles, sheets and farma tooling",
  },
  {
    icon: ShieldCheck,
    label: "Steel Grades",
    value: GRADES.join(" · "),
    sub: "High-grade stainless steel with MTC compliance",
  },
  {
    icon: Award,
    label: "Certification & Standards",
    value: "ISO Aligned Systems",
    sub: "Comprehensive metallurgical and dimensional inspection",
  },
  {
    icon: BadgeCheck,
    label: "QUALITY ASSURANCE",
    value: "Consistent Quality & Precision",
    sub: "Precision Inspection for Consistent Quality & Reliability.",
  },
] as const;

const values = [
  [Gem, "Quality First", "Material and processing decisions guided by consistency and customer expectations."],
  [Handshake, "Long-Term Relationships", "Building dependable connections through service and reliability."],
  [Repeat2, "Continuous Improvement", "Strengthening processes and equipment as business requirements evolve."],
  [Sprout, "Responsible Growth", "Developing capability while maintaining a commitment to quality."],
] as const;

const leaders = [
  {
    initials: "RA",
    name: "Mr. Raman Lal Agarwal (CA)",
    role: "Founder",
    note: "",
    image: "", // Blank image as requested
  },
  {
    initials: "SK",
    name: "Mr. Sarvesh Kumar",
    role: "Founding Associate",
    note: "",
    image: "", // Blank image as requested
  },
  {
    initials: "PA",
    name: "Mr. Pulkit Agarwal (CA)",
    role: "Next-Generation Leadership",
    note: "Part of the business since 2013",
    image: "", // Blank image as requested
  },
] as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}>{children}</p>;
}

export default function CompanyProfileExperience() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><div className={styles.heroCopyInner}>
        <Eyebrow>About SS Metals</Eyebrow>
        <h1 className={styles.heroTitle} data-aos="fade-up">Built on Trust.<span>Evolved through Manufacturing.</span></h1>
        <p className={styles.heroText} data-aos="fade-up" data-aos-delay="80">From stainless steel trading to modern bulk processing, SS Metals has evolved through industry experience, customer trust, and a constant focus on quality.</p>
        <p className={styles.founderLine} data-aos="fade-up" data-aos-delay="140">Founded by <strong>Mr. Raman Lal Agarwal (CA)</strong> along with <strong>Mr. Sarvesh Kumar</strong></p>
        <div className={styles.heroActions} data-aos="fade-up" data-aos-delay="200">
          <Link href="#journey" className={styles.primaryButton}>Our Journey <ArrowDown /></Link>
          <Link href="/infrastructure" className={styles.secondaryButton}>See Our Plant <ArrowRight /></Link>
        </div>
      </div></div>
      <div className={styles.heroImage} data-aos="fade-left">
        <Image src="/images/company-profile/hero-steel-coils-generated.png" alt="Illustrative stainless-steel processing facility with coils and production machinery" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        <div className={styles.locationCard} data-aos="fade-up" data-aos-delay="280"><MapPin /><div><strong>Moradabad, Uttar Pradesh</strong><span>Stainless Steel · Processing · Manufacturing</span></div></div>
      </div>
    </section>

    <section className={styles.beginning}><div className={styles.wrapGrid}>
      <figure className={styles.beginningImage} data-aos="fade-right">
        <Image src="/images/company-profile/company-beginning-illustrative.png" alt="Illustrative period industrial yard representing the company’s early stainless-steel trading story" fill sizes="(max-width: 900px) 100vw, 48vw" />
        <figcaption><span>Trading Roots</span>Salem Stainless-Steel Coils</figcaption>
      </figure>
      <div className={styles.editorialCopy} data-aos="fade-left"><Eyebrow>Our Beginning</Eyebrow><h2>A Foundation Built Around Quality.</h2>
        <p>SS Metals began its journey under the leadership of <strong>Mr. Raman Lal Agarwal (CA)</strong>, along with <strong>Mr. Sarvesh Kumar</strong>, starting with Salem stainless steel coils.</p>
        <p>From the beginning, the philosophy was simple — source dependable material, maintain consistency, and deliver the best possible quality to every customer.</p>
        <small>The image is an illustrative industrial view, not presented as an archival company photograph.</small>
      </div>
    </div></section>

    {/* Leadership Section shifted above "From Legacy to Innovation" (Journey) */}
    <section className={styles.leadership}><div className={styles.wrap}>
      <div className={styles.sectionIntro} data-aos="fade-up">
        <Eyebrow>Leadership Behind SS Metals</Eyebrow>
        <h2>The People Driving Our Journey.</h2>
        <p>Meet the visionary leaders steering SS Metals with rich experience, strategic growth, and modern engineering.</p>
      </div>
      <div className={styles.leaderGrid}>
        {leaders.map(({ initials, name, role, note, image }, index) => (
          <article key={name} className={styles.leaderCard} data-aos="fade-up" data-aos-delay={index * 80}>
            <div className={styles.leaderMedia}>
              {image ? (
                <Image src={image} alt={name} fill className={styles.leaderImg} sizes="(max-width: 768px) 100vw, 380px" />
              ) : (
                <div className={styles.leaderPlaceholder} aria-hidden="true" />
              )}
            </div>
            <div className={styles.leaderCopy}>
              <h3>{name}</h3>
              <p className={styles.role}>{role}</p>
              {note && <span className={styles.joined}>{note}</span>}
            </div>
          </article>
        ))}
      </div>
    </div></section>

    <section id="journey" className={styles.journey}><div className={styles.wrap}>
      <div className={styles.sectionIntro} data-aos="fade-up"><Eyebrow>Our Story · The SS Metals Journey</Eyebrow><h2>From Legacy to Innovation</h2><p>Move through five defining eras—from an archival beginning to a modern manufacturing business.</p></div>
      <ol className={styles.journeyStory}>
        {journey.map(({ icon: Icon, era, title, text, image, tone }, index) => <li className={styles.journeyStage} data-tone={tone} key={era}>
          <span className={styles.journeyProgress}><b>{String(index + 1).padStart(2, "0")}</b></span>
          <div className={styles.journeyStageImage}>
            <Image src={image} alt={`Illustrative visual representing ${era}`} fill sizes="(max-width: 800px) 100vw, 56vw" />
            <span className={styles.journeyBadge}><Icon /> {era}</span>
          </div>
          <div className={styles.journeyStageContent}>
            <span className={styles.journeyEra}>{era}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </li>)}
      </ol>
    </div></section>

    <section className={styles.chapter}>
      <div className={styles.chapterCopy}><div data-aos="fade-right"><Eyebrow light>2013</Eyebrow><h2>A New Chapter Began.</h2><p>Mr. Pulkit Agarwal (CA) joined the business, marking a new phase focused on automated processing, operational efficiency, and bulk production.</p>
        <div className={styles.capabilities}>
          <div data-aos="fade-up"><Settings /><span>Process Automation</span></div>
          <div data-aos="fade-up" data-aos-delay="80"><Boxes /><span>Bulk Production</span></div>
          <div data-aos="fade-up" data-aos-delay="160"><Target /><span>Precision Processing</span></div>
        </div>
      </div></div>
      <div className={styles.chapterImage} data-aos="fade-left"><Image src="/images/company-profile/transformation-2013-illustrative.png" alt="Illustrative modern processing line representing the company’s 2013 transformation" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
    </section>

    <section className={styles.infrastructure}><div className={styles.wrap}>
      <div className={styles.infrastructureHeader} data-aos="fade-up"><div><Eyebrow>Technology Behind Our Production</Eyebrow><h2>Modern Machinery for Consistent Quality.</h2><p>Investment in automated processing has strengthened SS Metals’ ability to support repeatable production and bulk material requirements.</p></div><Link href="/infrastructure" className={styles.secondaryButton}>Explore Infrastructure <ArrowRight /></Link></div>
      <div className={styles.machineGrid}>{machines.map(([Icon, title, text, src, position, label], index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 80}><div className={styles.machineImage}><Image src={src} alt={`Illustrative view for ${title}`} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectPosition: position }} /><span><Icon /> {label}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className={styles.workflow}><div className={styles.wrap}>
      <div className={styles.sectionIntro} data-aos="fade-up"><Eyebrow>How We Work</Eyebrow><h2>From Requirement to Order Readiness.</h2><p>A straightforward operating sequence keeps commercial and production decisions aligned.</p></div>
      <ol className={styles.workflowGrid}>{workflow.map(([Icon, title, text], index) => <li className={styles.workflowStep} key={title} data-aos="fade-up" data-aos-delay={index * 70}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </div></section>

    {/* Corporate Information & Facilities Section exactly matching the layout & Tailwind classes */}
    <section className="border-t border-steel-200 bg-steel-50 py-14 sm:py-16 overflow-hidden">
      <div className="wrap" data-aos="fade-up">
        <div className="mb-8">
          <span className="badge bg-brand-light text-brand font-semibold text-xs uppercase tracking-wider">
            Quick Specifications
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1.5">
            Corporate Information &amp; Facilities
          </h2>
          <p className="mt-1 text-sm text-steel-600">
            Verified operating details, production lines, and supply specifications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factCards.map((item, idx) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 80}
              className="group relative rounded-xl border border-steel-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform duration-200 group-hover:scale-105">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-steel-500">
                    {item.label}
                  </span>
                  <p className="font-display text-base font-bold text-ink mt-0.5 leading-snug">
                    {item.value}
                  </p>
                  {item.sub && (
                    <p className="text-xs text-steel-600 mt-1 leading-relaxed whitespace-pre-line">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.relationships}><div className={styles.wrap}>
      <div className={styles.sectionIntroLeft} data-aos="fade-up"><Eyebrow>Industry Relationships</Eyebrow><h2>Associations That Strengthen Our Supply Chain.</h2><p>Connections across the sector broaden access to established material and product ecosystems.</p></div>
      <div className={styles.associationGrid}>{associations.map(([name, label, text, logo], index) => <article key={name} data-aos="fade-up" data-aos-delay={index * 80}><div className={styles.wordmark}><Image className={styles.associationLogo} src={logo} alt={`${name} logo`} width={240} height={90} sizes="220px" unoptimized /></div><span>{label}</span><p>{text}</p></article>)}</div>
    </div></section>

    <section className={styles.philosophy}><div className={styles.wrap}>
      <div className={styles.quoteBlock} data-aos="fade-up"><Eyebrow>Our Philosophy</Eyebrow><h2>One Principle Has Remained Unchanged.</h2><blockquote>“Deliver the Best Quality Possible to the Customer.”</blockquote></div>
      <div className={styles.valueGrid}>{values.map(([Icon, title, text], index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 70}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className={styles.credibility} aria-label="Company credibility"><div className={styles.credibilityGrid}>
      <div><ShieldCheck /><p><strong>Established Industry Experience</strong><span>Stainless-steel sourcing and processing</span></p></div>
      <div><CalendarDays /><p><strong>2013 Transformation</strong><span>Next-generation leadership and automation</span></p></div>
      <div><MapPin /><p><strong>Moradabad Operations</strong><span>Commercial office and industrial works</span></p></div>
      <div><Building2 /><p><strong>Registered Business</strong><span>Public registration details available on request</span></p></div>
    </div></section>

    <section className={styles.cta}><Image src="/about/plant-overview.jpg" alt="" fill sizes="100vw" aria-hidden="true" /><div className={styles.ctaInner} data-aos="fade-up"><h2>Looking for a Dependable Stainless-Steel Partner?</h2><p>Share your material brief with a team that understands both trade and shop-floor conversion.</p><div><Link href="/contact?type=urgent" className={styles.goldButton}>Discuss Your Requirement <ArrowRight /></Link><Link href="/infrastructure" className={styles.darkButton}>View Infrastructure <ArrowRight /></Link></div></div></section>
  </div>;
}
