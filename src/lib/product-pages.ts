export type ProductSlug =
  | "coil"
  | "sheet"
  | "circle"
  | "utensils"
  | "farma"
  | "design-wire"
  | "rod"
  | "pipe";

export type ProductPageContent = {
  slug: ProductSlug;
  name: string;
  navLabel: string;
  bannerTitle: string;
  bannerSubtitle: string;
  overview: string;
  details: string[];
  advantages: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  items: {
    title: string;
    description: string;
    fullDescription: string;
  }[];
};

export const productNavItems: { slug: ProductSlug; label: string }[] = [
  { slug: "coil", label: "Coil" },
  { slug: "sheet", label: "Sheet" },
  { slug: "circle", label: "Circle" },
  { slug: "utensils", label: "Utensils" },
  { slug: "farma", label: "Farma" },
  { slug: "design-wire", label: "Design Wire" },
  { slug: "rod", label: "Rod" },
  { slug: "pipe", label: "Pipe" },
];

const sharedGrades =
  "JSLU, J4, 304, 316, 410, 430 and custom export grades on request.";

export const productPages: Record<ProductSlug, ProductPageContent> = {
  coil: {
    slug: "coil",
    name: "Stainless Steel Coil",
    navLabel: "Coil",
    bannerTitle: "Premium stainless steel coils",
    bannerSubtitle:
      "Cold-rolled and hot-rolled coils for stamping, spinning, and downstream fabrication.",
    overview:
      "SS Metals stocks and supplies stainless steel coils with consistent thickness, clean edges, and reliable mechanical properties for kitchenware, utensils, and industrial fabrication across India and export markets.",
    details: [
      `Available grades: ${sharedGrades}`,
      "Widths and thicknesses tailored for patta/patti splitting and circle cutting.",
      "Surface finishes including 2B, BA, and matte as per application.",
      "Mill test certificates and dimensional checks before dispatch.",
    ],
    advantages: [
      {
        title: "Uniform thickness",
        description:
          "Tight gauge control reduces scrap in deep drawing and spinning operations.",
      },
      {
        title: "Ready availability",
        description:
          "Popular widths held in stock for faster turnaround on repeat orders.",
      },
      {
        title: "Export-ready packing",
        description:
          "Eye-to-sky and coil weight marking for safe logistics and customs clearance.",
      },
      {
        title: "Competitive sourcing",
        description:
          "Direct mill and stockist ties help us offer factory-level pricing.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Melting & casting",
        description:
          "Steel is melted and cast into slabs with controlled chemistry for target grade.",
      },
      {
        step: "02",
        title: "Hot rolling",
        description:
          "Slabs are hot rolled to target thickness before coiling at high temperature.",
      },
      {
        step: "03",
        title: "Cold rolling & annealing",
        description:
          "Coils are cold reduced and annealed to achieve final gauge and softness.",
      },
      {
        step: "04",
        title: "Slitting & QC",
        description:
          "Master coils are slit to width, inspected, and packed for dispatch.",
      },
    ],
    items: [
      {
        title: "304 2B coil",
        description: "General-purpose austenitic coil for kitchenware and fabrication.",
        fullDescription:
          "304 2B stainless coil offers excellent corrosion resistance and formability for utensils, tanks, and architectural trims. We supply slit widths commonly used in Moradabad spinning and deep-draw lines, with optional PVC interleave on request.",
      },
      {
        title: "316L coil",
        description: "Low-carbon grade for improved weld corrosion resistance.",
        fullDescription:
          "316L coils are preferred where chloride exposure or post-weld corrosion is a concern. Suitable for premium export utensils, medical trays, and chemical-handling components requiring higher molybdenum content.",
      },
      {
        title: "J4 / JSLU coil",
        description: "Cost-effective grades for high-volume utensil production.",
        fullDescription:
          "J4 and JSLU coils balance drawability and price for mass kitchenware programs. Ideal for kalvat, tapers, and polished export lines where grade certification and repeatability matter for buyer audits.",
      },
      {
        title: "Narrow slit coil",
        description: "Precision slit strips for automatic forming lines.",
        fullDescription:
          "Narrow slit coils reduce edge trim waste on high-speed beading and trimming lines. Supplied with burr-controlled edges and labeled inner/outer diameters for quick line setup.",
      },
    ],
  },
  sheet: {
    slug: "sheet",
    name: "Stainless Steel Sheet",
    navLabel: "Sheet",
    bannerTitle: "Sheets for fabrication & design",
    bannerSubtitle:
      "Flat stainless sheets for laser cutting, bending, embossing, and designer applications.",
    overview:
      "From standard 2B sheets to designer and chequered patterns, SS Metals supplies flat sheet products for OEM, architecture, and stainless kitchenware manufacturers.",
    details: [
      `Grades: ${sharedGrades}`,
      "Standard and custom cut lengths with protective film options.",
      "Designer and perforated variants for feature walls and panels.",
      "Flatness and thickness verified before packing.",
    ],
    advantages: [
      {
        title: "Flatness control",
        description: "Sheets suitable for CNC laser, plasma, and press-brake work.",
      },
      {
        title: "Wide size range",
        description: "Multiple length-width combinations to minimize nesting waste.",
      },
      {
        title: "Designer options",
        description: "Embossed and patterned sheets for premium visible surfaces.",
      },
      {
        title: "Fast cut-to-size",
        description: "Shearing service for prototypes and small batch orders.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Coil preparation",
        description: "Master coil is decoiled and leveled for sheet processing.",
      },
      {
        step: "02",
        title: "Cut-to-length",
        description: "Sheets are sheared or cut to ordered dimensions.",
      },
      {
        step: "03",
        title: "Surface finishing",
        description: "2B, BA, or patterned finishes applied as specified.",
      },
      {
        step: "04",
        title: "Inspection",
        description: "Thickness, diagonal, and surface checks before stacking.",
      },
    ],
    items: [
      {
        title: "304 2B sheet",
        description: "Workhorse sheet for fabrication and utensil sub-assemblies.",
        fullDescription:
          "304 2B sheets provide a smooth, matte surface ideal for forming, welding, and downstream polishing. Commonly used for tank ends, machine panels, and flat utensil components.",
      },
      {
        title: "Designer SS sheet",
        description: "Embossed patterns for architectural and retail displays.",
        fullDescription:
          "Designer stainless sheets add visual texture without separate cladding. Used in lift interiors, hotel lobbies, and branded kitchen fronts where durability and aesthetics must coexist.",
      },
      {
        title: "Chequered / anti-skid sheet",
        description: "Raised pattern for flooring and industrial platforms.",
        fullDescription:
          "Chequered sheets improve grip in wet or oily environments. Supplied in popular gauges for walkways, truck floors, and plant maintenance platforms.",
      },
      {
        title: "Perforated sheet",
        description: "Hole patterns for filtration, screening, and ventilation.",
        fullDescription:
          "Perforated stainless sheets support HVAC, food processing screens, and acoustic panels. Hole size, pitch, and open area can be matched to your drawing.",
      },
    ],
  },
  circle: {
    slug: "circle",
    name: "Stainless Steel Circle",
    navLabel: "Circle",
    bannerTitle: "Circles for spinning & stamping",
    bannerSubtitle:
      "Blank circles optimized for kitchenware, pressure ware, and export utensil lines.",
    overview:
      "SS Metals is a stockist of stainless circles cut from coil and sheet for Moradabad-style utensil manufacturing—tapers, lids, kadai bottoms, and deep-draw components.",
    details: [
      "Diameters from small lids to large vessel blanks.",
      `Grades: ${sharedGrades}`,
      "Burrs minimized for smooth spinning on automatic lines.",
      "Bulk packing for high-volume export programs.",
    ],
    advantages: [
      {
        title: "Draw-quality blanks",
        description: "Circles selected for consistent earing and draw depth.",
      },
      {
        title: "Grade-matched lots",
        description: "Single-heat batches available for audit-sensitive buyers.",
      },
      {
        title: "Quick replenishment",
        description: "Popular diameters kept ready for repeat OEM schedules.",
      },
      {
        title: "Export packing",
        description: "Palletized and labeled for container loading efficiency.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Coil/sheet input",
        description: "Material is selected by grade, gauge, and surface finish.",
      },
      {
        step: "02",
        title: "Blanking",
        description: "Circles are blanked on press or circle-cutting lines.",
      },
      {
        step: "03",
        title: "Deburring",
        description: "Edges are finished to protect dies and spinning tools.",
      },
      {
        step: "04",
        title: "Sorting & pack",
        description: "Circles are counted, stacked, and wrapped for transit.",
      },
    ],
    items: [
      {
        title: "Utensil spinning circle",
        description: "Standard blanks for tapers, patila, and export cookware.",
        fullDescription:
          "Spinning-grade circles are used on automatic lathes and spinning machines to form seamless hollowware. We match diameter and thickness to your tooling chart to reduce trial scrap.",
      },
      {
        title: "Deep-draw circle",
        description: "Blanks for hydraulic deep draw presses.",
        fullDescription:
          "Deep-draw circles require tighter thickness tolerance and grain orientation awareness. Suitable for tall vessels, buckets, and components with multiple draw stages.",
      },
      {
        title: "Lid & cover circle",
        description: "Smaller diameters for fitted lids and accessories.",
        fullDescription:
          "Lid circles are supplied for matched sets with body diameters. Popular in jug sets, pressure cooker programs, and branded gift packaging lines.",
      },
      {
        title: "Custom diameter program",
        description: "Non-standard sizes from your drawing or sample.",
        fullDescription:
          "Send OD, thickness, and grade—we program blanking accordingly. Ideal for retrofitting legacy dies or launching new SKU diameters without investing in coil slitting.",
      },
    ],
  },
  utensils: {
    slug: "utensils",
    name: "Stainless Utensils (Kalvat)",
    navLabel: "Utensils",
    bannerTitle: "Unfinished kalvat utensils",
    bannerSubtitle:
      "High-precision unfinished kitchenware ready for polish, plate, or brand export.",
    overview:
      "SS Metals manufactures unfinished (kalvat) stainless utensils—tapers, mugs, jugs, pots, and barware—with automatic beading and trimming for exporters and domestic OEM brands.",
    details: [
      "Daily high-volume production on automatic lines.",
      "Kalvat finish ready for mirror polish or PVD/branding.",
      "Popular export sets and open-stock SKUs.",
      "Dimensional and metallurgical checks before dispatch.",
    ],
    advantages: [
      {
        title: "39+ years craft lineage",
        description: "Deep experience in Moradabad stainless hollowware manufacturing.",
      },
      {
        title: "Export consistency",
        description: "Repeatable beading, rim profile, and weight across lots.",
      },
      {
        title: "Wide catalogue",
        description: "100+ utensil shapes for trading houses and private labels.",
      },
      {
        title: "Kalvat economics",
        description: "Buyers control final finish and branding margin downstream.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Circle blank",
        description: "Grade-selected circle loaded for draw or spin operation.",
      },
      {
        step: "02",
        title: "Deep draw / spin",
        description: "Body formed on press or spinning machine to profile.",
      },
      {
        step: "03",
        title: "Beading & trim",
        description: "Automatic beading lines finish rims and trim height.",
      },
      {
        step: "04",
        title: "QC & staging",
        description: "Kalvat pieces inspected and staged for bulk dispatch.",
      },
    ],
    items: [
      {
        title: "Taper mugs",
        description: "Export-favorite tapers with precision kalvat beading.",
        fullDescription:
          "Taper mugs are produced in multiple heights and capacities for gift sets and hospitality programs. Kalvat surface allows your polisher to achieve mirror or satin finish uniformly.",
      },
      {
        title: "Jug sets",
        description: "Jug bodies and matched accessories in kalvat finish.",
        fullDescription:
          "Jug programs include body, lid, and tumbler components where applicable. We support container-wise packing lists for export documentation.",
      },
      {
        title: "Kalvat pots & biddings",
        description: "Traditional pot forms and inner bidding components.",
        fullDescription:
          "Pot and bidding shapes serve domestic and ethnic cookware lines. Thickness and bead profile can be aligned to your sample or golden master piece.",
      },
      {
        title: "Barware & bathware",
        description: "Buckets, holders, and hotelware kalvat shells.",
        fullDescription:
          "Beyond kitchen, we supply kalvat shells for barware and bath accessories—ice buckets, holders, and institutional pieces awaiting final finish at your plant.",
      },
    ],
  },
  farma: {
    slug: "farma",
    name: "Farma",
    navLabel: "Farma",
    bannerTitle: "Stainless farma blanks",
    bannerSubtitle:
      "Pre-cut farma pieces for lids, bottoms, and matched utensil components.",
    overview:
      "Farma (pre-formed flat or shallow blanks) speeds up utensil assembly by supplying ready shapes for lids, dividers, and structural inserts used alongside circles and patta.",
    details: [
      "Cut from coil, sheet, or patti per drawing.",
      "Tolerance control for press-fit and welding operations.",
      `Grades: ${sharedGrades}`,
      "Volume programs for repeat export buyers.",
    ],
    advantages: [
      {
        title: "Reduced shop-floor cutting",
        description: "Pre-cut farma lowers manual shearing and marking time.",
      },
      {
        title: "Nested efficiency",
        description: "Optimized nesting from wide coil reduces material loss.",
      },
      {
        title: "Repeatable geometry",
        description: "Die- or laser-cut profiles stay consistent lot to lot.",
      },
      {
        title: "Kit-ready supply",
        description: "Farma bundled with circles for complete SKU kits.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Pattern layout",
        description: "Drawing or sample digitized for cutting layout.",
      },
      {
        step: "02",
        title: "Cutting",
        description: "Laser, press, or shear cutting to farma outline.",
      },
      {
        step: "03",
        title: "Forming (optional)",
        description: "Light forming or stiffening ribs if required.",
      },
      {
        step: "04",
        title: "Kit packing",
        description: "Farma counted and packed with related blanks.",
      },
    ],
    items: [
      {
        title: "Lid farma",
        description: "Flat or lightly domed lid blanks for spinning lines.",
        fullDescription:
          "Lid farma pieces are supplied to match body diameters and bead styles. Exporters use them to parallelize lid and body production cells.",
      },
      {
        title: "Base farma",
        description: "Bottom inserts and reinforcement plates.",
        fullDescription:
          "Base farma improves stability in tall vessels and industrial containers. Thickness is selected for weld penetration and flatness after assembly.",
      },
      {
        title: "Partition farma",
        description: "Internal dividers for multi-compartment products.",
        fullDescription:
          "Partition blanks support lunch boxes, server sets, and institutional trays. Edges can be deburred for safe manual assembly.",
      },
      {
        title: "Custom profile farma",
        description: "Any outline from CAD—including slots and holes.",
        fullDescription:
          "Send DXF or PDF—We Also Manufacture farma to profile with hole patterns for rivets, handles, or spouts pre-pierced where needed.",
      },
    ],
  },
  "design-wire": {
    slug: "design-wire",
    name: "Design Wire",
    navLabel: "Design Wire",
    bannerTitle: "Stainless design wire",
    bannerSubtitle:
      "Shaped wire profiles for handles, trims, racks, and decorative fabrications.",
    overview:
      "Design wire products include formed and straight stainless wire sections used in utensil handles, basket frames, display racks, and architectural trim where strength and corrosion resistance are required.",
    details: [
      "Round, flat, and custom profile wire.",
      "Bright or matte finish for visible applications.",
      "Bending and forming friendly grades.",
      "Coil or straight length packing.",
    ],
    advantages: [
      {
        title: "Aesthetic profiles",
        description: "Profiles that stay straight and polish evenly.",
      },
      {
        title: "Corrosion safe",
        description: "Stainless wire survives wet kitchen and retail environments.",
      },
      {
        title: "Forming stability",
        description: "Consistent diameter reduces cracking at bend radii.",
      },
      {
        title: "Bulk supply",
        description: "Wire coils for automatic bending and welding cells.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Wire rod drawing",
        description: "Hot rolled rod is drawn down to target wire diameter.",
      },
      {
        step: "02",
        title: "Annealing",
        description: "Intermediate anneals restore ductility for cold work.",
      },
      {
        step: "03",
        title: "Surface finish",
        description: "Pickling or bright finishing per application.",
      },
      {
        step: "04",
        title: "Coiling & test",
        description: "Wire is coiled, sampled, and packed with grade tags.",
      },
    ],
    items: [
      {
        title: "Handle wire",
        description: "Wire sections for utensil and cookware handles.",
        fullDescription:
          "Handle wire is supplied in diameters suited for spot welding or riveting to bodies. Export buyers specify straightness and end cut quality for automatic handle jigs.",
      },
      {
        title: "Display rack wire",
        description: "Frames for retail and hotelware displays.",
        fullDescription:
          "Rack wire profiles support weight loads in showrooms and kitchens. We can supply continuous coil for bending fixtures or cut lengths for manual assembly.",
      },
      {
        title: "Trim & inlay wire",
        description: "Decorative wire for edges and panel accents.",
        fullDescription:
          "Trim wire adds visible design lines on premium products. Bright annealed finishes reduce polishing time before PVD or electroplate.",
      },
      {
        title: "Custom profile wire",
        description: "Non-round profiles per drawing.",
        fullDescription:
          "Custom profiles—including flattened ovals and rectangular wire—are sourced for specialized hinges, clips, and design-led stainless programs.",
      },
    ],
  },
  rod: {
    slug: "rod",
    name: "Stainless Rod",
    navLabel: "Rod",
    bannerTitle: "Round & hex stainless rods",
    bannerSubtitle:
      "Machining-grade rod for shafts, fasteners, fittings, and fabrication.",
    overview:
      "SS Metals supplies stainless and alloy rods for turning, threading, and structural applications alongside our flat products and utensil lines.",
    details: [
      "Round, hex, and square options where available.",
      `Grades: ${sharedGrades} plus machining-friendly variants.`,
      "Cut lengths or full bars.",
      "MTC and dimensional reporting on request.",
    ],
    advantages: [
      {
        title: "Machining quality",
        description: "Straight bars suitable for CNC turning centers.",
      },
      {
        title: "Grade clarity",
        description: "Clear grade marking for traceability in OEM bills.",
      },
      {
        title: "Flexible lengths",
        description: "Cut-to-length reduces waste on small batch jobs.",
      },
      {
        title: "Combined orders",
        description: "Rod shipped with sheet/coil on single dispatch.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Billet / continuous cast",
        description: "Steel billet prepared for hot rolling to bar size.",
      },
      {
        step: "02",
        title: "Hot rolling",
        description: "Bar rolled to nominal diameter or across flats.",
      },
      {
        step: "03",
        title: "Peeling / finishing",
        description: "Surface conditioned for bright or ground finish.",
      },
      {
        step: "04",
        title: "Cut & inspect",
        description: "Bars cut, chamfered, and packed with labels.",
      },
    ],
    items: [
      {
        title: "304 round rod",
        description: "General machining rod for fittings and adapters.",
        fullDescription:
          "304 round rod is widely used for bolts, spacers, and custom fittings in food equipment. Tolerance and straightness suitable for automatic bar feeders.",
      },
      {
        title: "316 rod",
        description: "Higher corrosion resistance for marine and chemical use.",
        fullDescription:
          "316 rod serves pumps, valves, and coastal hardware. Available for projects needing improved pitting resistance versus 304.",
      },
      {
        title: "Hex rod",
        description: "Hex bar for wrench-fit components and bolts.",
        fullDescription:
          "Hex rod accelerates production of hex-head fasteners and adjustment screws. Supplied in standard across-flats sizes used in Indian and export hardware.",
      },
      {
        title: "Turned bright rod",
        description: "Precision ground or peeled bar for fine turning.",
        fullDescription:
          "Bright rod minimizes machining allowance for high-precision shafts and medical or instrumentation parts requiring smooth surface finish.",
      },
    ],
  },
  pipe: {
    slug: "pipe",
    name: "Pipe & Tube",
    navLabel: "Pipe",
    bannerTitle: "Seamless & welded pipe",
    bannerSubtitle:
      "Stainless and alloy pipe for process, structural, and fabrication projects.",
    overview:
      "SS Metals supplies stainless seamless and welded pipes and tubes—in line with our broader catalogue—for process piping, handrails, furniture frames, and industrial fabrication.",
    details: [
      "Schedules and OD sizes per ASTM/ASME conventions.",
      "Seamless and ERW options depending on application.",
      "Cut lengths and bevel prep on request.",
      "Coupling with flanges and fittings from our stock program.",
    ],
    advantages: [
      {
        title: "Pressure integrity",
        description: "Seamless options for critical fluid lines.",
      },
      {
        title: "Corrosion performance",
        description: "Stainless grades for food, chemical, and outdoor use.",
      },
      {
        title: "Project packing",
        description: "Bundle marking and length tally for site installation.",
      },
      {
        title: "One-stop supply",
        description: "Combine pipe with sheets, rods, and flanges on one PO.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Piercing / welding",
        description: "Seamless hollow created or strip welded for ERW tube.",
      },
      {
        step: "02",
        title: "Sizing & heat treat",
        description: "Pipe sized, annealed, and straightened to spec.",
      },
      {
        step: "03",
        title: "Hydro / NDT",
        description: "Testing per specification before release.",
      },
      {
        step: "04",
        title: "End finish",
        description: "Plain, beveled, or threaded ends as ordered.",
      },
    ],
    items: [
      {
        title: "304 seamless pipe",
        description: "Process and decorative piping in austenitic 304.",
        fullDescription:
          "304 seamless pipe serves food plants, breweries, and architectural railings. We help match schedule wall thickness to your pressure or structural calculation.",
      },
      {
        title: "316L seamless pipe",
        description: "Low-carbon pipe for welded assemblies.",
        fullDescription:
          "316L pipe is specified where weld decay must be minimized. Common in pharma skids, coastal structures, and chemical dosing lines.",
      },
      {
        title: "ERW stainless tube",
        description: "Economical tube for furniture and light structural use.",
        fullDescription:
          "ERW tube offers cost efficiency for non-critical pressure applications—display frames, exhausts, and mechanical supports with polished or matte finish.",
      },
      {
        title: "Capillary & small OD tube",
        description: "Precision tube for instrumentation runs.",
        fullDescription:
          "Small OD tubes support instrumentation, hydraulics, and specialty OEM devices. Tight OD tolerance aids compression fitting assemblies.",
      },
    ],
  },
};

export function isProductSlug(value: string): value is ProductSlug {
  return value in productPages;
}

export function getProductSlugs(): ProductSlug[] {
  return productNavItems.map((item) => item.slug);
}
