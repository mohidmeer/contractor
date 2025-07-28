import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';


export const pages = {
  landing: {
    seo: {
      title: 'Total Care Roofing',
      description: 'Expert roofing services across Florida. Quality roof installation, repairs, and maintenance for homes and businesses.',
      ogImage: '/images/og-home.jpg',
      canonical: 'https://totalcareservicesroofing.com/',
    },
    hero: {
      title: 'Expert Roofing Services You Can Trust',
      description: 'From minor leak repairs to complete roof replacements, our experienced team ensures top-quality craftsmanship, durable materials, and reliable service every step of the way.',
      backgroundImage: '/images/hero_bg_1.jpg',
      ctaText: 'Request a Free Quote',
      ctaLink: '/contact',
    },

  },
  services: {
    seo: {
      title: 'Roofing Services',
      description: 'Explore our roofing services including roof installation, repairs, and inspections for Florida homes and businesses.',
      ogImage: '/images/og-services.jpg',
      canonical: 'https://totalcareservicesroofing.com/services',
    },
  },
  projects: {
    seo: {
      title: 'Roofing Projects in Florida',
      description: 'See our completed roofing projects across Florida. High-quality roof installations and repairs for residential and commercial properties.',
      ogImage: '/images/og-projects.jpg',
      canonical: 'https://totalcareservicesroofing.com/projects',
    },
  },
  about: {
    seo: {
      title: 'About Us',
      description: 'Learn more about Total Care Services, our mission, and why homeowners across Florida trust us for exceptional roofing solutions.',
      ogImage: '/images/og-about.jpg',
      canonical: 'https://totalcareservicesroofing.com/about',
    },
  },
  contact: {
    seo: {
      title: 'Contact Us',
      description:
        'Get in touch with Total Care Services for expert roofing consultations, free quotes, or emergency repairs. Serving homes and businesses across Florida.',
      ogImage: '/images/og-contact.jpg',
      canonical: 'https://totalcareservicesroofing.com/contact',
    },
  },
  blog: {
    seo: {
      title: 'Roofing Tips & Insights',
      description:
        'Stay updated with the latest roofing tips, industry insights, and maintenance advice to keep your roof in top condition year-round.',
      ogImage: '/images/og-blog.jpg',
      canonical: 'https://totalcareservicesroofing.com/blogs',
    },
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
    question: 'How do I know if I need a new roof?',
    answer: 'Signs include frequent leaks, missing shingles, or visible sagging. We offer free inspections to help you decide.',
  },
  {
    question: 'Are your roofing services insured?',
    answer: 'Yes, we are fully licensed and insured for all residential and commercial roofing work.',
  },
  {
    question: 'Do you offer emergency repairs?',
    answer:
      'Absolutely — we provide 24/7 emergency roof repair for storm damage or major leaks.',
  },
];

export const ourProcessData = [
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
    title: "Roofing Services in Miami, FL | Total Care Roofing",
    description:
      "Professional roofing services in Miami, FL. Expert roof installation, repairs, and maintenance to protect your home from Florida weather.",
  },
  {
    name: "Orlando",
    href: "/service-areas/orlando",
    title: "Roofing Services in Orlando, FL | Total Care Roofing",
    description:
      "Trusted roofing company in Orlando, FL. Quality roof replacement, repairs, and maintenance with Florida code compliance.",
  },
  {
    name: "Tampa",
    href: "/service-areas/tampa",
    title: "Roofing Services in Tampa, FL | Total Care Roofing",
    description:
      "Reliable roofing solutions in Tampa, FL. Specializing in shingle, tile, and metal roof installations and repairs.",
  },
  {
    name: "Jacksonville",
    href: "/service-areas/jacksonville",
    title: "Roofing Services in Jacksonville, FL | Total Care Roofing",
    description:
      "Expert roofing services in Jacksonville, FL. From storm damage repairs to new roof installations, we’ve got you covered.",
  },
  {
    name: "Fort Lauderdale",
    href: "/service-areas/fort-lauderdale",
    title: "Roofing Services in Fort Lauderdale, FL | Total Care Roofing",
    description:
      "Fort Lauderdale’s trusted roofing company for durable and energy-efficient roofing solutions.",
  },
  {
    name: "St. Petersburg",
    href: "/service-areas/st-petersburg",
    title: "Roofing Services in St. Petersburg, FL | Total Care Roofing",
    description:
      "Premium roofing services in St. Petersburg, FL. Quality repairs, installations, and maintenance for Florida homes.",
  },
  {
    name: "Hialeah",
    href: "/service-areas/hialeah",
    title: "Roofing Services in Hialeah, FL | Total Care Roofing",
    description: "Affordable and reliable roofing solutions in Hialeah, FL. Get expert roof repair and installation today.",
  },
  {
    name: "Tallahassee",
    href: "/service-areas/tallahassee",
    title: "Roofing Services in Tallahassee, FL | Total Care Roofing",
    description:
      "Roofing experts serving Tallahassee, FL. Specializing in repairs, replacements, and maintenance for all roof types.",
  },
  {
    name: "Cape Coral",
    href: "/service-areas/cape-coral",
    title: "Roofing Services in Cape Coral, FL | Total Care Roofing",
    description:
      "Cape Coral roofing services for homes and businesses. Expert roof installation and repair for Florida’s coastal weather.",
  },
  {
    name: "West Palm Beach",
    href: "/service-areas/west-palm-beach",
    title: "Roofing Services in West Palm Beach, FL | Total Care Roofing",
    description:
      "Professional roofing services in West Palm Beach, FL. Durable roofing systems built for Florida’s climate.",
  },
  {
    name: "Naples",
    href: "/service-areas/naples",
    title: "Roofing Services in Naples, FL | Total Care Roofing",
    description:
      "Naples’ trusted roofing experts. Offering roof repairs, installations, and hurricane-resistant roofing solutions.",
  },
  {
    name: "Sarasota",
    href: "/service-areas/sarasota",
    title: "Roofing Services in Sarasota, FL | Total Care Roofing",
    description: "Reliable roofing company in Sarasota, FL. Specializing in shingle, tile, and metal roofing systems.",
  },
  {
    name: "Fort Myers",
    href: "/service-areas/fort-myers",
    title: "Roofing Services in Fort Myers, FL | Total Care Roofing",
    description:
      "Roofing services in Fort Myers, FL. We provide roof replacements, leak repairs, and storm damage restoration.",
  },
  {
    name: "Clearwater",
    href: "/service-areas/clearwater",
    title: "Roofing Services in Clearwater, FL | Total Care Roofing",
    description:
      "Clearwater roofing professionals delivering quality roof repairs and installations with top-rated materials.",
  },
  {
    name: "Boca Raton",
    href: "/service-areas/boca-raton",
    title: "Roofing Services in Boca Raton, FL | Total Care Roofing",
    description:
      "Trusted Boca Raton roofing contractor. Offering high-quality roofing installations and repairs.",
  },
  {
    name: "Palm Beach",
    href: "/service-areas/palm-beach",
    title: "Roofing Services in Palm Beach, FL | Total Care Roofing",
    description:
      "Palm Beach roofing experts for premium roofing systems that last. Call for a free estimate.",
  },
  {
    name: "Pensacola",
    href: "/service-areas/pensacola",
    title: "Roofing Services in Pensacola, FL | Total Care Roofing",
    description:
      "Pensacola roofing contractor offering storm damage repairs, roof replacements, and maintenance services.",
  },
  {
    name: "Daytona Beach",
    href: "/service-areas/daytona-beach",
    title: "Roofing Services in Daytona Beach, FL | Total Care Roofing",
    description:
      "Daytona Beach roofing services with hurricane-resistant solutions for Florida homes.",
  }
];