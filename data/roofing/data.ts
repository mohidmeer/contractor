import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */
export const static_assets = '/roofing'
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
    description: 'Expert roofing services across Florida. Quality roof installation, repairs, and maintenance for homes and businesses.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Expert Roofing Services You Can Trust',
    description: 'From minor leak repairs to complete roof replacements, our experienced team ensures top-quality craftsmanship, durable materials, and reliable service every step of the way.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Request a Free Quote',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Roofing Solutions'
  },
  projects: {
    heading: 'Roofs Transformed Across Florida'
  }
}
export const servicesPage = {
  seo: {
    title: 'Roofing Services In Florida',
    description: 'Explore our roofing services including roof installation, repairs, and inspections for Florida homes and businesses.',
    ogImage: `${static_assets}/images/services/default.jpg`,
    canonical: siteUrl + 'services',
  }
}
export const projectsPage = {
  seo: {
    title: 'Roofing Projects in Florida',
    description: 'See our completed roofing projects across Florida. High-quality roof installations and repairs for residential and commercial properties.',
    ogImage: `${static_assets}/images/projects/default.jpg`,
    canonical: siteUrl + 'projects',
  },
}
export const aboutPage = {
  seo: {
    title: 'About Us',
    description: 'Learn more about Total Care Services, our mission, and why homeowners across Florida trust us for exceptional roofing solutions.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'About Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.'
}
export const contactPage = {
  seo: {
    title: 'Contact Us',
    description: 'Get in touch with Total Care Services for expert roofing consultations, free quotes, or emergency repairs. Serving homes and businesses across Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Contact Us',
    messagePlaceholder: "Tell us what your roof's been up to — we’ve heard it all."
  }
}
export const blogPage = {
  seo: {
    title: 'Roofing Tips & Insights Florida',
    description: 'Stay updated with the latest roofing tips, industry insights, and maintenance advice to keep your roof in top condition year-round.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}
export const serviceAreaPage = {
  seo: {
    title: 'Roofing Services In Florida',
    description: 'We provide top-quality residential and commercial roofing services across Florida, ensuring durability and excellence.',
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
  description: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
  keyPoints: [
    {
      title: 'Licensed & Insured',
      desc: 'Florida-licensed Roofing Contractor (CCC1336268) and General Contractor (CGC1535671). You can count on us for code-compliant, safe, and dependable work every time.'
    },
    {
      title: 'Premium Materials',
      desc: 'We install only top-tier shingles, tile, metal, and flat roofing systems, ensuring long-lasting durability in Florida’s demanding climate.'
    },
    {
      title: 'Clean & Efficient',
      desc: 'Our crew works with precision and care, completing jobs on time and leaving your property spotless after every installation or repair.'
    }
  ],
  image1_url: `${static_assets}/images/services/inspection.jpg`,
  image2_url: `${static_assets}/images/services/metal.jpg`,
  image3_url: `${static_assets}/images/projects/costal.jpg`,
  image4_url: `${static_assets}/images/services/skylight.jpg`,
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
export const accomplishmentData = [
  { title: "Commercial Projects", number: 100 },
  { title: "Residential Projects", number: 250 },
  { title: "Hardworking Employees", number: 50 },
  { title: "Happy Customers", number: 500 },
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
/* ------------------------
   NAVITEMS FOOTER 
------------------------ */
export const FooterData = {
  tagline: 'Protecting Florida Homes with Craftsmanship, Care, and Coastal Strength.'
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [

  {
    name: "Miami",
    href: "/miami",
    title: "Roofing Services in Miami, FL ",
    description: "Professional roofing services in Miami, FL. Expert roof installation, repairs, and maintenance to protect your home from Florida weather.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Roofing Services in Orlando, FL ",
    description: "Trusted roofing company in Orlando, FL. Quality roof replacement, repairs, and maintenance with Florida code compliance.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },

  {
    name: "Tampa",
    href: "/tampa",
    title: "Roofing Services in Tampa, FL ",
    description:
      "Reliable roofing solutions in Tampa, FL. Specializing in shingle, tile, and metal roof installations and repairs.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Roofing Services in Jacksonville, FL ",
    description:
      "Expert roofing services in Jacksonville, FL. From storm damage repairs to new roof installations, we’ve got you covered.",
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Roofing Services in Fort Lauderdale, FL ",
    description:
      "Fort Lauderdale’s trusted roofing company for durable and energy-efficient roofing solutions.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Roofing Services in St. Petersburg, FL ",
    description:
      "Premium roofing services in St. Petersburg, FL. Quality repairs, installations, and maintenance for Florida homes.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Roofing Services in Hialeah, FL ",
    description: "Affordable and reliable roofing solutions in Hialeah, FL. Get expert roof repair and installation today.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Tallahassee",
    href: "/tallahassee",
    title: "Roofing Services in Tallahassee, FL ",
    description:
      "Roofing experts serving Tallahassee, FL. Specializing in repairs, replacements, and maintenance for all roof types.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Roofing Services in Cape Coral, FL ",
    description:
      "Cape Coral roofing services for homes and businesses. Expert roof installation and repair for Florida’s coastal weather.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Roofing Services in West Palm Beach, FL ",
    description:
      "Professional roofing services in West Palm Beach, FL. Durable roofing systems built for Florida’s climate.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Roofing Services in Naples, FL ",
    description: "Naples’ trusted roofing experts. Offering roof repairs, installations, and hurricane-resistant roofing solutions.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Sarasota",
    href: "/sarasota",
    title: "Roofing Services in Sarasota, FL ",
    description: "Reliable roofing company in Sarasota, FL. Specializing in shingle, tile, and metal roofing systems.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Roofing Services in Fort Myers, FL ",
    description:
      "Roofing services in Fort Myers, FL. We provide roof replacements, leak repairs, and storm damage restoration.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Clearwater",
    href: "/clearwater",
    title: "Roofing Services in Clearwater, FL ",
    description:
      "Clearwater roofing professionals delivering quality roof repairs and installations with top-rated materials.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Roofing Services in Boca Raton, FL ",
    description:
      "Trusted Boca Raton roofing contractor. Offering high-quality roofing installations and repairs.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Palm Beach",
    href: "/palm-beach",
    title: "Roofing Services in Palm Beach, FL ",
    description:
      "Palm Beach roofing experts for premium roofing systems that last. Call for a free estimate.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Roofing Services in Pensacola, FL ",
    description:
      "Pensacola roofing contractor offering storm damage repairs, roof replacements, and maintenance services.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  },
  {
    name: "Daytona Beach",
    href: "/daytona-beach",
    title: "Roofing Services in Daytona Beach, FL ",
    description:
      "Daytona Beach roofing services with hurricane-resistant solutions for Florida homes.",
    content: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/areaofservices/default.jpg`
  }
];
/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
  'roof-installation': {
    label: 'Roof Installation',
    title: 'Professional Roof Installation Services in Florida',
    description: 'Our expert team provides top-quality roof installation services using durable materials to ensure long-lasting protection for your home or business.',
    content: `When it comes to roof installation in Florida, choosing the right roofing contractor is critical. Our team specializes in installing high-quality roofing systems that can withstand Florida’s harsh weather conditions, including heavy rain, strong winds, and extreme heat. We work with top-grade materials like asphalt shingles, metal roofing, and flat roofing solutions to ensure durability and energy efficiency. From new home construction to replacing old roofs, we provide a seamless process, transparent pricing, and guaranteed workmanship. With our professional roof installation services, you can protect your home, improve curb appeal, and increase property value.`,
    image: `${static_assets}/images/services/roofers-installation.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Code-Compliant Installations', description: 'Permits handled and installs meet or exceed Florida Building Code and manufacturer specs.' },
      { title: 'Manufacturer-Certified Crew', description: 'Installed by certified pros so you’re eligible for extended manufacturer warranties.' },
      { title: 'Weather-Ready Systems', description: 'Assemblies engineered for high wind uplift and heavy rain common across Florida.' },
      { title: 'Energy-Smart Options', description: 'Cool roofs, proper ventilation, and underlayments to cut attic heat and AC load.' },
      { title: 'Clean, On-Schedule Projects', description: 'Tight timelines, daily cleanup, magnetic nail sweep, and respectful crews.' },
      { title: 'Transparent, Fixed Pricing', description: 'Clear proposals with no surprises—scope, materials, and timelines spelled out.' },
      { title: 'Post-Install Quality Check', description: 'Final walkthrough with photos and warranty registration handled for you.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/roofers-installation.jpg`, `${static_assets}/images/services/metal.jpg`]
  },
  'roof-repair': {
    label: 'Roof Repair',
    title: 'Reliable Roof Repair Solutions in Florida',
    description: 'We specialize in repairing all types of roof damage, from leaks to broken shingles, restoring the integrity of your roof quickly and effectively.',
    content: `Our roof repair services in Florida are designed to handle any type of roofing damage, whether it’s caused by storms, hurricanes, or everyday wear and tear. We quickly identify leaks, damaged shingles, and structural issues to prevent further damage to your home. Timely repairs can save you from costly replacements, so our team responds promptly and uses high-quality materials to restore your roof’s strength. Whether it’s a small repair or an extensive fix, we ensure your roof remains weatherproof, energy-efficient, and ready to handle Florida’s unpredictable climate.`,
    image: `${static_assets}/images/services/roof-repair.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Fast Leak Stop', description: 'Rapid diagnosis and same-day mitigation to prevent interior damage.' },
      { title: 'Cost-Effective Fixes', description: 'Targeted repairs extend roof life without the cost of full replacement.' },
      { title: 'Storm Damage Specialists', description: 'Shingle resets, flashing rebuilds, and membrane patches for wind/hail events.' },
      { title: 'Upfront Findings', description: 'Photo-documented issues and clear options before any work begins.' },
      { title: 'Quality Materials, Matched', description: 'Repairs blend with existing roof—profile, color, and manufacturer.' },
      { title: 'Workmanship Warranty', description: 'Backed repairs with fair, written coverage.' },
      { title: 'Preventive Maintenance Plans', description: 'Optional tune-ups to reduce future leaks and surprises.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/roof-repair.jpg`, `${static_assets}/images/services/flat.jpg`]
  },
  'gutters': {
    label: 'Gutter Services',
    title: 'Comprehensive Gutter Services in Florida',
    description: 'Keep your roof drainage system efficient with our gutter installation, cleaning, and repair services to protect your property from water damage.',
    content: `Our gutter services in Florida are designed to keep your property safe from water damage caused by heavy rain and storms. We provide professional gutter installation using durable materials that withstand Florida’s harsh weather conditions. In addition, we offer routine gutter cleaning to prevent blockages and overflow, as well as expert repairs for damaged or leaking gutters. A properly functioning gutter system is essential for protecting your roof, foundation, and landscaping. Trust our team to deliver reliable solutions that maintain the safety and value of your home year-round.`,
    image: `${static_assets}/images/services/gutters.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Protects Foundation & Fascia', description: 'Directs water away to prevent erosion, wood rot, and basement moisture.' },
      { title: 'Seamless Custom Fit', description: 'On-site formed K-style or half-round for fewer joints and fewer leaks.' },
      { title: 'Correct Pitch & Downspout Sizing', description: 'Designed for Florida downpours to avoid overflow and pooling.' },
      { title: 'Guards & Screens', description: 'Leaf protection options to minimize clogs and cleaning frequency.' },
      { title: 'Durable Finishes', description: 'Aluminum and steel with baked-on coatings that resist salt air and UV.' },
      { title: 'Clean Install, Clean Site', description: 'Drainage tuned, splash blocks added, and debris hauled away.' },
      { title: 'Integrated Roof Warranty Care', description: 'Installed without voiding roof manufacturer warranties.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/gutters.jpg`, `${static_assets}/images/services/replacement.jpg`, `${static_assets}/images/services/skylight.jpg`]
  },
  'roof-inspection': {
    label: 'Roof Inspection',
    title: 'Detailed Roof Inspection Services in Florida',
    description: 'Our thorough roof inspections identify issues early, helping you avoid costly repairs and extend the lifespan of your roofing system.',
    content: `Our roof inspection services in Florida provide homeowners and businesses with a detailed assessment of their roofing system. Regular inspections help identify leaks, storm damage, and wear before they turn into expensive problems. Our experienced inspectors check for missing shingles, water intrusion, ventilation issues, and structural concerns to ensure your roof remains in top condition. Whether you are preparing for hurricane season or planning maintenance, our thorough inspections give you peace of mind and protect your investment by extending the lifespan of your roof.`,
    image: `${static_assets}/images/services/inspection.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Early Problem Detection', description: 'Catch small issues—loose flashing, nail pops, failing sealant—before they escalate.' },
  { title: 'Comprehensive Reporting', description: 'Photo-rich report with condition grades and prioritized actions.' },
  { title: 'Insurance-Ready Documentation', description: 'Evidence you can use for claims after storms or when selling.' },
  { title: 'Ventilation & Moisture Check', description: 'Attic assessment to spot heat buildup, mold risk, or inadequate airflow.' },
  { title: 'Maintenance Roadmap', description: 'Clear next steps, timelines, and budget ranges.' },
  { title: 'Buyer/Seller Confidence', description: 'Pre-listing or due-diligence inspections that speed up closings.' },
  { title: 'Code & Safety Review', description: 'Notes on compliance, egress, and rooftop safety items.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/inspection.jpg`, `${static_assets}/images/services/roofers-installation.jpg`, `${static_assets}/images/services/roof-repair.jpg`,]
  },
  'emergency-roof-repair': {
    label: 'Emergency Roof Repair',
    title: '24/7 Emergency Roof Repair Services in Florida',
    description: 'We offer fast, reliable emergency roof repair to protect your property during storms or unexpected damage.',
    content: `When severe storms or unexpected damage strike, you need a roofing team you can count on. Our emergency roof repair services in Florida are available 24/7 to protect your home or business from further harm. Whether you’re dealing with leaks, missing shingles, or storm-related structural issues, we respond quickly and efficiently to restore your roof’s integrity. Florida’s unpredictable weather makes immediate action critical, and our experienced team uses high-quality materials to ensure lasting repairs. With our emergency services, you can minimize damage, avoid costly replacements, and keep your property safe at all times.`,
    image: `${static_assets}/images/services/emergency.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: '24/7 Rapid Response', description: 'On-call teams to secure your property day or night.' },
      { title: 'Immediate Tarping & Dry-In', description: 'Stop active leaks fast to protect interiors and contents.' },
      { title: 'Storm-Grade Repairs', description: 'Temporary fixes transition smoothly to permanent solutions.' },
      { title: 'Insurance Coordination Help', description: 'Photos, moisture readings, and estimates tailored for claims.' },
      { title: 'Safety-First Operations', description: 'Proper fall protection and electrical/structural hazard checks.' },
      { title: 'Debris & Water Mitigation', description: 'Remove hazards, extract water, and set up drying if needed.' },
      { title: 'Clear, Upfront Pricing', description: 'Emergency rates explained before work begins.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/emergency.jpg`, `${static_assets}/images/services/roof-repair.jpg`]
  },

  'flat-roofing': {
    label: 'Flat Roofing',
    title: 'Specialized Flat Roofing Services in Florida',
    description: 'We provide installation, maintenance, and repair for flat roofing systems, ensuring proper sealing and durability for your structure.',
    content: `Flat roofing is a popular choice for many commercial and residential buildings in Florida, and our team specializes in installing and maintaining these systems to perfection. We offer professional flat roof installation using premium materials designed to resist water pooling and withstand Florida’s heavy rains and high humidity. Our maintenance and repair services ensure your flat roof remains leak-free and energy-efficient. From waterproof membranes to advanced sealing techniques, we provide solutions that extend the life of your flat roof and keep your property protected year-round.`,
    image: `${static_assets}/images/services/flat.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Ponding Prevention', description: 'Tapered insulation and proper drains to move water off the roof.' },
      { title: 'High-Performance Membranes', description: 'TPO, PVC, and EPDM options with heat-welded seams for durability.' },
      { title: 'Cool Roof Efficiency', description: 'Reflective surfaces that reduce heat gain and energy costs.' },
      { title: 'Low-Odor Install Options', description: 'Adhesive and mechanically-fastened systems for occupied buildings.' },
      { title: 'Long Commercial Warranties', description: 'Up to 20–30 year manufacturer coverage when eligible.' },
      { title: 'Equipment Coordination', description: 'Curbs and penetrations flashed around HVAC and solar correctly.' },
      { title: 'Minimal Downtime', description: 'Phased work plans to keep your operation running.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/flat.jpg`, `${static_assets}/images/services/roof-repair.jpg`]

  },
  'metal-roofing': {
    label: 'Metal Roofing',
    title: 'Durable Metal Roofing Solutions in Florida',
    description: 'Our metal roofing services deliver strength, energy efficiency, and modern aesthetics for residential and commercial properties.',
    content: `Metal roofing is one of the most durable and energy-efficient roofing options for Florida homes and businesses. Our expert team provides professional metal roof installation and replacement services that enhance both protection and aesthetics. Metal roofs are highly resistant to hurricanes, heavy rains, and extreme heat, making them ideal for Florida’s climate. In addition to superior strength, metal roofs can help reduce cooling costs by reflecting sunlight. We offer a variety of colors and styles to match your property’s design, ensuring a long-lasting and visually appealing roofing solution.`,
    image: `${static_assets}/images/services/metal.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Hurricane-Ready Strength', description: 'High wind-rated panels and secure fastening systems.' },
      { title: 'Energy Savings', description: 'Reflective finishes and proper underlayment reduce cooling loads.' },
      { title: 'Decades of Service Life', description: 'Metal roofs often outlast shingles by 2–3x with low maintenance.' },
      { title: 'Modern Curb Appeal', description: 'Standing seam and textured profiles in a range of colors.' },
      { title: 'Fire & Impact Resistance', description: 'Non-combustible and resilient against debris.' },
      { title: 'Quiet, Comfortable Interiors', description: 'Underlayments and decking that dampen rain noise.' },
      { title: 'Sustainable Choice', description: 'Often recycled content and fully recyclable at end of life.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/metal.jpg`, `${static_assets}/images/services/metal2.jpg`]
  },
  'shingle-replacement': {
    label: 'Shingle Replacement',
    title: 'Expert Shingle Replacement Services in Florida',
    description: 'We replace damaged or aging shingles to maintain your roof’s protection and curb appeal with high-quality materials.',
    content: `Shingle roofs are common in Florida, but over time, harsh sunlight, heavy rains, and strong winds can cause shingles to crack, curl, or fall off. Our shingle replacement services in Florida ensure your roof stays strong, weather-resistant, and visually appealing. We use premium shingles designed to withstand Florida’s unique climate, preventing leaks and structural damage. Whether you need partial replacement or a complete re-roofing project, our experienced team delivers precise installation, boosting your home’s protection and curb appeal while extending the lifespan of your roof.`,
    image: `${static_assets}/images/services/replacement.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Seamless Color Matching', description: 'Profiles and colors selected to blend with your existing roof or HOA rules.' },
      { title: 'Wind-Rated Shingles', description: 'High-performance shingles with enhanced seal strips for Florida winds.' },
      { title: 'Leak-Stopping Underlayments', description: 'Premium waterproof underlayment and flashing at valleys and penetrations.' },
      { title: 'Ventilation Upgrades', description: 'Ridge/soffit improvements that extend shingle life and improve comfort.' },
      { title: 'Fast, Tidy Turnaround', description: 'Tear-off, replacement, and full cleanup—usually within days.' },
      { title: 'Manufacturer Backed', description: 'Eligibility for extended system warranties with certified installs.' },
      { title: 'Responsible Disposal', description: 'Old shingles hauled and recycled where available.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/replacement.jpg`, `${static_assets}/images/services/replacement2.jpg`, `${static_assets}/images/services/metal2.jpg`]
  },
  'skylight-installation': {
    label: 'Skylight Installation',
    title: 'Professional Skylight Installation Services in Florida',
    description: 'Add natural light and style to your space with our expert skylight installation, ensuring proper sealing and energy efficiency.',
    content: `Brighten your home with our professional skylight installation services in Florida. Skylights are a great way to bring natural light into your living spaces while reducing energy costs. Our team ensures flawless installation with proper sealing to prevent leaks and improve energy efficiency, even during Florida’s rainy seasons. We offer various skylight designs to match your home’s style, enhancing both beauty and comfort. Whether you want a simple fixed skylight or an advanced vented option, we guarantee a secure and long-lasting installation.`,
    image: `${static_assets}/images/services/skylight.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Brighter, Healthier Spaces', description: 'Daylighting boosts mood and reduces reliance on artificial lighting.' },
      { title: 'Leak-Proof Flashing Systems', description: 'Factory flashing kits and curb details that stand up to heavy rain.' },
      { title: 'Energy-Efficient Glazing', description: 'Low-E, laminated glass options that cut heat gain and UV.' },
      { title: 'Custom Placement & Shafting', description: 'Designed for ideal angles, room use, and roof structure.' },
      { title: 'Vented & Smart Options', description: 'Manual/electric venting, blinds, and rain sensors available.' },
      { title: 'Clean Interior Finishes', description: 'Drywall, trims, and paint matched to your room’s style.' },
      { title: 'Warranty & Compliance', description: 'Products and installs that meet codes and carry strong warranties.' },
    ],
    faqs: [
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
    ],
    images: [`${static_assets}/images/services/skylight.jpg`, `${static_assets}/images/services/skylight2.jpg`, `${static_assets}/images/services/skylight3.jpg`,]
  },
  'roof-ventilation': {
    label: 'Roof Ventilation',
    title: 'Efficient Roof Ventilation Services in Florida',
    description: 'Improve your attic airflow and extend your roof’s lifespan with our professional roof ventilation solutions.',
    content: `Proper roof ventilation is essential for homes in Florida to prevent heat buildup, moisture issues, and structural damage. Our roof ventilation services ensure balanced airflow in your attic, which helps regulate indoor temperatures and reduce energy costs. By preventing trapped heat and moisture, we protect your roof from mold, rot, and premature aging. Our team installs and maintains ventilation systems that work effectively in Florida’s hot and humid climate, giving your home long-term protection and improved energy efficiency.`,
    image: `${static_assets}/images/services/ventilation.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Asphalt Shingles',
        'Metal Roofs',
        'Wood Shakes & Shingles',
        'Slate Roofs',
        'Flat Roofs',
        'Rubber Roofs',
        'Tile Roofs',
        'Skylights & Solar Panels',
        'New Construction',
        'Rooftop Safety'
      ]
    },
    benefitsOFChoosing: [
      { title: 'Cooler Attic Temperatures', description: 'Balanced intake/exhaust lowers heat buildup and AC strain.' },
      { title: 'Extended Roof Lifespan', description: 'Proper airflow reduces shingle aging and underlayment stress.' },
      { title: 'Moisture & Mold Control', description: 'Helps remove humidity to protect decking and insulation.' },
      { title: 'Right-Sized System Design', description: 'Calculated NFA with ridge, soffit, and baffle choices that fit your roof.' },
      { title: 'Quiet, Low-Profile Hardware', description: 'Attractive vents that perform without being an eyesore.' },
      { title: 'Sealed to Stay Leak-Free', description: 'Flashing and fasteners installed to withstand severe weather.' },
      { title: 'Energy Savings', description: 'Improved attic conditions reduce cooling costs in Florida’s heat.' },
    ],
    faqs: [
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
    title: 'Lakeview Villas Roofing Project',
    description: 'Completed a premium roofing project for Lakeview Villas, ensuring durability and aesthetic appeal for luxury residences.',
    image: `${static_assets}/images/projects/lake-view.jpg`,
    location: 'Lakeview Villas, Miami, FL',
    duration: 'Completed in week',
    materials: [
      'GAF Timberline HDZ Asphalt Shingles',
      'Synthetic Underlayment',
      'Ice & Water Shield',
      'Galvanized Roofing Nails',
      'Roofing Starter Strip Shingles',
      'Ridge Cap Shingles',
      'Aluminum Drip Edge',
      'Pipe Flashing Boots',
      'Roof Ventilation System (Ridge Vents & Soffit Vents)',
      'Sealant & Roofing Adhesive'
    ],
    content: `
        The client at Lakeview Villas wanted a durable and visually appealing roofing solution that could withstand Florida's harsh weather while maintaining the propertys luxury look.
        Our team recommended and installed GAF Timberline HDZ asphalt shingles, known for their strength and premium finish. We started by removing the old roofing system, preparing the deck, and adding a synthetic underlayment for extra protection against moisture.
        The installation was completed within one week, following strict safety standards and quality checks to ensure a flawless finish with minimal disruption to the residents`,
  },
  'downtown-mall-renovation': {
    label: 'Downtown Mall Renovation',
    title: 'Downtown Mall Renovation Project',
    description: 'Revitalized the roofing structure of Downtown Mall, providing enhanced protection and modern design for a high-traffic commercial space.',
    image: `${static_assets}/images/projects/mall.jpg`,
    location: 'Downtown Miami, FL',
    dateCompleted: 'April 20, 2025',
    duration: '2 weeks',
    materials: [
      'TPO Roofing Membrane',
      'Insulation Board',
      'Metal Flashing',
      'Roof Drainage System',
      'Galvanized Fasteners',
      'Sealant & Adhesive'
    ],
    content: `
      The Downtown Mall management wanted a complete roofing upgrade to improve durability and ensure long-term protection for its commercial units.
      Our team installed a high-performance TPO roofing system with proper insulation and drainage solutions to meet modern energy standards.
      The project was completed in two weeks with minimal disruption to mall operations.`,
  },
  'coastal-homes-upgrade': {
    label: 'Coastal Homes Upgrade',
    title: 'Coastal Homes Roofing Upgrade',
    description: 'Upgraded roofing for multiple coastal homes with weather-resistant materials to withstand harsh marine conditions.',
    image: `${static_assets}/images/projects/costal.jpg`,
    location: 'Naples, FL',
    dateCompleted: 'March 12, 2025',
    duration: '10 days',
    materials: [
      'Standing Seam Metal Panels',
      'Waterproof Underlayment',
      'Hurricane Clips',
      'Stainless Steel Fasteners',
      'Ventilation System',
      'Roof Sealant'
    ],
    content: `Homeowners along the coast required a roofing solution that could withstand salt air, high winds, and heavy rain.
      We recommended and installed standing seam metal roofs, which offer exceptional corrosion resistance and long-lasting performance.
      The project was finished in 10 days, providing homeowners with peace of mind before the storm season.`,
  },
  'heritage-museum-restoration': {
    label: 'Heritage Museum Restoration',
    title: 'Heritage Museum Roofing Restoration',
    description: 'Restored and preserved the historic roofing structure of the Heritage Museum while maintaining architectural integrity.',
    image: `${static_assets}/images/projects/measueam.jpg`,
    location: 'Orlando, FL',
    dateCompleted: 'May 18, 2025',
    duration: '12 days',
    materials: [
      'Clay Roof Tiles',
      'Copper Flashing',
      'Underlayment Membrane',
      'Historic Roof Preservation Sealant',
      'Stainless Steel Fasteners'
    ],
    content: `
      The Heritage Museum needed a roofing restoration that preserved its historical character while ensuring structural safety.
      Our team carefully removed damaged tiles and replaced them with historically accurate clay tiles, combined with modern underlayment for waterproofing.
      The project was completed in 12 days, maintaining the building’s original aesthetics and meeting preservation standards.`,

  },
  'sunset-condos-retrofit': {
    label: 'Sunset Condos Retrofit',
    title: 'Sunset Condos Roofing Retrofit',
    description: 'Retrofitted roofing for Sunset Condos with energy-efficient solutions and enhanced durability for long-term performance.',
    image: `${static_assets}/images/projects/condos.jpg`,
    location: 'Fort Lauderdale, FL',
    dateCompleted: 'June 3, 2025',
    duration: '14 days',
    materials: [
      'Cool Roof Membrane',
      'Insulation Board',
      'Aluminum Edge Flashing',
      'Galvanized Roofing Fasteners',
      'Sealant & Coating System'
    ],
    content: `
      The Sunset Condos board requested an energy-efficient roofing solution to reduce cooling costs while improving overall durability.
      We implemented a cool roofing system with advanced reflective materials and upgraded insulation for better thermal performance.
      The retrofit was completed in 14 days, resulting in improved energy efficiency and reduced maintenance costs for residents.
    `
  
  },
  'ocean-breeze-resort': {
    label: 'Ocean Breeze Resort',
    title: 'Ocean Breeze Resort Roofing Project',
    description: 'Installed a high-performance roofing system for Ocean Breeze Resort, designed to handle Florida’s coastal weather conditions while adding a modern aesthetic.',
    image: `${static_assets}/images/projects/ocean-breeze.jpg`,
    location: 'Key West, FL',
    dateCompleted: 'July 8, 2025',
    duration: '3 weeks',
    materials: [
      'Standing Seam Metal Roofing Panels',
      'Marine-Grade Fasteners',
      'Waterproof Underlayment',
      'Hurricane Clips',
      'Roof Sealant for Coastal Protection'
    ],
    content: `
      Ocean Breeze Resort needed a durable roofing system capable of withstanding high winds, heavy rain, and salty coastal air.
      Our team installed standing seam metal roofing, combined with hurricane clips and marine-grade fasteners for maximum storm resistance.
      The entire project was completed in 3 weeks, ensuring the resort was fully protected before the hurricane season.
    `
 
  },
  'greenwood-retirement-community': {
    label: 'Greenwood Retirement Community',
    title: 'Greenwood Retirement Community Roofing Upgrade',
    description: 'Completed a full roofing upgrade for Greenwood Retirement Community, ensuring safety, energy efficiency, and long-lasting durability for residents.',
    image: `${static_assets}/images/projects/green-wood.jpg`,
    location: 'Greenwood, FL',
    dateCompleted: 'August 5, 2025',
    duration: '2 weeks',
    materials: [
      'Architectural Asphalt Shingles',
      'Synthetic Underlayment',
      'Ice & Water Barrier',
      'Ridge Ventilation System',
      'Galvanized Roofing Nails'
    ],
    content: `
      The Greenwood Retirement Community required a complete roofing upgrade to enhance safety and reduce energy costs for residents.
      Our team installed architectural asphalt shingles paired with a high-performance underlayment and proper ventilation to ensure maximum durability and energy efficiency.
      The upgrade was completed in two weeks, delivering a secure and comfortable environment for all residents.
    `
  },
  'palmetto-business-center': {
    label: 'Palmetto Business Center',
    title: 'Palmetto Business Center Roofing Renovation',
    description: 'Renovated the roofing system for Palmetto Business Center with advanced waterproofing and insulation to improve energy performance and weather resistance.',
    image: `${static_assets}/images/projects/buildings.jpg`,
    location: 'Palmetto, FL',
    dateCompleted: 'September 10, 2025',
    duration: '3 weeks',
    materials: [
      'TPO Roofing Membrane',
      'Insulation Board',
      'Metal Edge Flashing',
      'Roof Drainage System',
      'Sealant & Adhesive'
    ],
    content: `
      The Palmetto Business Center management requested a roofing system that would significantly improve energy performance while providing superior weather protection.
      Our solution involved installing a TPO roofing membrane combined with insulation layers and an upgraded drainage system.
      The renovation was completed in three weeks, resulting in reduced energy costs and enhanced durability for the entire facility.
    `
  },
  'coral-gables-luxury-homes': {
    label: 'Coral Gables Luxury Homes',
    title: 'Coral Gables Luxury Homes Roofing Installation',
    description: 'Installed premium tile roofing for Coral Gables luxury homes, combining elegant design with superior protection against Florida’s tropical climate.',
    image: `${static_assets}/images/projects/default.jpg`,
    location: 'Coral Gables, FL',
    dateCompleted: 'October 2, 2025',
    duration: '4 weeks',
    materials: [
      'Clay Barrel Roof Tiles',
      'Copper Flashing',
      'Waterproof Underlayment',
      'Tile Fastening System',
      'Ridge Caps & Decorative Elements'
    ],
    content: `
      The homeowners in Coral Gables wanted a roofing solution that matched the elegance of their luxury properties while offering strong protection against Florida’s tropical climate.
      Our team installed high-end clay barrel tiles, supported by a waterproof underlayment and copper flashing for long-term durability.
      The installation was completed in four weeks, delivering a stylish, weather-resistant roofing system with timeless appeal.
    `
  },
  'seaside-shopping-plaza': {
    label: 'Seaside Shopping Plaza',
    title: 'Seaside Shopping Plaza Roofing Retrofit',
    description: 'Completed a roofing retrofit for Seaside Shopping Plaza, implementing energy-efficient solutions and enhanced drainage systems for high-traffic retail spaces.',
    image: `${static_assets}/images/projects/shopping.jpg`,
    location: 'Seaside, FL',
    dateCompleted: 'November 14, 2025',
    duration: '3 weeks',
    materials: [
      'TPO Roofing Membrane',
      'Insulation Boards',
      'PVC Flashing',
      'Roof Drainage Components',
      'Sealants & Adhesives',
      'Galvanized Fasteners'
    ],
    content: `
      The management of Seaside Shopping Plaza required a roofing solution that improved energy efficiency while managing heavy rainwater due to the area's coastal weather.
      Our team installed a TPO roofing membrane with upgraded insulation and an advanced drainage system to ensure water is efficiently diverted away from retail spaces.
      The retrofit was completed in 3 weeks without disrupting daily business operations, resulting in a more durable and energy-saving roofing system for the plaza.
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
    feedback: "Total Care Roofing did an amazing job on my roof! Professional, timely, and great quality. ",
  },
  {
    name: "Sarah Smith",
    role: "Property Manager",
    feedback: "They handled our commercial roofing project flawlessly. Highly recommend their services. ",
  },
  {
    name: "David Brown",
    role: "Architect  | Florida",
    feedback: "Excellent craftsmanship and attention to detail. Perfect for high-end projects.",
  },
  {
    name: "Emily Johnson",
    role: "Business Owner",
    feedback: "Quick response and reliable team. They fixed our roof leak in no time!",
  },
  {
    name: "Michael Carter",
    role: "Real Estate Developer | Florida",
    feedback: "Their team exceeded expectations! The roofing project was completed ahead of schedule with top-quality materials.",
  },
  {
    name: "Olivia Wilson",
    role: "Interior Designer",
    feedback: "Amazing service and flawless finish. They worked seamlessly with our design team to deliver stunning results.",
  },
  {
    name: "James Anderson",
    role: "Hotel Manager  | Florida",
    feedback: "Our hotel roof renovation was handled professionally from start to finish. Highly dependable company.",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner  | Florida",
    feedback: "They transformed our old, leaking roof into a strong and beautiful structure. Couldn’t be happier with the results.",
  },
  {
    name: "Robert Lee",
    role: "Construction Contractor | Florida",
    feedback: "These guys are roofing experts. Very detail-oriented and excellent communication throughout the project.",
  },
  {
    name: "Isabella Taylor",
    role: "Retail Owner",
    feedback: "Their emergency repair service saved us during a heavy storm. Quick, efficient, and very professional.",
  },
  {
    name: "William Harris",
    role: "Commercial Property Owner  | Florida",
    feedback: "From start to finish, the team was reliable, professional, and transparent. Best roofing company we’ve worked with.",
  },
  {
    name: "Emma Robinson",
    role: "Home Renovator  | Florida",
    feedback: "Absolutely loved their attention to detail and quality of work. Will hire again for future projects.",
  }
];