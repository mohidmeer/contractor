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
export const bussinessType = ["LocalBusiness", "ConcreteContractor"]


export const contactInfo = {
  phone: {
    text: '(561) 213-2221',
    href: 'tel:+15612132221',
    number: '+15612132221'
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
    title: 'Costal Concrete',
    description: 'Reliable concrete services including driveways, patios, sidewalks, and more. We bring durability, precision, and value to every concrete project.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Durable Concrete Solutions by Costal Concrete',
    description: 'We specialize in expert concrete installations tailored to residential and commercial needs.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Get a Free Estimate',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Concrete Services',
  },
  projects: {
    heading: 'Recent Concrete Work',
  },
}

export const heroBarData = [
  { icon: FaStar, label: '5.0 Client Reviews' },
  { icon: FaFlag, label: '100+ Concrete Projects' },
  { icon: FaCheck, label: 'Free On-Site Estimates' },
  { icon: FaShieldAlt, label: 'Licensed & Insured' },
  { icon: FaMapMarkerAlt, label: 'Serving All of Florida' },
  { icon: FaHome, label: 'Residential & Commercial' },
];

export const hero2 = {
  slides: [
    {
      tagline: 'Driveways Built to Last',
      title: 'Strong, Smooth Concrete Driveways',
      description: 'From new pours to full replacements, we deliver durable driveways that handle Florida weather and everyday use.',
      backgroundImage: `${static_assets}/images/services/driveway.jpg`,
    },
    {
      tagline: 'Outdoor Living Spaces',
      title: 'Patios Made for Everyday Enjoyment',
      description: 'Custom concrete patios designed for comfort, style, and long-lasting performance around your home.',
      backgroundImage: `${static_assets}/images/services/patio.jpg`,
    },
    {
      tagline: 'Solid Foundations',
      title: 'Reliable Foundation Concrete Work',
      description: 'Precision foundation pours and repairs that give your project a stable start and lasting structural strength.',
      backgroundImage: `${static_assets}/images/services/foundation.jpg`,
    },
    {
      tagline: 'Commercial Concrete',
      title: 'Professional Results for Every Job Site',
      description: 'Dependable commercial concrete services with clean finishes, clear timelines, and quality you can count on.',
      backgroundImage: `${static_assets}/images/projects/commercial.jpg`,
    },
  ],
}

export const servicesPage = {
  seo: {
    title: 'Concrete Installation & Repair Services',
    description: 'Explore our range of concrete services including stamped concrete, driveways, patios, walkways, and repairs.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  },
}

export const projectsPage = {
  seo: {
    title: 'Concrete Projects Portfolio',
    description: 'View completed concrete jobs — strong, clean, and built to last.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Costal Concrete',
    description: 'Learn about our team’s experience delivering high-quality concrete solutions with professionalism and precision.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Costal Concrete delivers durable, attractive, and long-lasting concrete installations for residential and commercial clients. We combine craftsmanship with efficiency to ensure every project exceeds expectations.',
}

export const contactPage = {
  seo: {
    title: 'Contact Costal Concrete',
    description: 'Need concrete services? Reach out to Costal Concrete for expert consultation and reliable service.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Request a Quote',
    messagePlaceholder: "Tell us about your concrete project — we’ll get back to you shortly.",
  },
}

export const blogPage = {
  seo: {
    title: 'Concrete Tips & Outdoor Ideas',
    description: 'Read helpful articles on concrete maintenance, style ideas, and material recommendations.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Concrete Services in Your Area',
    description: 'We provide concrete services across your local area — with expert installation and reliable results.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Concrete Work Built for Strength, Style, and Longevity',
  description:
    'Costal Concrete is your trusted partner for delivering expertly crafted concrete work. Whether it’s a patio, driveway, or foundation, we bring skill and care to every pour.',
  keyPoints: [
    {
      title: 'Skilled Concrete Professionals',
      desc: 'Our crew brings years of experience in residential and commercial concrete — ensuring clean, precise results.',
    },
    {
      title: 'Durable, High-Quality Materials',
      desc: 'We use top-grade cement and aggregates, reinforced as needed to ensure long-term performance.',
    },
    {
      title: 'Reliable and Tidy Process',
      desc: 'From planning to finish, we prioritize clear timelines, site cleanliness, and minimal disruption.',
    },
  ],
  image1_url: `${static_assets}/images/services/driveway.jpg`,
  image2_url: `${static_assets}/images/services/commercial.jpg`,
  image3_url: `${static_assets}/images/projects/outdoor.jpg`,
  image4_url: `${static_assets}/images/projects/modren_driveway.jpg`,
};

export const faqs = [
  {
    question: "Do you offer free concrete project estimates?",
    answer: "Yes, we provide free consultations and quotes based on your concrete needs and project size."
  },
  {
    question: "What concrete services do you provide?",
    answer: "We handle driveways, patios, walkways, slabs, stamped concrete, repairs, and more."
  },
  {
    question: "Is your team licensed and insured?",
    answer: "Yes, our crew is fully licensed, insured, and follows all local building codes and safety standards."
  },
  {
    question: "Can you take on small concrete jobs?",
    answer: "Absolutely. From small repairs to large-scale installations, we handle projects of all sizes."
  },
  {
    question: "How long does a typical concrete project take?",
    answer: "It depends on the scope, but most residential projects are completed in 1–5 days."
  },
  {
    question: "Do you serve both residential and commercial clients?",
    answer: "Yes, we offer concrete services for homes, offices, commercial buildings, and more."
  }
];
export const ourProcessData = {
  heading: 'Our Process',
  description: 'From planning to finishing, our concrete installation process is smooth, efficient, and built to last.',
  list: [
    {
      title: "Initial Consultation",
      description: "We discuss your project goals, site details, and budget to understand your needs.",
      icon: FaComments
    },
    {
      title: "Site Assessment",
      description: "We inspect the location, take measurements, and assess ground conditions for the best results.",
      icon: FaSearch
    },
    {
      title: "Custom Quote & Plan",
      description: "You’ll receive a clear plan with material specs, timeline, and upfront pricing.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling & Prep",
      description: "We schedule the project and handle necessary prep work like excavation or formwork.",
      icon: FaCalendarAlt
    },
    {
      title: "Concrete Installation",
      description: "Our team pours, levels, and finishes the concrete with precision and care.",
      icon: FaHammer
    },
    {
      title: "Final Review & Clean-up",
      description: "We inspect the work with you, ensure satisfaction, and leave the site clean and safe.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Certified Concrete Specialists",
    description: "Our crew is trained in all aspects of concrete work — from foundations to decorative finishes.",
    icon: FaUserTie
  },
  {
    title: "Durable, Long-Lasting Results",
    description: "We use premium-grade concrete and proven techniques to ensure your surfaces stand the test of time.",
    icon: FaTools
  },
  {
    title: "Clear, Consistent Communication",
    description: "We keep you informed throughout the project with timely updates and reliable support.",
    icon: FaHandshake
  },
  {
    title: "Transparent Pricing",
    description: "No surprises. Just honest quotes with options that fit your needs and budget.",
    icon: FaDollarSign
  },
  {
    title: "Custom Concrete Solutions",
    description: "Whether it’s stamped finishes or functional slabs, we tailor each project to your goals.",
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
  { title: "Residential & Commercial Jobs", number: 500 },
  { title: "Experienced Crew Members", number: 25 },
  { title: "Satisfied Clients", number: 700 }
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
    children: [],
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [],
  },
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
  tagline: 'Delivering durable, beautiful concrete solutions across Florida — from driveways to foundations.',
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "Concrete Services in Miami, FL",
    description: "Professional concrete solutions in Miami. From driveways to patios — durable and stylish.",
    content: "Costal Concrete enhances Miami properties with expert concrete work, decorative finishes, and solid foundations.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Concrete Services in Orlando, FL",
    description: "Top-quality concrete construction in Orlando. Poured to perfection, built to last.",
    content: "Orlando clients rely on Costal Concrete for smooth installations, stamped designs, and reliable concrete foundations.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Concrete Services in Tampa, FL",
    description: "Concrete driveways, patios, and more in Tampa. Affordable and built for Florida weather.",
    content: "We help Tampa homeowners with custom concrete work — clean finishes, fast turnarounds, and long-lasting results.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Concrete Services in Jacksonville, FL",
    description: "Expert concrete services in Jacksonville — for homes, businesses, and more.",
    content: "Costal Concrete delivers durable slabs, walkways, and foundations in Jacksonville with top-tier materials and workmanship.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Concrete Services in Fort Lauderdale, FL",
    description: "Custom concrete finishes in Fort Lauderdale. Sleek, strong, and weather-resistant.",
    content: "We provide Fort Lauderdale with premium concrete patios, stamped walkways, and reliable foundation solutions.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Concrete Services in St. Petersburg, FL",
    description: "Versatile concrete work in St. Pete — from resurfacing to new pours.",
    content: "Costal Concrete serves St. Petersburg with decorative concrete, smooth installations, and repair services.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Concrete Services in Cape Coral, FL",
    description: "Cape Coral’s trusted name for patios, sidewalks, and decorative concrete.",
    content: "In Cape Coral, we build long-lasting driveways, pool decks, and slabs tailored to Florida's coastal conditions.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Concrete Services in Hialeah, FL",
    description: "Affordable and efficient concrete services in Hialeah — functional and neat.",
    content: "From driveway repairs to new slab pours, Costal Concrete brings reliability and value to every Hialeah project.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Gainesville",
    href: "/gainesville",
    title: "Concrete Services in Gainesville, FL",
    description: "Stamped concrete, driveways, and slab work in Gainesville, FL.",
    content: "Costal Concrete improves Gainesville homes and businesses with clean designs and dependable surfaces.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Concrete Services in Naples, FL",
    description: "Elegant concrete work in Naples — stylish finishes and flawless pours.",
    content: "Naples clients count on us for premium concrete patios, coastal-resistant driveways, and unique stamped textures.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Concrete Services in Pensacola, FL",
    description: "Reliable concrete services in Pensacola — for homes and commercial sites.",
    content: "We deliver solid concrete foundations, custom walkways, and affordable slab solutions across Pensacola.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Concrete Services in West Palm Beach, FL",
    description: "Modern concrete options for West Palm Beach — strong, clean, and stylish.",
    content: "Our concrete team builds driveways, patios, and pathways in West Palm Beach with attention to style and durability.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Lakeland",
    href: "/lakeland",
    title: "Concrete Services in Lakeland, FL",
    description: "Your local concrete experts in Lakeland — budget-friendly and dependable.",
    content: "Lakeland homeowners trust Costal Concrete for concrete resurfacing, new installs, and decorative finishes.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Ocala",
    href: "/ocala",
    title: "Concrete Services in Ocala, FL",
    description: "Functional and attractive concrete services in Ocala, FL.",
    content: "In Ocala, we deliver everything from large slab pours to intricate walkway designs — done right the first time.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Bradenton",
    href: "/bradenton",
    title: "Concrete Services in Bradenton, FL",
    description: "Top-rated concrete services in Bradenton — built to last.",
    content: "Costal Concrete upgrades Bradenton spaces with strong structures, modern textures, and expert finishes.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Concrete Services in Fort Myers, FL",
    description: "Fort Myers concrete pros — from residential slabs to decorative pathways.",
    content: "We help Fort Myers clients with custom concrete solutions tailored to your space, style, and schedule.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hollywood",
    href: "/hollywood",
    title: "Concrete Services in Hollywood, FL",
    description: "Hollywood’s go-to for modern concrete work. Sleek, strong, and stylish.",
    content: "Hollywood homes and businesses shine with our expert concrete driveways, stamped patios, and walkways.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Concrete Services in Boca Raton, FL",
    description: "Upscale concrete finishes in Boca Raton — luxury meets function.",
    content: "Boca Raton clients choose us for premium concrete surfaces with elegant textures and long-term strength.",
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
    role: "Homeowner | Driveway",
    feedback: "Costal Concrete replaced our cracked driveway with a stunning stamped finish. Great craftsmanship and attention to detail!",
  },
  {
    name: "Rachel Green",
    role: "Property Manager",
    feedback: "They poured new sidewalks and patio slabs across several properties. Reliable, professional, and on schedule every time.",
  },
  {
    name: "Carlos Rivera",
    role: "Business Owner | Commercial Lot",
    feedback: "Our commercial parking lot was resurfaced flawlessly. Minimal downtime and excellent results.",
  },
  {
    name: "Lisa Turner",
    role: "Landscape Architect",
    feedback: "We’ve collaborated on several stamped concrete patio projects—always impressed by their finish quality and site cleanliness.",
  },
  {
    name: "Mark Johnson",
    role: "Hotel Manager",
    feedback: "They added new retaining walls and concrete walkways around our hotel. Guests noticed the upgrade immediately.",
  },
  {
    name: "Emily Chen",
    role: "Homeowner | Patio",
    feedback: "From planning to pouring, they helped us create a gorgeous outdoor living area. We love entertaining now!",
  },
  {
    name: "David Kim",
    role: "Real Estate Developer",
    feedback: "Costal Concrete handled foundation pours for our new builds—accurate, clean, and always to spec.",
  },
  {
    name: "Sophia Allen",
    role: "Restaurant Owner",
    feedback: "They poured our new concrete flooring during renovations. Easy maintenance and super durable for heavy foot traffic.",
  },
  {
    name: "Nathan Scott",
    role: "Construction Project Manager",
    feedback: "This team nailed every slab pour on our recent development. Great finish quality and communication throughout.",
  },
  {
    name: "Olivia Perez",
    role: "Retail Store Owner",
    feedback: "We needed concrete repairs in a high-traffic area—they were fast, clean, and restored it like new.",
  },
  {
    name: "Jason Brooks",
    role: "Warehouse Operator",
    feedback: "Our new concrete flooring handles forklift traffic without issue. Great job from Costal Concrete.",
  },
  {
    name: "Mia Thompson",
    role: "Home Renovator | Garage",
    feedback: "We had them refinish a cracked garage floor—smooth finish, sealed, and looks brand new!",
  }
];

export const enable_estimates = true;
