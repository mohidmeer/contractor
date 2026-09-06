import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch, FaStar, FaFlag, FaCheck, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/costal'
export const siteUrl = 'https://coastalcw.net/';
export const siteName = 'Costal Concrete';
export const siteLogo = `${static_assets}/images/logo_light.png`;
export const googleAnalyticId = 'G-4Z16WS61D0';
export const googleTagManagerId = '';
export const bussinessType = ["LocalBusiness", "ConcreteContractor"]

export const justCall = {
  enabled: true,
  uhash: 'bmFxTlk4TEx2aWF1NWxNU0NhazhQUT09', 
} as const;

export const contactInfo = {
  phone: {
    text: '(561) 652-7674',
    href: 'tel:+15616527674',
    number: '+15616527674',
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@costalcw.net',
  workingHours: 'Mon–Sat: 8:00 AM – 6:00 PM'
};
export const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61579296842520',
  instagram: 'https://www.facebook.com/profile.php?id=61579296842520',
  twitter: 'https://www.facebook.com/profile.php?id=61579296842520',
};
export const licenses = [
  { number: 'CCC1336631', label: 'Concrete' },
  { number: 'CGC1538336', label: 'Concrete Contractor' },
];
/* ------------------------
    PAGES  
------------------------ */
export const landingPage = {
  seo: {
    title: 'Costal Concrete | Multifamily & Commercial Concrete Restoration',
    description: 'South Florida concrete restoration for large multifamily and commercial projects — parking structures, balconies, structural repairs, and more.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Multifamily & Commercial Concrete Restoration',
    description: 'Costal Concrete specializes in large-contract concrete restoration and structural repairs for multifamily and commercial properties across South Florida.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Get a Free Estimate',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Concrete Restoration Services',
  },
  projects: {
    heading: 'Multifamily & Commercial Projects',
  },
}

export const heroBarData = [
  { icon: FaStar, label: '5.0 Client Reviews' },
  { icon: FaFlag, label: '100+ Restoration Projects' },
  { icon: FaCheck, label: 'Free On-Site Estimates' },
  { icon: FaShieldAlt, label: 'Licensed & Insured' },
  { icon: FaMapMarkerAlt, label: 'Serving All of Florida' },
  { icon: FaHome, label: 'Multifamily & Commercial' },
];

export const hero2 = {
  slides: [
    {
      tagline: 'Multifamily Restoration',
      title: 'Large Multifamily Concrete Restoration',
      description: 'Structural repairs, deck restoration, and concrete remediation for condominiums and multifamily communities across South Florida.',
      backgroundImage: `${static_assets}/images/raw/bg_1.jpg`,
    },
    {
      tagline: 'Association Projects',
      title: 'Large-Scope Restoration for Condo Communities',
      description: 'Phased concrete restoration for HOA and condo boards — structural repairs coordinated around occupied buildings with clear timelines and minimal disruption.',
      backgroundImage: `${static_assets}/images/raw/bg_2.jpg`,
    },
    {
      tagline: 'Commercial Contracts',
      title: 'Commercial Concrete Restoration at Scale',
      description: 'Dependable large-contract restoration for builders, associations, and commercial property owners with clear timelines and quality you can count on.',
      backgroundImage: `${static_assets}/images/services/commercial.jpg`,
    },
    {
      tagline: 'Structural Repairs',
      title: 'Spalling, Cracks & Rebar Restoration',
      description: 'Precision remediation for balconies, façades, and structural concrete — built for Florida’s coastal exposure.',
      backgroundImage: `${static_assets}/images/projects/repair.jpg`,
    },
    
  ],
}

export const servicesPage = {
  seo: {
    title: 'Multifamily & Commercial Concrete Restoration Services',
    description: 'Explore our concrete restoration services for multifamily, parking structures, and commercial buildings across South Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  },
}

export const projectsPage = {
  seo: {
    title: 'Concrete Restoration Projects Portfolio',
    description: 'View completed multifamily and commercial concrete restoration projects — structural, durable, and built to last.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Costal Concrete',
    description: 'Learn about our team’s experience delivering multifamily and commercial concrete restoration with professionalism and precision.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Costal Concrete delivers large-scale multifamily and commercial concrete restoration across South Florida. We combine structural repair expertise with efficient project delivery so every contract meets builder, association, and owner expectations.',
}

export const contactPage = {
  seo: {
    title: 'Contact Costal Concrete',
    description: 'Need multifamily or commercial concrete restoration? Reach out to Costal Concrete for expert consultation and reliable service.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Request a Quote',
    messagePlaceholder: "Tell us about your multifamily or commercial concrete restoration project — we’ll get back to you shortly.",
  },
}

export const blogPage = {
  seo: {
    title: 'Concrete Restoration Insights',
    description: 'Read articles on commercial and multifamily concrete restoration, maintenance, and repair best practices.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Concrete Restoration in Your Area',
    description: 'We provide multifamily and commercial concrete restoration across your local area — with expert repair and reliable results.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Concrete Restoration Built for Large Multifamily & Commercial Contracts',
  description:
    'Costal Concrete is your partner for multifamily and commercial concrete restoration across South Florida. From parking structures and balconies to structural repairs, we bring skill and care to every large-scale project.',
  keyPoints: [
    {
      title: 'Multifamily & Commercial Specialists',
      desc: 'Our crews focus on large multifamily and commercial restoration — not small residential pours — with results builders and associations can trust.',
    },
    {
      title: 'Proven Restoration Methods',
      desc: 'We use industry-standard repair materials and methods engineered for Florida’s coastal climate and high-exposure structures.',
    },
    {
      title: 'Reliable Project Delivery',
      desc: 'From assessment to finish, we prioritize clear timelines, coordinated access, and minimal disruption for occupied properties.',
    },
  ],
  image1_url: `${static_assets}/images/p/1.jpeg`,
  image2_url: `${static_assets}/images/p/2.jpeg`,
  image3_url: `${static_assets}/images/p/3.jpeg`,
  image4_url: `${static_assets}/images/p/4.jpeg`,
};

export const faqs = [
  {
    question: "Do you offer free concrete project estimates?",
    answer: "Yes, we provide free consultations and quotes based on your restoration scope, structure type, and project size."
  },
  {
    question: "What concrete services do you provide?",
    answer: "We specialize in multifamily and commercial concrete restoration — including parking garages, balconies, spalling remediation, structural crack repair, waterproofing, and related structural repairs."
  },
  {
    question: "Is your team licensed and insured?",
    answer: "Yes, our crew is fully licensed, insured, and follows all local building codes and safety standards."
  },
  {
    question: "Do you take on large multifamily and commercial contracts?",
    answer: "Yes. Our focus is large multifamily and commercial concrete restoration contracts for builders, associations, and property owners across South Florida."
  },
  {
    question: "How long does a typical restoration project take?",
    answer: "It depends on scope and phasing. Multifamily and commercial restoration schedules are planned around access, occupancy, and structural priorities — we’ll give you a clear timeline with your proposal."
  },
  {
    question: "Who do you typically work with?",
    answer: "We work with builders, condominium associations, property managers, and commercial owners on large concrete restoration and repair projects."
  }
];
export const ourProcessData = {
  heading: 'Our Process',
  description: 'From assessment to completion, our concrete restoration process is structured, efficient, and built for large multifamily and commercial sites.',
  list: [
    {
      title: "Initial Consultation",
      description: "We discuss your restoration goals, structure type, access constraints, and budget to understand the full scope.",
      icon: FaComments
    },
    {
      title: "Site Assessment",
      description: "We inspect the structure, document conditions, and identify repair priorities for a sound restoration plan.",
      icon: FaSearch
    },
    {
      title: "Custom Quote & Plan",
      description: "You’ll receive a clear scope with methods, materials, timeline, and upfront pricing.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling & Prep",
      description: "We schedule the work and coordinate prep, access, and phasing for occupied multifamily or commercial sites.",
      icon: FaCalendarAlt
    },
    {
      title: "Concrete Restoration",
      description: "Our team executes structural repairs, remediation, and restoration with precision and care.",
      icon: FaHammer
    },
    {
      title: "Final Review & Clean-up",
      description: "We review completed work with you, confirm quality, and leave the site clean and safe.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Certified Concrete Specialists",
    description: "Our crew is trained in structural concrete restoration — from spalling and rebar repair to waterproofing and deck systems.",
    icon: FaUserTie
  },
  {
    title: "Durable, Long-Lasting Results",
    description: "We use proven repair materials and methods engineered for Florida’s coastal exposure and high-traffic structures.",
    icon: FaTools
  },
  {
    title: "Clear, Consistent Communication",
    description: "We keep builders, associations, and owners informed throughout the project with timely updates and reliable support.",
    icon: FaHandshake
  },
  {
    title: "Transparent Pricing",
    description: "No surprises. Just honest proposals with options that fit your scope and budget.",
    icon: FaDollarSign
  },
  {
    title: "Large-Contract Focus",
    description: "We tailor each restoration plan to multifamily and commercial structures — not small residential pours.",
    icon: FaSmile
  },
  {
    title: "Safe & Code-Compliant Work",
    description: "We adhere to local codes and strict safety practices on every job site.",
    icon: FaShieldAlt
  }
];

export const accomplishmentData = [
  { title: "Concrete Projects Completed", number: 350 },
  { title: "Multifamily & Commercial Jobs", number: 500 },
  { title: "Experienced Crew Members", number: 25 },
  { title: "Satisfied Clients", number: 700 }
];


/* ------------------------
   NAVITEMS FOOTER 
------------------------ */
export const FooterData = {
  tagline: 'Delivering multifamily and commercial concrete restoration across Florida — structural repairs built for large contracts.',
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "Concrete Restoration in Miami, FL",
    description: "Multifamily and commercial concrete restoration in Miami — structural repairs built for coastal exposure.",
    content: "Costal Concrete supports Miami builders, associations, and commercial owners with large-scale concrete restoration, parking structure repairs, and structural remediation.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Concrete Restoration in Orlando, FL",
    description: "Multifamily and commercial concrete restoration in Orlando. Structural repairs built to last.",
    content: "Orlando clients rely on Costal Concrete for multifamily and commercial concrete restoration — from structural repairs to parking deck remediation.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Concrete Restoration in Tampa, FL",
    description: "Large-contract concrete restoration in Tampa for multifamily and commercial properties.",
    content: "We help Tampa builders and property managers with multifamily and commercial concrete restoration — clear timelines and long-lasting structural results.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Concrete Restoration in Jacksonville, FL",
    description: "Expert multifamily and commercial concrete restoration in Jacksonville.",
    content: "Costal Concrete delivers structural concrete restoration for multifamily and commercial properties in Jacksonville with top-tier materials and workmanship.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Concrete Restoration in Fort Lauderdale, FL",
    description: "Multifamily and commercial concrete restoration in Fort Lauderdale — strong, reliable, and weather-resistant.",
    content: "We provide Fort Lauderdale with multifamily and commercial concrete restoration, balcony and garage repairs, and structural remediation for coastal buildings.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Concrete Restoration in St. Petersburg, FL",
    description: "Multifamily and commercial concrete restoration in St. Pete — from remediation to structural repairs.",
    content: "Costal Concrete serves St. Petersburg with multifamily and commercial concrete restoration, parking structure repairs, and structural remediation.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Concrete Restoration in Cape Coral, FL",
    description: "Cape Coral’s partner for multifamily and commercial concrete restoration.",
    content: "In Cape Coral, we restore multifamily and commercial concrete structures with methods tailored to Florida's coastal conditions.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Concrete Restoration in Hialeah, FL",
    description: "Efficient multifamily and commercial concrete restoration in Hialeah.",
    content: "From parking structure repairs to structural remediation, Costal Concrete brings reliability and value to every Hialeah restoration project.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Gainesville",
    href: "/gainesville",
    title: "Concrete Restoration in Gainesville, FL",
    description: "Multifamily and commercial concrete restoration in Gainesville, FL.",
    content: "Costal Concrete supports Gainesville multifamily and commercial properties with dependable structural concrete restoration.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Concrete Restoration in Naples, FL",
    description: "Coastal concrete restoration in Naples for multifamily and commercial structures.",
    content: "Naples clients count on us for multifamily and commercial concrete restoration designed for coastal exposure and long-term performance.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Concrete Restoration in Pensacola, FL",
    description: "Reliable multifamily and commercial concrete restoration in Pensacola.",
    content: "We deliver structural concrete restoration for multifamily and commercial sites across Pensacola.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Concrete Restoration in West Palm Beach, FL",
    description: "Multifamily and commercial concrete restoration in West Palm Beach — strong, clean, and built for scale.",
    content: "Our team restores parking structures, balconies, and commercial concrete for West Palm Beach builders and associations.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Lakeland",
    href: "/lakeland",
    title: "Concrete Restoration in Lakeland, FL",
    description: "Your local partner for multifamily and commercial concrete restoration in Lakeland.",
    content: "Lakeland property managers and builders trust Costal Concrete for structural concrete restoration and large-contract repairs.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Ocala",
    href: "/ocala",
    title: "Concrete Restoration in Ocala, FL",
    description: "Functional, large-scale concrete restoration services in Ocala, FL.",
    content: "In Ocala, we deliver multifamily and commercial concrete restoration — done right the first time.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Bradenton",
    href: "/bradenton",
    title: "Concrete Restoration in Bradenton, FL",
    description: "Top-rated multifamily and commercial concrete restoration in Bradenton.",
    content: "Costal Concrete upgrades Bradenton multifamily and commercial structures with expert concrete restoration and structural repairs.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Concrete Restoration in Fort Myers, FL",
    description: "Fort Myers concrete restoration for multifamily and commercial contracts.",
    content: "We help Fort Myers builders and associations with large-scale concrete restoration tailored to structure, access, and schedule.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hollywood",
    href: "/hollywood",
    title: "Concrete Restoration in Hollywood, FL",
    description: "Hollywood’s go-to for multifamily and commercial concrete restoration.",
    content: "Hollywood multifamily and commercial properties rely on our expert concrete restoration, parking structure repairs, and structural remediation.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Concrete Restoration in Boca Raton, FL",
    description: "Premium multifamily and commercial concrete restoration in Boca Raton.",
    content: "Boca Raton clients choose us for large-contract concrete restoration with durable structural results and professional project delivery.",
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
    name: "John Davis",
    role: "Condo Association Board | Multifamily",
    feedback: "Costal Concrete restored our parking garage decks and repaired balcony spalling across the community. Professional, structured, and on schedule.",
  },
  {
    name: "Rachel Green",
    role: "Property Manager | Multifamily Portfolio",
    feedback: "They handled structural concrete restoration across several multifamily properties. Reliable, professional, and coordinated around residents every time.",
  },
  {
    name: "Carlos Rivera",
    role: "Commercial Owner | Parking Structure",
    feedback: "Our commercial parking garage was restored with minimal downtime and excellent results. Exactly the large-contract partner we needed.",
  },
  {
    name: "Lisa Turner",
    role: "Structural Engineer",
    feedback: "We’ve collaborated on several multifamily restoration scopes—always impressed by their repair quality, documentation, and site cleanliness.",
  },
  {
    name: "Mark Johnson",
    role: "Hotel Asset Manager",
    feedback: "They restored concrete decks and structural elements around our property. Guests barely noticed the work, and the results speak for themselves.",
  },
  {
    name: "Emily Chen",
    role: "HOA Manager | High-Rise Condo",
    feedback: "From assessment to balcony remediation, they guided our association through a complex restoration. Clear communication the whole way.",
  },
  {
    name: "David Kim",
    role: "Real Estate Developer | Multifamily",
    feedback: "Costal Concrete handled structural concrete restoration for our multifamily assets—accurate, clean, and always to spec.",
  },
  {
    name: "Sophia Allen",
    role: "Commercial Property Manager",
    feedback: "They restored high-traffic concrete areas in our commercial building. Durable finish and excellent coordination with tenants.",
  },
  {
    name: "Nathan Scott",
    role: "Construction Project Manager | Builder",
    feedback: "This team delivered every restoration phase on our South Florida multifamily project. Great quality and communication throughout.",
  },
  {
    name: "Olivia Perez",
    role: "Retail Center Owner",
    feedback: "We needed structural concrete repairs in a high-traffic plaza—they were fast, clean, and restored it like new.",
  },
  {
    name: "Jason Brooks",
    role: "Facilities Director | Warehouse",
    feedback: "Our industrial slab repairs hold up under heavy traffic. Great job from Costal Concrete on a commercial-scale scope.",
  },
  {
    name: "Mia Thompson",
    role: "Association Manager | Parking Garage",
    feedback: "They remediated spalling and restored our garage floors—smooth, sealed, and ready for daily use again.",
  }
];

export const enable_estimates = true;
