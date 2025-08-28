import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
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
    description: 'Take a look at our completed office, industrial, and general contracting projects across Florida — reliable, modern, and built to last.',
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
    messagePlaceholder: "Tell us about your project goals — we’re here to build your vision.",
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
          desc: 'Our team brings years of expertise in office, industrial, and commercial construction — ensuring every project is completed to the highest standards.',
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
    answer: "Yes, whether it’s a minor remodel, a full-scale office buildout, or an industrial upgrade, we tailor our services to your needs and budget."
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
      description: "Our experienced crew handles all phases — demolition, building, finishing, and quality checks.",
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
    description: "We keep clients updated throughout the project — no surprises, just results.",
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
  tagline: 'Building Florida’s future with expert office remodels, industrial renovations, and trusted general contracting services.',
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
    content: "Berg General Contractors serves Miami with reliable construction services — from office remodels and tenant improvements to large-scale industrial renovations.",
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
    description: "From commercial remodels to industrial renovations — Tampa businesses trust Berg General Contractors.",
    content: "We proudly serve Tampa with expert construction, remodeling, and restoration services that ensure efficiency, durability, and modern design.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "General Contractor Services in Jacksonville, FL",
    description: "Reliable contracting solutions for offices, industrial facilities, and retail properties in Jacksonville.",
    content: "Berg General Contractors provides full-service construction in Jacksonville — from tenant improvements to complex industrial renovations.",
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
   SERVICES START
------------------------ */
export const servicesData = {
'office-remodel': {
  label: 'Office Remodel',
  title: 'Professional Office Remodeling Services in Florida',
  description: 'Upgrade your workspace with Berg General Contractors. We specialize in creating modern, efficient, and functional office environments that inspire productivity and reflect your brand.',
  content: `An office remodel is more than a design update — it’s about creating a productive, welcoming, and efficient space for your team and clients. At Berg General Contractors, we deliver end-to-end office remodeling solutions tailored to your company’s needs. From layout redesign and tenant improvements to custom finishes and mechanical upgrades, we manage every detail of the project. Our team ensures minimal disruption to your business operations, while delivering high-quality results that improve functionality, comfort, and aesthetics. Whether it’s a single-office refresh or a full corporate headquarters transformation, we bring precision, professionalism, and care to every project.`,
  image: `${static_assets}/images/services/office.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Full Office Renovations',
      'Space Planning & Layout Redesign',
      'Tenant Improvements',
      'Custom Partitions & Workstations',
      'Lighting & Electrical Upgrades',
      'Flooring & Ceiling Installation',
      'HVAC & Mechanical Integration',
      'Windows & Doors Replacement',
      'Painting & Finishes',
      'Conference Room & Break Area Upgrades'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'End-to-End Project Management',
      description: 'From initial consultation to final inspection, we handle every phase seamlessly.'
    },
    {
      title: 'Workplace Optimization',
      description: 'We design and build spaces that improve workflow, comfort, and employee satisfaction.'
    },
    {
      title: 'Licensed & Insured Experts',
      description: 'Our certified contractors deliver safe, code-compliant, and reliable work.'
    },
    {
      title: 'Minimal Business Disruption',
      description: 'We work around your schedule and operations to reduce downtime during construction.'
    },
    {
      title: 'Transparent Budgeting',
      description: 'Get clear, upfront estimates with no hidden costs or surprises.'
    },
    {
      title: 'Customized Solutions',
      description: 'Every remodel is tailored to match your brand identity and company culture.'
    }
  ],
  faqs: [
    {
      question: "How long does an office remodel usually take?",
      answer: "The timeline depends on the project scope. Smaller remodels may take a few weeks, while full office renovations can take several months."
    },
    {
      question: "Can we keep working during the remodel?",
      answer: "Yes, in most cases we phase the work to minimize disruptions, allowing you to continue business operations."
    },
    {
      question: "Do you help with design and planning?",
      answer: "Absolutely. We provide space planning, design guidance, and layout optimization as part of our services."
    },
    {
      question: "Are permits required for an office remodel?",
      answer: "Yes, depending on the scope. We handle all necessary permits and compliance requirements for you."
    },
    {
      question: "Do you offer custom solutions for specific industries?",
      answer: "Yes, whether you’re in healthcare, retail, finance, or tech, we tailor the remodel to meet industry-specific needs."
    }
  ],
  images: [],
},
'industrial-remodel': {
  label: 'Industrial Remodel',
  title: 'Industrial Remodeling & Facility Upgrades in Florida',
  description: 'Berg General Contractors delivers safe, code-compliant industrial remodels — from production floors and warehouses to labs and logistics facilities.',
  content: `Industrial remodeling demands precision, safety, and strict adherence to regulations. At Berg General Contractors, we modernize warehouses, manufacturing plants, labs, and logistics hubs to improve throughput, safety, and efficiency. Our team coordinates structural changes, MEP upgrades, racking systems, loading docks, clean zones, and specialized buildouts while minimizing downtime. From heavy-duty flooring and impact protection to ventilation, fire safety, and electrical capacity increases, we plan and execute with industrial performance in mind.`,
  image: `${static_assets}/images/services/industrial-remodel.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Warehouse & Production Floor Reconfiguration',
      'Structural Modifications & Mezzanines',
      'Heavy-Duty Flooring & Epoxy Systems',
      'Electrical Service Upgrades & LED Lighting',
      'Compressed Air, Gas Lines & Process Piping',
      'HVAC, Ventilation & Make-Up Air Systems',
      'Fire Suppression & Life Safety Compliance',
      'Dock Levelers, Overhead Doors & Loading Areas',
      'Clean Rooms & Controlled Environments',
      'Racking, Guardrails & Impact Protection'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Industrial-Grade Expertise',
      description: 'We understand production environments, safety protocols, and the demands of continuous operations.'
    },
    {
      title: 'Code & Compliance First',
      description: 'OSHA, NFPA, and local building codes are baked into our planning and execution.'
    },
    {
      title: 'Minimized Downtime',
      description: 'Phased scheduling and clear coordination to keep your operation moving.'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Upgrades designed to support future capacity, equipment, and growth.'
    },
    {
      title: 'Transparent Budget & Schedule',
      description: 'Detailed proposals, critical-path timelines, and proactive communication.'
    },
    {
      title: 'Turnkey Delivery',
      description: 'One team accountable for design coordination, permits, trades, and final sign-off.'
    }
  ],
  faqs: [
    {
      question: "Can you work around live operations?",
      answer: "Yes. We phase work, isolate areas, and schedule off-hours to reduce disruption to active facilities."
    },
    {
      question: "Do you manage permits and inspections?",
      answer: "Absolutely. We coordinate all permitting, inspections, and required documentation with local authorities."
    },
    {
      question: "What industries do you serve?",
      answer: "Manufacturing, warehousing, logistics, food & beverage, labs, and light industrial — among others."
    },
    {
      question: "Can you increase electrical capacity and ventilation?",
      answer: "Yes. We design and implement electrical, mechanical, and ventilation upgrades for heavier loads and safer air quality."
    },
    {
      question: "Do you build clean rooms or controlled areas?",
      answer: "We deliver clean zones and controlled environments with appropriate materials, sealing, and air handling."
    }
  ],
  images: [],
},
'general-contracting': {
  label: 'General Contracting',
  title: 'Comprehensive General Contracting Services in Florida',
  description: 'Berg General Contractors provides complete construction management and general contracting services — from planning and permitting to project delivery.',
  content: `As a full-service general contractor, Berg General Contractors manages every aspect of your construction or renovation project. We coordinate trades, manage schedules, handle permits, and ensure code compliance — all while maintaining clear communication with you. Whether it’s a new commercial build, a tenant improvement, or a large-scale renovation, our goal is to deliver quality construction with efficiency and precision. By acting as your single point of contact, we eliminate stress and streamline the building process, ensuring that projects are completed on time, within budget, and to the highest standards.`,
  image: `${static_assets}/images/services/general-contracting.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Full-Service Construction Management',
      'Design-Build Services',
      'Tenant Improvements & Buildouts',
      'Commercial Renovations',
      'Structural Modifications & Additions',
      'Permit Coordination & Inspections',
      'Scheduling & Subcontractor Management',
      'Site Preparation & Utilities',
      'Quality Control & Safety Oversight',
      'Final Walkthrough & Turnover'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'One Point of Contact',
      description: 'We manage subcontractors, trades, and inspections, so you can focus on your business.'
    },
    {
      title: 'Licensed & Insured',
      description: 'We are fully licensed and insured, protecting your investment at every step.'
    },
    {
      title: 'Transparent Process',
      description: 'From estimating to reporting, we keep you fully informed and in control.'
    },
    {
      title: 'On-Time Delivery',
      description: 'We adhere to strict schedules and minimize downtime with efficient coordination.'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'We optimize materials, labor, and design choices to meet your budget goals.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project is built to meet Florida codes and our own rigorous quality standards.'
    }
  ],
  faqs: [
    {
      question: "What types of projects do you handle as a general contractor?",
      answer: "We manage office remodels, industrial renovations, tenant improvements, retail buildouts, and new commercial construction."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we coordinate all permitting, scheduling, and inspections required by Florida authorities."
    },
    {
      question: "Can you work with my architect or designer?",
      answer: "Absolutely. We can collaborate with your design team or provide full design-build services."
    },
    {
      question: "How do you ensure projects stay on budget?",
      answer: "We provide detailed estimates, track costs, and communicate openly about any changes or savings opportunities."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Berg General Contractors is fully licensed and insured in Florida."
    }
  ],
  images: [],
},
'tenant-improvements': {
  label: 'Tenant Improvements',
  title: 'Tenant Improvement Construction Services in Florida',
  description: 'Berg General Contractors delivers turnkey tenant improvement solutions — from office buildouts to retail spaces — tailored to meet your business needs and lease requirements.',
  content: `Tenant improvements require a careful balance between property owner expectations and tenant business goals. At Berg General Contractors, we specialize in transforming leased spaces into functional, efficient, and brand-aligned environments. Whether it’s reconfiguring office layouts, updating retail interiors, or upgrading building systems, we handle every aspect of the process. Our team manages design coordination, permitting, and construction while ensuring compliance with building codes and lease agreements. With our expertise, tenants move into customized spaces that are ready for immediate productivity and long-term success.`,
  image: `${static_assets}/images/services/tenant-improvements.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Office Buildouts & Layout Reconfiguration',
      'Retail Space Renovations',
      'Conference Rooms & Collaborative Spaces',
      'Lighting, Electrical & Data Upgrades',
      'HVAC & Mechanical Systems',
      'Custom Millwork & Finishes',
      'ADA & Accessibility Compliance',
      'Restroom Renovations',
      'Painting & Flooring Installation',
      'Signage & Brand Integration'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Tailored to Your Business',
      description: 'We design and build improvements that reflect your company’s brand and operational needs.'
    },
    {
      title: 'Code & Lease Compliance',
      description: 'Every project is executed in line with Florida codes and landlord requirements.'
    },
    {
      title: 'Fast Turnarounds',
      description: 'We understand the urgency of tenant improvements and work quickly to meet move-in deadlines.'
    },
    {
      title: 'Cost Transparency',
      description: 'Detailed estimates ensure clarity and avoid budget surprises.'
    },
    {
      title: 'Minimal Disruption',
      description: 'We plan and phase construction to minimize impact on your day-to-day operations.'
    },
    {
      title: 'Single-Source Accountability',
      description: 'From design coordination to construction, you have one trusted team managing it all.'
    }
  ],
  faqs: [
    {
      question: "What types of spaces do you handle for tenant improvements?",
      answer: "We work on offices, retail spaces, restaurants, medical offices, and industrial units."
    },
    {
      question: "Can you complete improvements before lease move-in dates?",
      answer: "Yes, we prioritize fast scheduling to ensure your space is ready before your lease begins."
    },
    {
      question: "Do you coordinate with landlords or property managers?",
      answer: "Absolutely. We work closely with property owners and managers to ensure all requirements are met."
    },
    {
      question: "Do tenant improvements require permits?",
      answer: "Yes, many improvements do. We manage all permitting and inspections on your behalf."
    },
    {
      question: "Can you integrate our branding into the space?",
      answer: "Yes, we incorporate signage, finishes, and layouts to align the space with your brand identity."
    }
  ],
  images: [],
},
'concrete-restoration': {
  label: 'Concrete Restoration',
  title: 'Concrete Restoration & Structural Repair Services in Florida',
  description: 'Berg General Contractors provides expert concrete restoration, repair, and strengthening services to extend the life of your structures and ensure safety and compliance.',
  content: `Concrete structures — from parking garages and industrial floors to commercial buildings and bridges — face wear and deterioration over time. Exposure to weather, water intrusion, heavy loads, and environmental conditions can weaken concrete, compromise reinforcement, and create safety risks. At Berg General Contractors, we specialize in comprehensive concrete restoration services that go beyond surface-level fixes. Our process addresses structural integrity, prevents further damage, and restores functionality while complying with Florida’s strict building codes.

We provide end-to-end concrete solutions, including damage assessment, corrosion control, waterproofing, surface repairs, and structural strengthening. Our experienced team works with property managers, commercial building owners, and industrial operators to deliver long-lasting, cost-effective repairs with minimal disruption. Whether you need spall repair, joint sealing, or full structural rehabilitation, Berg General Contractors ensures durability, safety, and quality craftsmanship in every project.`,
  image: `${static_assets}/images/services/concrete-restoration.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Structural Concrete Repair & Rehabilitation',
      'Parking Garage Restoration',
      'Industrial Flooring Repairs',
      'Column & Beam Strengthening',
      'Crack Injection & Sealing',
      'Spall & Delamination Repair',
      'Corrosion Mitigation & Rebar Protection',
      'Waterproofing & Moisture Control',
      'Protective Coatings & Sealants',
      'Expansion Joint Replacement & Sealing'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Structural Integrity Restored',
      description: 'Our solutions strengthen and stabilize concrete structures for long-term performance.'
    },
    {
      title: 'Florida Code Compliance',
      description: 'We ensure all repairs meet state safety requirements, including condo and building recertifications.'
    },
    {
      title: 'Durability & Protection',
      description: 'Protective coatings, corrosion inhibitors, and waterproofing extend the service life of concrete.'
    },
    {
      title: 'Minimal Operational Downtime',
      description: 'We phase work strategically to reduce impact on tenants, residents, or business operations.'
    },
    {
      title: 'Experienced Restoration Experts',
      description: 'Our team has deep expertise in concrete repair techniques and structural rehabilitation.'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'We provide targeted restoration plans that save money compared to full replacement.'
    }
  ],
  faqs: [
    {
      question: "What types of properties do you provide concrete restoration for?",
      answer: "We serve commercial buildings, industrial facilities, parking garages, bridges, condominiums, and more."
    },
    {
      question: "Can you repair concrete that shows cracks or spalling?",
      answer: "Yes. We provide crack injection, spall repair, rebar protection, and surface finishing to restore strength and appearance."
    },
    {
      question: "Do you offer waterproofing solutions?",
      answer: "Absolutely. We apply waterproof membranes, sealants, and coatings to prevent water intrusion and damage."
    },
    {
      question: "How long does a typical restoration project take?",
      answer: "It varies by size and severity, but smaller repairs can take days while full restorations may take several weeks."
    },
    {
      question: "Are your services certified and insured?",
      answer: "Yes. We are fully licensed, insured, and experienced in meeting Florida’s structural safety regulations."
    }
  ],
  images: [],
},
'windows-doors': {
  label: 'Windows & Doors Installation',
  title: 'Commercial Windows & Doors Installation Services in Florida',
  description: 'Berg General Contractors provides professional window and door installation for offices, retail stores, and industrial facilities — enhancing safety, efficiency, and curb appeal.',
  content: `Windows and doors are critical to both the functionality and appearance of any property. They impact energy efficiency, security, natural light, and the overall look of your building. At Berg General Contractors, we specialize in high-quality window and door installation for commercial, industrial, and mixed-use properties. From modern storefront glazing systems to secure industrial overhead doors, our installations are designed for performance, durability, and style.

We handle every stage of the process, including removal of old units, precise installation, weatherproofing, and finishing. Our team works with premium suppliers to offer energy-efficient windows, impact-resistant glass, fire-rated doors, and ADA-compliant access systems. Whether you’re upgrading an office for more natural light, renovating a retail space for better curb appeal, or installing heavy-duty industrial doors for safety, we ensure every project meets Florida codes and exceeds expectations.`,
  image: `${static_assets}/images/services/windows-doors.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Commercial Window Installation',
      'Storefront Glass & Glazing Systems',
      'Impact-Resistant & Hurricane-Rated Windows',
      'Office & Retail Entry Doors',
      'Industrial Overhead & Roll-Up Doors',
      'Fire-Rated & Security Doors',
      'Automatic Sliding & ADA-Compliant Doors',
      'Weatherproofing & Sealing',
      'Energy-Efficient Window Replacements',
      'Custom Frames & Finish Carpentry'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Enhanced Security',
      description: 'We install impact-resistant windows and heavy-duty doors to protect your property.'
    },
    {
      title: 'Energy Efficiency',
      description: 'Modern installations improve insulation, reduce energy costs, and enhance comfort.'
    },
    {
      title: 'Curb Appeal',
      description: 'Upgrade your building’s exterior with stylish, brand-aligned windows and doors.'
    },
    {
      title: 'Code-Compliant Installations',
      description: 'All installations meet Florida’s hurricane, fire, and ADA accessibility codes.'
    },
    {
      title: 'Durability & Performance',
      description: 'We source top-grade materials built to withstand Florida’s weather conditions.'
    },
    {
      title: 'Turnkey Service',
      description: 'From removal to final finishing, we handle the entire process seamlessly.'
    }
  ],
  faqs: [
    {
      question: "Do you install impact-resistant windows for hurricane zones?",
      answer: "Yes, we specialize in hurricane-rated and impact-resistant windows that meet Florida building codes."
    },
    {
      question: "Can you replace old windows without major disruption?",
      answer: "Absolutely. We provide efficient replacements with minimal disturbance to tenants or operations."
    },
    {
      question: "Do you install industrial-grade doors?",
      answer: "Yes, we install overhead, roll-up, fire-rated, and heavy-duty doors for industrial facilities."
    },
    {
      question: "Are your doors ADA compliant?",
      answer: "Yes. We install ADA-compliant entryways, including automatic sliding and push-button doors."
    },
    {
      question: "Do you provide warranties on installations?",
      answer: "Yes, all installations come with warranties on both materials and workmanship for peace of mind."
    }
  ],
  images: [],
},
'roofing': {
  label: 'Roofing Services',
  title: 'Commercial & Industrial Roofing Services in Florida',
  description: 'Berg General Contractors provides expert roofing installation, repair, and maintenance services designed to protect your property and ensure long-term durability.',
  content: `Your roof is one of the most important elements of your building’s structure — it protects your assets, ensures energy efficiency, and safeguards the people inside. At Berg General Contractors, we specialize in high-quality roofing services for commercial, industrial, and mixed-use properties across Florida. From new installations and full roof replacements to leak repairs and preventative maintenance, we offer comprehensive roofing solutions built to withstand Florida’s climate.

Our team works with a wide range of roofing systems, including flat roofs, metal, TPO, and tile, ensuring you receive the most effective solution for your property type. With a focus on safety, code compliance, and long-term performance, we deliver roofing projects that provide peace of mind and lasting protection.`,
  image: `${static_assets}/images/services/roofing.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Commercial Roof Installation & Replacement',
      'Flat Roofing Systems (TPO, EPDM, PVC)',
      'Metal Roofing Installation & Repairs',
      'Tile & Shingle Roofing',
      'Roof Coatings & Waterproofing',
      'Storm Damage Repair & Emergency Services',
      'Preventative Roof Maintenance',
      'Leak Detection & Repair',
      'Roof Inspections & Certifications',
      'Energy-Efficient Roofing Solutions'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Full-Service Roofing',
      description: 'From installation to emergency repairs, we handle every aspect of your roofing needs.'
    },
    {
      title: 'Florida Climate Ready',
      description: 'Our roofing systems are built to withstand high winds, storms, and heavy rainfall.'
    },
    {
      title: 'Licensed & Insured Experts',
      description: 'All work is performed by experienced contractors who meet Florida’s roofing standards.'
    },
    {
      title: 'Long-Term Durability',
      description: 'We use high-quality materials and proven methods to maximize roof lifespan.'
    },
    {
      title: 'Energy Efficiency',
      description: 'Modern roofing solutions reduce energy costs and improve building performance.'
    },
    {
      title: 'Peace of Mind',
      description: 'We provide warranties on both materials and workmanship for added security.'
    }
  ],
  faqs: [
    {
      question: "What types of roofs do you install?",
      answer: "We install and service flat, metal, shingle, tile, and TPO roofing systems for commercial and industrial properties."
    },
    {
      question: "Do you handle storm damage repairs?",
      answer: "Yes, we provide emergency repair services and storm damage restoration to protect your property quickly."
    },
    {
      question: "How long does a roof replacement take?",
      answer: "It depends on the size and complexity of the property, but most replacements are completed within days to a few weeks."
    },
    {
      question: "Can you inspect my roof before buying a property?",
      answer: "Absolutely. We provide professional roof inspections and certifications for real estate transactions."
    },
    {
      question: "Do you offer maintenance plans?",
      answer: "Yes, we offer preventative maintenance programs to extend the lifespan of your roof and reduce costly repairs."
    }
  ],
  images: [],
},
'plumbing-mechanical': {
  label: 'Plumbing & Mechanical',
  title: 'Commercial Plumbing & Mechanical Services in Florida',
  description: 'Berg General Contractors delivers professional plumbing and mechanical system installations, upgrades, and repairs for commercial and industrial properties.',
  content: `Every commercial or industrial facility relies on efficient plumbing and mechanical systems to maintain operations. At Berg General Contractors, we provide end-to-end plumbing and mechanical services designed to keep your property functional, compliant, and reliable. From installing new plumbing lines and fixtures to upgrading mechanical systems like pumps, boilers, and compressed air, we deliver solutions tailored to your business needs.

Our team specializes in large-scale plumbing networks, process piping, drainage, and mechanical equipment integration. We ensure that every system meets Florida’s strict building codes and environmental standards while maximizing efficiency and minimizing downtime. Whether you’re renovating an office, upgrading an industrial facility, or constructing a new space, Berg General Contractors ensures your plumbing and mechanical systems are built to last.`,
  image: `${static_assets}/images/services/plumbing-mechanical.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Commercial Plumbing Installation & Upgrades',
      'Water Supply & Drainage Systems',
      'Process Piping & Industrial Lines',
      'Boilers, Pumps & Mechanical Equipment',
      'Grease Traps & Interceptors',
      'Fixture Installation & Replacement',
      'Backflow Prevention & Testing',
      'Emergency Plumbing Repairs',
      'Restroom & Kitchen Plumbing',
      'Preventative Maintenance & Inspections'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Full-Service Plumbing & Mechanical',
      description: 'We manage everything from new installations to emergency repairs with a single point of contact.'
    },
    {
      title: 'Industrial & Commercial Expertise',
      description: 'Our team understands the unique demands of industrial and large-scale commercial systems.'
    },
    {
      title: 'Code-Compliant Work',
      description: 'We follow Florida plumbing codes and safety standards to ensure reliability and compliance.'
    },
    {
      title: 'Minimized Downtime',
      description: 'Our scheduling and phasing strategies allow your operations to continue during upgrades.'
    },
    {
      title: 'Durable Solutions',
      description: 'We use top-quality materials and proven techniques for long-term performance.'
    },
    {
      title: 'Preventative Care',
      description: 'Our maintenance services reduce breakdowns, improve efficiency, and extend system lifespan.'
    }
  ],
  faqs: [
    {
      question: "Do you handle plumbing for large commercial projects?",
      answer: "Yes, we manage full-scale plumbing installations and upgrades for offices, industrial facilities, and mixed-use buildings."
    },
    {
      question: "Can you work on specialized process piping?",
      answer: "Absolutely. We design and install process piping for manufacturing, labs, and other industrial applications."
    },
    {
      question: "Do you provide emergency plumbing services?",
      answer: "Yes, we offer rapid-response plumbing repairs to address leaks, blockages, and equipment failures."
    },
    {
      question: "Are your plumbing services code-compliant?",
      answer: "Yes. All of our work is performed to meet or exceed Florida’s plumbing and mechanical codes."
    },
    {
      question: "Do you offer maintenance programs?",
      answer: "Yes, we provide preventative maintenance and regular inspections to ensure your systems run efficiently."
    }
  ],
  images: [],
},
'hvac': {
  label: 'HVAC Solutions',
  title: 'Commercial & Industrial HVAC Services in Florida',
  description: 'Berg General Contractors provides complete HVAC installation, upgrades, and maintenance solutions to keep your facilities comfortable, efficient, and compliant.',
  content: `Heating, ventilation, and air conditioning (HVAC) systems are essential for creating a safe, comfortable, and productive environment in any commercial or industrial building. At Berg General Contractors, we deliver tailored HVAC solutions that improve air quality, regulate temperature, and ensure energy efficiency. Our services cover everything from system design and installation to routine maintenance and emergency repairs.

We work with a wide variety of HVAC systems, including rooftop units, chillers, boilers, ductwork, and exhaust systems. With a strong focus on compliance, energy codes, and occupant comfort, our HVAC projects are built to withstand Florida’s climate challenges. Whether you’re constructing a new office, upgrading an industrial facility, or renovating retail space, Berg General Contractors ensures your HVAC systems deliver reliable performance year-round.`,
  image: `${static_assets}/images/services/hvac.jpg`,
  typeOfSolutions: {
    headings: 'Solutions we offer',
    types: [
      'Commercial HVAC System Installation',
      'Rooftop Units (RTUs) & Chillers',
      'Heating Systems & Boilers',
      'Air Duct Installation & Ventilation',
      'Exhaust & Make-Up Air Systems',
      'Indoor Air Quality Improvements',
      'Energy-Efficient HVAC Upgrades',
      'Preventative Maintenance Programs',
      '24/7 Emergency Repairs',
      'Building Automation & Controls Integration'
    ]
  },
  benefitsOFChoosing: [
    {
      title: 'Energy Efficiency',
      description: 'Modern systems reduce energy consumption and lower long-term operating costs.'
    },
    {
      title: 'Climate-Ready Systems',
      description: 'Our HVAC solutions are designed to handle Florida’s heat, humidity, and weather extremes.'
    },
    {
      title: 'Improved Air Quality',
      description: 'Ventilation and filtration upgrades provide cleaner, healthier indoor environments.'
    },
    {
      title: 'Reduced Downtime',
      description: 'We provide preventative maintenance and rapid-response repair services.'
    },
    {
      title: 'Licensed Technicians',
      description: 'All HVAC work is performed by certified and insured specialists.'
    },
    {
      title: 'Turnkey Service',
      description: 'From design and installation to controls integration, we manage the entire HVAC lifecycle.'
    }
  ],
  faqs: [
    {
      question: "Do you install HVAC systems for large commercial buildings?",
      answer: "Yes, we handle HVAC installations for offices, industrial facilities, retail centers, and mixed-use properties."
    },
    {
      question: "Can you improve energy efficiency in older systems?",
      answer: "Absolutely. We retrofit existing systems with modern, energy-efficient components to reduce costs."
    },
    {
      question: "Do you offer maintenance programs?",
      answer: "Yes, we provide preventative maintenance plans to extend system life and prevent costly breakdowns."
    },
    {
      question: "Can you handle emergency HVAC repairs?",
      answer: "Yes, we offer 24/7 emergency services for critical HVAC issues."
    },
    {
      question: "Are your HVAC systems compliant with Florida codes?",
      answer: "Yes, all installations meet or exceed Florida’s energy and building code requirements."
    }
  ],
  images: [],
}};
/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
'office-renovation': {
  label: "Office Renovation Project",
  title: "Modern Office Renovation for Productivity & Style",
  description: "A full office renovation designed to enhance productivity, improve workflow, and provide a modern workplace environment with high-quality finishes and efficient layouts.",
  image: `${static_assets}/images/projects/office.jpg`,
  location: "Corporate Office, Miami, FL",
  duration: "Completed in 6 weeks",
  materials: [
    "Glass partitions for private offices",
    "LED recessed lighting",
    "Energy-efficient HVAC systems",
    "Custom workstations with ergonomic design",
    "Vinyl plank commercial flooring",
    "Modern reception desk with branding",
    "Conference room AV system",
    "Soundproof acoustic ceiling tiles",
    "ADA-compliant doors and fixtures",
    "Custom millwork and cabinetry"
  ],
  content: `
This office renovation project transformed a dated workspace into a modern, functional, and employee-friendly environment. The client’s primary goal was to increase productivity while reflecting their brand identity through the office design.

We reconfigured the space with new layouts that optimized workflow and introduced glass partitions to allow natural light to flow across the office. Energy-efficient lighting, HVAC upgrades, and ergonomic workstations were installed to enhance comfort and reduce operating costs. Acoustic solutions, including ceiling panels and soundproof partitions, ensured a quieter, more collaborative workplace. The conference room was fully outfitted with modern audiovisual systems for seamless communication. Finally, custom millwork and branded finishes created a professional, welcoming space for both staff and visitors.
  `
},
'industrial-upgrade': {
  label: "Industrial Facility Upgrade",
  title: "Industrial Facility Upgrade for Safety & Efficiency",
  description: "A large-scale industrial renovation improving workflow, safety, and compliance while introducing modern mechanical and structural systems.",
  image: `${static_assets}/images/projects/industrial.jpg`,
  location: "Manufacturing Facility, Tampa, FL",
  duration: "Completed in 12 weeks",
  materials: [
    "High-durability epoxy flooring",
    "Steel column reinforcements",
    "Upgraded electrical service panels",
    "Energy-efficient LED high-bay lighting",
    "Ventilation and make-up air systems",
    "Fire suppression sprinklers",
    "Heavy-duty dock doors",
    "Safety guardrails and barriers",
    "Process piping for compressed air",
    "Overhead crane integration"
  ],
  content: `
This industrial upgrade project was focused on modernizing a manufacturing facility to improve compliance, safety, and operational efficiency. Our team reinforced structural elements, installed epoxy flooring for durability, and upgraded the facility’s electrical and mechanical systems to support heavy equipment use.

We implemented modern ventilation and air quality systems to meet OSHA standards, installed fire suppression sprinklers, and integrated new dock doors for efficient logistics. To improve employee safety, we added guardrails, barriers, and marked pedestrian pathways. This project was completed on schedule, ensuring the client’s operations experienced minimal downtime while achieving significant improvements in safety and efficiency.
  `
},
'retail-buildout': {
  label: "Retail Build-Out",
  title: "Complete Retail Store Build-Out",
  description: "From empty shell to a vibrant retail space — this project included everything from structural buildout to branded interiors, creating a welcoming customer experience.",
  image: `${static_assets}/images/projects/retail.jpg`,
  location: "Shopping Center, Orlando, FL",
  duration: "Completed in 8 weeks",
  materials: [
    "Custom storefront glass system",
    "Luxury vinyl tile flooring",
    "Recessed and pendant lighting",
    "Built-in shelving and display units",
    "HVAC installation with zoning",
    "Modern checkout counters",
    "Branded signage and graphics",
    "Energy-efficient windows and doors",
    "Accessible restrooms",
    "Feature accent walls with lighting"
  ],
  content: `
This retail build-out project transformed a raw commercial space into a polished, brand-aligned store designed to maximize customer flow and create a welcoming atmosphere. We worked closely with the client to design and implement both functional layouts and brand-centric interiors.

Our team installed a custom storefront glass entry, luxury vinyl tile flooring, and energy-efficient lighting systems. Branded signage, accent walls, and display fixtures reinforced the store’s identity. Restrooms and staff areas were upgraded to ADA standards, and the HVAC system was zoned for customer comfort. The result was a turnkey retail space ready for grand opening and optimized for daily business operations.
  `
},
'tenant-improvement': {
  label: "Tenant Improvement Project",
  title: "Custom Tenant Improvement for a Leased Office Space",
  description: "A tailored tenant improvement project that transformed a leased office into a fully functional, brand-reflective workplace ready for occupancy.",
  image: `${static_assets}/images/projects/tenant.jpg`,
  location: "Leased Office, Fort Lauderdale, FL",
  duration: "Completed in 5 weeks",
  materials: [
    "Custom office partitions",
    "Energy-efficient HVAC systems",
    "Carpet tile and commercial flooring",
    "Brand-colored accent walls",
    "Updated restrooms with ADA fixtures",
    "Breakroom cabinetry and appliances",
    "Data cabling and IT infrastructure",
    "Conference room glass walls",
    "LED panel lighting",
    "Custom signage integration"
  ],
  content: `
The tenant improvement project involved a complete customization of a leased office to match the client’s brand and operational needs. We reconfigured the space with partitions, upgraded HVAC systems, and installed energy-efficient lighting throughout the office.

Restrooms were renovated to ADA compliance, and the breakroom was outfitted with new cabinetry and appliances. The design incorporated brand-colored accent walls, signage, and custom glass-walled conference rooms. Data cabling and IT infrastructure were installed to support modern technology requirements. Delivered within the lease timeline, the project allowed the tenant to move in and begin operations without delay.
  `
},
'concrete-restoration': {
  label: "Concrete Restoration Project",
  title: "Structural Concrete Restoration & Safety Upgrade",
  description: "This project restored deteriorating concrete structures, ensuring safety, longevity, and compliance with Florida building regulations.",
  image: `${static_assets}/images/projects/concrete.jpg`,
  location: "Parking Garage, Jacksonville, FL",
  duration: "Completed in 10 weeks",
  materials: [
    "Structural concrete patching",
    "Epoxy crack injection",
    "Rebar cleaning and corrosion protection",
    "High-strength repair mortars",
    "Protective waterproof coatings",
    "Expansion joint replacements",
    "Surface sealing compounds",
    "Industrial-grade scaffolding",
    "Formwork and shoring systems",
    "Safety barriers and railings"
  ],
  content: `
This concrete restoration project was undertaken to repair and restore a multi-level parking garage in Jacksonville. Over years of use, the structure had experienced spalling, cracking, and water intrusion that compromised both safety and usability.
We began with structural assessments, followed by spall repair, epoxy crack injection, and reinforcement of corroded rebar. Expansion joints were replaced, and waterproof coatings were applied to protect against future deterioration. The project also included new safety barriers, updated railings, and improved pedestrian pathways. The restoration extended the lifespan of the structure, ensured compliance with Florida’s building safety laws, and provided a safer environment for both vehicles and pedestrians.`
}

};

export const projectsImageGallery = [
  `${static_assets}/images/projects/concrete.jpg`,
  `${static_assets}/images/projects/industrial.jpg`,
  `${static_assets}/images/projects/office.jpg`,
  `${static_assets}/images/projects/retail.jpg`,
  `${static_assets}/images/projects/tenant.jpg`,
  `${static_assets}/images/services/roofing.jpg`,
  `${static_assets}/images/services/windows-doors.jpg`,
  `${static_assets}/images/services/hvac.jpg`,
  `${static_assets}/images/services/office.jpg`,
];

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
    feedback: "They’ve completed several commercial buildouts for us — always on schedule and within budget. A contractor we can trust."
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
    feedback: "They repaired and restored our parking garage’s concrete structure. The project was handled professionally with safety as the top priority."
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
