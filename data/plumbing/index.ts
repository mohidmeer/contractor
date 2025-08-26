import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */
export const static_assets = '/plumbing'
export const siteUrl = 'https://totalcareservicesplumbing.com/'
export const siteName = 'Total Care Plumbing'
export const siteLogo = `${static_assets}/images/logo.png`
export const googleAnalyticId = 'G-S5WENH3ET7'
export const bussinessType = ["LocalBusiness", "Plumber"]


export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@totalcareservicesplumbing.com',
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
    title: 'Total Care Plumbing',
    description: 'Reliable plumbing services across Florida. From emergency repairs to complete system installations for homes and businesses.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Professional Plumbing Services You Can Rely On',
    description: 'Whether it’s a leaky faucet or a full plumbing system upgrade, our skilled technicians deliver fast, clean, and dependable service every time.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Schedule Your Service',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Plumbing Services'
  },
  projects: {
    heading: 'Plumbing Projects Across Florida'
  }
}

export const servicesPage = {
  seo: {
    title: 'Plumbing Services in Florida',
    description: 'Explore our plumbing services including pipe repairs, drain cleaning, water heater installations, and emergency plumbing for Florida homes and businesses.',
    ogImage: `${static_assets}/images/services/default.jpg`,
    canonical: siteUrl + 'services',
  },
}

export const projectsPage = {
  seo: {
    title: 'Plumbing Projects in Florida',
    description: 'See our completed plumbing projects across Florida. From installations to emergency repairs for both homes and commercial properties.',
    ogImage: `${static_assets}`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Us',
    description: 'Learn more about Total Care Services, our mission, and why homeowners across Florida trust us for reliable plumbing solutions.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'About Total Care Plumbing is a Florida-based company offering professional plumbing solutions with a focus on reliability, clear communication, and long-term value for every property we serve.'
}

export const contactPage = {
  seo: {
    title: 'Contact Us',
    description: 'Get in touch with Total Care Services for plumbing consultations, service requests, or emergency repairs. Serving homes and businesses across Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Contact Us',
    messagePlaceholder: "Tell us what your pipes have been up to — we’ve seen it all."
  }
}

export const blogPage = {
  seo: {
    title: 'Plumbing Tips & Insights Florida',
    description: 'Stay updated with plumbing tips, industry insights, and home maintenance advice to keep your plumbing system flowing smoothly year-round.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Plumbing Services In Florida',
    description: 'We provide top-quality residential and commercial plumbing services across Florida, ensuring reliability and long-lasting solutions.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Plumbing with Precision, Integrity, and Care',
  description: 'Total Care Plumbing is your trusted partner for dependable plumbing solutions across Florida. We prioritize expert workmanship, clear communication, and treating every property with genuine care.',
  keyPoints: [
    {
      title: 'Licensed & Insured',
      desc: 'Our plumbers are certified and comply with all Florida codes and regulations.'
    },
    {
      title: 'Top-Quality Fixtures',
      desc: 'We install durable, high-performance plumbing systems built to last.'
    },
    {
      title: 'Clean & Efficient',
      desc: 'We finish quickly and leave your home or business spotless after each service.'
    }
  ],
  image1_url: static_assets +'/images/services/water_filteration.jpg',
  image2_url: static_assets +'/images/services/facuet.jpg',
  image3_url: static_assets +'/images/services/pipe_installation.jpg',
  image4_url: static_assets +'/images/services/water_heater.jpg',
}


export const faqs = [
  {
    question: "Do you offer free plumbing inspections?",
    answer: "Yes, we provide free inspections and estimates for plumbing issues in homes and commercial properties."
  },
  {
    question: "What plumbing services do you provide?",
    answer: "We offer everything from leak detection and pipe repairs to water heater installations and full plumbing system upgrades."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our plumbers are licensed, insured, and trained to meet Florida’s safety and code standards."
  },
  {
    question: "Do you offer emergency plumbing services?",
    answer: "Yes, we’re available 24/7 for emergency plumbing issues like burst pipes, overflowing toilets, and major leaks."
  },
  {
    question: "How quickly can you respond to a service call?",
    answer: "We aim to respond to most service calls within the same day, depending on availability and urgency."
  },
  {
    question: "Do you service both residential and commercial properties?",
    answer: "Yes, we handle plumbing projects for homes, offices, retail stores, restaurants, and other commercial properties."
  }
];


export const ourProcessData = {
  heading: 'Our Process',
  description: 'From the first call to final inspection, we make plumbing services efficient and stress-free.',
  list: [
    {
      title: "Initial Consultation",
      description: "We begin with a detailed consultation to understand your plumbing concerns, needs, and preferences.",
      icon: FaComments
    },
    {
      title: "On-Site Inspection",
      description: "Our licensed plumbers visit your property to assess the issue and identify the best solution.",
      icon: FaSearch
    },
    {
      title: "Custom Proposal",
      description: "We provide a clear, detailed estimate with a breakdown of services, materials, and timelines.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling the Work",
      description: "Once approved, we schedule the job at your convenience and ensure all materials are ready.",
      icon: FaCalendarAlt
    },
    {
      title: "Plumbing Service",
      description: "Our team carries out the plumbing work using quality materials and expert techniques for lasting results.",
      icon: FaHammer
    },
    {
      title: "Final Testing & Handover",
      description: "We thoroughly test all plumbing systems, ensure proper function, and clean up before completion.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Qualified Experts",
    description: "Our licensed plumbers have the experience and training to handle everything from leaks to complex installations with precision.",
    icon: FaUserTie
  },
  {
    title: "Workmanship Quality",
    description: "We use durable parts, proper techniques, and meticulous care to ensure long-lasting plumbing solutions.",
    icon: FaTools
  },
  {
    title: "Trusted & Reliable",
    description: "We show up on time, do the job right, and keep you informed every step of the way — no surprises.",
    icon: FaHandshake
  },
  {
    title: "Affordable Pricing",
    description: "We offer transparent, competitive pricing with no hidden fees — just honest work at a fair price.",
    icon: FaDollarSign
  },
  {
    title: "Customer Satisfaction",
    description: "We’re not done until you’re happy. Our friendly team makes sure you’re confident in the results.",
    icon: FaSmile
  },
  {
    title: "Safety & Compliance",
    description: "We follow plumbing codes and safety standards to ensure your home or business is secure and up to code.",
    icon: FaShieldAlt
  }
];


export const accomplishmentData = [
  { title: "Commercial Projects", number: 100 },
  { title: "Residential Jobs", number: 250 },
  { title: "Expert Plumbers", number: 50 },
  { title: "Happy Clients", number: 500 },
];

/* -----------------------
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
      { label: 'Pipe Installation', href: '/services/pipe-installation', hasChildrens: false },
      { label: 'Leak Repair', href: '/services/leak-repair', hasChildrens: false },
      { label: 'Drain Cleaning', href: '/services/drain-cleaning', hasChildrens: false },
      { label: 'Water Heater Services', href: '/services/water-heater-services', hasChildrens: false },
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing', hasChildrens: false },
      { label: 'Sewer Line Repair', href: '/services/sewer-line-repair', hasChildrens: false },
      { label: 'Toilet Installation', href: '/services/toilet-installation', hasChildrens: false },
      { label: 'Faucet & Fixture Repair', href: '/services/faucet-fixture-repair', hasChildrens: false },
      { label: 'Bathroom Plumbing', href: '/services/bathroom-plumbing', hasChildrens: false },
      { label: 'Water Filtration Systems', href: '/services/water-filtration-systems', hasChildrens: false },
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Downtown Office Plumbing', href: '/projects/downtown-office-plumbing', hasChildrens: false },
      { label: 'Sunrise Apartments Upgrade', href: '/projects/sunrise-apartments-upgrade', hasChildrens: false },
      { label: 'Palm Heights Condos', href: '/projects/palm-heights-condos', hasChildrens: false },
      { label: 'City Mall Restrooms', href: '/projects/city-mall-restrooms', hasChildrens: false },
      { label: 'Heritage Hotel Plumbing', href: '/projects/heritage-hotel-plumbing', hasChildrens: false },
      { label: 'Ocean Bay Resort', href: '/projects/ocean-bay-resort', hasChildrens: false },
      { label: 'Community Center Bathrooms', href: '/projects/community-center-bathrooms', hasChildrens: false },
      { label: 'Eco Homes Plumbing', href: '/projects/eco-homes-plumbing', hasChildrens: false },
      { label: 'Harbor Plaza Refit', href: '/projects/harbor-plaza-refit', hasChildrens: false },
    ]
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
  tagline: 'Keeping Florida Flowing with Expert Plumbing, Fast Repairs, and Trusted Service.'
};

/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "Plumbing Services in Miami, FL",
    description: "Professional plumbing services in Miami, FL. Expert leak repair, pipe installations, and drain cleaning to keep your home running smoothly.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Plumbing Services in Orlando, FL",
    description: "Trusted plumbing company in Orlando, FL. Quality repairs, repiping, and maintenance with Florida code compliance.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Plumbing Services in Tampa, FL",
    description: "Reliable plumbing solutions in Tampa, FL. Specializing in water heater installs, pipe repairs, and emergency services.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Plumbing Services in Jacksonville, FL",
    description: "Expert plumbing services in Jacksonville, FL. From water leaks to sewer line repairs, we’ve got you covered.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Plumbing Services in Fort Lauderdale, FL",
    description: "Fort Lauderdale’s trusted plumbing company for durable and efficient home plumbing systems.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Plumbing Services in St. Petersburg, FL",
    description: "Premium plumbing services in St. Petersburg, FL. Quality repairs, fixture installs, and maintenance for Florida homes.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Plumbing Services in Hialeah, FL",
    description: "Affordable and reliable plumbing solutions in Hialeah, FL. Get expert pipe repairs and installations today.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Tallahassee",
    href: "/tallahassee",
    title: "Plumbing Services in Tallahassee, FL",
    description: "Plumbing experts serving Tallahassee, FL. Specializing in leak detection, pipe repair, and home plumbing upgrades.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Plumbing Services in Cape Coral, FL",
    description: "Cape Coral plumbing services for homes and businesses. Expert fixture installation and emergency repairs.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Plumbing Services in West Palm Beach, FL",
    description: "Professional plumbing services in West Palm Beach, FL. Fast, durable repairs built for Florida’s needs.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Plumbing Services in Naples, FL",
    description: "Naples’ trusted plumbing experts. Offering full-service plumbing and water-saving upgrades.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Sarasota",
    href: "/sarasota",
    title: "Plumbing Services in Sarasota, FL",
    description: "Reliable plumbing company in Sarasota, FL. Specializing in residential and commercial plumbing systems.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Plumbing Services in Fort Myers, FL",
    description: "Plumbing services in Fort Myers, FL. We provide pipe replacement, clog removal, and water heater installation.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Clearwater",
    href: "/clearwater",
    title: "Plumbing Services in Clearwater, FL",
    description: "Clearwater plumbing professionals delivering quality repairs and installs with top-rated equipment.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Plumbing Services in Boca Raton, FL",
    description: "Trusted Boca Raton plumbing contractor. Offering high-quality leak detection, drain cleaning, and repairs.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Palm Beach",
    href: "/palm-beach",
    title: "Plumbing Services in Palm Beach, FL",
    description: "Palm Beach plumbing experts for reliable water and drainage systems. Call for a free estimate.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Plumbing Services in Pensacola, FL",
    description: "Pensacola plumbing contractor offering emergency repairs, installations, and inspections.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  },
  {
    name: "Daytona Beach",
    href: "/daytona-beach",
    title: "Plumbing Services in Daytona Beach, FL",
    description: "Daytona Beach plumbing services built to handle Florida weather. Fast service and quality workmanship.",
    content: 'Total Care Plumbing is a locally rooted company providing dependable plumbing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    image: `${static_assets}/images/services/hero_bg_3.jpg`
  }
];

/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
  'pipe-installation': {
    label: 'Pipe Installation',
    title: 'Expert Pipe Installation Services in Florida',
    description: 'Ensure reliable plumbing with our professional pipe installation services. We handle residential and commercial projects using durable, code-compliant materials.',
    content: `Proper pipe installation is the backbone of any efficient plumbing system. At Total Care Plumbing, we offer top-tier pipe installation services across Florida, ensuring water flows seamlessly through your home or business. Whether you're building a new property, remodeling, or replacing outdated pipes, our licensed plumbers provide accurate fittings, secure connections, and long-lasting materials. We work with PEX, copper, and PVC piping and ensure all installations meet Florida codes and standards. With our commitment to quality and precision, we prevent leaks, improve water pressure, and ensure a plumbing system built to last.`,
    image: static_assets +'/images/services/pipe_installation.jpg',
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'PEX Pipe Installation',
        'Copper Piping',
        'PVC & CPVC Installations',
        'Whole-House Re-piping',
        'New Construction Plumbing',
        'Bathroom & Kitchen Pipes',
        'Underground Pipe Installation',
        'Commercial Pipe Fitting',
        'Code-Compliant Upgrades',
        'Leak-Free Connections'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Durable & Long-Lasting Materials',
        description: 'We use industry-grade piping materials like PEX and copper that resist corrosion, high pressure, and temperature changes.'
      },
      {
        title: 'Leak Prevention & Water Safety',
        description: 'Precision installation techniques prevent leaks and maintain water quality throughout your plumbing system.'
      },
      {
        title: 'Efficient Water Flow',
        description: 'Properly installed pipes ensure balanced pressure and consistent water flow for all your fixtures and appliances.'
      },
      {
        title: 'Code-Compliant Installations',
        description: 'We follow all local Florida building codes to ensure safety, legality, and long-term reliability.'
      },
      {
        title: 'Fast & Clean Service',
        description: 'Our team works efficiently with minimal disruption to your property and leaves the worksite clean.'
      },
      {
        title: 'Custom Pipe Layouts',
        description: 'We tailor pipe routes to your home or building layout, optimizing performance and accessibility.'
      },
      {
        title: 'Free Estimates & Transparent Pricing',
        description: 'No hidden fees. We provide clear estimates and walk you through all options before starting any work.'
      }
    ],
    faqs: [
      {
        question: "What type of pipes do you install?",
        answer: "We install PEX, copper, PVC, and CPVC piping, depending on your plumbing needs and budget."
      },
      {
        question: "Do I need to replace all my pipes during a remodel?",
        answer: "Not always. We evaluate the condition of existing pipes and recommend replacements only when necessary."
      },
      {
        question: "How long does a pipe installation take?",
        answer: "Most residential pipe installations or re-piping projects are completed in 1–3 days depending on the scope."
      },
      {
        question: "Is your work insured and licensed?",
        answer: "Yes, all our plumbers are licensed, insured, and experienced in Florida residential and commercial codes."
      },
      {
        question: "Can you install pipes in new construction?",
        answer: "Absolutely. We provide full plumbing layout and pipe installation services for new homes and commercial builds."
      },
      {
        question: "Do you offer warranties on your installations?",
        answer: "Yes, we offer workmanship warranties and use manufacturer-backed materials for added protection."
      }
    ],
    images: [`${static_assets}/images/services/pipe_installation.jpg`]
  },
  'leak-repair': {
    label: 'Leak Repair',
    title: 'Reliable Leak Repair Services in Florida',
    description: 'We specialize in fast and accurate leak detection and repair, helping homeowners and businesses prevent water damage and costly utility bills.',
    content: `Water leaks can cause serious damage if left unaddressed. Our expert plumbers provide prompt and professional leak repair services throughout Florida. Whether it’s a dripping faucet, slab leak, hidden pipe leak, or water heater issue, we use advanced tools like acoustic sensors and thermal imaging to locate the source without tearing up your property. Once detected, we provide immediate and permanent solutions using quality materials and proven methods. Our team is trained to handle both residential and commercial leak repairs, ensuring your plumbing system runs smoothly and your property stays dry and damage-free.`,
    image: `${static_assets}/images/services/leak_repair.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Slab Leak Detection & Repair',
        'Faucet & Fixture Leak Repair',
        'Toilet Leak Repair',
        'Ceiling & Wall Leak Repair',
        'Underground Pipe Leaks',
        'Water Heater Leak Repair',
        'Drain & Sewer Leak Fixes',
        'Thermal Imaging & Acoustic Detection',
        'Emergency Leak Repairs',
        'Preventive Leak Inspections'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Early Leak Detection',
        description: 'Our non-invasive tools help detect leaks quickly before they cause extensive damage or mold growth.'
      },
      {
        title: 'Lower Utility Bills',
        description: 'Fixing leaks can significantly reduce your monthly water bill by eliminating water waste.'
      },
      {
        title: 'Damage Prevention',
        description: 'Timely repairs protect walls, flooring, and foundations from costly water damage.'
      },
      {
        title: 'Advanced Leak Detection Tools',
        description: 'We use the latest technology to pinpoint hidden leaks with minimal disruption to your home.'
      },
      {
        title: 'Emergency Services Available',
        description: 'Our team is available 24/7 to handle urgent leaks and prevent further property damage.'
      },
      {
        title: 'Licensed & Insured Technicians',
        description: 'All leak repair services are performed by experienced, certified professionals.'
      },
      {
        title: 'Transparent Pricing',
        description: 'We provide upfront estimates with no hidden fees or surprise costs.'
      }
    ],
    faqs: [
      {
        question: "How do I know if I have a hidden leak?",
        answer: "Signs include unexplained high water bills, damp spots, mold growth, and the sound of running water when no fixtures are in use."
      },
      {
        question: "Can you repair slab leaks without tearing up the floor?",
        answer: "Yes, we use non-invasive methods like rerouting or epoxy lining when possible to avoid floor damage."
      },
      {
        question: "Are leak repairs covered by homeowners insurance?",
        answer: "It depends on the policy, but many cover sudden and accidental leaks. We can assist with documentation if needed."
      },
      {
        question: "Do you offer emergency leak repair services?",
        answer: "Yes, our team is on-call 24/7 for emergency situations such as burst pipes or major leaks."
      },
      {
        question: "How long does a leak repair take?",
        answer: "Most repairs are completed within a few hours, but complex cases may take longer depending on the location and damage."
      },
      {
        question: "Will you inspect my entire plumbing system?",
        answer: "Absolutely! If you suspect a leak, we can perform a full system inspection to ensure no other hidden issues exist."
      }
    ],
    images: [`${static_assets}/images/services/leak_repair.jpg`]
  },
  'drain-cleaning': {
    label: 'Drain Cleaning',
    title: 'Expert Drain Cleaning Services in Florida',
    description: 'We offer fast, affordable, and long-lasting drain cleaning services to keep your plumbing system flowing smoothly and prevent clogs.',
    content: `Clogged drains are not just inconvenient—they can lead to foul odors, slow drainage, and even pipe damage. Our Florida-based team provides comprehensive drain cleaning services for homes and businesses using advanced tools like hydro-jetting and motorized augers. Whether it’s a slow kitchen sink, backed-up toilet, or blocked main sewer line, we’ll clear it quickly and efficiently. We also provide video camera inspections to locate stubborn blockages deep in the system. With our proactive approach and expert technicians, you can prevent recurring clogs and protect your plumbing investment.`,
    image: `${static_assets}/images/services/drain_cleaning.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Kitchen Sink Drain Cleaning',
        'Bathroom Sink & Tub Drains',
        'Toilet Drain Clearing',
        'Main Sewer Line Cleaning',
        'Hydro Jetting Services',
        'Drain Snaking & Augering',
        'Grease & Food Buildup Removal',
        'Tree Root Removal from Pipes',
        'Video Camera Drain Inspection',
        'Preventative Maintenance Plans'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Fast & Efficient Service',
        description: 'We respond quickly and resolve most drain issues on the first visit to minimize disruption.'
      },
      {
        title: 'Advanced Cleaning Equipment',
        description: 'Our tools like hydro-jetters and augers break up even the toughest clogs without damaging your pipes.'
      },
      {
        title: 'Elimination of Foul Odors',
        description: 'Clearing clogs removes built-up debris and bacteria, keeping your home smelling fresh.'
      },
      {
        title: 'Preventative Care',
        description: 'Routine drain cleaning helps avoid emergency backups and expensive repairs down the line.'
      },
      {
        title: 'Non-Invasive Inspections',
        description: 'We use camera inspections to diagnose deep clogs without tearing up your property.'
      },
      {
        title: 'Eco-Friendly Solutions',
        description: 'We avoid harsh chemicals and use safe, effective methods to protect your plumbing and the environment.'
      },
      {
        title: '24/7 Emergency Availability',
        description: 'Our team is available day and night for urgent drain issues that need immediate attention.'
      }
    ],
    faqs: [
      {
        question: "How do I know if I need professional drain cleaning?",
        answer: "Signs include slow drainage, gurgling sounds, foul smells, or frequent clogs in the same area."
      },
      {
        question: "Is hydro-jetting safe for old pipes?",
        answer: "Yes, but we inspect your pipes first to ensure they're strong enough. If not, we’ll use alternative methods like snaking."
      },
      {
        question: "Do you use chemical drain cleaners?",
        answer: "No, we use professional-grade tools that are safer and more effective than harsh chemicals."
      },
      {
        question: "Can tree roots cause drain clogs?",
        answer: "Absolutely. Tree roots can grow into sewer lines, and we have the tools to remove them safely."
      },
      {
        question: "How often should I get my drains cleaned?",
        answer: "We recommend once a year for high-use systems, or as soon as you notice signs of buildup or blockage."
      },
      {
        question: "Do you offer maintenance plans?",
        answer: "Yes, we offer affordable maintenance plans to keep your drains clear year-round and prevent emergencies."
      }
    ],
    images: [`${static_assets}/images/services/drain_cleaning.jpg`]
  },
  'water-heater-services': {
    label: 'Water Heater Services',
    title: 'Reliable Water Heater Services in Florida',
    description: 'We provide expert water heater installation, repair, and maintenance to ensure you have consistent hot water whenever you need it.',
    content: `A dependable water heater is essential for daily comfort—whether you're showering, washing dishes, or doing laundry. Our team offers comprehensive water heater services across Florida, including installation of new systems, emergency repairs, and routine maintenance. We work with both traditional tank-style heaters and energy-efficient tankless models. From diagnosing issues like strange noises or lack of hot water to full system replacements, we ensure your hot water supply is restored quickly and reliably. With our expert knowledge and high-quality equipment, we help Florida homeowners enjoy efficient, long-lasting water heater performance.`,
    image: `${static_assets}/images/services/water_heater.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Water Heater Installation',
        'Tankless Water Heater Setup',
        'Traditional Tank Replacement',
        'Thermostat & Element Repair',
        'Hot Water Recovery Issues',
        'Water Heater Flushing',
        'Pilot Light Repair & Ignition Fix',
        'Leak Detection & Repair',
        'Gas & Electric Heater Services',
        'Energy-Efficient Upgrades'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Fast Hot Water Restoration',
        description: 'We repair and replace water heaters quickly, so you’re never without hot water for long.'
      },
      {
        title: 'Expert Diagnosis & Repair',
        description: 'Our technicians accurately identify issues and fix them using proven tools and methods.'
      },
      {
        title: 'Tankless Water Heater Options',
        description: 'We install compact, energy-efficient tankless systems that provide hot water on demand.'
      },
      {
        title: 'Lower Energy Bills',
        description: 'Modern water heaters use less energy, saving you money while providing better performance.'
      },
      {
        title: 'Emergency Services Available',
        description: 'Got a leaking tank or no hot water? We offer 24/7 emergency response across Florida.'
      },
      {
        title: 'Long-Term Maintenance Plans',
        description: 'Keep your system running longer with scheduled maintenance and annual flushes.'
      },
      {
        title: 'Safe & Code-Compliant Installations',
        description: 'All installations meet Florida safety codes, ensuring peace of mind for your family.'
      }
    ],
    faqs: [
      {
        question: "How long does a water heater typically last?",
        answer: "Traditional tank heaters last 8–12 years, while tankless models can last up to 20 years with proper care."
      },
      {
        question: "Do you install both gas and electric models?",
        answer: "Yes, we handle installation and repair for both gas and electric water heaters."
      },
      {
        question: "What are signs my water heater needs service?",
        answer: "Rusty water, odd noises, leaks, or inconsistent water temperature are common warning signs."
      },
      {
        question: "Is a tankless water heater better?",
        answer: "Tankless heaters offer endless hot water and better energy efficiency, but upfront costs are higher."
      },
      {
        question: "Do you offer financing or payment plans?",
        answer: "Yes, we provide flexible payment options for new installations or major repairs."
      },
      {
        question: "Can I switch from tank to tankless?",
        answer: "Absolutely! We’ll assess your home’s setup and recommend the best option for a seamless upgrade."
      }
    ],
    images: [`${static_assets}/images/services/water_heater.jpg`]
  },
  'emergency-plumbing': {
    label: 'Emergency Plumbing',
    title: '24/7 Emergency Plumbing Services in Florida',
    description: 'When plumbing disasters strike, our emergency plumbers are ready around the clock to stop leaks, fix bursts, and restore flow fast.',
    content: `Plumbing emergencies can cause serious damage if not addressed immediately. That’s why we offer 24/7 emergency plumbing services throughout Florida. Whether it’s a burst pipe, a major leak, or a sewage backup, our experienced plumbers respond quickly with the right tools and parts to get things under control. We prioritize speed, safety, and quality repairs—restoring water flow and preventing further damage. With Total Care Plumbing, you don’t have to wait until morning to fix a flooded bathroom or overflowing sink. Call us any time, day or night, for immediate, professional service.`,
    image: `${static_assets}/images/services/emergency_plumbing.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Burst Pipe Repairs',
        'Water Leak Detection',
        'Overflowing Toilet Fixes',
        'Sewer Line Emergencies',
        'Frozen or Broken Pipes',
        'Clogged Drain Clearing',
        'Flood Damage Prevention',
        'Emergency Water Shutoff',
        'Backflow Troubleshooting',
        'Immediate Plumbing Response'
      ]
    },
    benefitsOFChoosing: [
      {
        title: '24/7 Availability',
        description: 'We’re always on call—day, night, weekends, and holidays—to respond to urgent plumbing problems.'
      },
      {
        title: 'Fast Emergency Response',
        description: 'Our team arrives promptly to stop leaks, reduce damage, and restore safety.'
      },
      {
        title: 'Fully Equipped Technicians',
        description: 'We arrive with the tools and parts needed to handle most plumbing issues on the spot.'
      },
      {
        title: 'Flood & Water Damage Mitigation',
        description: 'Quick action prevents costly structural damage, mold growth, and property loss.'
      },
      {
        title: 'Licensed & Insured Professionals',
        description: 'All work is performed by certified plumbers who meet Florida safety and building codes.'
      },
      {
        title: 'Transparent Pricing',
        description: 'Even in emergencies, we offer honest pricing with no hidden fees.'
      },
      {
        title: 'Peace of Mind Anytime',
        description: 'You can count on us in any crisis—we’ve got your back when plumbing goes wrong.'
      }
    ],
    faqs: [
      {
        question: "What qualifies as a plumbing emergency?",
        answer: "Anything that risks flooding, severe leaks, sewer backups, or loss of water access counts as an emergency."
      },
      {
        question: "How fast can you arrive during an emergency?",
        answer: "In most Florida areas, we can dispatch a plumber within 30–60 minutes."
      },
      {
        question: "Do you charge extra for nights or weekends?",
        answer: "We maintain fair pricing even during off-hours and provide upfront estimates before work begins."
      },
      {
        question: "Should I shut off my water before you arrive?",
        answer: "Yes—if possible, turn off your main water supply to minimize damage until we get there."
      },
      {
        question: "Can you fix water heater emergencies too?",
        answer: "Absolutely. We handle all emergency plumbing issues, including water heater breakdowns."
      },
      {
        question: "Are emergency services available on holidays?",
        answer: "Yes, our team is available 24/7—including weekends and holidays—across Florida."
      }
    ],
    images: [`${static_assets}/images/services/emergency_plumbing.jpg`]
  },
  'sewer-line-repair': {
    label: 'Sewer Line Repair',
    title: 'Reliable Sewer Line Repair Services in Florida',
    description: 'We specialize in fast, effective sewer line repair and replacement to resolve backups, odors, and pipe damage before they become bigger issues.',
    content: `Sewer line issues can be messy, stressful, and hazardous to your health. At Total Care Plumbing, we provide expert sewer line repair services across Florida to resolve blockages, root intrusion, pipe corrosion, and collapse. Our licensed plumbers use advanced diagnostic tools like camera inspections to pinpoint the problem and deliver precise, lasting repairs. Whether it’s a small clog or a full line replacement, we act fast to restore proper drainage and protect your home from sewage backups and contamination. Count on us for quality work, minimal disruption, and peace of mind.`,
    image: `${static_assets}/images/services/sewer_pipes.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Trenchless Sewer Repair',
        'Sewer Line Replacement',
        'Tree Root Removal',
        'Video Camera Inspections',
        'Clog Clearing & Hydro Jetting',
        'Corrosion & Crack Repair',
        'Backflow Prevention',
        'Sewer Odor Detection',
        'Subsurface Leak Location',
        'Routine Sewer Maintenance'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Advanced Diagnostics',
        description: 'We use video inspections and leak detection to find issues without tearing up your property.'
      },
      {
        title: 'Trenchless Repair Options',
        description: 'Minimally invasive techniques preserve landscaping and reduce repair time.'
      },
      {
        title: 'Health & Safety First',
        description: 'Sewer repairs are handled with strict safety protocols to protect your family and environment.'
      },
      {
        title: 'Long-Term Solutions',
        description: 'We don’t just patch—it’s about lasting fixes with high-quality materials and workmanship.'
      },
      {
        title: 'Licensed & Insured Team',
        description: 'Our plumbers are fully certified to repair or replace sewer lines up to Florida code.'
      },
      {
        title: 'Fast & Clean Work',
        description: 'We respect your home—no mess left behind, and repairs done right the first time.'
      },
      {
        title: 'Emergency Services Available',
        description: 'Facing a sewage emergency? We offer rapid-response repairs when you need us most.'
      }
    ],
    faqs: [
      {
        question: "How do I know if my sewer line needs repair?",
        answer: "Common signs include slow drains, sewage odors, gurgling toilets, or wet spots in your yard."
      },
      {
        question: "Is sewer repair covered by insurance?",
        answer: "It depends on your policy, but sudden damage may be covered. We can assist with documentation."
      },
      {
        question: "Do you offer trenchless repairs?",
        answer: "Yes, we offer trenchless solutions like pipe bursting and lining for less disruption and faster service."
      },
      {
        question: "Can tree roots damage sewer lines?",
        answer: "Absolutely—roots are a major cause of cracked and blocked lines. We remove them and reinforce your pipes."
      },
      {
        question: "How long does sewer line repair take?",
        answer: "Most repairs are completed in 1–2 days, depending on severity and repair method."
      },
      {
        question: "Do I need a permit for sewer line work?",
        answer: "In most cases, yes. But don’t worry—we handle all permits and compliance for you."
      }
    ],
    images: [`${static_assets}/images/services/sewer_pipes.jpg`]
  },
  'toilet-installation': {
    label: 'Toilet Installation',
    title: 'Expert Toilet Installation Services in Florida',
    description: 'We offer professional toilet installation with efficient, leak-free setup—perfect for remodels, upgrades, or new builds.',
    content: `Upgrading or replacing your toilet might seem simple, but a proper installation ensures long-term performance and avoids costly leaks or water damage. At Total Care Plumbing, we install all types of toilets—from standard models to low-flow and smart toilets—with precision and care. Our licensed plumbers handle everything, including removal of old units, secure fittings, wax seals, water connections, and flushing system tests. Whether you're remodeling a bathroom or fixing a broken unit, we provide fast, clean, and code-compliant installation across Florida.`,
    image: `${static_assets}/images/services/toilet.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Standard Toilet Installation',
        'Low-Flow Toilets',
        'Dual-Flush Toilets',
        'Wall-Mounted Toilets',
        'Smart Toilets',
        'ADA-Compliant Toilets',
        'Toilet Replacement',
        'Eco-Friendly Models',
        'Toilet Leak Detection',
        'Bathroom Remodel Support'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Flawless Installation',
        description: 'Our team ensures a secure, level, and leak-free toilet installation every time.'
      },
      {
        title: 'Wide Toilet Options',
        description: 'We install traditional, modern, and eco-friendly toilets tailored to your needs and budget.'
      },
      {
        title: 'Water-Saving Efficiency',
        description: 'Upgrading to low-flow models helps reduce your monthly water bill and environmental impact.'
      },
      {
        title: 'Quick Turnaround',
        description: 'Most toilet installs are completed within an hour or two—no hassle, no delays.'
      },
      {
        title: 'Clean & Respectful Service',
        description: 'We work neatly and leave your bathroom spotless after installation.'
      },
      {
        title: 'Trusted Local Plumbers',
        description: 'Fully licensed and insured pros who follow Florida plumbing codes and safety standards.'
      },
      {
        title: 'Warranty on Workmanship',
        description: 'Enjoy peace of mind with our workmanship guarantee on all toilet installations.'
      }
    ],
    faqs: [
      {
        question: "How long does toilet installation take?",
        answer: "Usually around 1–2 hours depending on the existing plumbing and toilet type."
      },
      {
        question: "Can I supply my own toilet?",
        answer: "Yes! We’re happy to install any unit you provide, or we can help you choose the right model."
      },
      {
        question: "Do you remove and dispose of old toilets?",
        answer: "Absolutely. We handle full removal and eco-friendly disposal as part of our service."
      },
      {
        question: "Is it worth upgrading to a low-flow toilet?",
        answer: "Yes—low-flow toilets can save thousands of gallons of water per year without compromising performance."
      },
      {
        question: "Do you install toilets in commercial buildings?",
        answer: "Yes, we serve both residential and commercial properties across Florida."
      },
      {
        question: "What if there’s a leak after installation?",
        answer: "All our work is guaranteed. If there’s any issue, we’ll return promptly to fix it."
      }
    ],
    images: [`${static_assets}/images/services/toilet.jpg`]
  },
  'faucet-fixture-repair': {
    label: 'Faucet & Fixture Repair',
    title: 'Reliable Faucet and Fixture Repair Services in Florida',
    description: 'We fix leaky faucets, dripping showerheads, and broken fixtures quickly and efficiently—saving you water, money, and stress.',
    content: `A dripping faucet or faulty fixture isn’t just annoying—it wastes water and can lead to higher bills or water damage. At Total Care Plumbing, we offer expert faucet and fixture repair services for kitchens, bathrooms, and outdoor spaces. Whether it's a worn-out washer, corroded valve, or loose handle, our plumbers diagnose the issue and make precision repairs on the spot. We service all major brands and can also upgrade outdated fixtures for improved performance and style. Trust us for fast, reliable, and mess-free plumbing solutions anywhere in Florida.`,
    image: `${static_assets}/images/services/facuet.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Leaky Faucet Repair',
        'Showerhead Replacement',
        'Handle & Valve Fixes',
        'Sink & Basin Fixtures',
        'Outdoor Spigot Repair',
        'Bathtub Fixture Repair',
        'Kitchen Faucet Upgrades',
        'Low Water Pressure Issues',
        'Drip & Leak Diagnosis',
        'Modern Fixture Installations'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Save Water & Money',
        description: 'Fixing leaks helps reduce waste and lower your monthly utility bills.'
      },
      {
        title: 'Fast On-Site Repairs',
        description: 'We arrive fully equipped to diagnose and repair most issues during the first visit.'
      },
      {
        title: 'Fixture Brand Expertise',
        description: 'We repair faucets and fixtures from all major manufacturers, old or new.'
      },
      {
        title: 'Improved Water Pressure',
        description: 'We identify hidden causes of low pressure and restore strong, steady flow.'
      },
      {
        title: 'Upgrade Outdated Fixtures',
        description: 'Want a modern look? We help you replace old fixtures with stylish, water-efficient options.'
      },
      {
        title: 'Clean, Non-Invasive Work',
        description: 'We protect your home during repairs and clean up thoroughly afterward.'
      },
      {
        title: 'Licensed & Insured Pros',
        description: 'All services are performed by certified plumbers who follow Florida code.'
      }
    ],
    faqs: [
      {
        question: "What causes a faucet to leak?",
        answer: "Common causes include worn-out washers, corroded valve seats, or broken seals. We identify and fix the issue precisely."
      },
      {
        question: "Can you repair all faucet brands?",
        answer: "Yes—we’re experienced with all major brands like Moen, Delta, Kohler, American Standard, and more."
      },
      {
        question: "Should I repair or replace a fixture?",
        answer: "We’ll advise you based on cost and condition. In some cases, replacing saves more in the long run."
      },
      {
        question: "Do you offer same-day repairs?",
        answer: "Most faucet and fixture repairs can be done the same day, depending on part availability."
      },
      {
        question: "Can you fix outdoor faucets and hose bibs?",
        answer: "Yes, we service indoor and outdoor plumbing fixtures including spigots and hose bibs."
      },
      {
        question: "Will my repair come with a warranty?",
        answer: "Absolutely—all work is backed by our workmanship guarantee for your peace of mind."
      }
    ],
    images: [`${static_assets}/images/services/facuet.jpg`]
  },
  'bathroom-plumbing': {
    label: 'Bathroom Plumbing',
    title: 'Expert Bathroom Plumbing Services in Florida',
    description: 'From leaky sinks to full bathroom plumbing upgrades, we handle it all with precision, professionalism, and care.',
    content: `Your bathroom is one of the most used areas in your home—don’t let plumbing problems disrupt your daily routine. At Total Care Plumbing, we provide comprehensive bathroom plumbing services across Florida, including repairs, installations, and upgrades. Whether it’s a clogged drain, faulty faucet, running toilet, or full fixture replacement, our licensed plumbers deliver fast and reliable service. We work with top-quality materials and modern tools to ensure long-lasting results. Trust us to keep your bathroom running smoothly, cleanly, and efficiently.`,
    image: `${static_assets}/images/services/bathroom_plumbing.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Sink & Faucet Repairs',
        'Toilet Repairs & Replacements',
        'Shower & Bathtub Plumbing',
        'Drain Cleaning & Unclogging',
        'Leak Detection & Fixes',
        'Pipe Rerouting',
        'Water Pressure Adjustments',
        'Fixture Installations',
        'Bathroom Renovation Plumbing',
        'Emergency Leak Response'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Complete Bathroom Coverage',
        description: 'We handle all bathroom plumbing needs—from minor repairs to full fixture upgrades.'
      },
      {
        title: 'Licensed & Insured Professionals',
        description: 'Work with certified plumbers who follow Florida code and safety standards.'
      },
      {
        title: 'Clean & Respectful Service',
        description: 'We protect your home and leave your bathroom spotless after every job.'
      },
      {
        title: 'Quick Diagnosis & Repairs',
        description: 'We identify problems fast and fix them right the first time.'
      },
      {
        title: 'Water Efficiency Upgrades',
        description: 'We help you install modern, water-saving fixtures to lower your utility bills.'
      },
      {
        title: 'Emergency Leak Support',
        description: 'Available for urgent plumbing issues like burst pipes and overflowing toilets.'
      },
      {
        title: 'Customized Plumbing Solutions',
        description: 'Whether it’s for a family home or rental property, we tailor our work to your needs.'
      }
    ],
    faqs: [
      {
        question: "Can you fix a constantly running toilet?",
        answer: "Yes, we diagnose and repair issues like faulty flappers, valves, and fill mechanisms causing constant running."
      },
      {
        question: "Do you install new bathroom fixtures?",
        answer: "Absolutely—we install sinks, faucets, toilets, bathtubs, and more, including upgrades."
      },
      {
        question: "Is bathroom plumbing covered under your warranty?",
        answer: "Yes, all repairs and installations come with our workmanship warranty."
      },
      {
        question: "Do you offer drain unclogging services?",
        answer: "Yes, we clear clogged bathroom sinks, tubs, and shower drains with professional tools."
      },
      {
        question: "Can you help with low water pressure in the shower?",
        answer: "Definitely—we’ll identify the cause and restore proper water flow quickly."
      },
      {
        question: "Do you handle bathroom remodel plumbing?",
        answer: "Yes, we work with contractors and homeowners on full plumbing installations during renovations."
      }
    ],
    images: [`${static_assets}/images/services/bathroom_plumbing.jpg`]
  },
  'water-filtration-systems': {
    label: 'Water Filtration Systems',
    title: 'Clean, Safe Water with Expert Filtration System Installation in Florida',
    description: 'We install advanced water filtration systems to remove contaminants and improve the taste, safety, and quality of your home’s water supply.',
    content: `If you’re concerned about the quality of your tap water, a professionally installed water filtration system can make a world of difference. At Total Care Plumbing, we offer whole-house and point-of-use filtration solutions tailored to Florida homes. From removing chlorine, heavy metals, and bacteria to softening hard water, we provide systems that improve water taste, clarity, and safety. Our team evaluates your water needs, recommends the best system, and handles the full installation. Enjoy cleaner showers, tastier drinking water, and longer-lasting appliances—all with our expert service.`,
    image: `${static_assets}/images/services/water_filteration.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Whole-House Filtration Systems',
        'Reverse Osmosis Systems',
        'Carbon Filters',
        'UV Water Purifiers',
        'Water Softeners',
        'Under-Sink Filters',
        'Faucet-Mounted Filters',
        'Sediment & Iron Removal Systems',
        'Custom Water Treatment Plans',
        'Filter Replacement & Maintenance'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Healthier, Safer Water',
        description: 'Our systems remove contaminants, giving you cleaner water for drinking, cooking, and bathing.'
      },
      {
        title: 'Customized to Your Home',
        description: 'We analyze your water supply and install the right system for your household’s needs.'
      },
      {
        title: 'Better Tasting Water',
        description: 'Filtration improves water taste and odor by eliminating chlorine and other impurities.'
      },
      {
        title: 'Protects Plumbing & Appliances',
        description: 'Filtered water prevents scale buildup, extending the life of pipes, faucets, and water-using appliances.'
      },
      {
        title: 'Professional Installation',
        description: 'We handle everything—from system selection to flawless installation and testing.'
      },
      {
        title: 'Eco-Friendly Options',
        description: 'We offer energy-efficient systems that reduce plastic waste and environmental impact.'
      },
      {
        title: 'Ongoing Maintenance Support',
        description: 'We offer filter replacements and maintenance plans to keep your system running smoothly.'
      }
    ],
    faqs: [
      {
        question: "What’s the best water filtration system for my home?",
        answer: "It depends on your water quality and usage. We test your water and recommend a system tailored to your needs."
      },
      {
        question: "Do you install both whole-house and under-sink filters?",
        answer: "Yes, we install all types—from small filters to full-home systems."
      },
      {
        question: "How long do water filters last?",
        answer: "It varies by system, but most require replacement every 3–12 months. We offer easy maintenance plans."
      },
      {
        question: "Can filtration help with hard water?",
        answer: "Yes, we install water softeners and filtration combos to reduce hardness and protect your plumbing."
      },
      {
        question: "Is filtered water better than bottled water?",
        answer: "Filtered tap water is often cleaner, more convenient, and more cost-effective than bottled water."
      },
      {
        question: "Do you provide maintenance for installed systems?",
        answer: "Absolutely—we offer filter replacement, inspections, and tune-ups for all systems we install."
      }
    ],
    images: [`${static_assets}/images/services/water_filteration.jpg`]
  }
}

/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {

  'downtown-office-plumbing': {
    label: 'Downtown Office Plumbing',
    title: 'Downtown Office Plumbing Project',
    description: 'Upgraded plumbing infrastructure for a multi-story office in downtown, enhancing efficiency and reliability for all occupants.',
    image: `${static_assets}/images/projects/office_plumbing.jpg`,
    location: 'Downtown, Miami, FL',
    duration: 'Completed in 2 weeks',
    materials: [
      'PEX Piping',
      'Copper Pipes',
      'PVC Drainage Lines',
      'Brass Valves',
      'High-Efficiency Water Heaters',
      'Backflow Prevention Devices',
      'Pressure-Reducing Valves',
      'ADA-Compliant Fixtures',
      'Water-Saving Faucets and Toilets',
      'Insulation Wraps'
    ],
    content: `
      For this commercial plumbing project in downtown Miami, the client requested a complete plumbing upgrade across four floors of office space.
      We began with a detailed assessment of the outdated piping systems and restrooms, followed by the installation of new PEX and copper lines to ensure reliability and durability.
      High-efficiency water heaters and ADA-compliant fixtures were also installed to improve comfort and meet regulatory standards.
      The work was completed in two weeks with minimal downtime, ensuring smooth day-to-day operations for all tenants and staff.`,
  },
  'sunrise-apartments-upgrade': {
    label: 'Sunrise Apartments Upgrade',
    title: 'Sunrise Apartments Plumbing Upgrade',
    description: 'Modernized the plumbing systems of Sunrise Apartments to improve water flow, pressure, and long-term sustainability for residents.',
    image: `${static_assets}/images/projects/sunrise_appartment.jpg`,
    location: 'Sunrise Apartments, Orlando, FL',
    duration: 'Completed in 3 weeks',
    materials: [
      'CPVC Water Lines',
      'PVC Waste Pipes',
      'Ball Valves & Shut-Offs',
      'Anti-Scald Shower Valves',
      'Low-Flow Toilets & Faucets',
      'Expansion Tanks',
      'Cleanouts & Access Panels',
      'Multi-Unit Water Metering System',
      'Water Hammer Arrestors',
      'Insulation Wraps for Energy Efficiency'
    ],
    content: `
      Sunrise Apartments required a full-scale plumbing overhaul to address recurring issues with water pressure, outdated fixtures, and inconsistent flow in multiple units.
      Our team replaced the entire system using durable CPVC and PVC piping for clean water delivery and efficient waste management.
      We also added low-flow fixtures and a metering system to help residents monitor usage and reduce utility costs.
      The upgrade was completed smoothly in three weeks with minimal disruption to tenants, significantly improving the building’s plumbing reliability.`,
  },
  'palm-heights-condos': {
    label: 'Palm Heights Condos',
    title: 'Palm Heights Condos Plumbing Renovation',
    description: 'Executed a comprehensive plumbing renovation at Palm Heights Condos to support modern living standards and improve system efficiency.',
    image: `${static_assets}/images/projects/plumbing_works.jpg`,
    location: 'Palm Heights Condos, Tampa, FL',
    duration: 'Completed in 4 weeks',
    materials: [
      'PEX Piping System',
      'Brass Fittings & Manifold System',
      'Tankless Water Heaters',
      'Dual Flush Toilets',
      'Stainless Steel Kitchen Fixtures',
      'Washer/Dryer Water Hookups',
      'Mainline Backflow Preventers',
      'Flexible Supply Lines',
      'Venting System Enhancements',
      'Drainage & Sump Pump Installations'
    ],
    content: `
      Palm Heights Condos needed an upgrade to meet the demands of a modern residential complex. The existing plumbing infrastructure was outdated and inefficient.
      We implemented a PEX-based piping system with a centralized manifold for improved water distribution and ease of maintenance.
      New tankless water heaters and eco-friendly fixtures were installed throughout the units.
      The project was completed in 4 weeks and delivered a significant boost in water efficiency and tenant satisfaction.`,
  },
  'city-mall-restrooms': {
    label: 'City Mall Restrooms',
    title: 'City Mall Restroom Plumbing Overhaul',
    description: 'Upgraded all restroom plumbing systems at City Mall to support high foot traffic with efficient and durable solutions.',
    image: `${static_assets}/images/projects/mall_bathrooms.jpg`,
    location: 'City Mall, Orlando, FL',
    duration: 'Completed in 3 weeks',
    materials: [
      'Commercial-Grade Flush Valves',
      'Wall-Mounted Toilets & Urinals',
      'Stainless Steel Lavatory Fixtures',
      'High-Capacity Drainage Pipes',
      'Touchless Sensor Faucets',
      'ADA-Compliant Fixtures',
      'Anti-Clog Floor Drains',
      'PVC & Copper Water Lines',
      'Automatic Soap & Paper Dispensers',
      'Pressure-Assisted Toilet Systems'
    ],
    content: `
      City Mall’s restrooms were due for a full-scale plumbing renovation to handle increasing visitor volume and improve hygiene standards.
      We installed commercial-grade fixtures with sensor-based systems for touchless operation, improving both user experience and water efficiency.
      The layout was re-piped using a mix of PVC and copper, and the drainage system was restructured for faster flow and reduced blockages.
      Completed in just 3 weeks with all work done after hours to avoid mall downtime.`,
  },
  'heritage-hotel-plumbing': {
    label: 'Heritage Hotel Plumbing',
    title: 'Heritage Hotel Complete Plumbing Modernization',
    description: 'Modernized the entire plumbing infrastructure of the Heritage Hotel to improve guest comfort and water efficiency.',
    image: `${static_assets}/images/projects/kitchen_plumbing.jpg`,
    location: 'Heritage Hotel, St. Augustine, FL',
    duration: 'Completed in 5 weeks',
    materials: [
      'Copper and PEX Hybrid Piping',
      'Luxury Shower Systems',
      'Tankless Water Heaters',
      'In-Wall Toilet Systems',
      'Antique-Style Fixtures (for aesthetic continuity)',
      'Water Pressure Regulators',
      'Main Line Isolation Valves',
      'High-Efficiency Drainage Systems',
      'Hot Water Recirculation Pumps',
      'Smart Leak Detection Sensors'
    ],
    content: `
      The Heritage Hotel wanted to preserve its classic charm while upgrading its outdated plumbing system to modern standards.
      We designed a hybrid plumbing solution using both copper and PEX to ensure reliability while maintaining historical aesthetics.
      Each guest room was fitted with luxury showers, tankless heaters, and in-wall toilets for a sleek finish.
      A smart water management system was also installed to prevent leaks and improve maintenance oversight.
      The project was completed in 5 weeks with zero guest disruptions.`,
  },
  'ocean-bay-resort': {
    label: 'Ocean Bay Resort',
    title: 'Ocean Bay Resort Plumbing Overhaul',
    description: 'Delivered a high-capacity plumbing system tailored for Ocean Bay Resort’s coastal environment and guest volume demands.',
    image: `${static_assets}/images/projects/bathroom_1.jpg`,
    location: 'Ocean Bay Resort, Clearwater, FL',
    duration: 'Completed in 7 weeks',
    materials: [
      'Copper & PEX Hybrid Piping',
      'High-Efficiency Commercial Water Heaters',
      'Salt-Resistant Fixtures & Fittings',
      'Grease Traps for Restaurant Areas',
      'Pressure Regulating Valves',
      'Anti-Siphon Valves',
      'Backflow Prevention Systems',
      'Booster Pump Systems',
      'Seawater-Proof Drain Lines',
      'Smart Leak Detection Sensors'
    ],
    content: `
      Ocean Bay Resort required a full plumbing overhaul to handle heavy guest use and coastal conditions.
      We implemented a hybrid piping system combining copper and PEX to provide both durability and flexibility.
      Salt-resistant fixtures and smart leak detection systems were installed to reduce corrosion and downtime.
      The system included booster pumps and pressure regulators to ensure optimal water pressure throughout the property.
      Completed in 7 weeks, the project significantly improved performance and reduced maintenance for the resort’s operations.`,
  },
  'community-center-bathrooms': {
    label: 'Community Center Bathrooms',
    title: 'Community Center Bathrooms Revamp',
    description: 'Upgraded all restroom plumbing and fixtures at the Community Center to meet accessibility, hygiene, and water-efficiency standards.',
    image: `${static_assets}/images/projects/restrooms.jpg`,
    location: 'Community Center, Orlando, FL',
    duration: 'Completed in 3 weeks',
    materials: [
      'ADA-Compliant Toilets & Sinks',
      'Motion Sensor Faucets',
      'Low-Flow Flush Valves',
      'PVC Drainage Systems',
      'Stainless Steel Supply Lines',
      'Urinal Flush Controllers',
      'Anti-Scald Mixing Valves',
      'Touchless Soap Dispensers',
      'Water-Efficient Shower Fixtures',
      'Wall-Mounted Utility Sinks'
    ],
    content: `
      The Community Center needed modern, hygienic, and ADA-compliant restroom facilities. 
      Our team removed the old systems and installed water-saving fixtures with motion sensors for improved hygiene.
      We upgraded the drainage and supply lines and ensured all installations complied with accessibility and local code standards.
      The project was completed in just 3 weeks, transforming the bathrooms into user-friendly and efficient spaces for all visitors.`,
  },
  'eco-homes-plumbing': {
    label: 'Eco Homes Plumbing',
    title: 'Eco Homes Sustainable Plumbing Installation',
    description: 'Implemented a full eco-conscious plumbing system for Eco Homes, prioritizing water conservation and energy efficiency.',
    image: `${static_assets}/images/projects/eco_homes.jpg`,
    location: 'Eco Homes, Austin, TX',
    duration: 'Completed in 5 weeks',
    materials: [
      'PEX-A Tubing',
      'Solar Water Heating System',
      'Dual Flush Toilets',
      'Rainwater Harvesting Integration',
      'Water-Efficient Showerheads',
      'Low-Flow Faucets',
      'Tankless Water Heaters',
      'Greywater Recycling System',
      'Smart Leak Detectors',
      'Insulated Water Supply Lines'
    ],
    content: `
      Eco Homes required a plumbing system aligned with their sustainable building mission. 
      Our team installed energy-saving tankless heaters and integrated solar water heating to reduce utility dependence.
      Rainwater collection and greywater recycling systems were connected for landscape use and non-potable applications.
      All fixtures were chosen for water efficiency, and smart leak sensors were added to ensure long-term savings and safety.
      The project was successfully delivered in 5 weeks.`,
  },
  'harbor-plaza-refit': {
    label: 'Harbor Plaza Refit',
    title: 'Harbor Plaza Commercial Plumbing Refit',
    description: 'Performed a full-scale plumbing refit for Harbor Plaza to upgrade outdated infrastructure and meet modern commercial standards.',
    image: `${static_assets}/images/projects/plumbing_works.jpg`,
    location: 'Harbor Plaza, San Diego, CA',
    duration: 'Completed in 6 weeks',
    materials: [
      'Copper Piping (Type L)',
      'Commercial Water Heaters',
      'Backflow Prevention Devices',
      'ADA-Compliant Restroom Fixtures',
      'Sump Pumps & Drainage Solutions',
      'Grease Traps for Food Court',
      'Pressure Regulating Valves',
      'Stainless Steel Utility Sinks',
      'Fire Sprinkler Water Lines',
      'Smart Water Monitoring Systems'
    ],
    content: `
      Harbor Plaza was operating with an aging plumbing system that required a complete overhaul to comply with commercial standards and growing usage demands.
      We replaced old piping with copper Type L pipes, added ADA-compliant fixtures, and installed new water heaters suitable for large commercial loads.
      Specialized grease traps were added for the food court, and sump pumps improved drainage in low-lying sections.
      Smart monitoring systems and backflow preventers enhanced safety and efficiency, all completed within 6 weeks with minimal disruption to businesses.`,
  },

}

export const projectsImageGallery = [
  `${static_assets}/images/projects/bath2.jpg`,
  `${static_assets}/images/projects/bathroom_1.jpg`,
  `${static_assets}/images/projects/eco_homes.jpg`,
  `${static_assets}/images/projects/kitchen_plumbing.jpg`,
  `${static_assets}/images/projects/mall_bathrooms.jpg`,
  `${static_assets}/images/projects/office_plumbing.jpg`,
  `${static_assets}/images/projects/plumbing_works.jpg`,
  `${static_assets}/images/projects/restrooms.jpg`,
  `${static_assets}/images/projects/sunrise_appartment.jpg`,
  `${static_assets}/images/projects/villa_bathroom.jpg`,
  `${static_assets}/images/services/toilet.jpg`,
  `${static_assets}/images/services/facuet.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
  {
    name: "Elizabet Keen",
    role: "Homeowner | Florida",
    feedback: "Total Care Plumbing fixed all our bathroom leaks and upgraded our fixtures flawlessly. Very professional team!",
  },
  {
    name: "Sarah Smith",
    role: "Property Manager",
    feedback: "They completely re-piped our entire apartment building without delays. Efficient and easy to work with.",
  },
  {
    name: "David Brown",
    role: "Architect | Florida",
    feedback: "High-quality plumbing installations that matched our luxury design specs. Very impressed!",
  },
  {
    name: "Emily Johnson",
    role: "Business Owner",
    feedback: "Fast response on a clogged drain emergency. Saved our business day with their quick service!",
  },
  {
    name: "Michael Carter",
    role: "Real Estate Developer | Florida",
    feedback: "Their plumbing work is always reliable and code-compliant. A trusted partner for our developments.",
  },
  {
    name: "Olivia Wilson",
    role: "Interior Designer",
    feedback: "Loved how they installed modern kitchen fixtures without damaging our new cabinetry. Very careful and skilled!",
  },
  {
    name: "James Anderson",
    role: "Hotel Manager | Florida",
    feedback: "Total Care Plumbing upgraded all guest room bathrooms efficiently. Clean work and minimal downtime.",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner | Florida",
    feedback: "We had multiple plumbing issues, and they fixed everything in one visit. Super organized team!",
  },
  {
    name: "Robert Lee",
    role: "Construction Contractor | Florida",
    feedback: "On every job site, they deliver solid plumbing work and smooth coordination. My go-to team.",
  },
  {
    name: "Isabella Taylor",
    role: "Retail Owner",
    feedback: "Had a burst pipe over the weekend—these guys were here fast and handled it like pros.",
  },
  {
    name: "William Harris",
    role: "Commercial Property Owner | Florida",
    feedback: "They modernized our entire plumbing system and improved water efficiency. Great investment.",
  },
  {
    name: "Emma Robinson",
    role: "Home Renovator | Florida",
    feedback: "They’re excellent at integrating plumbing into remodeling projects without delays or surprises.",
  }
];
