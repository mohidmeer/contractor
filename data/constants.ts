import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { servicesData } from './services';
import { projectsData } from './projects';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

export const siteUrl = 'https://totalcareservicesroofing.com/'
export const siteName = 'Total Care Roofing'
export const siteLogo = `${siteUrl}images/logo.png`

export const pages = {
  landing: {
    seo: {
      title: 'Total Care Roofing',
      description: 'Expert roofing services across Florida. Quality roof installation, repairs, and maintenance for homes and businesses.',
      ogImage: '/images/og-home.jpg',
      canonical: siteUrl,
    },
    hero: {
      title: 'Expert Roofing Services You Can Trust',
      description: 'From minor leak repairs to complete roof replacements, our experienced team ensures top-quality craftsmanship, durable materials, and reliable service every step of the way.',
      backgroundImage: '/images/hero_bg_1.jpg',
      ctaText: 'Request a Free Quote',
      ctaLink: '/contact',
    },
    services: {
      heading: 'Our Roofing Solutions'
    },
    projects:{
      heading:'Roofs Transformed Across Florida'
    }
  },
  services: {
    seo: {
      title: 'Roofing Services In Florida',
      description: 'Explore our roofing services including roof installation, repairs, and inspections for Florida homes and businesses.',
      ogImage: '/images/services/default.jpg',
      canonical: siteUrl + 'services',
    },
  },
  projects: {
    seo: {
      title: 'Roofing Projects in Florida',
      description: 'See our completed roofing projects across Florida. High-quality roof installations and repairs for residential and commercial properties.',
      ogImage: '/images/projects/default.jpg',
      canonical: siteUrl + 'projects',
    },
  },
  about: {
    seo: {
      title: 'About Us',
      description: 'Learn more about Total Care Services, our mission, and why homeowners across Florida trust us for exceptional roofing solutions.',
      ogImage: '/images/og-about.jpg',
      canonical: siteUrl + 'about',
    },
  },
  contact: {
    seo: {
      title: 'Contact Us',
      description: 'Get in touch with Total Care Services for expert roofing consultations, free quotes, or emergency repairs. Serving homes and businesses across Florida.',
      ogImage: '/images/og-contact.jpg',
      canonical: siteUrl + 'contact',
    },
  },
  blog: {
    seo: {
      title: 'Roofing Tips & Insights Florida',
      description: 'Stay updated with the latest roofing tips, industry insights, and maintenance advice to keep your roof in top condition year-round.',
      ogImage: '/images/og-blog.jpg',
      canonical: siteUrl+'blogs',
    },
  },
  service_area:{
    seo:{
      title: 'Roofing Services In Florida',
      description: 'We provide top-quality residential and commercial roofing services across Florida, ensuring durability and excellence.',
      ogImage: '/images/og-blog.jpg',
      canonical: siteUrl+'service-areas',
    }
  }
};

export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Roofing with Integrity, Craftsmanship, and Care',
  description: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
  keyPoints: [
    {
      title: 'Licensed & Insured',
      desc: 'We follow all Florida regulations to ensure your project is secure and compliant.'
    },
    {
      title: 'Premium Materials',
      desc: 'We use top-quality shingles and roofing systems for durability and performance.'
    },
    {
      title: 'Clean & Efficient',
      desc: 'Our team works quickly and leaves your property spotless after every job.'
    }
  ],
  image1_url: '/images/after_img_1.jpg',
  image2_url: '/images/after_img_1.jpg',
  image3_url: '/images/after_img_1.jpg',

}

export const faqs = [
  {
    question: "How long does a roofing project usually take?",
    answer: "Most residential roofing projects are completed within 1–3 days, depending on the size and complexity of the roof."
  },
  {
    question: "Do you offer free roof inspections?",
    answer: "Yes, we provide free inspections and estimates for all our roofing services across Florida."
  },
  {
    question: "What roofing materials do you use?",
    answer: "We use premium materials such as asphalt shingles, metal roofing, and flat roofing systems from trusted manufacturers."
  },
  {
    question: "Are your roofing services covered by warranty?",
    answer: "Absolutely! All our roofing installations come with a material and workmanship warranty for your peace of mind."
  },
  {
    question: "Do you provide emergency roof repair services?",
    answer: "Yes, we offer 24/7 emergency roof repair services to handle storm damage and unexpected leaks."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured to perform roofing services in Florida, ensuring safety and compliance with local regulations."
  }
];

export const ourProcessData = {

  heading: 'Our Process',
  description: 'From concept to completion, we make bathroom remodeling seamless and stress-free.',
  list: [
    {
      title: "Initial Consultation",
      description: "We start by understanding your roofing needs, budget, and design preferences through a detailed consultation.",
      icon: FaComments
    },
    {
      title: "Roof Inspection",
      description: "Our experts perform a thorough inspection to assess the current condition of your roof and identify potential issues.",
      icon: FaSearch
    },
    {
      title: "Custom Proposal",
      description: "We provide a transparent and detailed proposal outlining materials, timelines, and pricing for your roofing project.",
      icon: FaFileAlt
    },
    {
      title: "Project Scheduling",
      description: "Once approved, we schedule the project at your convenience and prepare everything for a smooth installation process.",
      icon: FaCalendarAlt
    },
    {
      title: "Roofing Installation",
      description: "Our skilled team executes the roofing work with precision, using premium materials and following industry best practices.",
      icon: FaHammer
    },
    {
      title: "Final Inspection & Handover",
      description: "We conduct a thorough quality check and final inspection to ensure your satisfaction before completing the project.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
      title: "Qualified Experts",
      description: "Our team is made up of licensed and experienced professionals who bring unmatched expertise to every roofing project.",
      icon: FaUserTie
  },
  {
      title: "Workmanship Quality",
      description: "We use the finest materials and industry-best practices to deliver exceptional workmanship on every job.",
      icon: FaTools
  },
  {
      title: "Trusted & Reliable",
      description: "We have built our reputation on trust by delivering projects on time, within budget, and to the highest standards.",
      icon: FaHandshake
  },
  {
      title: "Affordable Pricing",
      description: "We provide competitive pricing without compromising on quality, giving you the best value for your investment.",
      icon: FaDollarSign
  },
  {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We go above and beyond to ensure you are happy with the results.",
      icon: FaSmile
  },
  {
      title: "Safety & Compliance",
      description: "We strictly adhere to safety regulations and building codes, ensuring every project is compliant and secure.",
      icon: FaShieldAlt
  }
];

export const accomplishemntData = [
  { title: "Commercial Projects", number: 100 },
  { title: "Residential Projects", number: 250 },
  { title: "Hardworking Employees", number: 50 },
  { title: "Happy Customers", number: 500 },
];


export const contactInfo = {
  phone: {
    text: '(800) 555-000',
    href: 'tel:+8005557663',
  },
  email: 'support@totalcareservicesroofing.com',
  address: '456 Shingle Street, Tampa, FL 33602',
  mapEmbedUrl: 'https://maps.google.com/maps?q=300%20SW%201st%20Avenue%2C%20Ste%20155%2C%20Fort%20Lauderdale%2C%20FL%2033301&t=m&z=17&output=embed&iwloc=near',
  workingHours: 'Mon–Sat: 8:00 AM – 6:00 PM',
};

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
      { label: 'Roof Installation', href: '/services/roof-installation', hasChildrens: false },
      { label: 'Roof Repair', href: '/services/roof-repair', hasChildrens: false },
      { label: 'Gutter Services', href: '/services/gutters', hasChildrens: false },
      { label: 'Roof Inspection', href: '/services/roof-inspection', hasChildrens: false },
      { label: 'Emergency Roof Repair', href: '/services/emergency-roof-repair', hasChildrens: false },
      { label: 'Flat Roofing', href: '/services/flat-roofing', hasChildrens: false },
      { label: 'Metal Roofing', href: '/services/metal-roofing', hasChildrens: false },
      { label: 'Shingle Replacement', href: '/services/shingle-replacement', hasChildrens: false },
      { label: 'Skylight Installation', href: '/services/skylight-installation', hasChildrens: false },
      { label: 'Roof Ventilation', href: '/services/roof-ventilation', hasChildrens: false }
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Lakeview Villas Roofing', href: '/projects/lakeview-villas-roofing', hasChildrens: false },
      { label: 'Downtown Mall Renovation', href: '/projects/downtown-mall-renovation', hasChildrens: false },
      { label: 'Coastal Homes Upgrade', href: '/projects/coastal-homes-upgrade', hasChildrens: false },
      { label: 'Heritage Museum Restoration', href: '/projects/heritage-museum-restoration', hasChildrens: false },
      { label: 'Sunset Condos Retrofit', href: '/projects/sunset-condos-retrofit', hasChildrens: false },
      { label: 'Ocean Breeze Resort', href: '/projects/ocean-breeze-resort', hasChildrens: false },
      { label: 'Greenwood Retirement Community', href: '/projects/greenwood-retirement-community', hasChildrens: false },
      { label: 'Palmetto Business Center', href: '/projects/palmetto-business-center', hasChildrens: false },
      { label: 'Coral Gables Luxury Homes', href: '/projects/coral-gables-luxury-homes', hasChildrens: false },
      { label: 'Seaside Shopping Plaza', href: '/projects/seaside-shopping-plaza', hasChildrens: false },
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

export const FooterData = {
  tagline: 'Protecting Florida Homes with Craftsmanship, Care, and Coastal Strength.'
};

export const socialLinks = {
  facebook: 'https://www.facebook.com/TotalCareRoofing',
  instagram: 'https://www.instagram.com/TotalCareRoofing',
  twitter: 'https://twitter.com/TotalCareRoof',
};

export const serviceAreasData = [

  {
    name: "Miami",
    href: "/service-areas/miami",
    title: "Roofing Services in Miami, FL ",
    description: "Professional roofing services in Miami, FL. Expert roof installation, repairs, and maintenance to protect your home from Florida weather.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Orlando",
    href: "/service-areas/orlando",
    title: "Roofing Services in Orlando, FL ",
    description: "Trusted roofing company in Orlando, FL. Quality roof replacement, repairs, and maintenance with Florida code compliance.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },

  {
    name: "Tampa",
    href: "/service-areas/tampa",
    title: "Roofing Services in Tampa, FL ",
    description:
      "Reliable roofing solutions in Tampa, FL. Specializing in shingle, tile, and metal roof installations and repairs.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Jacksonville",
    href: "/service-areas/jacksonville",
    title: "Roofing Services in Jacksonville, FL ",
    description:
      "Expert roofing services in Jacksonville, FL. From storm damage repairs to new roof installations, we’ve got you covered.",
  },
  {
    name: "Fort Lauderdale",
    href: "/service-areas/fort-lauderdale",
    title: "Roofing Services in Fort Lauderdale, FL ",
    description:
      "Fort Lauderdale’s trusted roofing company for durable and energy-efficient roofing solutions.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "St. Petersburg",
    href: "/service-areas/st-petersburg",
    title: "Roofing Services in St. Petersburg, FL ",
    description:
      "Premium roofing services in St. Petersburg, FL. Quality repairs, installations, and maintenance for Florida homes.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Hialeah",
    href: "/service-areas/hialeah",
    title: "Roofing Services in Hialeah, FL ",
    description: "Affordable and reliable roofing solutions in Hialeah, FL. Get expert roof repair and installation today.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Tallahassee",
    href: "/service-areas/tallahassee",
    title: "Roofing Services in Tallahassee, FL ",
    description:
      "Roofing experts serving Tallahassee, FL. Specializing in repairs, replacements, and maintenance for all roof types.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Cape Coral",
    href: "/service-areas/cape-coral",
    title: "Roofing Services in Cape Coral, FL ",
    description:
      "Cape Coral roofing services for homes and businesses. Expert roof installation and repair for Florida’s coastal weather.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "West Palm Beach",
    href: "/service-areas/west-palm-beach",
    title: "Roofing Services in West Palm Beach, FL ",
    description:
      "Professional roofing services in West Palm Beach, FL. Durable roofing systems built for Florida’s climate.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Naples",
    href: "/service-areas/naples",
    title: "Roofing Services in Naples, FL ",
    description: "Naples’ trusted roofing experts. Offering roof repairs, installations, and hurricane-resistant roofing solutions.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Sarasota",
    href: "/service-areas/sarasota",
    title: "Roofing Services in Sarasota, FL ",
    description: "Reliable roofing company in Sarasota, FL. Specializing in shingle, tile, and metal roofing systems.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Fort Myers",
    href: "/service-areas/fort-myers",
    title: "Roofing Services in Fort Myers, FL ",
    description:
      "Roofing services in Fort Myers, FL. We provide roof replacements, leak repairs, and storm damage restoration.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Clearwater",
    href: "/service-areas/clearwater",
    title: "Roofing Services in Clearwater, FL ",
    description:
      "Clearwater roofing professionals delivering quality roof repairs and installations with top-rated materials.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Boca Raton",
    href: "/service-areas/boca-raton",
    title: "Roofing Services in Boca Raton, FL ",
    description:
      "Trusted Boca Raton roofing contractor. Offering high-quality roofing installations and repairs.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Palm Beach",
    href: "/service-areas/palm-beach",
    title: "Roofing Services in Palm Beach, FL ",
    description:
      "Palm Beach roofing experts for premium roofing systems that last. Call for a free estimate.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Pensacola",
    href: "/service-areas/pensacola",
    title: "Roofing Services in Pensacola, FL ",
    description:
      "Pensacola roofing contractor offering storm damage repairs, roof replacements, and maintenance services.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  },
  {
    name: "Daytona Beach",
    href: "/service-areas/daytona-beach",
    title: "Roofing Services in Daytona Beach, FL ",
    description:
      "Daytona Beach roofing services with hurricane-resistant solutions for Florida homes.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: '/images/hero_bg_1.jpg'
  }
];


export const JsonLdDataLanding = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": pages.landing.seo.title,
  "description": pages.landing.seo.description,
  "url": pages.landing.seo.canonical,
  "image": pages.landing.seo.ogImage,
  "logo": pages.landing.seo.ogImage,
  "sameAs": Object.values(socialLinks),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "postalCode": "32801",
    "addressCountry": "US"
  },
  "telephone": "+1-234-567-8900",
  "priceRange": "$$$",
  "openingHours": "Mo-Fr 08:00-18:00",
  "areaServed": {
    "@type": "Place",
    "name": "Florida"
  }
};



const services_has_part = Object.entries(servicesData).map(([key, service]) => ({
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "url": `${pages.services.seo.canonical}/${key}`,
  "image": service.image,
  "provider": {
    "@type": ["LocalBusiness", "RoofingContractor"],
    "name": pages.landing.seo.title,
    "url": pages.landing.seo.canonical
  }
}));
export const JsonLdDataServices = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": pages.services.seo.title,
  "description": pages.services.seo.description,
  "url": pages.services.seo.canonical,
  "image": pages.services.seo.ogImage,
  "publisher": {
    "@type": ["LocalBusiness", "RoofingContractor"],
    "name": pages.landing.seo.title,
    "url": pages.landing.seo.canonical,
    "logo": pages.landing.seo.ogImage
  },
  "hasPart": services_has_part
};
const projects_has_part = Object.entries(projectsData).map(([key, project]) => ({
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "url": `${pages.projects.seo.canonical}/${key}`,
  "image": project.image,
  "provider": {
    "@type": ["LocalBusiness", "RoofingContractor"],
    "name": pages.landing.seo.title,
    "url": pages.landing.seo.canonical
  }
}));

export const JsonLdDataProjects = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": pages.projects.seo.title,
  "description": pages.projects.seo.description,
  "url": pages.projects.seo.canonical,
  "image": pages.projects.seo.ogImage,
  "publisher": {
    "@type": ["LocalBusiness", "RoofingContractor"],
    "name": pages.landing.seo.title,
    "url": pages.landing.seo.canonical,
    "logo": siteLogo
  },
  "hasPart": projects_has_part
};