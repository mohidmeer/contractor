import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/elec'
export const siteUrl = 'https://totalcareserviceselectrical.com/'
export const siteName = 'Total Care Electrical'
export const siteLogo = `${static_assets}/images/logo.png`
export const googleAnalyticId = 'G-P7WGJD85L2'
export const bussinessType = ["LocalBusiness", "Electrician"]


export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@totalcareserviceselectrical.com',
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
    title: 'Total Care Electrical',
    description: 'Trusted electrical services across Florida. From emergency repairs to full system installations for residential and commercial properties.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Reliable Electrical Services Done Right',
    description: 'Whether you need a quick fix or a complete electrical system setup, our certified electricians deliver safe, efficient, and code-compliant work.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Book an Electrician',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Electrical Services',
  },
  projects: {
    heading: 'Electrical Projects Across Florida',
  },
}

export const servicesPage = {
  seo: {
    title: 'Electrical Services in Florida',
    description: 'Explore our expert electrical services including panel upgrades, lighting installations, wiring, smart-home upgrades, and emergency repairs across Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  },
}

export const projectsPage = {
  seo: {
    title: 'Electrical Projects in Florida',
    description: 'Browse our portfolio of electrical work across Florida — from residential rewiring to large-scale commercial installations.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}

export const aboutPage = {
  seo: {
    title: 'About Us',
    description: 'Learn about Total Care Electrical, our experience, safety-first approach, and why Florida residents and businesses trust us for their power needs.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Total Care Electrical is a Florida-based company committed to delivering safe, efficient, and reliable electrical services. We pride ourselves on clear communication, professional workmanship, and long-term safety for every client.',
}

export const contactPage = {
  seo: {
    title: 'Contact Us',
    description: 'Need electrical help? Contact Total Care Electrical for professional guidance, service scheduling, or emergency electrical repairs across Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Contact Us',
    messagePlaceholder: "Tell us what’s sparking — we’ll handle it safely and quickly.",
  },
}

export const blogPage = {
  seo: {
    title: 'Electrical Tips & Safety Insights - Florida',
    description: 'Stay informed with expert tips on electrical safety, system maintenance, energy-saving hacks, and latest industry trends across Florida.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Electrical Services In Florida',
    description: 'We serve Florida homes and businesses with top-quality electrical solutions — from basic fixes to complex installations.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Electrical Work with Safety, Precision, and Integrity',
  description: 'Total Care Electrical is your trusted source for reliable electrical solutions throughout Florida. We emphasize expert craftsmanship, transparent communication, and treating every space with care and professionalism.',
  keyPoints: [
    {
      title: 'Licensed & Insured',
      desc: 'Our electricians are fully certified and follow all Florida safety codes and standards.'
    },
    {
      title: 'High-Quality Components',
      desc: 'We use only premium-grade electrical materials and fixtures for long-lasting performance.'
    },
    {
      title: 'Clean & Code-Compliant',
      desc: 'Our team works efficiently, adheres to code, and always leaves your space clean and safe.'
    }
  ],
  image1_url: `${static_assets}/images/projects/office_wiring.jpg`,
  image2_url: `${static_assets}/images/projects/hotel.jpg`,
  image3_url: `${static_assets}/images/projects/mall.jpg`,
  image4_url: `${static_assets}/images/services/ev_charger.jpg`,
};


export const faqs = [
  {
    question: "Do you offer free electrical inspections?",
    answer: "Yes, we provide free inspections and estimates for residential and commercial electrical systems."
  },
  {
    question: "What electrical services do you provide?",
    answer: "We handle everything from panel upgrades and wiring to lighting installation, EV chargers, and smart home integrations."
  },
  {
    question: "Are your electricians licensed and insured?",
    answer: "Absolutely. All our electricians are fully licensed, insured, and trained to meet Florida’s electrical code standards."
  },
  {
    question: "Do you offer emergency electrical services?",
    answer: "Yes, we’re available 24/7 for emergencies like power outages, electrical fires, or hazardous faults."
  },
  {
    question: "How fast can you respond to a service request?",
    answer: "We aim for same-day service based on availability and the urgency of the issue."
  },
  {
    question: "Do you service homes and commercial buildings?",
    answer: "Yes, we work with both residential clients and commercial facilities including offices, retail stores, and more."
  }
];

export const ourProcessData = {
  heading: 'Our Process',
  description: 'From your first call to final inspection, we make electrical services smooth, safe, and hassle-free.',
  list: [
    {
      title: "Initial Consultation",
      description: "We start with a conversation to understand your electrical needs, goals, and safety concerns.",
      icon: FaComments
    },
    {
      title: "On-Site Assessment",
      description: "Our certified electricians visit your location to evaluate the issue or project scope.",
      icon: FaSearch
    },
    {
      title: "Custom Proposal",
      description: "We provide a detailed estimate outlining the work, materials, safety steps, and timeline.",
      icon: FaFileAlt
    },
    {
      title: "Scheduling the Work",
      description: "We book the job at your convenience and prep everything needed for a smooth execution.",
      icon: FaCalendarAlt
    },
    {
      title: "Electrical Service",
      description: "Our team completes the electrical work efficiently, meeting all Florida safety codes and standards.",
      icon: FaHammer
    },
    {
      title: "Final Inspection & Handover",
      description: "We test all systems, ensure compliance, and leave your property clean and safe.",
      icon: FaCheckCircle
    }
  ]
};

export const WhyUSData = [
  {
    title: "Licensed Electricians",
    description: "Our certified experts handle residential and commercial electrical jobs with precision and care.",
    icon: FaUserTie
  },
  {
    title: "Top-Notch Workmanship",
    description: "We use high-quality parts and proven methods to ensure safe, reliable, and long-lasting results.",
    icon: FaTools
  },
  {
    title: "Dependable & Transparent",
    description: "We arrive on time, communicate clearly, and keep you informed throughout the entire process.",
    icon: FaHandshake
  },
  {
    title: "Fair & Honest Pricing",
    description: "No hidden costs. We provide clear, upfront quotes that fit your budget and expectations.",
    icon: FaDollarSign
  },
  {
    title: "Customer-First Approach",
    description: "Your satisfaction is our priority — we won’t leave until you’re fully confident in our work.",
    icon: FaSmile
  },
  {
    title: "Safety-Compliant Services",
    description: "We follow Florida’s electrical codes and safety guidelines to protect your property and your peace of mind.",
    icon: FaShieldAlt
  }
];

export const accomplishmentData = [
  { title: "Commercial Projects", number: 120 },
  { title: "Residential Jobs", number: 300 },
  { title: "Certified Electricians", number: 40 },
  { title: "Happy Clients", number: 550 },
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
      { label: 'Wiring & Rewiring', href: '/services/wiring-rewiring', hasChildrens: false },
      { label: 'Panel Upgrades', href: '/services/panel-upgrades', hasChildrens: false },
      { label: 'Lighting Installation', href: '/services/lighting-installation', hasChildrens: false },
      { label: 'Emergency Repairs', href: '/services/emergency-repairs', hasChildrens: false },
      { label: 'EV Charger Installation', href: '/services/ev-charger-installation', hasChildrens: false },
      { label: 'Generator Installation', href: '/services/generator-installation', hasChildrens: false },
      { label: 'Smart Home Wiring', href: '/services/smart-home-wiring', hasChildrens: false },
      { label: 'Surge Protection', href: '/services/surge-protection', hasChildrens: false },
      { label: 'Outlet & Switch Installation', href: '/services/outlet-switch-installation', hasChildrens: false },
      { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation', hasChildrens: false },
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Downtown Office Wiring', href: '/projects/downtown-office-wiring', hasChildrens: false },
      { label: 'Sunrise Apartments Electrical Upgrade', href: '/projects/sunrise-apartments-upgrade', hasChildrens: false },
      { label: 'Palm Heights Power Setup', href: '/projects/palm-heights-power-setup', hasChildrens: false },
      { label: 'City Mall Lighting System', href: '/projects/city-mall-lighting', hasChildrens: false },
      { label: ' Hotel Power Renovation', href: '/projects/hotel-renovation', hasChildrens: false },
      { label: 'Green Grove Electrical Setup', href: '/projects/green-grove-setup', hasChildrens: false },
      { label: 'Ocean Bay Resort Energy Design', href: '/projects/ocean-bay-energy', hasChildrens: false },
      { label: 'Community Center Wiring', href: '/projects/community-center-wiring', hasChildrens: false },
      { label: 'Eco Homes Smart Wiring', href: '/projects/eco-homes-smart-wiring', hasChildrens: false },
      { label: 'Harbor Plaza Power Fitout', href: '/projects/harbor-plaza-fitout', hasChildrens: false },
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
  tagline: 'Powering Florida with Safe Wiring, Reliable Repairs, and Expert Electrical Services.',
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
    name: "Miami",
    href: "/miami",
    title: "Electrical Services in Miami, FL",
    description: "Professional electrical services in Miami, FL. Expert wiring, panel upgrades, and lighting installation to keep your home powered safely.",
    content: "Total Care Electrical is a locally rooted company delivering safe and efficient electrical solutions across Florida. We focus on skilled craftsmanship, clear communication, and treating every home with genuine care.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Orlando",
    href: "/orlando",
    title: "Electrical Services in Orlando, FL",
    description: "Top-rated electrical services in Orlando, FL. From fixture installations to circuit troubleshooting — we’ve got you covered.",
    content: "Total Care Electrical is proud to power Orlando homes and businesses with trusted electrical repairs, upgrades, and maintenance. Our team ensures every job is done safely and up to code.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Tampa",
    href: "/tampa",
    title: "Electrical Services in Tampa, FL",
    description: "Reliable electrical solutions in Tampa, FL. We offer fast repairs, efficient rewiring, and dependable service with every visit.",
    content: "Serving Tampa with pride, Total Care Electrical delivers clean, compliant, and energy-efficient electrical work. Whether it’s lighting upgrades or whole-home rewiring, we treat your space like our own.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Jacksonville",
    href: "/jacksonville",
    title: "Electrical Services in Jacksonville, FL",
    description: "Certified electricians in Jacksonville, FL. Specializing in panel upgrades, outlet installation, and home safety checks.",
    content: "Total Care Electrical brings years of experience to Jacksonville residents seeking reliable, code-compliant electrical work. No project is too big or small.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Lauderdale",
    href: "/fort-lauderdale",
    title: "Electrical Services in Fort Lauderdale, FL",
    description: "Expert electrical contractors in Fort Lauderdale, FL. Full-service wiring, panel upgrades, and lighting solutions.",
    content: "From beachfront homes to busy storefronts, Total Care Electrical keeps Fort Lauderdale connected and safe with expert electrical craftsmanship.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "St. Petersburg",
    href: "/st-petersburg",
    title: "Electrical Services in St. Petersburg, FL",
    description: "Professional electrical services in St. Petersburg, FL. Safe, prompt, and affordable electrical work for homes and businesses.",
    content: "Total Care Electrical serves St. Pete with licensed electricians who take pride in precision work and top-tier customer service.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Cape Coral",
    href: "/cape-coral",
    title: "Electrical Services in Cape Coral, FL",
    description: "Cape Coral's trusted electricians. From installing ceiling fans to entire panel upgrades, we do it all with care.",
    content: "Total Care Electrical is your go-to for reliable, safe, and energy-efficient electrical services in Cape Coral and surrounding areas.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hialeah",
    href: "/hialeah",
    title: "Electrical Services in Hialeah, FL",
    description: "Full-service electrical repairs in Hialeah, FL. Trust us for outlet fixes, switch replacements, and code-compliant installations.",
    content: "We proudly serve Hialeah residents with timely, transparent, and high-quality electrical solutions. Total Care Electrical has you covered.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Gainesville",
    href: "/gainesville",
    title: "Electrical Services in Gainesville, FL",
    description: "Gainesville’s go-to electricians for residential and light commercial work. Reliable wiring, upgrades, and repairs.",
    content: "At Total Care Electrical, we offer Gainesville dependable electrical services that keep your home or office safe and running smoothly.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Naples",
    href: "/naples",
    title: "Electrical Services in Naples, FL",
    description: "Naples electrical experts for lighting, wiring, and energy-efficient installations. Safe and stunning results.",
    content: "Total Care Electrical brings professional-grade services to Naples residents seeking quality without compromise. We get it right, every time.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Pensacola",
    href: "/pensacola",
    title: "Electrical Services in Pensacola, FL",
    description: "Licensed electrical services in Pensacola, FL. For everything from circuit breakers to outdoor lighting setups.",
    content: "We help Pensacola homeowners stay connected and protected with skilled electricians and transparent pricing.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "West Palm Beach",
    href: "/west-palm-beach",
    title: "Electrical Services in West Palm Beach, FL",
    description: "Premier electricians serving West Palm Beach. Clean installs, panel fixes, and lighting design — all in one place.",
    content: "West Palm Beach residents trust Total Care Electrical for safe, smart, and stylish electrical solutions that meet modern needs.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Lakeland",
    href: "/lakeland",
    title: "Electrical Services in Lakeland, FL",
    description: "Lakeland’s trusted choice for electrical repair, inspection, and installation. Fast service, flawless results.",
    content: "At Total Care Electrical, we handle Lakeland’s wiring needs with professionalism, attention to detail, and dependable results.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Ocala",
    href: "/ocala",
    title: "Electrical Services in Ocala, FL",
    description: "Affordable and professional electrical work in Ocala, FL. Keep your home or office powered with confidence.",
    content: "Serving Ocala with top-tier electrical services designed to protect your property and maximize energy efficiency.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Bradenton",
    href: "/bradenton",
    title: "Electrical Services in Bradenton, FL",
    description: "Complete electrical services in Bradenton, FL — wiring, panel repairs, LED upgrades, and more.",
    content: "Total Care Electrical brings a customer-first mindset and professional-grade tools to every Bradenton job we tackle.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Fort Myers",
    href: "/fort-myers",
    title: "Electrical Services in Fort Myers, FL",
    description: "Expert electrical contractors in Fort Myers. From recessed lighting to EV charger installs, we do it all.",
    content: "Total Care Electrical lights up Fort Myers with exceptional service, honest pricing, and 100% satisfaction guaranteed.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Hollywood",
    href: "/hollywood",
    title: "Electrical Services in Hollywood, FL",
    description: "Hollywood FL’s go-to team for electrical solutions. Panels, lights, smart systems — installed right.",
    content: "We’re proud to serve Hollywood homes and businesses with safe, stylish, and future-ready electrical work.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
    name: "Boca Raton",
    href: "/boca-raton",
    title: "Electrical Services in Boca Raton, FL",
    description: "Elegant, modern, and safe electrical work in Boca Raton. Perfect for luxury homes and sleek office spaces.",
    content: "Total Care Electrical helps Boca Raton shine with reliable installations, sharp upgrades, and on-time service every visit.",
    image: `${static_assets}/images/hero_bg_1.jpg`
  }
];


/* ------------------------
   SERVICES START
------------------------ */

export const servicesData = {
  'wiring-rewiring': {
    label: 'Wiring & Rewiring',
    title: 'Professional Electrical Wiring & Rewiring Services in Florida',
    description: 'Keep your property safe and up to code with our expert wiring and rewiring services. We handle everything from new installations to full system upgrades.',
    content: `Faulty or outdated wiring is a major safety hazard. At Total Care Electrical, we offer precise wiring and rewiring services for homes and businesses throughout Florida. Whether you’re building from scratch, remodeling, or upgrading an old system, our licensed electricians ensure every wire, outlet, and panel is safely installed and code-compliant. We handle both partial and full rewiring projects, resolve overloaded circuits, and bring your system up to modern electrical standards. Safety, efficiency, and reliability are always our priority.`,
    image: `${static_assets}/images/services/wiring.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Whole-Home Rewiring',
        'New Construction Wiring',
        'Room Additions Wiring',
        'Knob & Tube Replacement',
        'Aluminum Wiring Replacement',
        'Dedicated Circuits for Appliances',
        'Structured Cabling for Internet & Media',
        'Electrical Code Corrections',
        'Surge Protection Installation',
        'Smart Home & Automation Wiring'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Safe & Code-Compliant Work',
        description: 'We follow NEC guidelines and Florida-specific codes to ensure electrical safety and inspection compliance.'
      },
      {
        title: 'Modern & Energy-Efficient Systems',
        description: 'Upgrade your electrical system for safer, more efficient energy usage and support for modern appliances.'
      },
      {
        title: 'Experienced Electricians',
        description: 'Our licensed professionals have years of experience handling wiring in residential and commercial properties.'
      },
      {
        title: 'Minimal Disruption',
        description: 'We plan wiring routes and installation with minimal damage or intrusion into your property.'
      },
      {
        title: 'Improved Home Value',
        description: 'A rewired home is safer, more reliable, and increases property resale value.'
      },
      {
        title: 'Fast Turnaround Times',
        description: 'We complete most rewiring projects within tight timelines while maintaining quality.'
      },
      {
        title: 'Transparent Estimates',
        description: 'You’ll get upfront pricing and honest recommendations for your exact needs—no upsells.'
      }
    ],
    faqs: [
      {
        question: "How do I know if my home needs rewiring?",
        answer: "Common signs include flickering lights, tripping breakers, burning smells, or outdated wiring like knob-and-tube or aluminum."
      },
      {
        question: "Is rewiring messy or destructive?",
        answer: "We use minimally invasive methods and always clean up after ourselves. Damage to walls is kept to a minimum."
      },
      {
        question: "How long does a full home rewire take?",
        answer: "Typically between 3–7 days depending on property size and complexity."
      },
      {
        question: "Do I need to move out during the process?",
        answer: "Not always. We work in phases and coordinate with you to keep essential systems running."
      },
      {
        question: "Is your work inspected or certified?",
        answer: "Yes, all our electrical work is inspected and certified by Florida-authorized agencies."
      },
      {
        question: "Can you rewire just one room or circuit?",
        answer: "Absolutely. We offer partial rewiring for kitchens, bathrooms, additions, or problem areas."
      }
    ],

  },
  'panel-upgrades': {
    label: 'Panel Upgrades',
    title: 'Reliable Electrical Panel Upgrades in Florida',
    description: 'Upgrade your outdated electrical panel to handle modern power demands. Ensure safety, efficiency, and code compliance with our expert panel upgrade services.',
    content: `Old or overloaded electrical panels can lead to power failures, flickering lights, and even fire hazards. At Total Care Electrical, we specialize in electrical panel upgrades for residential and commercial properties in Florida. Whether you're adding new appliances, expanding your home, or experiencing frequent breaker trips, a panel upgrade is a must. Our licensed electricians replace outdated fuse boxes, upgrade amperage capacity, and install panels ready for smart home systems and EV chargers. We ensure safe, organized wiring and compliance with the latest NEC and Florida building codes.`,
    image: `${static_assets}/images/services/pannel.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Main Service Panel Upgrades',
        'Fuse to Breaker Conversions',
        '200 Amp & 400 Amp Upgrades',
        'Subpanel Installation',
        'Smart Panel Installation',
        'EV Charger-Ready Panels',
        'Home Expansion Panel Upgrades',
        'Breaker Replacements',
        'Surge Protection Integration',
        'Code Violation Corrections'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Increased Power Capacity',
        description: 'Support modern appliances, smart devices, and future upgrades without overloading your system.'
      },
      {
        title: 'Improved Home Safety',
        description: 'New panels reduce the risk of electrical fires, shorts, and frequent tripping.'
      },
      {
        title: 'Code Compliance',
        description: 'We upgrade panels to meet NEC and Florida code requirements, passing inspections with ease.'
      },
      {
        title: 'Support for Smart & EV Tech',
        description: 'Prepare your home for EV chargers, solar systems, and smart home integrations.'
      },
      {
        title: 'Professional Installations',
        description: 'Our certified electricians ensure clean, safe installations with organized wiring and proper labeling.'
      },
      {
        title: 'Home Insurance Benefits',
        description: 'Modern panels may lower your insurance premiums and prevent claim rejections due to outdated systems.'
      },
      {
        title: 'Transparent Estimates & Warranties',
        description: 'No surprises. We offer clear pricing, full warranty coverage, and post-installation support.'
      }
    ],
    faqs: [
      {
        question: "When should I upgrade my electrical panel?",
        answer: "If you’re adding appliances, experiencing breaker issues, or have an older fuse box, it’s time to upgrade."
      },
      {
        question: "How long does a panel upgrade take?",
        answer: "Most upgrades are completed in one day, including permitting and inspections."
      },
      {
        question: "Can you install a subpanel instead of replacing the main one?",
        answer: "Yes, subpanels are great for additions or detached structures needing separate circuits."
      },
      {
        question: "Is it safe to keep using an old fuse box?",
        answer: "Old fuse boxes lack modern safety features and often don’t meet current electrical demands—upgrading is highly recommended."
      },
      {
        question: "Do I need a permit for a panel upgrade?",
        answer: "Yes, but we handle all permits and coordinate inspections for your peace of mind."
      },
      {
        question: "Will upgrading my panel increase home value?",
        answer: "Definitely. A modern panel adds value, appeal to buyers, and prepares your home for future tech."
      }
    ],

  },
  'lighting-installation': {
    label: 'Lighting Installation',
    title: 'Professional Lighting Installation Services in Florida',
    description: 'Brighten up your space with expert lighting installation. From ambient home lighting to commercial-grade solutions, we do it all with precision and style.',
    content: `The right lighting transforms your space, enhancing aesthetics, mood, and functionality. At Total Care Electrical, we offer comprehensive lighting installation services across Florida for homes, offices, retail stores, and outdoor spaces. Whether you’re looking to install recessed lighting in your kitchen, pendant lights over your island, or landscape lights to boost curb appeal, our licensed electricians ensure safe, clean, and code-compliant setups. We help you choose the perfect fixtures, plan optimal layouts, and install smart lighting systems that work seamlessly with your home automation.`,
    image: `${static_assets}/images/services/light.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Interior Lighting Installation',
        'Recessed & Track Lighting',
        'Chandelier & Pendant Lighting',
        'Under-Cabinet Lighting',
        'Bathroom Vanity Lights',
        'Outdoor & Landscape Lighting',
        'Security & Motion-Sensor Lights',
        'Smart Lighting Systems',
        'LED Upgrades',
        'Commercial Lighting Solutions'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Custom Lighting Design',
        description: 'We tailor each lighting plan to match your home’s architecture and your aesthetic preferences.'
      },
      {
        title: 'Energy-Efficient Options',
        description: 'We install LED lighting and smart systems that reduce your electricity bills without sacrificing brightness.'
      },
      {
        title: 'Safe & Code-Compliant Work',
        description: 'All installations are completed by licensed electricians with strict adherence to Florida codes.'
      },
      {
        title: 'Smart Home Integration',
        description: 'Enjoy lighting you can control remotely or automate for convenience and energy savings.'
      },
      {
        title: 'Enhanced Property Value',
        description: 'Well-planned lighting boosts your home’s appeal and market value.'
      },
      {
        title: 'Fast, Clean Installations',
        description: 'We minimize disruption, respect your space, and leave your home clean and bright.'
      },
      {
        title: 'Fixture Selection Help',
        description: 'We help you choose fixtures that match your décor and lighting goals, from soft ambiance to task lighting.'
      }
    ],
    faqs: [
      {
        question: "What types of lighting can you install?",
        answer: "We install all types: recessed, chandeliers, under-cabinet, outdoor, motion-sensor, smart lighting, and more."
      },
      {
        question: "Do I need to buy my own fixtures?",
        answer: "Not necessarily. You can provide your own, or we can help source fixtures that suit your style and budget."
      },
      {
        question: "How long does lighting installation take?",
        answer: "Most projects take a few hours to a full day depending on complexity and number of fixtures."
      },
      {
        question: "Can you replace old fixtures with energy-efficient ones?",
        answer: "Yes, we specialize in LED retrofits and smart lighting upgrades that save energy and look great."
      },
      {
        question: "Is lighting installation covered by warranty?",
        answer: "Yes, our work is backed by warranties and we only use high-quality, certified components."
      },
      {
        question: "Do you offer commercial lighting services?",
        answer: "Absolutely! We handle lighting installations for offices, retail, warehouses, and hospitality venues."
      }
    ],

  },

  'emergency-repairs': {
    label: 'Emergency Repairs',
    title: '24/7 Emergency Electrical Repair Services in Florida',
    description: 'Power outage or electrical fault? Get fast, reliable emergency electrical repair services anytime, anywhere in Florida.',
    content: `Electrical emergencies can strike at any time—faulty wiring, sudden outages, sparking outlets, or breaker trips can put your safety and comfort at risk. At Total Care Electrical, we offer 24/7 emergency repair services to restore power and fix dangerous faults without delay. Our licensed electricians respond rapidly, troubleshoot the issue, and provide safe, lasting solutions. Whether it’s a residential blackout or a commercial electrical hazard, we bring the tools, experience, and urgency required to handle it. Your safety is our top priority, and we’re just one call away.`,
    image: `${static_assets}/images/services/emergency.jpg`,
    typeOfSolutions: {
      headings: 'Emergency Services We Provide',
      types: [
        'Power Outage Diagnosis & Repair',
        'Tripped Breakers & Fuse Replacement',
        'Burning Smell or Sparks Investigation',
        'Damaged Wiring & Short Circuit Fixes',
        'Flood-Related Electrical Issues',
        'Emergency Lighting Repair',
        'Panel & Breaker Malfunction Repairs',
        'Smoke Detector Failures',
        'Overloaded Circuit Solutions',
        'After-Hours Residential & Commercial Support'
      ]
    },
    benefitsOFChoosing: [
      {
        title: '24/7 Availability',
        description: 'Our electricians are on-call day and night to respond to urgent electrical issues without delay.'
      },
      {
        title: 'Fast Response Time',
        description: 'We arrive promptly and work quickly to assess and repair electrical faults before they escalate.'
      },
      {
        title: 'Licensed & Insured Team',
        description: 'All repairs are performed by certified professionals who prioritize safety and compliance.'
      },
      {
        title: 'Fully Equipped Vans',
        description: 'We come prepared with tools, replacement parts, and diagnostic equipment to handle most issues on the spot.'
      },
      {
        title: 'Safety First Approach',
        description: 'Our methods are designed to protect your property and prevent recurrence of the problem.'
      },
      {
        title: 'Clear Communication',
        description: 'We explain what went wrong, how we’re fixing it, and how you can prevent future emergencies.'
      },
      {
        title: 'Support for Homes & Businesses',
        description: 'From homes to retail spaces and offices, we handle emergency electrical issues of all scales.'
      }
    ],
    faqs: [
      {
        question: "What qualifies as an electrical emergency?",
        answer: "Anything posing immediate danger—sparks, smoke, outages, burning smells, exposed wires, or frequent tripping breakers."
      },
      {
        question: "Do you charge extra for after-hours service?",
        answer: "Yes, there may be a small premium for late-night or weekend calls, but we keep pricing transparent and fair."
      },
      {
        question: "Can you fix the issue the same day?",
        answer: "In most cases, yes. Our vans are stocked to handle common repairs immediately."
      },
      {
        question: "Should I try to fix an electrical issue myself?",
        answer: "No. DIY electrical work is dangerous and often illegal without a license. Always call a professional."
      },
      {
        question: "Do you offer emergency repairs for commercial buildings?",
        answer: "Yes, we provide emergency support for offices, restaurants, retail spaces, and other commercial properties."
      },
      {
        question: "What should I do while waiting for your team?",
        answer: "Turn off the main breaker if it’s safe to do so, avoid touching exposed wires, and keep the area clear."
      }
    ],

  },

  'ev-charger-installation': {
    label: 'EV Charger Installation',
    title: 'Professional EV Charger Installation Services in Florida',
    description: 'Charge your electric vehicle at home or work with our expert EV charger installation services. Safe, fast, and code-compliant installations guaranteed.',
    content: `As electric vehicles become the new norm, having a reliable home or commercial EV charging station is essential. At Total Care Electrical, we provide professional EV charger installation services throughout Florida. Whether it’s a Level 2 home charger or a multi-port commercial setup, our licensed electricians handle everything from load calculation and wiring to permitting and installation. We work with all major brands like Tesla, ChargePoint, and JuiceBox. Our goal is to provide a safe, efficient, and future-ready solution that makes powering your EV convenient and worry-free.`,
    image: `${static_assets}/images/services/ev_charger.jpg`,
    typeOfSolutions: {
      headings: 'EV Charging Solutions We Offer',
      types: [
        'Level 1 & Level 2 Charger Installation',
        'Tesla Wall Connector Setup',
        'ChargePoint & JuiceBox Installations',
        'Smart Charger Integration',
        'Panel Upgrades for EV Load Support',
        'Dedicated Circuit Wiring',
        'Outdoor & Garage Mount Installations',
        'Commercial EV Charging Stations',
        'Permitting & Inspection Handling',
        'Maintenance & Repair of EV Chargers'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Certified EV Technicians',
        description: 'Our team is trained and certified to install all major EV charger brands with precision and safety.'
      },
      {
        title: 'Home & Business Support',
        description: 'We install chargers for single-family homes, apartment buildings, offices, and commercial lots.'
      },
      {
        title: 'Customized Installations',
        description: 'We tailor installations to your vehicle, property layout, and charging needs.'
      },
      {
        title: 'Code-Compliant Work',
        description: 'All installations follow Florida’s electrical codes and safety standards for EV charging systems.'
      },
      {
        title: 'End-to-End Service',
        description: 'From permitting to final inspection, we handle the entire installation process.'
      },
      {
        title: 'Energy-Efficient Upgrades',
        description: 'We can recommend energy-saving solutions and options for solar-integrated EV systems.'
      },
      {
        title: 'Future-Ready Setup',
        description: 'We plan installations with scalability in mind, supporting upgrades and additional vehicles.'
      }
    ],
    faqs: [
      {
        question: "What charger types do you install?",
        answer: "We install Level 1 and Level 2 chargers, including Tesla, ChargePoint, JuiceBox, and other major brands."
      },
      {
        question: "Do I need a permit for EV charger installation?",
        answer: "Yes, in most cases a permit is required. We handle all permitting and inspections on your behalf."
      },
      {
        question: "Can I install a charger in my apartment?",
        answer: "It depends on building rules and available power. We assess feasibility and work with property management."
      },
      {
        question: "How long does installation take?",
        answer: "Most home EV charger installations are completed in 1 day. Commercial setups may take longer depending on size."
      },
      {
        question: "Will I need a panel upgrade?",
        answer: "Not always. We evaluate your panel capacity and recommend an upgrade only if necessary."
      },
      {
        question: "Do you offer maintenance or repairs?",
        answer: "Yes, we offer troubleshooting, repair, and maintenance services for existing EV chargers."
      }
    ],

  },

  'generator-installation': {
    label: 'Generator Installation',
    title: 'Reliable Generator Installation Services in Florida',
    description: 'Keep your home or business powered during outages with our expert generator installation services. We install whole-house and portable systems with safety and efficiency in mind.',
    content: `Power outages can strike anytime, and having a reliable backup generator ensures peace of mind. At Total Care Electrical, we provide professional generator installation services across Florida. Whether you need a standby generator for your home or a commercial-grade system for your business, we handle everything from sizing and load calculation to wiring and permitting. We work with top brands like Generac and Kohler, ensuring a seamless integration with your existing electrical panel. With our skilled electricians and tailored approach, you’ll always be prepared for the unexpected.`,
    image: `${static_assets}/images/services/generator_installation.jpg`,
    typeOfSolutions: {
      headings: 'Types of Generator Solutions We Offer',
      types: [
        'Whole-House Generator Installation',
        'Portable Generator Transfer Switches',
        'Commercial Backup Power Systems',
        'Natural Gas & Propane Generator Setup',
        'Generac & Kohler Generator Installation',
        'Automatic Transfer Switch Installation',
        'Panel Integration & Load Management',
        'Permitting & Code Compliance',
        'Maintenance & Annual Inspections',
        'Emergency Generator Services'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Reliable Power Backup',
        description: 'We install generators that automatically power your property during outages, keeping essentials running.'
      },
      {
        title: 'Custom Generator Sizing',
        description: 'We assess your energy needs to recommend the right generator size for optimal performance and efficiency.'
      },
      {
        title: 'Seamless Panel Integration',
        description: 'Our installations include proper wiring and integration with your main electrical panel and transfer switch.'
      },
      {
        title: 'Licensed & Insured Electricians',
        description: 'Our team is certified to install generators safely and according to Florida building codes.'
      },
      {
        title: 'Trusted Brands & Equipment',
        description: 'We install only top-tier generator brands known for durability, warranty, and service support.'
      },
      {
        title: 'Turnkey Installation Process',
        description: 'From permitting to final inspection, we handle the full installation process with minimal disruption.'
      },
      {
        title: 'Long-Term Maintenance Support',
        description: 'We offer service plans to keep your generator in peak condition and ready for emergencies.'
      }
    ],
    faqs: [
      {
        question: "What size generator do I need?",
        answer: "It depends on your power needs. We evaluate your appliances and systems to recommend the right size."
      },
      {
        question: "Do you handle permits?",
        answer: "Yes, we take care of all local permitting and inspections required for generator installations."
      },
      {
        question: "How long does installation take?",
        answer: "Most home generator installations are completed in 1–2 days, depending on complexity and permitting."
      },
      {
        question: "Can I use a portable generator?",
        answer: "Yes, we can install a transfer switch to safely connect a portable generator to your home’s electrical system."
      },
      {
        question: "Do you offer maintenance services?",
        answer: "Absolutely. We provide annual inspections, oil changes, and performance checks to keep your generator running smoothly."
      },
      {
        question: "What happens if the generator fails during an outage?",
        answer: "We offer emergency repair services and support to get your generator running as quickly as possible."
      }
    ],
  },
  'smart-home-wiring': {
    label: 'Smart Home Wiring',
    title: 'Professional Smart Home Wiring Services in Florida',
    description: 'Upgrade your home with smart wiring that supports automation, energy efficiency, and seamless device connectivity.',
    content: `Smart homes require smart infrastructure. At Total Care Electrical, we provide expert smart home wiring services to future-proof your property for intelligent living. Whether you're building a new home or retrofitting an existing one, we design and install low-voltage and high-voltage systems that support home automation, smart lighting, voice assistants, thermostats, and security systems. Our team ensures clean, concealed wiring layouts with clear labeling and scalability for future tech upgrades. We follow all safety codes and tailor the wiring to your home’s layout and smart ecosystem.`,
    image: `${static_assets}/images/services/smart_home_wiring.jpg`,
    typeOfSolutions: {
      headings: 'Smart Wiring Solutions We Offer',
      types: [
        'Structured Wiring for Smart Devices',
        'Low Voltage Cabling (CAT6, Coax, Fiber)',
        'Smart Switch & Dimmer Installation',
        'Voice Assistant (Alexa, Google) Setup',
        'Smart Thermostat Wiring',
        'Wi-Fi Booster & Network Integration',
        'Smart Lighting Circuit Design',
        'Home Automation Panel Wiring',
        'Security Camera & Alarm Cabling',
        'EV Charger Integration with Smart Grid'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Future-Ready Wiring Infrastructure',
        description: 'We install scalable wiring setups that adapt to new smart devices and upgrades without rework.'
      },
      {
        title: 'Reliable Network & Connectivity',
        description: 'Our structured cabling ensures strong and uninterrupted connections across all smart home systems.'
      },
      {
        title: 'Clean & Professional Installation',
        description: 'We run concealed wiring with neat terminations, proper labeling, and minimal visual disruption.'
      },
      {
        title: 'Full System Integration',
        description: 'We help connect lighting, audio, thermostats, and security into a unified smart control system.'
      },
      {
        title: 'Energy Efficiency',
        description: 'Smart wiring enables automation features like motion sensors and programmable schedules to reduce power use.'
      },
      {
        title: 'Custom Layouts Based on Home Design',
        description: 'We create wiring plans that match your home’s architecture and smart home goals.'
      },
      {
        title: 'Licensed & Code-Compliant',
        description: 'Our electricians follow Florida building and electrical codes for safety and legality.'
      }
    ],
    faqs: [
      {
        question: "What’s included in smart home wiring?",
        answer: "We install data, audio, and control cables for devices like smart lighting, thermostats, doorbells, and voice assistants."
      },
      {
        question: "Can I upgrade existing wiring for smart home use?",
        answer: "Yes, we assess your current wiring and upgrade it to support new smart systems without tearing up your walls."
      },
      {
        question: "Do I need structured cabling for a smart home?",
        answer: "Structured cabling is highly recommended for reliable performance, especially in larger homes or multi-device setups."
      },
      {
        question: "Is smart home wiring safe?",
        answer: "Yes. We install all components to code using proper insulation, grounding, and protective housing."
      },
      {
        question: "How long does smart home wiring take?",
        answer: "It varies by project, but most installations are completed in 1–3 days depending on your home’s size and requirements."
      },
      {
        question: "Can I expand my system later?",
        answer: "Absolutely. We build with scalability in mind so you can add new devices without rewiring."
      }
    ],
  },
  'surge-protection': {
    label: 'Surge Protection',
    title: 'Whole-Home Surge Protection Services in Florida',
    description: 'Protect your home and electronics from voltage spikes with professional surge protection installation.',
    content: `Power surges can damage appliances, computers, HVAC systems, and even your home’s electrical infrastructure. At Total Care Electrical, we provide comprehensive surge protection services for homes and businesses across Florida. Our licensed electricians install whole-home surge protectors directly into your electrical panel, safeguarding every circuit and outlet. Whether caused by lightning strikes, grid switching, or internal overloads, surges are no match for our robust protective systems.`,
    image: `${static_assets}/images/services/surge.jpg`,
    typeOfSolutions: {
      headings: 'Surge Protection Solutions We Offer',
      types: [
        'Whole-House Surge Protector Installation',
        'Panel-Mounted Surge Arrestors',
        'Point-of-Use Surge Suppressors',
        'High-Voltage Lightning Protection',
        'Surge Protection for HVAC & Appliances',
        'Data & Communication Line Protection',
        'Commercial Equipment Surge Guards',
        'Smart Home Surge Compatibility',
        'Upgrading Outdated Surge Devices',
        'Surge Safety Testing & Evaluation'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Protect Expensive Electronics',
        description: 'Prevent damage to TVs, computers, fridges, and smart devices from sudden voltage spikes.'
      },
      {
        title: 'Panel-Level Defense',
        description: 'Our whole-home solutions block surges before they reach outlets and appliances.'
      },
      {
        title: 'Lightning Strike Protection',
        description: 'We shield your home from surges caused by storms and power grid disruptions.'
      },
      {
        title: 'Preserve Appliance Lifespan',
        description: 'Consistent voltage reduces wear and extends the life of HVACs and refrigerators.'
      },
      {
        title: 'Business & Home Protection',
        description: 'We offer both residential and commercial-grade protection systems.'
      },
      {
        title: 'Installed by Licensed Electricians',
        description: 'Our team ensures proper grounding, wiring, and panel integration for safety and compliance.'
      },
      {
        title: 'Low Maintenance & Long-Lasting',
        description: 'Once installed, surge protectors require little upkeep and last for years.'
      }
    ],
    faqs: [
      {
        question: "What causes power surges?",
        answer: "Surges are caused by lightning, power grid switching, downed lines, or high-power appliance cycling."
      },
      {
        question: "How is a surge protector installed?",
        answer: "We install it directly into your main electrical panel to guard your entire system."
      },
      {
        question: "Do I still need surge protector strips?",
        answer: "Whole-home systems provide broader protection, but strip protectors can offer additional localized safety."
      },
      {
        question: "Is this solution safe during storms?",
        answer: "Yes. Our systems are rated to handle extreme surges from lightning and external faults."
      },
      {
        question: "How long do surge protectors last?",
        answer: "Most last 5–10 years depending on usage and surge frequency. We offer replacements as needed."
      },
      {
        question: "Will surge protection lower my energy bills?",
        answer: "It won’t reduce consumption but prevents costly repairs and replacement of damaged devices."
      }
    ],
  },
  'outlet-switch-installation': {
    label: 'Outlet & Switch Installation',
    title: 'Outlet and Switch Installation Services in Florida',
    description: 'Upgrade your home or business with safe, modern electrical outlets and switches. Installed by licensed Florida electricians.',
    content: `Outlets and switches are essential to any electrical system, providing safe access to power and lighting. At Total Care Electrical, we offer expert installation, replacement, and upgrading of outlets and switches across Florida. Whether you're remodeling, building new, or simply adding more access points, our team ensures your wiring is secure, compliant, and future-ready. We handle everything from standard outlets to USB and smart switch installations.`,
    image: `${static_assets}/images/services/outlet.jpg`,
    typeOfSolutions: {
      headings: 'Outlet & Switch Solutions We Offer',
      types: [
        'Standard Outlet Installation',
        'GFCI & AFCI Outlets for Safety',
        'Smart Switch & Dimmer Installation',
        'USB & Fast-Charge Outlets',
        'Light & Fan Switch Installation',
        'Motion Sensor Switches',
        'Childproof & Tamper-Resistant Outlets',
        'Outdoor & Weatherproof Outlets',
        '3-Way & 4-Way Switch Wiring',
        'Old Outlet Replacement & Upgrades'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Code-Compliant Wiring',
        description: 'We install all outlets and switches according to Florida electrical codes for safety and reliability.'
      },
      {
        title: 'Smart Home Ready',
        description: 'Future-proof your home with smart switches, dimmers, and USB-integrated outlets.'
      },
      {
        title: 'Improved Safety',
        description: 'GFCI, AFCI, and tamper-resistant outlets reduce risks of shock and electrical fires.'
      },
      {
        title: 'Custom Placement',
        description: 'We install outlets and switches exactly where you need them—no more extension cords or workarounds.'
      },
      {
        title: 'Aesthetic Matching',
        description: 'Choose modern finishes, plates, and colors to match your home’s décor.'
      },
      {
        title: 'Fast & Clean Installation',
        description: 'Our licensed electricians work quickly and keep your space clean throughout the project.'
      },
      {
        title: 'Indoor & Outdoor Options',
        description: 'We install protected outlets for patios, garages, and other outdoor locations.'
      }
    ],
    faqs: [
      {
        question: "Can I install smart switches with my current wiring?",
        answer: "In many cases, yes. We evaluate your setup and offer compatible smart solutions."
      },
      {
        question: "Do I need GFCI outlets in every room?",
        answer: "GFCIs are required in bathrooms, kitchens, garages, basements, and other moisture-prone areas."
      },
      {
        question: "How long does installation take?",
        answer: "Most outlet or switch installations take less than an hour per unit, depending on complexity."
      },
      {
        question: "Can I replace old outlets with USB ones?",
        answer: "Yes, we can upgrade your outlets to include USB or fast-charge ports for added convenience."
      },
      {
        question: "Is it safe to add more outlets to a room?",
        answer: "Yes, as long as the circuit can handle the load. We’ll assess and ensure proper balance."
      },
      {
        question: "Are outdoor outlets safe in the rain?",
        answer: "Yes, we install weatherproof covers and ground-fault protection for outdoor safety."
      }
    ],
  },

  'ceiling-fan-installation': {
    label: 'Ceiling Fan Installation',
    title: 'Professional Ceiling Fan Installation in Florida',
    description: 'Stay cool and stylish with our expert ceiling fan installation services. Safe, efficient, and perfect for Florida homes and businesses.',
    content: `Ceiling fans offer a cost-effective way to cool your space while enhancing your room’s aesthetic. At Total Care Electrical, we provide expert ceiling fan installation services for residential and commercial properties across Florida. Whether it's your living room, bedroom, patio, or office, we install all types of ceiling fans — from basic models to smart, remote-controlled systems. Our licensed electricians ensure safe mounting, correct wiring, and smooth operation, even on high or sloped ceilings.`,
    image: `${static_assets}/images/services/ceiling_fan.jpg`,
    typeOfSolutions: {
      headings: 'Types of Ceiling Fan Installations',
      types: [
        'Indoor Ceiling Fan Installation',
        'Outdoor & Patio Fan Installation',
        'Smart Ceiling Fan Setup',
        'Remote-Controlled Fans',
        'Wall-Mounted Control Integration',
        'Vaulted/Sloped Ceiling Fan Installation',
        'Ceiling Fan Light Kit Wiring',
        'Replacement of Old Fans',
        'Energy-Efficient Fan Models',
        'Commercial Ceiling Fan Setup'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Energy Savings',
        description: 'Ceiling fans reduce your reliance on air conditioning and help lower utility bills.'
      },
      {
        title: 'Safe, Secure Mounting',
        description: 'We ensure proper bracing and balanced blades to prevent wobbling or hazards.'
      },
      {
        title: 'Indoor & Outdoor Comfort',
        description: 'Our fans are installed for optimal airflow in any space — bedrooms, patios, or business areas.'
      },
      {
        title: 'Smart & Remote Capabilities',
        description: 'Control your fan speed and lighting with modern wall switches, remotes, or smart devices.'
      },
      {
        title: 'Aesthetic Integration',
        description: 'We help select fan styles and finishes that complement your room’s design.'
      },
      {
        title: 'Full Electrical Support',
        description: 'We can add new wiring, boxes, or switches if your space isn’t pre-wired for ceiling fans.'
      },
      {
        title: 'Licensed & Insured Technicians',
        description: 'Our electricians follow safety standards and Florida code for every installation.'
      }
    ],
    faqs: [
      {
        question: "Can you install a fan where there’s no existing fixture?",
        answer: "Yes. We can install new wiring and a fan-rated box even if no existing ceiling fixture is present."
      },
      {
        question: "Do I need a special fan for outdoor use?",
        answer: "Yes, outdoor fans are rated for moisture and weather exposure. We’ll help you choose the right one."
      },
      {
        question: "Can you install fans on vaulted or sloped ceilings?",
        answer: "Absolutely. We use downrods and mounting kits suited for angled or high ceilings."
      },
      {
        question: "Will my ceiling fan be noisy?",
        answer: "Not when installed properly. We ensure balance and secure mounting for quiet operation."
      },
      {
        question: "Can you upgrade my fan to a smart one?",
        answer: "Yes. We install smart fan controllers or new fans compatible with Alexa, Google Home, or apps."
      },
      {
        question: "How long does installation take?",
        answer: "Most installations take 1–2 hours depending on wiring and ceiling type."
      }]
  }
}


/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {

  'downtown-office-wiring': {
    label: 'Downtown Office Wiring',
    title: 'Downtown Office Electrical Wiring Project',
    description: 'Complete electrical wiring overhaul for a multi-story office in downtown, ensuring safe, efficient, and scalable power distribution.',
    image: `${static_assets}/images/projects/office_wiring.jpg`,
    location: 'Downtown, Miami, FL',
    duration: 'Completed in 2 weeks',
    materials: [
      'Copper Wiring',
      'Conduit Systems',
      'Circuit Breaker Panels',
      'Smart Switches',
      'Energy-Efficient Lighting',
      'Surge Protectors',
      'Fire-Rated Cabling',
      'Occupancy Sensors',
      'Data & Ethernet Cabling',
      'Grounding Rods'
    ],
    content: `
    This downtown Miami office project involved a complete upgrade of the building’s outdated electrical system. We replaced legacy wiring with new copper conductors and installed modern circuit panels for improved load management. Smart switches and occupancy sensors were deployed to enhance energy efficiency, while data cabling ensured full network coverage. The project was executed over two weeks with strict adherence to Miami’s commercial electrical codes, ensuring safety, reliability, and room for future expansion.`,
  },
  'sunrise-apartments-upgrade': {
    label: 'Sunrise Apartments Electrical Upgrade',
    title: 'Sunrise Apartments Electrical Upgrade Project',
    description: 'Modernized the electrical systems across all apartment units, improving safety, energy efficiency, and overall tenant satisfaction.',
    image: `${static_assets}/images/projects/appartment.jpg`,
    location: 'Sunrise, FL',
    duration: 'Completed in 3 weeks',
    materials: [
      'Copper Wiring',
      'Breaker Panels',
      'LED Lighting Fixtures',
      'Smart Thermostats',
      'Tamper-Resistant Outlets',
      'Arc-Fault Circuit Interrupters (AFCI)',
      'Smoke & CO Detectors',
      'Ground Fault Circuit Interrupters (GFCI)',
      'PVC Conduits',
      'Metal Electrical Boxes'
    ],
    content: `
    At Sunrise Apartments, we carried out a comprehensive electrical upgrade across over 40 residential units. This included replacing old wiring, installing tamper-resistant outlets, and upgrading breaker panels for better circuit control. We also added LED lighting, smart thermostats, and safety devices like AFCIs and GFCIs. The upgrade greatly enhanced tenant comfort, improved energy efficiency, and ensured compliance with modern electrical codes. The project was completed on time with zero service interruptions for residents.`,
  },
  'palm-heights-power-setup': {
    label: 'Palm Heights Power Setup',
    title: 'Palm Heights Power Setup Project',
    description: 'Installed a complete power distribution system for a new luxury residential complex, focusing on safety, reliability, and smart integration.',
    image: `${static_assets}/images/projects/power_setups.jpg`,
    location: 'Palm Heights, FL',
    duration: 'Completed in 4 weeks',
    materials: [
      'Main Distribution Panels',
      'Copper Conductors',
      'Smart Meters',
      'Surge Protectors',
      'Energy-Efficient Breakers',
      'Automated Lighting Controls',
      'EV Charging Stations',
      'Smart Switches & Outlets',
      'Underground Conduits',
      'Building Management System (BMS) Interface'
    ],
    content: `
    For the Palm Heights luxury complex, we handled the end-to-end setup of a modern power system. Starting from the main distribution panel, we integrated smart meters, surge protection, and high-capacity breakers to support the demands of luxury living. Smart lighting and automation features were added throughout, along with EV charging stations for residents. Underground conduit layouts were designed to optimize safety and aesthetics. The entire setup was integrated with the building’s management system for remote monitoring and efficiency.`,
  },
  'city-mall-lighting': {
    label: 'City Mall Lighting System',
    title: 'City Mall Lighting System Project',
    description: 'Designed and installed a comprehensive lighting system for a multi-level shopping mall, enhancing visibility, safety, and energy efficiency.',
    image: `${static_assets}/images/projects/mall.jpg`,
    location: 'City Mall, FL',
    duration: 'Completed in 5 weeks',
    materials: [
      'LED High Bay Fixtures',
      'Emergency Exit Signs',
      'Motion Sensors',
      'Daylight Harvesting Controls',
      'Track Lighting Systems',
      'Recessed Ceiling Lights',
      'Outdoor Flood Lights',
      'Smart Lighting Controllers',
      'Commercial Light Panels',
      'Wiring & Cable Trays'
    ],
    content: `
    This project involved a full-scale lighting design and installation for City Mall’s new expansion. We used high-efficiency LED fixtures to reduce long-term energy costs while enhancing the aesthetic of retail spaces. Emergency lighting and signage were installed throughout for compliance and safety. Smart controllers and motion sensors were added to reduce power usage during off-peak hours. Our team worked after hours to avoid disrupting mall operations, and the entire project was completed in five weeks.`,
  },
  'hotel-renovation': {
    label: 'Hotel Power Renovation',
    title: 'Hotel Power Renovation Project',
    description: 'Modernized the electrical infrastructure of a historic hotel while preserving architectural integrity and enhancing guest safety and comfort.',
    image: `${static_assets}/images/projects/hotel.jpg`,
    location: 'Downtown, Tampa, FL',
    duration: 'Completed in 4 weeks',
    materials: [
      'Copper Wiring',
      'Load Distribution Panels',
      'Grounding Equipment',
      'Surge Protectors',
      'Smart Thermostats',
      'LED Lighting Fixtures',
      'Smoke & CO Detectors',
      'Backup Power Supplies',
      'GFCI Outlets',
      'Tamper-Resistant Receptacles'
    ],
    content: `
    For the  Hotel, our team was tasked with a sensitive power system upgrade that respected the building’s charm while meeting modern electrical standards.
    We rewired guest rooms, common areas, and the kitchen, ensuring clean and consistent power delivery.
    LED lighting and smart thermostats were installed to improve energy efficiency. GFCI outlets and upgraded smoke detectors added critical safety.
    All work was performed with close coordination with preservation experts to ensure no historical elements were disturbed during the renovation.`,
  },
  'community-center-wiring': {
    label: 'Community Center Wiring',
    title: 'Community Center Electrical Wiring Project',
    description: 'Installed a safe, modern wiring infrastructure to support multipurpose facility needs including lighting, HVAC, and AV systems.',
    image: `${static_assets}/images/projects/commiunity.jpg`,
    location: 'Orlando, FL',
    duration: 'Completed in 3 weeks',
    materials: [
      'MC Electrical Cables',
      'Breaker Panels',
      'Motion-Sensor Lighting',
      'Ceiling Fan Wiring Kits',
      'Dedicated AV Circuitry',
      'Low-Voltage Wiring',
      'Smoke Detectors & Emergency Lighting',
      'Smart Switches',
      'Thermostat Wiring',
      'Cable Conduits'
    ],
    content: `
    For this community center, the goal was to create a versatile and safe environment suitable for public events, classes, and meetings.
    We installed new MC wiring for general power distribution, with separate circuits for AV systems and HVAC controls.
    Smart switches and motion-activated lighting were used to reduce energy consumption.
    Special attention was given to safety systems, including emergency lighting and smoke detection.
    The upgraded infrastructure now supports a broad range of events with reliable power and user-friendly controls.`,
  },
  'eco-homes-smart-wiring': {
    label: 'Eco Homes Smart Wiring',
    title: 'Eco Homes Smart Electrical Wiring Project',
    description: 'Implemented energy-efficient smart wiring solutions across eco-friendly residences, enabling full home automation and energy control.',
    image: `${static_assets}/images/services/smart_home_wiring.jpg`,
    location: 'Boca Raton, FL',
    duration: 'Completed in 4 weeks',
    materials: [
      'Cat6 Ethernet Cables',
      'Smart Switches & Dimmers',
      'Wi-Fi Enabled Thermostats',
      'Home Automation Hubs',
      'Low-Voltage LED Lighting',
      'Power Monitoring Modules',
      'Motion Sensors',
      'Solar Panel Inverter Wiring',
      'EV Charging Points',
      'Breaker Panels with Surge Protection'
    ],
    content: `
    In this green-living project, we partnered with an eco-developer to provide full smart wiring solutions for a cluster of modern eco homes.
    The homes were fitted with Cat6 cabling and smart dimmers for seamless control via mobile apps and voice assistants.
    Energy-efficient LED lighting, motion sensors, and smart thermostats were installed to reduce consumption.
    We also pre-wired homes for solar integration and EV chargers, making them future-ready.
    All systems were tested for optimal performance and integrated into the central home automation hub.`,
  },
  'harbor-plaza-fitout': {
    label: 'Harbor Plaza Power Fitout',
    title: 'Harbor Plaza Complete Electrical Fitout',
    description: 'Delivered a full electrical infrastructure fitout for a commercial plaza including lighting, safety systems, and smart control units.',
    image: `${static_assets}/images/projects/plaza.jpg`,
    location: 'Harbor Plaza, Tampa, FL',
    duration: 'Completed in 5 weeks',
    materials: [
      'Main Distribution Panels',
      'Conduit & EMT Tubing',
      'Commercial Light Fixtures',
      'Smart Lighting Controllers',
      'Motion & Occupancy Sensors',
      'Emergency Exit Signs',
      'Smoke Detectors & Alarms',
      'Data Cabling',
      'Surge Protectors',
      'Energy Management Systems'
    ],
    content: `
    Harbor Plaza underwent a complete electrical overhaul to support new tenants and businesses.
    Our team installed modern distribution panels, lighting systems, and integrated smart controls throughout the plaza.
    We ensured all installations met commercial-grade safety standards, including smoke alarms and emergency lighting.
    Data cabling and surge protection were added to safeguard sensitive equipment.
    The fitout was executed smoothly within 5 weeks with full client satisfaction and future scalability in mind.`,
  }
}

export const projectsImageGallery = [
  `${static_assets}/images/projects/appartment.jpg`,
  `${static_assets}/images/projects/commiunity.jpg`,
  `${static_assets}/images/projects/hotel.jpg`,
  `${static_assets}/images/projects/mall.jpg`,
  `${static_assets}/images/projects/office_wiring.jpg`,
  `${static_assets}/images/projects/plaza.jpg`,
  `${static_assets}/images/projects/power_setups.jpg`,
  `${static_assets}/images/services/smart_home_wiring.jpg`,
  `${static_assets}/images/services/ev_charger.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
  {
    name: "John Doe",
    role: "Homeowner | Florida",
    feedback: "Total Care Electrical fixed all our faulty wiring and upgraded our lighting system flawlessly. Very professional team!",

  },
  {
    name: "Sarah Smith",
    role: "Property Manager",
    feedback: "They completely re-wired our entire apartment building without delays. Efficient and easy to work with.",

  },
  {
    name: "David Brown",
    role: "Architect | Florida",
    feedback: "High-quality electrical installations that matched our luxury design specs. Very impressed!",

  },
  {
    name: "Emily Johnson",
    role: "Business Owner",
    feedback: "Fast response on a power outage emergency. Saved our business day with their quick service!",

  },
  {
    name: "Michael Carter",
    role: "Real Estate Developer | Florida",
    feedback: "Their electrical work is always reliable and code-compliant. A trusted partner for our developments.",

  },
  {
    name: "Olivia Wilson",
    role: "Interior Designer",
    feedback: "Loved how they installed modern lighting fixtures without damaging our new interiors. Very careful and skilled!",

  },
  {
    name: "James Anderson",
    role: "Hotel Manager | Florida",
    feedback: "Total Care Electrical upgraded all guest room lighting and outlets efficiently. Clean work and minimal downtime.",

  },
  {
    name: "Sophia Martinez",
    role: "Homeowner | Florida",
    feedback: "We had multiple electrical issues, and they fixed everything in one visit. Super organized team!",

  },
  {
    name: "Robert Lee",
    role: "Construction Contractor | Florida",
    feedback: "On every job site, they deliver solid electrical work and smooth coordination. My go-to team.",

  },
  {
    name: "Isabella Taylor",
    role: "Retail Owner",
    feedback: "Had a power failure over the weekend—these guys were here fast and handled it like pros.",

  },
  {
    name: "William Harris",
    role: "Commercial Property Owner | Florida",
    feedback: "They modernized our entire electrical system and improved energy efficiency. Great investment.",

  },
  {
    name: "Emma Robinson",
    role: "Home Renovator | Florida",
    feedback: "They’re excellent at integrating electrical systems into remodeling projects without delays or surprises.",

  }
];
