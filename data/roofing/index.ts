import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch, FaStar, FaFlag, FaCheck, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/roofing'
export const siteUrl = 'https://totalcareservicesroofing.com/';
export const siteName = 'Total Care Roofing';
export const siteLogo = `${static_assets}/images/logo.svg`;
export const googleAnalyticId = 'G-B98W4J2E5B';
export const googleTagManagerId = '';
export const bussinessType = ["LocalBusiness", "RoofingContractor"]

export const justCall = {
  enabled: false,
  uhash: '',
} as const;

export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926',
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
export const licenses = [
  { number: 'CCC1336268', label: 'Roofing' },
  { number: 'CGC1535671', label: 'General Contractor' },
];
/* ------------------------
    PAGES  
------------------------ */
export const landingPage = {
  seo: {
    title: 'Total Care Roofing | Residential & Commercial Roofing in Florida',
    description: 'Florida roofing for homes and businesses — installation, repair, metal, flat systems, and storm damage, done by a licensed crew.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Expert Roofing Services You Can Trust',
    description: 'From leak repairs to complete roof replacements, Total Care Roofing delivers durable materials, clean job sites, and work built for Florida weather.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Get a Free Estimate',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Roofing Solutions',
  },
  projects: {
    heading: 'Roofs Transformed Across Florida',
  },
}

export const heroBarData = [
  { icon: FaStar, label: '5.0 Client Reviews' },
  { icon: FaFlag, label: '350+ Roofing Projects' },
  { icon: FaCheck, label: 'Free Roof Inspections' },
  { icon: FaShieldAlt, label: 'Licensed & Insured' },
  { icon: FaMapMarkerAlt, label: 'Serving All of Florida' },
  { icon: FaHome, label: 'Residential & Commercial' },
];

export const hero2 = {
  slides: [
    {
      tagline: 'Residential Roofing',
      title: 'Roof Replacement Built for Florida Weather',
      description: 'Full roof installations and replacements for homes across Florida — shingle, tile, and metal systems installed to code.',
      backgroundImage: `${static_assets}/images/services/roofers-installation.jpg`,
    },
    {
      tagline: 'Storm Response',
      title: 'Emergency Roof Repair When Storms Hit',
      description: 'Fast dry-in and storm-damage repair to stop leaks and protect the building until a permanent repair is in place.',
      backgroundImage: `${static_assets}/images/services/emergency.jpg`,
    },
    {
      tagline: 'Commercial Roofing',
      title: 'Commercial & Flat Roofing at Scale',
      description: 'Low-slope and flat roof systems for offices, retail, and multifamily properties — phased so operations can stay open.',
      backgroundImage: `${static_assets}/images/services/flat.jpg`,
    },
    {
      tagline: 'Metal Roofing',
      title: 'Durable Metal Roofs for Coastal Florida',
      description: 'Standing-seam and metal roof systems engineered for wind, heat, and salt air.',
      backgroundImage: `${static_assets}/images/services/metal.jpg`,
    },
  ],
}

export const servicesPage = {
  seo: {
    title: 'Roofing Services in Florida',
    description: 'Explore roof installation, repair, inspections, metal, flat roofing, gutters, and storm response for Florida homes and businesses.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  },
}

export const projectsPage = {
  seo: {
    title: 'Roofing Projects in Florida',
    description: 'View completed residential and commercial roofing projects — installations, restorations, and storm repairs built to last.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Total Care Roofing',
    description: 'Learn about Total Care Roofing and why homeowners and property managers across Florida trust us for roofing done with care.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Total Care Roofing is a Florida roofing company focused on quality craftsmanship, clear communication, and treating every property with genuine care. From home replacements to commercial flat roofs, we install and repair systems built for wind, rain, and heat.',
}

export const contactPage = {
  seo: {
    title: 'Contact Total Care Roofing',
    description: 'Need a roof inspection, repair, or replacement? Contact Total Care Roofing for a free estimate anywhere in Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Request a Quote',
    messagePlaceholder: "Tell us about your roof — leaks, storm damage, or a full replacement — and we’ll get back to you shortly.",
  },
}

export const blogPage = {
  seo: {
    title: 'Roofing Tips & Insights',
    description: 'Read articles on Florida roofing, storm prep, maintenance, and how to get more life out of your roof.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Roofing Services in Your Area',
    description: 'We provide residential and commercial roofing across Florida — installation, repair, and storm response with reliable results.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Roofing with Integrity, Craftsmanship, and Care',
  description:
    'Total Care Roofing is a Florida roofing company providing dependable installations and repairs for homes and businesses. We focus on quality craftsmanship, clear communication, and treating every property with genuine care.',
  keyPoints: [
    {
      title: 'Licensed & Insured',
      desc: 'Florida-licensed Roofing Contractor (CCC1336268) and General Contractor (CGC1535671). You can count on code-compliant, safe, and dependable work.',
    },
    {
      title: 'Premium Materials',
      desc: 'We install shingles, tile, metal, and flat roofing systems selected for long-lasting performance in Florida’s climate.',
    },
    {
      title: 'Clean & Efficient',
      desc: 'Our crew works with precision, stays on schedule, and leaves the property clean after every installation or repair.',
    },
  ],
  image1_url: `${static_assets}/images/services/inspection.jpg`,
  image2_url: `${static_assets}/images/services/metal.jpg`,
  image3_url: `${static_assets}/images/projects/costal.jpg`,
  image4_url: `${static_assets}/images/services/skylight.jpg`,
};

export const faqs = [
  {
    question: "Do you offer free roof inspections?",
    answer: "Yes. We provide free inspections and written estimates for roofing work across Florida."
  },
  {
    question: "What roofing services do you provide?",
    answer: "We install and repair shingle, metal, tile, and flat roofs, and we also handle gutters, skylights, ventilation, inspections, and storm damage."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. We are a Florida-licensed roofing contractor and general contractor, fully insured, and we follow local building codes."
  },
  {
    question: "How long does a typical roofing project take?",
    answer: "Most residential replacements are completed in 1–3 days. Commercial and multifamily scopes are scheduled around access and weather, and you’ll get a clear timeline with the proposal."
  },
  {
    question: "Do you provide emergency roof repair?",
    answer: "Yes. We respond to active leaks and storm openings with dry-in and tarping, then complete a permanent repair."
  },
  {
    question: "Are installations covered by a warranty?",
    answer: "Yes. Our workmanship is warranted, and certified installations can qualify for extended manufacturer coverage."
  }
];
export const ourProcessData = {
  heading: 'Our Process',
  description: 'From the first call to the final walkthrough, our roofing process is clear, efficient, and built around Florida weather and your schedule.',
  list: [
    {
      title: "Initial Consultation",
      description: "We discuss the roof, the problem you’re seeing, access, and budget so the scope is clear from the start.",
      icon: FaComments
    },
    {
      title: "Roof Inspection",
      description: "We inspect the roof and attic, document conditions, and separate urgent repairs from items that can wait.",
      icon: FaSearch
    },
    {
      title: "Custom Quote & Plan",
      description: "You receive a written scope with materials, methods, timeline, and upfront pricing.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling & Prep",
      description: "We schedule the work, pull permits when required, and stage materials so the job can start on time.",
      icon: FaCalendarAlt
    },
    {
      title: "Roofing Installation",
      description: "Our crew completes the repair or replacement with quality materials and daily cleanup.",
      icon: FaHammer
    },
    {
      title: "Final Review & Clean-up",
      description: "We walk the finished roof with you, confirm the details, and leave the property clean.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Licensed Roofing Specialists",
    description: "Our crew is licensed and experienced in shingle, metal, tile, and flat roofing — from repairs to full replacements.",
    icon: FaUserTie
  },
  {
    title: "Built for Florida Weather",
    description: "We use wind-rated materials and details that stand up to rain, heat, and coastal exposure.",
    icon: FaTools
  },
  {
    title: "Clear, Consistent Communication",
    description: "You get a defined scope, schedule updates, and a crew that shows up when we say we will.",
    icon: FaHandshake
  },
  {
    title: "Transparent Pricing",
    description: "No surprises. Honest proposals with options that fit the roof and the budget.",
    icon: FaDollarSign
  },
  {
    title: "Homes and Commercial Properties",
    description: "We roof houses, condos, and commercial buildings, and we plan the work around the people using them.",
    icon: FaSmile
  },
  {
    title: "Safe & Code-Compliant Work",
    description: "Permits, fall protection, and Florida Building Code requirements are part of every job — not an afterthought.",
    icon: FaShieldAlt
  }
];

export const accomplishmentData = [
  { title: "Commercial Projects", number: 100 },
  { title: "Residential Projects", number: 250 },
  { title: "Hardworking Employees", number: 50 },
  { title: "Happy Customers", number: 500 }
];


/* ------------------------
   NAVITEMS FOOTER 
------------------------ */
export const FooterData = {
  tagline: 'Protecting Florida homes and businesses with craftsmanship, care, and roofs built for the coast.',
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "Roofing Services in Miami, FL",
    description: "Residential and commercial roofing in Miami — installation, repair, and storm protection built for coastal weather.",
    content: "Total Care Roofing helps Miami homeowners, associations, and commercial owners with roof replacement, leak repair, and hurricane-ready systems.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Roofing Services in Orlando, FL",
    description: "Trusted roofing in Orlando for shingle, metal, and flat systems, from repairs to full replacements.",
    content: "Orlando clients rely on Total Care Roofing for code-compliant installations, storm repairs, and clear timelines on homes and commercial buildings.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Roofing Services in Tampa, FL",
    description: "Roofing in Tampa for shingle, tile, metal, and low-slope systems on homes and businesses.",
    content: "We help Tampa property owners with replacements, leak repair, and commercial roofing that holds up to Gulf Coast weather.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Roofing Services in Jacksonville, FL",
    description: "Expert roofing in Jacksonville — storm repairs, new installations, and maintenance for every roof type.",
    content: "Total Care Roofing serves Jacksonville with residential and commercial roofing, from wind-damage repair to full system replacement.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Roofing Services in Fort Lauderdale, FL",
    description: "Fort Lauderdale roofing for durable, weather-resistant systems on homes, condos, and commercial buildings.",
    content: "From our home base in Fort Lauderdale, we install and repair roofs built for salt air, heavy rain, and high wind.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Roofing Services in St. Petersburg, FL",
    description: "Premium roofing in St. Petersburg — repairs, installations, and maintenance for Florida homes and businesses.",
    content: "St. Petersburg clients count on Total Care Roofing for shingle, metal, and flat roof work with clean job sites and written scopes.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Roofing Services in Hialeah, FL",
    description: "Reliable roof repair and installation in Hialeah for homes and commercial properties.",
    content: "From leak calls to full replacements, Total Care Roofing brings straightforward pricing and quality materials to every Hialeah project.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tallahassee",
    href: "/tallahassee",
    title: "Roofing Services in Tallahassee, FL",
    description: "Roofing in Tallahassee for repairs, replacements, and maintenance across all common roof types.",
    content: "We serve Tallahassee homeowners and businesses with inspections, storm repair, and full roof replacements scheduled around the weather.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Roofing Services in Cape Coral, FL",
    description: "Cape Coral roofing for homes and businesses, built for coastal wind and rain.",
    content: "In Cape Coral we install and repair roofs with details and materials chosen for salt air and storm exposure.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Roofing Services in West Palm Beach, FL",
    description: "Professional roofing in West Palm Beach — systems built for South Florida’s climate.",
    content: "West Palm Beach homeowners and property managers use Total Care Roofing for replacements, flat roofs, and storm-damage repair.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Roofing Services in Naples, FL",
    description: "Naples roofing for repairs, installations, and hurricane-resistant systems.",
    content: "Naples clients choose us for metal, tile, and shingle roofs designed for coastal exposure and long-term performance.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Sarasota",
    href: "/sarasota",
    title: "Roofing Services in Sarasota, FL",
    description: "Sarasota roofing for shingle, tile, and metal systems on homes and commercial buildings.",
    content: "Total Care Roofing handles Sarasota replacements and repairs with clear proposals and crews that leave the site clean.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Roofing Services in Fort Myers, FL",
    description: "Fort Myers roof replacements, leak repair, and storm-damage restoration.",
    content: "We help Fort Myers homeowners and businesses with roofing scoped to the structure, access, and storm season.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Clearwater",
    href: "/clearwater",
    title: "Roofing Services in Clearwater, FL",
    description: "Clearwater roof repairs and installations with materials rated for Gulf weather.",
    content: "Clearwater properties get the same licensed crew, written scope, and weather-ready details we bring to every Florida roof.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Roofing Services in Boca Raton, FL",
    description: "Boca Raton roofing installations and repairs for homes, condos, and commercial buildings.",
    content: "Boca Raton clients hire Total Care Roofing for durable replacements and careful repairs that respect the property and the neighbors.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Palm Beach",
    href: "/palm-beach",
    title: "Roofing Services in Palm Beach, FL",
    description: "Palm Beach roofing for premium systems built to last on the coast.",
    content: "We install and repair Palm Beach roofs with coastal-grade details, clear communication, and a clean finish.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Roofing Services in Pensacola, FL",
    description: "Pensacola storm-damage repair, roof replacement, and ongoing maintenance.",
    content: "Total Care Roofing supports Pensacola homes and commercial sites with inspections, repairs, and full replacements.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Daytona Beach",
    href: "/daytona-beach",
    title: "Roofing Services in Daytona Beach, FL",
    description: "Daytona Beach roofing with systems chosen for wind, salt air, and heavy rain.",
    content: "Daytona Beach homeowners and businesses rely on us for roof repair and replacement that stands up to Atlantic weather.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  }
];



/* ------------------------
   SERVICES & PROJECTS
------------------------ */
export { servicesData } from './services'
export { projectsData, projectsImageGallery } from './projects'
export { categoriesData } from './categories'

/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
  {
    name: "Olivia Keith",
    role: "Homeowner | Florida",
    feedback: "Total Care Roofing did an outstanding job on my roof. Professional, on time, and the finished work looks excellent.",
  },
  {
    name: "Sarah Smith",
    role: "Property Manager",
    feedback: "They handled our commercial roofing project cleanly and kept tenants informed. I recommend them without hesitation.",
  },
  {
    name: "David Brown",
    role: "Architect | Florida",
    feedback: "Excellent craftsmanship and attention to flashing and details. A strong fit for high-end residential work.",
  },
  {
    name: "Emily Johnson",
    role: "Business Owner",
    feedback: "Quick response and a reliable crew. They stopped our roof leak and finished the permanent repair without drama.",
  },
  {
    name: "Michael Carter",
    role: "Real Estate Developer | Florida",
    feedback: "The roofing scope was completed on schedule with the materials we specified. Easy team to coordinate with.",
  },
  {
    name: "Olivia Wilson",
    role: "Interior Designer",
    feedback: "They coordinated with our design team and delivered a clean finish. The skylight and roof details came out exactly as planned.",
  },
  {
    name: "James Anderson",
    role: "Hotel Manager | Florida",
    feedback: "Our hotel roof renovation was handled professionally from inspection through closeout. Guests were barely disrupted.",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner | Florida",
    feedback: "They replaced our leaking roof with a strong, good-looking system. We finally stopped worrying every time it rains.",
  },
  {
    name: "Robert Lee",
    role: "Construction Contractor | Florida",
    feedback: "Detail-oriented roofers with excellent communication. I bring them onto projects when the roof has to be right.",
  },
  {
    name: "Isabella Taylor",
    role: "Retail Owner",
    feedback: "Their emergency repair kept water out of the store during a heavy storm. Fast, careful, and professional.",
  },
  {
    name: "William Harris",
    role: "Commercial Property Owner | Florida",
    feedback: "From the proposal to the final walkthrough, the team was reliable and transparent. Best roofing company we’ve hired.",
  },
  {
    name: "Emma Robinson",
    role: "Home Renovator | Florida",
    feedback: "Careful work and a tidy site. I’ll hire Total Care Roofing again on the next renovation.",
  }
];

export const enable_estimates = true;
