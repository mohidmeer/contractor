import { FaBalanceScale, FaCalendarAlt, FaCheckCircle, FaClipboardCheck, FaFileAlt, FaMapMarkerAlt, FaSearch, FaTools, FaUserTie } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';

/* ------------------------
   CONSTANTS 
------------------------ */
export const static_assets = '/consultant'
export const siteUrl = 'https://totalcareservicesroofing.com/'
export const bussinessType = ["LocalBusiness", "RoofingContractor"]
export const siteName = 'Total Care Roofing'
export const siteLogo = `${static_assets}/images/logo.svg`
export const googleAnalyticId = 'G-B98W4J2E5B'
export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@totalcareservicesroofing.com',
  workingHours: 'Mon–Sat: 8:00 AM – 6:00 PM'
};
export const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61579296842520',
  instagram: 'https://www.facebook.com/profile.php?id=61579296842520',
  twitter: 'https://www.facebook.com/profile.php?id=61579296842520',
};
/* ------------------------
    PAGES  
------------------------ */
export const landingPage = {
  seo: {
    title: 'Total Care Roofing',
    description: 'Independent Florida roof consulting: evaluations, forensic reports, specs, and construction observation—no installer or manufacturer ties.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Independent Roof Advice Florida Owners Trust',
    description: 'We sell no materials, install no roofs, and represent no contractors—only your building envelope. You get RRC/RRO-led evaluations, clear reports, and oversight aligned with FBC and hurricane exposure.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Schedule a Consultation',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Roof Consulting Services'
  },
  projects: {
    heading: 'Representative Engagements Across Florida'
  }
}
export const servicesPage = {
  seo: {
    title: 'Florida Roof Consulting Services',
    description: 'Florida roof consulting: inspections, moisture surveys, specifications, and QA observation for commercial, HOA, and complex residential assets.',
    ogImage: `${static_assets}/images/services/default.jpg`,
    canonical: siteUrl + 'services',
  }
}
export const projectsPage = {
  seo: {
    title: 'Florida Roof Consulting Case Studies',
    description: 'Florida consulting case studies: evaluations, retrofits, storm reviews, and observation work for condos, retail, and institutional roofs.',
    ogImage: `${static_assets}/images/projects/default.jpg`,
    canonical: siteUrl + 'projects',
  },
}
export const aboutPage = {
  seo: {
    title: 'About Us',
    description: 'Meet our Florida roof consultants: IIBEC-aligned practice focused on objective evaluations, FBC-aware details, and no contractor conflicts.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Total Care Roofing is an independent roofing consulting practice serving Florida property owners and managers. Our guidance is shaped only by building science, codes, and your risk—not by material rebates or installer incentives.'
}
export const contactPage = {
  seo: {
    title: 'Contact Us',
    description: 'Contact our Florida roof consultants for scope questions, storm documentation, or peer review—education-first, no sales pitch.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Start a Conversation',
    messagePlaceholder: 'Share the property type, roof age, leak or storm details, and what decision you need (repair scope, bid review, observation, etc.).'
  }
}
export const blogPage = {
  seo: {
    title: 'Roofing Tips & Insights Florida',
    description: 'Florida roof asset notes: inspections, NOAs, infrared basics, and how independent consultants support HOAs and facility teams.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}
export const serviceAreaPage = {
  seo: {
    title: 'Florida Roof Consulting Coverage',
    description: 'Roof consulting across Florida metros: hurricane-ready assemblies, moisture mapping, and bid-leveling support without installer bias.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}
/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Objective Experts, Your Roof First',
  description: 'We are not tied to any manufacturer or roofing contractor, so every memo and drawing reflects your risk profile. Consultants stay beside you from first walkthrough through final observation and closeout documentation.',
  keyPoints: [
    {
      title: 'Conflict-Free Guidance',
      desc: 'No product quotas or subcontractor relationships—recommendations follow test evidence, FBC requirements, and your capital plan.'
    },
    {
      title: 'RRC, RRO & IIBEC Depth',
      desc: 'Registered Roof Consultants and Registered Roof Observers lead field work with IIBEC-aligned protocols for membranes, metal, tile, and steep-slope assemblies.'
    },
    {
      title: 'End-to-End Oversight',
      desc: 'We carry findings into specifications, bid comparisons, submittal review, and construction observation so installation matches the agreed design.'
    }
  ],
  image1_url: `${static_assets}/images/services/inspection.jpg`,
  image2_url: `${static_assets}/images/services/metal.jpg`,
  image3_url: `${static_assets}/images/projects/costal.jpg`,
  image4_url: `${static_assets}/images/services/skylight.jpg`,
}
export const faqs = [
  {
    question: 'What does a roofing consultant actually do?',
    answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
  },
  {
    question: 'Do you sell or install roofs?',
    answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
  },
  {
    question: 'Why hire a consultant instead of going to a roofer directly?',
    answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
  },
  {
    question: 'How often should my roof be inspected?',
    answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
  },
  {
    question: 'Can you help with insurance claims / storm damage?',
    answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
  },
  {
    question: 'What types of properties do you serve?',
    answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
  }
];
export const ourProcessData = {

  heading: 'Our Process',
  description: 'A consulting workflow built for decisions, documentation, and defensible oversight—not sales-driven installs.',
  list: [
    {
      title: 'Initial Consultation',
      description: 'We align on occupancy concerns, prior leaks, capital budgets, and any carrier or legal deadlines before stepping on the roof.',
      icon: FaComments
    },
    {
      title: 'Roof Evaluation',
      description: 'Visual mapping pairs with infrared thermography, impedance probes, and selective test cuts when warranted to trace moisture and membrane continuity.',
      icon: FaSearch
    },
    {
      title: 'Report & Recommendations',
      description: 'You receive photo logs, thermal plots, and prioritized repair or replacement options tied to FBC, manufacturer NOAs, and exposure class.',
      icon: FaFileAlt
    },
    {
      title: 'Specification & Design',
      description: 'When work proceeds, we author or peer-review details, wind uplift notes, and flashing transitions so bids reflect the same performance intent.',
      icon: FaCalendarAlt
    },
    {
      title: 'Contractor Selection',
      description: 'We pre-qualify bidders, level proposals, and flag scope gaps before you execute contracts—still without taking subcontractor fees.',
      icon: FaHammer
    },
    {
      title: 'Construction Observation',
      description: 'Observers document daily compliance with approved submittals, attachment patterns, and dry-in milestones through punch and warranty handoff.',
      icon: FaCheckCircle
    }
  ]
};
export const WhyUSData = [
  {
    title: 'True Independence',
    description: 'We carry no inventory, no crews, and no dealer agreements—only advisory fees—so every call reflects your exposure, not someone else’s margin.',
    icon: FaUserTie
  },
  {
    title: 'Certified Professionals',
    description: 'RRC and RRO credentials anchor our field protocols, while IIBEC membership keeps our team current on building enclosure science and litigation trends.',
    icon: FaTools
  },
  {
    title: 'Forensic Investigation',
    description: 'When failures are unclear, we combine test cuts, infrared thermography, and impedance testing to isolate membrane breaches, wet insulation, and detailing errors.',
    icon: FaSearch
  },
  {
    title: 'Expert Witness Support',
    description: 'Chronologies, chain-of-custody photos, and measured observations translate into clear opinions for mediation or trial without overstating the data.',
    icon: FaBalanceScale
  },
  {
    title: 'Full Project Oversight',
    description: 'From specification edits through final walk-through, our consultants track submittals, mock-ups, and QA hold points until the roof is ready for warranty review.',
    icon: FaClipboardCheck
  },
  {
    title: 'Florida-Specific Expertise',
    description: 'Salt spray, heat cycling, HVHZ exposures, and evolving FBC wind chapters inform how we write details and interpret manufacturer NOAs for each site.',
    icon: FaMapMarkerAlt
  }
];
export const accomplishmentData = [
  { title: 'Roof Evaluations Delivered', number: 100 },
  { title: 'Forensic Reports Filed', number: 250 },
  { title: 'Consultants & Observers', number: 50 },
  { title: 'Properties Advised', number: 500 },
];
/* ------------------------
   NAVITEMS START
------------------------ */
export const navItems = [
  {
    label: 'Home',
    href: '/',
    external: false,
    hasChildrens: false,
  },
  {
    label: 'Services',
    href: '/services',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Roofing Specifications & Design', href: '/services/roof-installation', hasChildrens: false },
      { label: 'Forensic Roof Investigations', href: '/services/roof-repair', hasChildrens: false },
      { label: 'Drone Roof Inspections', href: '/services/gutters', hasChildrens: false },
      { label: 'Roof Evaluations & Inspections', href: '/services/roof-inspection', hasChildrens: false },
      { label: 'Storm Damage Assessment', href: '/services/emergency-roof-repair', hasChildrens: false },
      { label: 'Construction Observation', href: '/services/flat-roofing', hasChildrens: false },
      { label: 'Construction Management', href: '/services/metal-roofing', hasChildrens: false },
      { label: 'Roof Moisture Surveys', href: '/services/shingle-replacement', hasChildrens: false },
      { label: 'Expert Witness & Litigation', href: '/services/skylight-installation', hasChildrens: false },
      { label: 'Roof Asset Management', href: '/services/roof-ventilation', hasChildrens: false }
    ]
  },
  // {
  //   label: 'Projects',
  //   href: '/projects',
  //   external: false,
  //   hasChildrens: true,
  //   children: [
  //     { label: 'Lakeview Villas Roofing', href: '/projects/lakeview-villas-roofing', hasChildrens: false },
  //     { label: 'Downtown Mall Renovation', href: '/projects/downtown-mall-renovation', hasChildrens: false },
  //     { label: 'Coastal Homes Upgrade', href: '/projects/coastal-homes-upgrade', hasChildrens: false },
  //     { label: 'Heritage Museum Restoration', href: '/projects/heritage-museum-restoration', hasChildrens: false },
  //     { label: 'Sunset Condos Retrofit', href: '/projects/sunset-condos-retrofit', hasChildrens: false },
  //     { label: 'Ocean Breeze Resort', href: '/projects/ocean-breeze-resort', hasChildrens: false },
  //     { label: 'Greenwood Retirement Community', href: '/projects/greenwood-retirement-community', hasChildrens: false },
  //     { label: 'Palmetto Business Center', href: '/projects/palmetto-business-center', hasChildrens: false },
  //     { label: 'Coral Gables Luxury Homes', href: '/projects/coral-gables-luxury-homes', hasChildrens: false },
  //     { label: 'Seaside Shopping Plaza', href: '/projects/seaside-shopping-plaza', hasChildrens: false },
  //   ],
  // },
  {
    label: 'Contact Us',
    href: '/contact',
    external: false,
    hasChildrens: false,
  },
  {
    label: 'About Us',
    href: '/about',
    external: false,
    hasChildrens: false,
  },
  {
    label: 'Blogs',
    href: '/blogs',
    external: false,
    hasChildrens: false,
  },
];
/* ------------------------
   NAVITEMS FOOTER 
------------------------ */
export const FooterData = {
  tagline: 'Independent Florida roof consultants translating field data into clear owner decisions—without installer bias.'
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [

  {
    name: "Miami",
    href: "/miami",
    title: "Roof Consulting in Miami, FL",
    description: "Miami, FL roof consulting: HVHZ exposure reviews, infrared surveys, and spec support without installer bias.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Roof Consulting in Orlando, FL",
    description: "Orlando, FL independent roof consultants for HOA decks, retail pads, and storm documentation tied to FBC.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },

  {
    name: "Tampa",
    href: "/tampa",
    title: "Roof Consulting in Tampa, FL",
    description:
      "Tampa, FL roof consulting: moisture mapping, bid leveling, and construction observation for coastal exposures.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Roof Consulting in Jacksonville, FL",
    description:
      "Jacksonville, FL roof asset advisors for mixed portfolios—inspections, forensic reports, and QA oversight.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Roof Consulting in Fort Lauderdale, FL",
    description:
      "Fort Lauderdale, FL consulting for condos and waterfront assets—salt air detailing, NOA checks, and RRO logs.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Roof Consulting in St. Petersburg, FL",
    description:
      "St. Petersburg, FL roof consultants documenting metal and low-slope assemblies for boards and facility teams.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Roof Consulting in Hialeah, FL",
    description: "Hialeah, FL roof evaluations and litigation-ready exhibits from an independent consulting practice.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Tallahassee",
    href: "/tallahassee",
    title: "Roof Consulting in Tallahassee, FL",
    description:
      "Tallahassee, FL roof consulting for civic, education, and office assets—spec peer review and observation notes.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Roof Consulting in Cape Coral, FL",
    description:
      "Cape Coral, FL envelope studies: drone orthomosaics, uplift notes, and moisture verification after Gulf weather.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Roof Consulting in West Palm Beach, FL",
    description:
      "West Palm Beach, FL roof consulting for high-end residences and associations needing defensible capital plans.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Roof Consulting in Naples, FL",
    description: "Naples, FL roof consultants pairing infrared programs with reserve-ready narratives for coastal condos.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Sarasota",
    href: "/sarasota",
    title: "Roof Consulting in Sarasota, FL",
    description: "Sarasota, FL independent roof studies for tile, metal, and flat systems—no distributor relationships.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Roof Consulting in Fort Myers, FL",
    description:
      "Fort Myers, FL storm and leak investigations with moisture tracing plus contractor selection support.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Clearwater",
    href: "/clearwater",
    title: "Roof Consulting in Clearwater, FL",
    description:
      "Clearwater, FL roof consulting for hospitality and retail—nighttime IR, impedance grids, and photo logs.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Roof Consulting in Boca Raton, FL",
    description:
      "Boca Raton, FL roof advisors for HOA towers—mock-up review, attachment audits, and closeout punch lists.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Palm Beach",
    href: "/palm-beach",
    title: "Roof Consulting in Palm Beach, FL",
    description:
      "Palm Beach, FL roof consulting with discreet site protocols, expert reports, and construction observation.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Roof Consulting in Pensacola, FL",
    description:
      "Pensacola, FL wind-driven rain studies, membrane uplift checks, and insurance-ready technical narratives.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Daytona Beach",
    href: "/daytona-beach",
    title: "Roof Consulting in Daytona Beach, FL",
    description:
      "Daytona Beach, FL roof consulting for coastal exposure classes, deck repairs, and hurricane-season readiness.",
    content: 'Our Florida consultants document membrane and metal conditions, calibrate testing to each microclimate, and keep recommendations free of installer or distributor influence.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  }
];
/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
  'roof-installation': {
    label: 'Roofing Specifications & Design',
    title: 'Roofing Specifications & Design Consulting in Florida',
    description: 'Florida-specific drawings and specs that translate wind zones, NOAs, and FBC chapters into contractor-ready packages—without tying you to a single vendor.',
    content: `Independent consultants draft and peer-review roofing specifications so every bidder prices the same membrane transitions, attachment patterns, and quality assurance holds. We align assemblies with Florida exposure categories, HVHZ detailing where required, and manufacturer NOAs so submittals match the risk you disclosed to insurers and boards. Because we neither sell material nor self-perform installs, the narrative stays centered on your asset’s performance targets and lifecycle budget.`,
    image: `${static_assets}/images/services/roofers-installation.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Owner-Aligned Details', description: 'Drawings spell out transitions, overflow scuppers, and metal seam laps so bids reflect identical performance intent.' },
      { title: 'NOA & FBC Traceability', description: 'Each assembly line item references tested systems and Florida wind chapters for AHJ and insurer scrutiny.' },
      { title: 'Vendor-Neutral Language', description: 'We specify performance and testing—not hidden brand carve-outs tied to distributor incentives.' },
      { title: 'Peer Review Safety Net', description: 'Third-party eyes catch missing sheet flows, incompatible adhesives, or skipped mock-up requirements before tender.' },
      { title: 'Bid-Leveling Support', description: 'We translate alternate proposals into the same metrics so boards can compare scope, not slogans.' },
      { title: 'Observation Hooks', description: 'Specs embed RRO checkpoints for heat welding, pull tests, and dry-in photos before membrane cover.' },
      { title: 'Closeout Documentation', description: 'Warranty matrices, as-built redlines, and training memos owners can hand to facility teams.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [ `${static_assets}/images/services/metal.jpg`]
  },
  'roof-repair': {
    label: 'Forensic Roof Investigations',
    title: 'Forensic Roof Investigations Across Florida',
    description: 'Trace chronic leaks, membrane splits, and wind-driven failures using test cuts, infrared, and moisture grids—then receive a neutral cause narrative.',
    content: `Forensic consulting isolates whether distress stems from detailing, material drift, or installation variance. Our RRC-led teams pair visual mapping with infrared thermography, impedance testing, and selective test cuts to document wet insulation and breach paths across Florida’s heat and salt cycles. Findings feed litigation-ready photo logs or board memoranda without steering you toward a preferred repair contractor.`,
    image: `${static_assets}/images/services/roof-repair.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Evidence-Based Findings', description: 'Each anomaly is tied to photos, moisture readings, or lab-ready samples—not guesswork.' },
      { title: 'Cause vs. Symptom Clarity', description: 'We separate membrane defects from condensation, mechanical damage, or deferred maintenance.' },
      { title: 'Carrier-Readable Reports', description: 'Chronologies and captions translate technical jargon into exhibits adjusters can follow.' },
      { title: 'Litigation Discipline', description: 'Chain-of-custody notes and measured observations keep expert opinions defensible.' },
      { title: 'Repair vs. Replace Guidance', description: 'Remaining service life estimates help boards fund capital without overbuying scope.' },
      { title: 'Contractor-Agnostic', description: 'No repair rebates—recommendations follow the failure mechanism we documented.' },
      { title: 'Florida Exposure Context', description: 'Salt, UV, and HVHZ histories inform how we interpret test data on each deck.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [ `${static_assets}/images/services/flat.jpg`]
  },
  'gutters': {
    label: 'Drone Roof Inspections',
    title: 'Drone Roof Inspections for Florida Portfolios',
    description: 'High-resolution orthomosaics and thermal overlays document large roofs safely while keeping consultants off fragile decks during peak heat.',
    content: `RPIC-credentialed pilots capture repeatable flight paths over campuses, condo roofs, and industrial lines without leaning ladders on membrane edges. Imagery integrates with consultant QA notes so attorneys, insurers, and facility teams see the same geometry we reference in written opinions. Drones augment—not replace—close-up RRO work, but they accelerate baseline documentation ahead of hurricane season or litigation freezes.`,
    image: `${static_assets}/images/services/gutters.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Safer Baseline Surveys', description: 'Reduce unnecessary foot traffic on aged PVC or TPO while still capturing seam continuity.' },
      { title: 'Repeatable Flight Logs', description: 'Geotagged runs let you compare before/after storms or contractor mobilizations.' },
      { title: 'Thermal Optioning', description: 'Radiometric overlays highlight wet insulation patterns across wide fields fast.' },
      { title: 'Board-Ready Visuals', description: 'Still frames and short clips communicate risk to directors without jargon overload.' },
      { title: 'Coordination with Ground Truths', description: 'Drone data feeds the same report as core cuts and impedance grids for one narrative.' },
      { title: 'FAA & Privacy Compliance', description: 'Flight plans respect airspace, tenant privacy, and HOA notification rules.' },
      { title: 'Faster Mobilization', description: 'Ideal for large retail portfolios that need rapid statewide documentation windows.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/replacement.jpg`, `${static_assets}/images/services/skylight.jpg`]
  },
  'roof-inspection': {
    label: 'Roof Evaluations & Inspections',
    title: 'Roof Evaluations & Inspections for Florida Assets',
    description: 'Scheduled walk-throughs with photo logs, deficiency rankings, and budget ranges so owners can plan reserves without contractor sales pressure.',
    content: `Registered Roof Observers document membrane wear, metal fastener back-out, tile clip corrosion, and drainage choke points using IIBEC-aligned checklists. Each visit ends with a prioritized memo referencing Florida Building Code exposure assumptions and manufacturer NOA limits so facility teams know what is cosmetic versus structural. Because we do not install repairs, the punch list reflects observed risk—not a hidden upsell.`,
    image: `${static_assets}/images/services/inspection.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Reserve-Grade Data', description: 'Quantified deficiencies help engineers plug accurate figures into 30-year funding models.' },
      { title: 'Storm Season Baseline', description: 'Pre-hurricane imagery proves pre-existing condition if carriers dispute causation.' },
      { title: 'Vendor-Free Priorities', description: 'Rankings follow observed distress, not a contractor’s install calendar.' },
      { title: 'Board-Readable Summaries', description: 'Executive abstracts translate technical findings for directors in minutes.' },
      { title: 'Attic & Envelope Tie-In', description: 'We flag condensation drivers that masquerade as roof leaks.' },
      { title: 'Due Diligence Ready', description: 'Supports acquisitions, refinancing, or litigation holds with consistent formatting.' },
      { title: 'Credential Transparency', description: 'RRO sign-offs appear on every log so third parties know who stood on the roof.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/inspection.jpg`, `${static_assets}/images/services/roofers-installation.jpg`, `${static_assets}/images/services/roof-repair.jpg`,]
  },
  'emergency-roof-repair': {
    label: 'Storm Damage Assessment',
    title: 'Storm Damage Assessment & Documentation in Florida',
    description: 'After named wind events, consultants capture uplifted membranes, compromised flashings, and interior water tracks for carriers and counsel—without selling tarps.',
    content: `We mobilize observers to bracket storm windows, photograph progressive damage, and pair visual findings with moisture scans before temporary dry-in obscures evidence. Reports separate wind-driven rain from deferred maintenance so boards can negotiate scopes from a technical baseline. Our role stops at advisory documentation; your contractor executes repairs while we continue observation if retained.`,
    image: `${static_assets}/images/services/emergency.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Evidence Before Dry-In', description: 'We document conditions prior to temporary repairs that can erase causation clues.' },
      { title: 'Wind vs. Wear Analysis', description: 'Differentiates new storm breaches from long-standing detailing gaps.' },
      { title: 'Moisture Quantification', description: 'Infrared and impedance grids show how far water traveled in insulation.' },
      { title: 'Carrier-Ready Exhibits', description: 'Timestamped photos, captions, and weather references packaged for adjusters.' },
      { title: 'Board Communication', description: 'Short briefings keep associations aligned while multiple vendors mobilize.' },
      { title: 'Scope Guardrails', description: 'Technical opinions help you reject inflated patch scopes lacking test support.' },
      { title: 'Follow-On Observation', description: 'Optional RRO site visits verify permanent repairs meet spec after the storm.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/emergency.jpg`, `${static_assets}/images/services/roof-repair.jpg`]
  },

  'flat-roofing': {
    label: 'Construction Observation',
    title: 'Construction Observation for Florida Roof Projects',
    description: 'On-site QA logs covering heat-welded seams, cover board attachment, and dry-in milestones so installed work matches the agreed specification.',
    content: `Registered Roof Observers witness critical membrane pulls, flashing terminations, and equipment curbs while comparing field work to approved submittals. Daily reports flag non-conformance before assemblies are buried, reducing costly tear-outs after Florida downpours test the roof. We coordinate with contractors professionally but answer only to the owner’s contract documents—not to a subcontractor bonus.`,
    image: `${static_assets}/images/services/flat.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Submittal Cross-Checks', description: 'Observers verify rolls, adhesives, and fasteners match approved shop drawings on the spot.' },
      { title: 'Welding & Seam QA', description: 'Probe tests and continuous weld inspections logged before ballast or pavers hide work.' },
      { title: 'Flashing Focus', description: 'Parapet corners, scuppers, and expansion joints receive photo-heavy scrutiny common to Florida storms.' },
      { title: 'Safety Culture', description: 'Fall-plan reviews align contractor crews with owner risk tolerance during high-traffic sites.' },
      { title: 'Milestone Sign-Offs', description: 'Dry-in, mid-roof, and final inspections create defensible pay app checkpoints.' },
      { title: 'Punch & Warranty Prep', description: 'Closeout lists tie unresolved items to manufacturer warranty prerequisites.' },
      { title: 'Neutral Dispute Notes', description: 'Technical disagreements get documented factually for change-order discussions.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/flat.jpg`, `${static_assets}/images/services/roof-repair.jpg`]

  },
  'metal-roofing': {
    label: 'Construction Management',
    title: 'Roofing Construction Management Advisory in Florida',
    description: 'We coordinate RFIs, submittal logs, testing agencies, and contractor schedules so owners retain technical control without becoming the installer of record.',
    content: `Construction management consulting keeps Florida re-roofing programs on track when multiple trades, crane windows, and tenant operations overlap. Our consultants chair OAC-style meetings, track mock-up approvals, and align phasing with hurricane season blackouts while remaining independent of any subcontractor payroll. You receive consolidated reporting that ties schedule slips back to enclosure risks—not generic status slides.`,
    image: `${static_assets}/images/services/metal.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Single Technical Thread', description: 'One consultant narrative links design changes, field conditions, and contractor RFIs.' },
      { title: 'Phasing Discipline', description: 'Partial-area dry-ins sequenced around Florida weather windows and occupancy limits.' },
      { title: 'Testing Orchestration', description: 'Flood tests, uplift coupons, and adhesion pulls scheduled without last-minute surprises.' },
      { title: 'Budget Guardrails', description: 'Change directives evaluated against spec intent before owners approve cost.' },
      { title: 'Stakeholder Translation', description: 'We convert contractor jargon into owner decisions boards can vote on.' },
      { title: 'Quality Gatekeeping', description: 'Hold points align with manufacturer inspections for warranty continuity.' },
      { title: 'Closeout Bundles', description: 'Warranty manuals, training videos, and digital photo archives delivered together.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/metal.jpg`, `${static_assets}/images/services/metal2.jpg`]
  },
  'shingle-replacement': {
    label: 'Roof Moisture Surveys',
    title: 'Roof Moisture Surveys Using IR & Impedance in Florida',
    description: 'Nighttime infrared thermography paired with impedance grids pinpoints wet insulation so you replace only what science—not guesswork—requires.',
    content: `Moisture consulting maps latent water trapped beneath reflective membranes or ballast where visual surveys fail. We interpret thermal anomalies against Florida diurnal swings, then confirm suspect areas with impedance probes or core verification plans. Results roll into capital models, litigation exhibits, or contractor directives without our firm selling removal labor.`,
    image: `${static_assets}/images/services/replacement.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Quantified Wet Areas', description: 'Percent-of-deck charts help prioritize tear-off versus localized removal.' },
      { title: 'False-Positive Control', description: 'Confirmatory testing separates trapped moisture from HVAC ghosting or surface water.' },
      { title: 'Nighttime IR Discipline', description: 'Scheduled scans follow ASTM guidance for ambient delta requirements.' },
      { title: 'Core Planning', description: 'We specify where cuts are allowed and how to patch afterward to maintain warranty paths.' },
      { title: 'Reserve Inputs', description: 'Engineers plug survey outputs directly into renewal cash-flow models.' },
      { title: 'Carrier Exhibits', description: 'Thermal PDFs plus probe logs give adjusters traceable evidence.' },
      { title: 'Contractor Briefings', description: 'Clear maps show where demo crews should focus first, reducing change orders.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/replacement.jpg`, `${static_assets}/images/services/replacement2.jpg`, `${static_assets}/images/services/metal2.jpg`]
  },
  'skylight-installation': {
    label: 'Expert Witness & Litigation',
    title: 'Expert Witness & Litigation Support for Florida Roof Disputes',
    description: 'Chronologies, depositions, and measured opinions rooted in RRC practice—without overstating findings beyond the documented record.',
    content: `When roof failures drive mediation or trial, attorneys need consultants who can defend opinions under cross-examination. We organize discovery into timelines, correlate weather data, and explain membrane physics in plain language while citing IIBEC references and Florida code context. Our fee structure remains advisory-only; we do not enter contingent-fee arrangements that could cloud objectivity.`,
    image: `${static_assets}/images/services/skylight.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Daubert-Ready Discipline', description: 'Methodology, credentials, and data limitations disclosed up front.' },
      { title: 'Clear Opinion Boundaries', description: 'We state what we observed, what we inferred, and what remains unknown.' },
      { title: 'Visual Trial Aids', description: 'Annotated photos, overlays, and simple graphics jurors can follow.' },
      { title: 'Rebuttal Support', description: 'Technical responses to opposing experts grounded in the same site evidence.' },
      { title: 'Settlement Intelligence', description: 'Neutral summaries often narrow disputes before trial spend escalates.' },
      { title: 'Florida Code Fluency', description: 'FBC wind chapters and NOA references integrated into written opinions.' },
      { title: 'Ethical Independence', description: 'No financial ties to contractors involved in the underlying project.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/skylight.jpg`, `${static_assets}/images/services/skylight2.jpg`, `${static_assets}/images/services/skylight3.jpg`,]
  },
  'roof-ventilation': {
    label: 'Roof Asset Management',
    title: 'Roof Asset Management Programs for Florida Owners',
    description: 'Annual consulting calendars blend inspections, moisture spot checks, and budget forecasting so envelopes stay ahead of Florida’s sun-and-storm cycle.',
    content: `Asset management consulting treats each roof as a portfolio line item with defined KPIs—leak response times, warranty expirations, and capital triggers tied to infrared trends. We coordinate third-party contractors only when the plan calls for intervention, while our team maintains the technical ledger. Independence means the program never quietly favors a single roofer’s maintenance ticket book.`,
    image: `${static_assets}/images/services/ventilation.jpg`,
    typeOfSolutions: {
      headings: 'Consulting scopes we deliver',
      types: [
        'Visual & measured roof surveys',
        'Infrared thermography programs',
        'Impedance & capacitance moisture testing',
        'Specification drafting & peer review',
        'Bid leveling & submittal checks',
        'Construction observation (RRO)',
        'Hurricane & storm documentation',
        'FBC assembly & exposure reviews',
        'Manufacturer NOA validation',
        'Asset lifecycle budgeting'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Predictable Spend Curves', description: 'Multi-year forecasts pair inspection data with realistic unit costs.' },
      { title: 'Warranty Tracking', description: 'Manufacturer NOA expirations and maintenance clauses logged centrally.' },
      { title: 'Storm Playbooks', description: 'Pre- and post-event checklists align staff actions with consultant sign-off points.' },
      { title: 'Vendor Rotation Strategy', description: 'Independent bid cycles refresh pricing without single-source drift.' },
      { title: 'Data Continuity', description: 'Digital twins of reports let new board members onboard quickly.' },
      { title: 'Risk Heatmaps', description: 'Visual dashboards rank buildings by leakage history and moisture trends.' },
      { title: 'Credential Stewardship', description: 'RRO visits scheduled so observation hours meet insurer or lender covenants.' },
    ],
    faqs: [
      {
        question: 'What does a roofing consultant actually do?',
        answer: 'We evaluate existing or planned roof systems, document conditions with photos and testing, and translate findings into reports, details, and observation checkpoints. Our consultants advise owners and counsel—not crews swinging hammers.'
      },
      {
        question: 'Do you sell or install roofs?',
        answer: 'No. Selling or installing would compromise the independence you hire us for. Staying out of the supply chain keeps recommendations aligned with building science, insurance needs, and Florida code—not a material rebate.'
      },
      {
        question: 'Why hire a consultant instead of going to a roofer directly?',
        answer: 'Roofers quote what they install; we define the problem and the performance criteria first. That prevents scope gaps, helps compare apples-to-apples bids, and gives boards defensible records for reserves and litigation.'
      },
      {
        question: 'How often should my roof be inspected?',
        answer: 'Most Florida commercial portfolios benefit from annual walk-throughs plus post-storm checks after named wind events. Condos with aging membranes often add infrared or impedance surveys on a two- to five-year cycle depending on exposure.'
      },
      {
        question: 'Can you help with insurance claims / storm damage?',
        answer: 'Yes. We document wind and water pathways, quantify wet insulation, and summarize findings in carrier-friendly language. We do not act as public adjusters, but we supply technical exhibits you can pair with your adjuster or legal team.'
      },
      {
        question: 'What types of properties do you serve?',
        answer: 'Retail pads, office parks, condo associations, hospitality, schools, and homeowners with complex envelopes all use our practice. If the asset needs defensible decisions under Florida sun, salt, and hurricane loads, we can structure the study.'
      }
    ],
    images: [`${static_assets}/images/services/ventilation.jpg`, `${static_assets}/images/services/flat.jpg`]

  },
}
/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
  'lakeview-villas-roofing': {
    label: 'Lakeview Villas Roofing',
    title: 'Lakeview Villas Reserve Study Support',
    description: 'Independent evaluations for a Miami luxury association—tile, metal transitions, and attic moisture checks ahead of a phased capital plan.',
    image: `${static_assets}/images/projects/lake-view.jpg`,
    location: 'Lakeview Villas, Miami, FL',
    duration: 'Completed in week',
    materials: [
      'Condition survey photo log',
      'Core sampling plan (tile over underlayment)',
      'Infrared thermography summary',
      'HVHZ exposure class memo',
      'Reserve table inputs',
      'Contractor RFI responses (technical review)',
      'Flashing detail redlines',
      'Attic ventilation assessment',
      'Manufacturer NOA cross-check',
      'Board presentation deck'
    ],
    content: `
        The association needed a defensible reserve number before interviewing installers for a multi-building tile estate overlooking Biscayne Bay.
        Our RRO-led team mapped cracking, clip corrosion, and underlayment bleed-through, then paired visual grades with targeted infrared runs after a calm weather window.
        Deliverables included prioritized repair zones, mock-up requirements, and observation milestones—without steering the board toward any single bidder.`,
  },
  'downtown-mall-renovation': {
    label: 'Downtown Mall Renovation',
    title: 'Downtown Mall Membrane Replacement Advisory',
    description: 'Specification peer review, bid leveling, and night-shift observation for a high-traffic Miami retail deck over occupied space.',
    image: `${static_assets}/images/projects/mall.jpg`,
    location: 'Downtown Miami, FL',
    dateCompleted: 'April 20, 2025',
    duration: '2 weeks',
    materials: [
      'Division 07 spec redlines',
      'Tapered insulation shop drawing review',
      'Drain capacity calculations (consultant check)',
      'Submittal compliance matrix',
      'Heat-weld observation logs',
      'Flood test witness checklist'
    ],
    content: `
      Ownership wanted an apples-to-apples TPO replacement while tenants stayed open beneath a sensitive electronics line.
      We leveled three proposals against the same wind uplift and warranty tiers, then stationed observers during adhesive-set windows to verify seam continuity.
      The two-week intensive covered nightly QA memos so the GC could correct laps before insulation boards covered the field.`,
  },
  'coastal-homes-upgrade': {
    label: 'Coastal Homes Upgrade',
    title: 'Coastal Estate Forensic Investigation',
    description: 'Salt-fog exposure analysis for Naples residences—metal seam leaks traced to detailing, not panel alloy selection.',
    image: `${static_assets}/images/projects/costal.jpg`,
    location: 'Naples, FL',
    dateCompleted: 'March 12, 2025',
    duration: '10 days',
    materials: [
      'Moisture probe grid spreadsheets',
      'Test cut photo series',
      'Clip torque sampling plan',
      'Underlayment continuity sketch',
      'Metallurgy lab coordination',
      'Expert summary letter'
    ],
    content: `Homeowners disputed whether standing seam panels failed or whether flashings drove saltwater intrusion during easterly winds.
      Consultants removed selective panels, documented gasket compression, and correlated water paths with FBC high-velocity maps.
      The ten-day investigation ended with repair scopes tied to specific transitions—no blanket re-roof directive.`,
  },
  'heritage-museum-restoration': {
    label: 'Heritage Museum Restoration',
    title: 'Heritage Museum Preservation Consulting',
    description: 'Historic clay tile peer review with modern underlayment breathability modeling for a landmark Orlando cultural asset.',
    image: `${static_assets}/images/projects/measueam.jpg`,
    location: 'Orlando, FL',
    dateCompleted: 'May 18, 2025',
    duration: '12 days',
    materials: [
      'Historic detail measured drawings',
      'Vapor drive analysis memo',
      'Tile salvage inventory',
      'Copper flashing mock-up review',
      'Underlayment permeance comparison',
      'AHJ preservation packet'
    ],
    content: `
      Curators required historically faithful clay while insurers demanded secondary drainage compliant with current FBC interpretations.
      We mediated between preservation architects and waterproofing reps, specifying breathable underlayments and stainless fastener schedules that met both agendas.
      Twelve days of submittal workshops avoided a mid-project stop order when the AHJ questioned clip spacing at the dome spring line.`,

  },
  'sunset-condos-retrofit': {
    label: 'Sunset Condos Retrofit',
    title: 'Sunset Condos Cool-Roof Retrofit Oversight',
    description: 'Fort Lauderdale board support—cool-roof coating vs. overlay analysis plus construction observation for occupied balconies.',
    image: `${static_assets}/images/projects/condos.jpg`,
    location: 'Fort Lauderdale, FL',
    dateCompleted: 'June 3, 2025',
    duration: '14 days',
    materials: [
      'Energy savings pro forma (consultant)',
      'Coating mil-thickness audit plan',
      'Railing tie-in detail review',
      'Owner safety bulletin drafts',
      'Punch list with warranty triggers',
      'Infrared recheck schedule'
    ],
    content: `
      Directors debated coating restoration versus full overlay given limited reserves and tenant noise concerns.
      We modeled reflectance gains, warranty eligibility, and phased balcony access, then observed contractor prep to confirm dew-point windows matched manufacturer data sheets.
      Fourteen observation days produced signed daily logs the association could archive for future insurance renewals.
    `
  
  },
  'ocean-breeze-resort': {
    label: 'Ocean Breeze Resort',
    title: 'Ocean Breeze Resort Storm Documentation',
    description: 'Post-hurricane Key West documentation separating wind uplift from deferred maintenance for a hospitality client and counsel.',
    image: `${static_assets}/images/projects/ocean-breeze.jpg`,
    location: 'Key West, FL',
    dateCompleted: 'July 8, 2025',
    duration: '3 weeks',
    materials: [
      'Drone orthomosaic (pre / post)',
      'Wind field data appendix',
      'Moisture map overlays',
      'Deposition-ready photo binders',
      'Contractor repair observation memos',
      'Carrier technical narrative'
    ],
    content: `
      The resort needed neutral evidence before carriers compared their metal roof claim to prior maintenance gaps.
      Consultants synchronized drone runs with handheld seam probes and documented each room leak path within 72 hours of temporary dry-in.
      Three weeks of follow-on observation verified that replacement panels matched approved NOA uplift pressures for the exposure category.
    `
 
  },
  'greenwood-retirement-community': {
    label: 'Greenwood Retirement Community',
    title: 'Greenwood Campus Phased Evaluation',
    description: 'Multi-building Florida retirement campus—synchronized inspections so clinical operations continued without roofing sales teams onsite.',
    image: `${static_assets}/images/projects/green-wood.jpg`,
    location: 'Greenwood, FL',
    dateCompleted: 'August 5, 2025',
    duration: '2 weeks',
    materials: [
      'Building-by-building risk matrix',
      'Infrared route maps (night)',
      'Skylight curb moisture checks',
      'Capital sequencing memo',
      'Contractor interview scorecards',
      'Owner training outline'
    ],
    content: `
      Facility leadership required a single consultant narrative across independent living, skilled nursing, and commons roofs with mixed shingle and low-slope systems.
      We sequenced lifts and interior probes around patient quiet hours, then summarized findings in non-technical briefings for trustees.
      Two weeks of field work fed a five-year maintenance calendar without recommending a proprietary installer network.
    `
  },
  'palmetto-business-center': {
    label: 'Palmetto Business Center',
    title: 'Palmetto Business Center Energy & Envelope Study',
    description: 'TPO insulation stack-up modeling for a Palmetto office park seeking lower HVAC demand under Florida peak tariffs.',
    image: `${static_assets}/images/projects/buildings.jpg`,
    location: 'Palmetto, FL',
    dateCompleted: 'September 10, 2025',
    duration: '3 weeks',
    materials: [
      'R-value / dew point calculations',
      'HVAC interaction memo',
      'Reflectance testing plan',
      'Drainage capacity peer review',
      'Bid alternates matrix',
      'Commissioning observation checklist'
    ],
    content: `
      Ownership questioned whether added insulation would pay back under current utility riders while still meeting FM Global hail recommendations.
      We modeled three approved assemblies, validated contractor pricing assumptions, and observed the winning bidder’s first insulation lift for thickness compliance.
      Three weeks of advisory work closed with updated as-built R-values recorded for the county energy compliance file.
    `
  },
  'coral-gables-luxury-homes': {
    label: 'Coral Gables Luxury Homes',
    title: 'Coral Gables Estate Specification Peer Review',
    description: 'High-end tile and concealed gutter details reviewed for wind-driven rain resistance before a private owner released construction funds.',
    image: `${static_assets}/images/projects/default.jpg`,
    location: 'Coral Gables, FL',
    dateCompleted: 'October 2, 2025',
    duration: '4 weeks',
    materials: [
      'Hidden gutter hydraulic check',
      'Tile uplift calculation review',
      'Copper soldering mock-up sign-off',
      'Lightning protection interface memo',
      'Landscape irrigation conflict notes',
      'Weekly owner advisories'
    ],
    content: `
      The owner’s architect specified imported clay barrels with integrated concealed gutters that had never been built together in a South Florida HVHZ context.
      Our consultants stress-tested shop drawings against FBC wind-driven rain language and documented required fastener upgrades before steel arrived onsite.
      Four weeks of peer review cycles prevented a costly tear-back when the gutter slope would have ponded behind a decorative cornice.
    `
  },
  'seaside-shopping-plaza': {
    label: 'Seaside Shopping Plaza',
    title: 'Seaside Plaza Drainage & Bid Defense',
    description: 'Coastal retail plaza in Seaside—consultants leveled bids after engineers found undersized scuppers in legacy drawings.',
    image: `${static_assets}/images/projects/shopping.jpg`,
    location: 'Seaside, FL',
    dateCompleted: 'November 14, 2025',
    duration: '3 weeks',
    materials: [
      'Hydraulic model inputs (consultant QA)',
      'Scupper upsizing detail set',
      'Bidder interview scripts',
      'Liquidated damages review memo',
      'Construction phasing advisory',
      'Post-storm IR verification plan'
    ],
    content: `
      Management discovered original scuppers could not pass revised FBC rainfall intensities once a new anchor tenant added roof equipment loads.
      We directed hydraulic recalcs, issued revised sheet notes, and moderated bidder interviews so each team explained how they would keep stores dry during phased work.
      Three weeks of advisory support ended with a contract award backed by defensible drainage math instead of lowest lump sum alone.
    `
  },
}
export const projectsImageGallery = [
  `${static_assets}/images/projects/costal.jpg`,
  `${static_assets}/images/projects/buildings.jpg`,
  `${static_assets}/images/projects/condos.jpg`,
  `${static_assets}/images/projects/mall.jpg`,
  `${static_assets}/images/projects/luxry.jpg`,
  `${static_assets}/images/projects/lake-view.jpg`,
  `${static_assets}/images/projects/ocean-breeze.jpg`,
  `${static_assets}/images/projects/measueam.jpg`,
  `${static_assets}/images/services/metal.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
  {
    name: "Olivia Keith",
    role: "Homeowner | Florida",
    feedback: "Their consultant explained infrared results in plain language and never pushed a roofer referral—exactly the independence we needed for a complex tile home.",
  },
  {
    name: "Sarah Smith",
    role: "Property Manager",
    feedback: "Bid-leveling memos saved our portfolio team weeks of spreadsheet chaos; every vendor was scored against the same spec criteria.",
  },
  {
    name: "David Brown",
    role: "Architect  | Florida",
    feedback: "Peer review comments on our sheet set were precise—FBC wind notes, NOA callouts, and flashing fixes we could issue for permit quickly.",
  },
  {
    name: "Emily Johnson",
    role: "Business Owner",
    feedback: "After a storm, their documentation package gave our adjuster clear moisture maps instead of guesswork about where wet insulation stopped.",
  },
  {
    name: "Michael Carter",
    role: "Real Estate Developer | Florida",
    feedback: "Construction observation logs were court-ready: dated photos, submittal references, and punch items tied to warranty language.",
  },
  {
    name: "Olivia Wilson",
    role: "Interior Designer",
    feedback: "Skylight and concealed gutter details finally coordinated because the consultant mediated between trades without picking favorites.",
  },
  {
    name: "James Anderson",
    role: "Hotel Manager  | Florida",
    feedback: "Night-shift observation kept our guests safe while the membrane crew worked; daily briefings never felt salesy—just factual QA.",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner  | Florida",
    feedback: "The forensic report separated long-standing flashing issues from new wind damage, which lowered our legal exposure overnight.",
  },
  {
    name: "Robert Lee",
    role: "Construction Contractor | Florida",
    feedback: "Even though we were the installer, their RRO team was fair—flagged real non-conformance without inventing problems to bill extra hours.",
  },
  {
    name: "Isabella Taylor",
    role: "Retail Owner",
    feedback: "Drone orthomosaics plus handheld notes gave our board confidence before hurricane season without sending staff onto a brittle roof.",
  },
  {
    name: "William Harris",
    role: "Commercial Property Owner  | Florida",
    feedback: "Reserve study inputs finally matched what our consultants saw on the roof; lenders accepted the narrative without another third-party redo.",
  },
  {
    name: "Emma Robinson",
    role: "Home Renovator  | Florida",
    feedback: "Moisture survey grids showed exactly which deck sections were wet—no blanket tear-off scare tactics from anyone in the chain.",
  }
];