export const site = {
  name: "SS Metals",
  tagline: "Utensils & Farma Manufacturers · Pipes, Tubes & Metal Suppliers",
  established: "1987",
  proprietor: "Mr. Pradeep Kumar Agarwal",
  specialty:
    "Manufacturers of stainless steel utensils and farma design; suppliers of pipes, tubes, flanges, round bars, non-ferrous metals, scrap, and related industrial products.",
  email: "ssmetalsm@gmail.com",
  phones: ["+91 9410480440"],
  officeAddress: "Chitraguptnagar, Shivpuri, Moradabad-244001 (U.P.) INDIA",
  worksAddress: "Virpur Industrial Area, Sambhal Road, Moradabad-244301 (U.P.) INDIA",
  address:
    "Office: Chitraguptnagar, Shivpuri, Moradabad-244001 (U.P.) INDIA | Works: Virpur Industrial Area, Sambhal Road, Moradabad-244301 (U.P.) INDIA",
  whatsapp: "+91 9410480440",
} as const;

export const aboutShowcase = {
  src: "/about/ss-metals-showcase.png",
  alt: "SS Metals — utensils and farma manufacturing, industrial metal supply",
} as const;

export const heroCarouselSlides = [
  {
    src: "/hero/pipes-tubes.jpg",
    alt: "SS Metals — pipes and tubes warehouse and Urgent Requirement",
    eyebrow: "Pipes & tubes · Urgent Requirement",
    title: "Seamless, ERW & stainless piping",
    subtitle:
      "Carbon, alloy, and stainless pipes and tubes staged for oil & gas, power, and construction — with MTC-backed dispatch from Moradabad.",
    primaryCta: { label: "Browse pipes & tubes", href: "/products" },
    secondaryCta: { label: "Urgent Requirement list", href: "/contact" },
  },
  {
    src: "/hero/flanges.jpg",
    alt: "SS Metals — stainless steel flanges manufacturer and supplier",
    eyebrow: "Flanges · ANSI / ASME",
    title: "Precision flanges for leak-proof systems",
    subtitle:
      "Stainless, carbon, duplex, and alloy flanges in standard and custom sizes — built for industrial piping and export programs.",
    primaryCta: { label: "View flanges", href: "/products" },
    secondaryCta: { label: "Request quote", href: "/contact" },
  },
  {
    src: "/hero/perforated-sheets.jpg",
    alt: "SS Metals — perforated sheets and industrial metal supply",
    eyebrow: "Perforated sheets · MS · SS · GI",
    title: "Architectural & filtration-grade sheet",
    subtitle:
      "Perforated metal in varied hole patterns for cladding, screening, and OEM fabrication — MS, GI, and stainless grades.",
    primaryCta: { label: "Explore catalogue", href: "/products" },
    secondaryCta: { label: "Contact sales", href: "/contact" },
  },
] as const;

export const marqueeItems = [
  "ISO-certified stainless supply",
  "1500+ metric tonnes Urgent Requirement",
  "Stainless coils & slit widths",
  "Sheets · circles · farma blanks",
  "Seamless pipes & ERW tubes",
  "Kalvat utensils for export OEM",
  "Flanges · rods · design wire",
  "Grades: 304 · 316L · J4 · JSLU",
  "Duplex · alloy & carbon steel",
  "MTC & test reports on dispatch",
  "Same-day quotes on WhatsApp",
  "Export packing · 40+ countries served",
  "Moradabad factory & warehouse",
  "Bulk programs for trading houses",
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Urgent Requirement", href: "/contact" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroSpotlights = [
  {
    title: "Pipes & Tubes",
    headline: "Supplier in India — Urgent Requirement",
    description:
      "Alloy steel, Alloy 20, carbon steel seamless, 3LPE coated pipes, and stainless seamless lines for demanding industrial applications.",
    href: "/products",
    image: "/products/pipes-tubes.png",
    imageAlt: "Stainless steel pipes and tubes Urgent Requirement",
  },
  {
    title: "Flanges",
    headline: "Precision-engineered connections",
    description:
      "Stainless, carbon, alloy, duplex, and exotic alloy flanges in multiple sizes and standards for leak-proof piping systems.",
    href: "/products",
    image: "/products/flanges.png",
    imageAlt: "Industrial stainless steel flanges",
  },
  {
    title: "Perforated Sheets",
    headline: "Architectural & filtration grade",
    description:
      "MS, GI, and stainless perforated sheets in varied hole patterns for industrial, architectural, and filtration use.",
    href: "/products",
    image: "/products/perforated-sheets.png",
    imageAlt: "Perforated metal sheets in multiple hole patterns",
  },
] as const;

export const highlights = [
  {
    title: "Top-quality",
    description:
      "Manufactured utensils and farma; supplied pipes, tubes, flanges, bars, and sheets with MTC documentation where applicable.",
  },
  {
    title: "Customized solutions",
    description:
      "Flanges, fittings, sheets, plates, coils, and piping made to specification for oil & gas, power, chemical, and infrastructure projects.",
  },
  {
    title: "Best price",
    description:
      "Urgent Requirement on supplied lines and custom utensil/farma programs at competitive pricing with reliable dispatch.",
  },
] as const;

export const stats = [
  { value: "39+", label: "Years of experience" },
  { value: "50+", label: "Export clients" },
  { value: "35,000+", label: "Pieces produced per day" },
  { value: "40+", label: "OEM brands served" },
] as const;

export const materialStandards = [
  "ASTM",
  "ASME",
  "API",
  "Stainless steel",
  "Carbon steel",
  "Alloy steel",
  "Duplex & super duplex",
  "Exotic alloys",
] as const;

export const productCategories = [
  "Pipes & Tubes",
  "Round Bars",
  "Flanges",
  "Fasteners",
  "Perforated Sheets",
  "Plates & Specialty",
] as const;

export type ProductCatalogGroup = {
  id: string;
  title: string;
  summary: string;
  items: readonly string[];
};

export const productCatalog: readonly ProductCatalogGroup[] = [
  {
    id: "pipes-tubes",
    title: "Pipe & Tube",
    summary:
      "Seamless and welded pipes and tubes across stainless, carbon, alloy, and high-performance grades.",
    items: [
      "Alloy 20 Pipes",
      "3LPE Coating Seamless Pipes",
      "Carbon Steel Seamless Pipes",
      "Corten Steel Pipes",
      "Alloy Steel Seamless Pipes",
      "Hastelloy Pipes",
      "Cu-Ni 70/30 Pipes",
      "Cu-Ni 90/10 Pipes",
      "Monel 400/K500 Seamless Pipes",
      "Stainless Steel 904L Pipes",
      "Super Duplex Seamless Pipe",
      "Duplex Seamless Pipe",
      "Stainless Steel Seamless Pipes",
      "Inconel Pipe",
      "SS 304 Electropolished Seamless Tubes",
      "SS 316 Electropolished Seamless Tubes",
    ],
  },
  {
    id: "round-bars",
    title: "Round Bars",
    summary:
      "Round bars in stainless, alloy, duplex, nickel, and specialty metals for machining and fabrication.",
    items: [
      "Monel 400/K500 Round Bars",
      "Nitronic 50/60 Round Bars",
      "Duplex Round Bar",
      "17-4PH Round Bars",
      "Stainless Steel Round Bars",
      "Molybdenum Round Bars",
      "Beryllium Copper Round Bars",
      "Phosphorous Bronze Round Bars",
      "Titanium Round Bars",
      "Alloy Steel Round Bars",
      "Brass Round Bars",
      "Hastelloy Round Bars",
      "Cu-Ni Round Bars",
      "SMO 254 Round Bars",
      "Alloy 20 Round Bars",
      "347/347H Round Bars",
      "Naval Brass Round Bars",
      "Aluminium Round Bars",
      "Inconel Round Bars",
      "Zirconium Round Bars",
      "15-5PH Round Bars",
      "Tantalum Round Bars",
    ],
  },
  {
    id: "flanges",
    title: "Flanges",
    summary:
      "Weld neck, slip-on, blind, and specialty flanges for critical piping and process systems.",
    items: [
      "Stainless Steel Flanges",
      "Super Duplex Flanges",
      "Alloy Steel Flanges",
      "Aluminium Flanges",
      "Carbon Steel Flanges",
      "Duplex Flanges",
      "Hastelloy Flanges",
      "Inconel Flanges",
      "Monel Flanges",
      "Copper Flanges",
    ],
  },
  {
    id: "fasteners",
    title: "Fasteners",
    summary:
      "Bolts, nuts, and specialty fasteners in corrosion-resistant and high-temperature alloys.",
    items: [
      "310S Fasteners",
      "904L Fasteners",
      "Alloy 20 Fasteners",
      "Aluminium Fasteners",
      "Copper Fasteners",
      "Duplex Fasteners",
      "Hastelloy Fasteners",
      "Inconel Fasteners",
      "Monel Fasteners",
      "Naval Brass Fasteners",
      "Super Duplex Fasteners",
      "Titanium Fasteners",
      "Phosphorus Bronze Fasteners",
    ],
  },
  {
    id: "perforated",
    title: "Perforated Sheet",
    summary:
      "Perforated sheets for filtration, cladding, and industrial screening applications.",
    items: [
      "MS Perforated Sheet",
      "GI Perforated Sheet",
      "Stainless Steel Perforated Sheet",
    ],
  },
  {
    id: "aluminium",
    title: "Aluminium Products",
    summary: "Lightweight aluminium plates, chequered plates, and round bars.",
    items: [
      "Aluminium Plates",
      "Aluminium Chequered Plates",
      "Aluminium Round Bars",
    ],
  },
  {
    id: "plates-specialty",
    title: "Plates & Specialty",
    summary:
      "Structural, designer, and high-strength plates plus capillary tubing and couplings.",
    items: [
      "Corten Steel Plate (A588 Grade A Plate)",
      "Stainless Steel Designer Sheets",
      "C45 Plates",
      "High Magnesium Plate",
      "S600MC Plate",
      "S700MC Plate",
      "S900MC Plate",
      "ASTM A517 Grade F Plate",
    ],
  },
  {
    id: "capillary",
    title: "Capillary Tubes",
    summary: "Precision capillary tubing for instrumentation and fine fluid paths.",
    items: ["SS 304 Capillary Tubes", "SS 316 Capillary Tubes"],
  },
  {
    id: "victaulic",
    title: "Victaulic Couplings",
    summary: "Grooved couplings for rapid piping assembly in SS, duplex, and DI.",
    items: [
      "SS 304 Victaulic Couplings",
      "SS 316 Victaulic Couplings",
      "Duplex S32205 Victaulic Couplings",
      "Super Duplex S32750 / S32760 Victaulic Couplings",
      "Super Duplex S32750 Victaulic Couplings",
      "Super Duplex S32760 Victaulic Couplings",
      "DI Victaulic Grooved Couplings",
    ],
  },
  {
    id: "wedge-anchor",
    title: "Wedge Anchor Fasteners",
    summary: "Anchoring solutions for structural and mechanical installations.",
    items: [
      "Galvanised Wedge Anchor Fasteners",
      "Mild Steel Wedge Anchor Fasteners",
      "Stainless Steel Wedge Anchor Fasteners",
    ],
  },
] as const;

export const featuredProductLines = [
  {
    name: "Pipes & Tubes",
    description: "Seamless, ERW, welded tubes, and hollow sections",
    image: "/products/pipes-tubes.png",
    imageAlt: "Stainless steel pipes and tubes Urgent Requirement",
  },
  {
    name: "Round Bars",
    description: "Stainless, alloy, duplex, and exotic metal bars",
    image: "/products/round-bars.jpg",
    imageAlt: "Bundled stainless steel round bars in warehouse stock",
  },
  {
    name: "Flanges",
    description: "ANSI/ASME and custom flange programs",
    image: "/products/flanges.png",
    imageAlt: "Industrial stainless steel flanges",
  },
  {
    name: "Fasteners",
    description: "High-alloy bolts, nuts, and stud assemblies",
    image: "/products/fasteners.jpg",
    imageAlt: "Industrial bolts, nuts, and washers",
  },
] as const;

export const readyStockItems = [
  {
    name: "Stainless Steel Seamless Pipes",
    grade: "304 / 316L",
    status: "In stock",
  },
  {
    name: "Carbon Steel Seamless Pipes",
    grade: "ASTM A106",
    status: "In stock",
  },
  {
    name: "Duplex Seamless Pipe",
    grade: "S32205",
    status: "Limited",
  },
  {
    name: "Stainless Steel Flanges",
    grade: "304 / 316",
    status: "In stock",
  },
  {
    name: "SS Perforated Sheet",
    grade: "304 2B",
    status: "In stock",
  },
  {
    name: "Alloy Steel Round Bars",
    grade: "4140 / 4340",
    status: "In stock",
  },
] as const;

export const whyChooseUs = [
  "39+ years serving Moradabad industry (since 1987)",
  "ISO 9001:2008 certified quality with strict testing",
  "Wide material range from carbon steel to exotic alloys",
  "Urgent Requirement for quick and immediate delivery",
  "Custom farma design and utensil programs to drawing",
] as const;

export const industriesServed = [
  {
    name: "Oil & Gas",
    description: "Line pipe, seamless tubes, and corrosion-resistant alloys.",
  },
  {
    name: "Power Plant",
    description: "High-temperature pipes, flanges, and specialty fasteners.",
  },
  {
    name: "Aerospace",
    description: "Precision bars, titanium grades, and tight-tolerance tubing.",
  },
  {
    name: "Chemical & Pharma",
    description: "Electropolished tubes and exotic alloy piping systems.",
  },
] as const;

export const excellenceCopy = {
  title: "Our excellence",
  paragraphs: [
    "Excellence is the foundation of everything we do. With years of industry expertise, SS Metals delivers premium-quality pipes, tubes, round bars, flanges, and perforated sheets backed by precision manufacturing and strict quality control.",
    "We invest in advanced capability and skilled teams to maintain consistency, durability, and performance. Timely delivery, competitive pricing, and customized solutions help us serve clients across India and export markets with transparency and trust.",
  ],
} as const;

export const infrastructurePoints = [
  "Urgent Requirement of seamless pipes, ERW pipes, and hollow sections",
  "Warehouse staging for flanges, bars, sheets, and coils",
  "MTC documentation and inbound quality testing",
  "Pan-India logistics and export-ready dispatch",
] as const;

export const footerProductLinks = {
  pipes: productCatalog[0].items.slice(0, 10),
  roundBars: productCatalog[1].items.slice(0, 10),
  flanges: productCatalog[2].items,
  fasteners: productCatalog[3].items.slice(0, 10),
} as const;

export const testimonialSummary = {
  rating: "4.9",
  reviewCount: "1,200+",
} as const;

export const testimonials = [
  {
    quote:
      "SS Metals has been our go-to source for stainless coils and circles. Gauge consistency improved our spinning yield, and dispatch has been reliable for every export container.",
    name: "Rahul Sharma",
    role: "Export Trading Partner",
  },
  {
    quote:
      "We source seamless pipes and flanges for refinery maintenance. MTCs are always in order, and their team responds quickly on non-standard sizes.",
    name: "Priya Singh",
    role: "Project Manager",
  },
  {
    quote:
      "Kalvat utensil programs run smoother with their unfinished stock. Beading quality is uniform, which saves us polishing time on the floor.",
    name: "Arun Verma",
    role: "Factory Owner",
  },
  {
    quote:
      "From perforated sheets to round bars, one PO covers multiple lines. Competitive pricing without compromising on test certificates.",
    name: "Vikram Patel",
    role: "Purchase Manager",
  },
  {
    quote:
      "Their Urgent Requirement on 304 sheets helped us meet a tight OEM deadline. Packing and labeling were export-ready without extra follow-ups.",
    name: "Neha Gupta",
    role: "Supply Chain Lead",
  },
  {
    quote:
      "Design wire and farma blanks arrive exactly to drawing. SS Metals understands Moradabad production schedules better than any distant supplier.",
    name: "Imran Khan",
    role: "Production Head",
  },
] as const;

export const howItWorksSteps = [
  {
    step: "01",
    title: "Send inquiry",
    description: "Share grade, size, quantity, and delivery location via app, form, or WhatsApp.",
  },
  {
    step: "02",
    title: "Quote & verification",
    description: "Our team confirms stock or lead time and shares pricing with MTC options.",
  },
  {
    step: "03",
    title: "Production & QC",
    description: "Material is picked, tested, and prepared with documents for your order.",
  },
  {
    step: "04",
    title: "Dispatch",
    description: "Packed and shipped pan-India or export with tracking shared on the app.",
  },
] as const;

export const appDownload = {
  title: "Order steel on the go",
  subtitle:
    "Download the SS Metals app to browse Urgent Requirement, request quotes, track dispatches, and reorder favourite SKUs in seconds.",
  iosLabel: "Download on the App Store",
  androidLabel: "Get it on Google Play",
  iosUrl: "#",
  androidUrl: "#",
  features: [
    "Live Urgent Requirement & grades",
    "Instant quote requests",
    "Order & dispatch tracking",
    "Repeat PO in one tap",
  ],
} as const;

export const faqs = [
  {
    question: "What products does SS Metals supply?",
    answer:
      "We supply stainless steel coils, sheets, rods, wires, circles, patta, patti, and decorative sheets in various grades.",
  },
  {
    question: "Do you provide mill test certificates (MTC)?",
    answer:
      "Mill Test Certificates can be provided for applicable materials, subject to availability.",
  },
  {
    question: "Can I place bulk or urgent orders?",
    answer:
      "Yes, we cater to bulk requirements and urgent orders, subject to stock availability and delivery schedules.",
  },
  {
    question: "Which stainless steel grades do you stock?",
    answer:
      "We deal in grades including JSLU - DD, JSLU - SDM, JT, CU 204, 304, 316 and 430.",
  },
  {
    question: "What stainless steel utensils do you manufacture?",
    answer:
      "We Also Manufacture unfinished (Kalvat) utensils, including ice buckets, canisters, jugs, and related products.",
  },
  {
    question: "Do you supply products for export markets?",
    answer:
      "Yes, our raw materials and unfinished stainless steel utensils can serve domestic and export-market requirements.",
  },
  {
    question: "Where is SS Metals located?",
    answer:
      "Our office is at Chitraguptnagar, Shivpuri, Moradabad-244001 (U.P.), with our works at Virpur Industrial Area, Sambhal Road, Moradabad-244301 (U.P.) INDIA.",
  },
] as const;
