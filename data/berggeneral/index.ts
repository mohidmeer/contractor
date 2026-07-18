import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch, FaStar, FaFlag, FaCheck, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/berggeneral'
export const siteUrl = 'https://berggeneralcontractors.com/';
export const siteName = 'Berg General Contractors';
export const bussinessType = ["LocalBusiness","HomeAndConstructionBusiness","GeneralContractor"];
export const siteLogo = `${static_assets}/images/logo.png`;
export const googleAnalyticId = 'nil';

export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",
  email: 'support@berggeneralcontractors.com',
  workingHours: 'Monâ€“Sat: 8:00 AM â€“ 6:00 PM'
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
export const enable_estimates = true;
/* ------------------------
    PAGES  
------------------------ */
export const landingPage = {
  seo: {
    title: 'Florida Remodeling & Construction Experts',
    description: 'Berg General Contractors specializes in office remodels, industrial renovations, and full-scale general contracting services across Florida. Trusted quality, professional results.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Building Better Spaces with Berg General Contractors',
    description: 'From office remodels to industrial renovations, we bring craftsmanship, efficiency, and expertise to every project.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Request a Free Consultation',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Contracting Services',
  },
  projects: {
    heading: 'Recent Projects',
  },
}

export const heroBarData = [
  { icon: FaStar, label: '5.0 Client Reviews' },
  { icon: FaFlag, label: '150+ Remodel Projects' },
  { icon: FaCheck, label: 'Free Consultations' },
  { icon: FaShieldAlt, label: 'Licensed GC & Insured' },
  { icon: FaMapMarkerAlt, label: 'Statewide Florida Crews' },
  { icon: FaHome, label: 'Commercial & Industrial' },
];

export const hero2 = {
  slides: [
    {
      tagline: 'Office Remodeling',
      title: 'Workspaces Built for Productivity',
      description: 'From layout updates to full office renovations, we create functional commercial spaces that work harder for your team.',
      backgroundImage: `${static_assets}/images/services/office.jpg`,
    },
    {
      tagline: 'Industrial Renovation',
      title: 'Tough Spaces Done Right',
      description: 'Industrial remodels engineered for durability, safety, and efficiency — delivered with professional project management.',
      backgroundImage: `${static_assets}/images/services/industrial-remodel.jpg`,
    },
    {
      tagline: 'General Contracting',
      title: 'One Team for the Full Build',
      description: 'End-to-end contracting for renovations and new work, coordinated cleanly from planning through final walkthrough.',
      backgroundImage: `${static_assets}/images/services/general-contracting.jpg`,
    },
    {
      tagline: 'Retail & Tenant Work',
      title: 'Spaces That Make the Right Impression',
      description: 'Retail and tenant improvements finished on schedule with sharp detailing and results that support your business.',
      backgroundImage: `${static_assets}/images/projects/retail.jpg`,
    },
  ],
}

export const servicesPage = {
  seo: {
    title: 'Contracting Services',
    description: 'Explore our professional services including office remodeling, industrial renovation, and complete general contracting solutions tailored to your needs.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  }
}

export const projectsPage = {
  seo: {
    title: 'Our Construction & Remodeling Projects',
    description: 'Take a look at our completed office, industrial, and general contracting projects across Florida â€” reliable, modern, and built to last.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Us',
    description: 'Learn more about Berg General Contractors, a trusted Florida-based construction company delivering office remodels, industrial renovations, and general contracting with quality and integrity.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Berg General Contractors is a Florida-based construction and remodeling company specializing in office remodels, industrial renovations, and full-service contracting. Our mission is to provide businesses and property owners with dependable, high-quality results backed by years of expertise and a commitment to client satisfaction.',
}

export const contactPage = {
  seo: {
    title: 'Contact Us',
    description: 'Ready to start your office remodel, industrial renovation, or construction project? Contact Berg General Contractors today for a consultation.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Get In Touch',
    messagePlaceholder: "Tell us about your project goals â€” weâ€™re here to build your vision.",
  }
}

export const blogPage = {
  seo: {
    title: 'Construction Tips & Remodeling Insights',
    description: 'Stay informed with expert advice on office remodels, industrial renovations, construction best practices, and industry trends.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'General Contracting Services Across Florida',
    description: 'Proudly serving businesses and property owners across Florida with professional office remodels, industrial renovations, and general contracting services.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}

/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'General Contracting with Integrity, Precision, and Experience',
  description:
      'Berg General Contractors is your trusted partner for office remodels, industrial renovations, and complete construction services. We deliver reliable results with a focus on craftsmanship, efficiency, and client satisfaction.',
  keyPoints: [
      {
          title: 'Experienced General Contractors',
          desc: 'Our team brings years of expertise in office, industrial, and commercial construction â€” ensuring every project is completed to the highest standards.',
      },
      {
          title: 'Quality Materials & Workmanship',
          desc: 'We use durable, high-grade materials combined with skilled craftsmanship to provide lasting value and professional results.',
      },
      {
          title: 'Efficient & Professional Execution',
          desc: 'From planning to completion, we keep projects on schedule, minimize disruption, and deliver seamless construction experiences.',
      }
  ],
  image1_url: `${static_assets}/images/services/roofing.jpg`,
  image2_url: `${static_assets}/images/projects/office.jpg`,
  image3_url: `${static_assets}/images/services/windows-doors.jpg`,
  image4_url: `${static_assets}/images/projects/retail.jpg`,
}

export const faqs = [
  {
    question: "Do you provide free project estimates?",
    answer: "Yes, we offer free consultations and estimates for office remodels, industrial renovations, and general contracting projects."
  },
  {
    question: "What types of contracting services do you offer?",
    answer: "We handle office remodels, industrial renovations, tenant improvements, concrete restoration, roofing, windows & doors, and complete general contracting services."
  },
  {
    question: "Are your contractors licensed and insured?",
    answer: "Absolutely. Our team is fully licensed, insured, and trained to meet all Florida building codes and safety standards."
  },
  {
    question: "Do you take on both small updates and large-scale projects?",
    answer: "Yes, whether itâ€™s a minor remodel, a full-scale office buildout, or an industrial upgrade, we tailor our services to your needs and budget."
  },
  {
    question: "How long does a typical remodel or renovation take?",
    answer: "Project timelines vary based on scope and complexity. Smaller office remodels may take a few weeks, while larger industrial projects may take several months."
  },
  {
    question: "Do you work on both commercial and residential properties?",
    answer: "Yes, we primarily serve commercial and industrial clients, but we also take on select residential projects when aligned with our expertise."
  }
];

export const ourProcessData = {
  heading: 'Our Process',
  description: 'From consultation to completion, we make construction and remodeling projects smooth, efficient, and stress-free.',
  list: [
    {
      title: "Initial Consultation",
      description: "We discuss your project goals, requirements, and budget in detail.",
      icon: FaComments
    },
    {
      title: "On-Site Assessment",
      description: "Our team visits your property to assess the space, structural details, and project needs.",
      icon: FaSearch
    },
    {
      title: "Custom Proposal",
      description: "We provide a tailored project plan with clear estimates, materials, and timelines.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling & Planning",
      description: "We schedule the project at your convenience and coordinate all trades for minimal disruption.",
      icon: FaCalendarAlt
    },
    {
      title: "Construction & Execution",
      description: "Our experienced crew handles all phases â€” demolition, building, finishing, and quality checks.",
      icon: FaHammer
    },
    {
      title: "Final Inspection & Handover",
      description: "We walk you through the completed project, ensure all standards are met, and hand over a finished space ready for use.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Certified General Contractors",
    description: "Our team is fully licensed and experienced in delivering high-quality office and industrial remodels.",
    icon: FaUserTie
  },
  {
    title: "Proven Craftsmanship",
    description: "We use durable materials and skilled workmanship to ensure every project is built to last.",
    icon: FaTools
  },
  {
    title: "Clear Communication",
    description: "We keep clients updated throughout the project â€” no surprises, just results.",
    icon: FaHandshake
  },
  {
    title: "Transparent Pricing",
    description: "Our estimates are detailed and upfront, with no hidden costs.",
    icon: FaDollarSign
  },
  {
    title: "Client-Focused Approach",
    description: "We tailor our services to your needs, ensuring functionality, style, and satisfaction.",
    icon: FaSmile
  },
  {
    title: "Safety & Compliance",
    description: "We follow strict safety protocols and Florida building codes for every project.",
    icon: FaShieldAlt
  }
];

export const accomplishmentData = [
  { title: "Projects Completed", number: 500 },
  { title: "Commercial & Industrial Clients", number: 300 },
  { title: "Skilled Professionals", number: 40 },
  { title: "Satisfied Clients", number: 700 },
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
      { label: 'Office Remodel', href: '/services/office-remodel', hasChildrens: false },
      { label: 'Industrial Remodel', href: '/services/industrial-remodel', hasChildrens: false },
      { label: 'General Contracting', href: '/services/general-contracting', hasChildrens: false },
      { label: 'Tenant Improvements', href: '/services/tenant-improvements', hasChildrens: false },
      { label: 'Concrete Restoration', href: '/services/concrete-restoration', hasChildrens: false },
      { label: 'Windows & Doors Installation', href: '/services/windows-doors', hasChildrens: false },
      { label: 'Roofing Services', href: '/services/roofing', hasChildrens: false },
      { label: 'Plumbing & Mechanical', href: '/services/plumbing-mechanical', hasChildrens: false },
      { label: 'HVAC Solutions', href: '/services/hvac', hasChildrens: false },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Office Renovation Project', href: '/projects/office-renovation', hasChildrens: false },
      { label: 'Industrial Facility Upgrade', href: '/projects/industrial-upgrade', hasChildrens: false },
      { label: 'Retail Build-Out', href: '/projects/retail-buildout', hasChildrens: false },
      { label: 'Tenant Improvement Project', href: '/projects/tenant-improvement', hasChildrens: false },
      { label: 'Concrete Restoration Project', href: '/projects/concrete-restoration', hasChildrens: false },
    ],
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
  tagline: 'Building Floridaâ€™s future with expert office remodels, industrial renovations, and trusted general contracting services.',
};

/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "General Contracting & Remodeling in Miami, FL",
    description: "Professional office remodels, industrial renovations, and full general contracting services in Miami, FL.",
    content: "Berg General Contractors serves Miami with reliable construction services â€” from office remodels and tenant improvements to large-scale industrial renovations.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Construction & Renovation Services in Orlando, FL",
    description: "Trusted general contracting for offices, retail, and industrial spaces in Orlando, FL.",
    content: "In Orlando, Berg General Contractors delivers high-quality office remodels, retail buildouts, and complete construction services tailored to your business needs.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Contracting & Remodeling Services in Tampa, FL",
    description: "From commercial remodels to industrial renovations â€” Tampa businesses trust Berg General Contractors.",
    content: "We proudly serve Tampa with expert construction, remodeling, and restoration services that ensure efficiency, durability, and modern design.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "General Contractor Services in Jacksonville, FL",
    description: "Reliable contracting solutions for offices, industrial facilities, and retail properties in Jacksonville.",
    content: "Berg General Contractors provides full-service construction in Jacksonville â€” from tenant improvements to complex industrial renovations.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Construction & Remodeling Experts in Fort Lauderdale, FL",
    description: "Commercial remodeling, industrial upgrades, and contracting services in Fort Lauderdale.",
    content: "We deliver professional contracting solutions in Fort Lauderdale, bringing quality, speed, and precision to every project.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Office & Industrial Renovations in St. Petersburg, FL",
    description: "Trusted construction partner for businesses and industries in St. Pete.",
    content: "From office remodels to industrial facility upgrades, Berg General Contractors supports St. Petersburg with dependable construction services.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "General Contracting in Cape Coral, FL",
    description: "Comprehensive contracting services for businesses in Cape Coral.",
    content: "Berg General Contractors provides construction and renovation expertise across Cape Coral, with a focus on office and industrial projects.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Remodeling & Contracting Services in Hialeah, FL",
    description: "Affordable and dependable construction solutions in Hialeah.",
    content: "We help Hialeah businesses upgrade their offices, storefronts, and industrial facilities with expert contracting services.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Gainesville",
    href: "/gainesville",
    title: "Commercial Contracting in Gainesville, FL",
    description: "Full-service contracting and remodeling in Gainesville.",
    content: "Berg General Contractors improves Gainesville offices, retail spaces, and industrial properties with trusted construction solutions.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Contracting & Renovation in Naples, FL",
    description: "High-quality commercial and industrial construction in Naples, FL.",
    content: "Naples businesses rely on Berg General Contractors for upscale remodels, tenant improvements, and efficient contracting services.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "General Contractor in Pensacola, FL",
    description: "Expert construction and remodeling solutions in Pensacola.",
    content: "We deliver detail-focused contracting and renovation services in Pensacola, ensuring durability and modern design.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Construction Services in West Palm Beach, FL",
    description: "Professional office and industrial contracting in West Palm Beach.",
    content: "Berg General Contractors helps businesses in West Palm Beach achieve quality remodels and renovations with expert craftsmanship.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Lakeland",
    href: "/lakeland",
    title: "Commercial Remodeling in Lakeland, FL",
    description: "Trusted general contracting for Lakeland businesses.",
    content: "We support Lakeland with efficient office remodels, tenant improvements, and construction projects designed to last.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Ocala",
    href: "/ocala",
    title: "Contracting & Renovation in Ocala, FL",
    description: "Affordable and reliable construction solutions in Ocala.",
    content: "Berg General Contractors enhances Ocala businesses with practical, efficient, and professional remodeling services.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Bradenton",
    href: "/bradenton",
    title: "Construction & Contracting in Bradenton, FL",
    description: "Expert general contracting services for Bradenton businesses.",
    content: "From remodels to new builds, Berg General Contractors delivers dependable results across Bradenton.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Remodeling & Contracting in Fort Myers, FL",
    description: "Office, retail, and industrial renovation services in Fort Myers.",
    content: "Fort Myers businesses trust Berg General Contractors for modern remodels and efficient project execution.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hollywood",
    href: "/hollywood",
    title: "General Contracting in Hollywood, FL",
    description: "Reliable contracting services for Hollywood businesses.",
    content: "We provide Hollywood with quality contracting, renovations, and remodels for offices and industrial spaces.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Construction & Remodeling in Boca Raton, FL",
    description: "High-end contracting services in Boca Raton.",
    content: "Boca Raton clients choose Berg General Contractors for professional office remodels, retail buildouts, and industrial upgrades.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  }
];
/* ------------------------
   SERVICES & PROJECTS
------------------------ */
export { servicesData } from './services'
export { projectsData, projectsImageGallery } from './projects'

/* ------------------------
   TESTIMONIALS START
------------------------ */
export const testimonialsData = [

  {
    name: "Michael Rodriguez",
    role: "Business Owner | Miami, FL",
    feedback: "Berg General Contractors remodeled our office space and delivered beyond expectations. The team was efficient, professional, and the results speak for themselves."
  },

  {
    name: "Sarah Thompson",
    role: "Property Manager | Tampa, FL",
    feedback: "They handled tenant improvements across multiple units in our building. Always on time, responsive, and delivered top-quality finishes."
  },

  {
    name: "David Lee",
    role: "Operations Manager | Orlando, FL",
    feedback: "We needed a complete upgrade to our industrial facility. Berg General Contractors executed flawlessly with minimal downtime for our operations."
  },

  {
    name: "Jessica Williams",
    role: "Retail Store Owner | Fort Lauderdale, FL",
    feedback: "Our retail storefront was outdated. Their renovation transformed it into a modern, customer-friendly space. Foot traffic has already increased!"
  },

  {
    name: "Robert Martin",
    role: "Hotel Manager | Jacksonville, FL",
    feedback: "They upgraded our common areas and roofing systems with zero disruption to our guests. Professional and efficient from start to finish."
  },

  {
    name: "Emily Carter",
    role: "Homeowner | Naples, FL",
    feedback: "Berg General Contractors renovated our property beautifully. Attention to detail, strong communication, and high-quality craftsmanship throughout."
  },

  {
    name: "Anthony Garcia",
    role: "Real Estate Developer | St. Petersburg, FL",
    feedback: "Theyâ€™ve completed several commercial buildouts for us â€” always on schedule and within budget. A contractor we can trust."
  },

  {
    name: "Sophia Hernandez",
    role: "Restaurant Owner | Boca Raton, FL",
    feedback: "Our restaurant remodel was a success thanks to Berg General Contractors. Sleek design, functional upgrades, and outstanding project management."
  },

  {
    name: "Daniel White",
    role: "Construction Project Manager",
    feedback: "Collaborating with their team on a large-scale tenant improvement project was seamless. Highly skilled and dependable contractors."
  },

  {
    name: "Olivia Brown",
    role: "Commercial Property Owner | West Palm Beach, FL",
    feedback: "They repaired and restored our parking garageâ€™s concrete structure. The project was handled professionally with safety as the top priority."
  },

  {
    name: "Jason Miller",
    role: "Industrial Facility Supervisor | Cape Coral, FL",
    feedback: "They installed new mechanical and HVAC systems in our warehouse. The improvements drastically increased energy efficiency."
  },

  {
    name: "Maria Gonzalez",
    role: "Office Renovator | Fort Myers, FL",
    feedback: "Our office remodel was stress-free and completed on time. The Berg team made the entire process smooth and the results are fantastic."
  }
];



