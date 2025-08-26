import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/hvac'
export const siteUrl = 'https://totalcareservicesairconditioning.com/'
export const siteName = 'Total Care Air Conditioning'
export const siteLogo = `${static_assets}/images/logo.png`
export const googleAnalyticId = 'G-N50JQ785WT'
export const bussinessType = ["LocalBusiness", "HVACBusiness"]


export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@totalcareservicesairconditioning.com',
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
      title: 'Total Care Air Conditioning',
      description: 'Trusted air conditioning services across Florida. From emergency repairs to complete HVAC installations for residential and commercial properties.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl,
    },
    hero: {
      title: 'Stay Cool with Professional AC Services',
      description: 'From fast fixes to full AC system installations, our certified HVAC experts deliver reliable, energy-efficient climate control across Florida.',
      backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
      ctaText: 'Book AC Service',
      ctaLink: '/contact',
    },
    services: {
      heading: 'Our Air Conditioning Services',
    },
    projects: {
      heading: 'Cooling Projects Across Florida',
    },
}
  
  export const servicesPage = {
    seo: {
      title: 'Air Conditioning Services in Florida',
      description: 'Explore our expert AC services including installations, maintenance, emergency repairs, smart thermostats, ductwork, and energy-efficient cooling upgrades across Florida.',
      ogImage: `${static_assets}`,
      canonical: siteUrl + 'services',
    },
}
  
  export const projectsPage = {
    seo: {
      title: 'Air Conditioning Projects in Florida',
      description: 'Browse our portfolio of cooling projects — from home AC installations to large commercial HVAC solutions throughout Florida.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl + 'projects',
    },
}
  
  export const aboutPage = {
    seo: {
      title: 'About Us',
      description: 'Learn about Total Care Air Conditioning, our expert team, service approach, and why Florida homes and businesses trust us for their comfort needs.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl + 'about',
    },
    content: 'Total Care Air Conditioning is a Florida-based HVAC company dedicated to keeping homes and businesses cool and comfortable. We focus on efficiency, quality, and long-term climate control solutions backed by years of hands-on experience.',
}
  
  export const contactPage = {
    seo: {
      title: 'Contact Us',
      description: 'Need help with your AC? Contact Total Care Air Conditioning for expert guidance, booking service, or emergency HVAC repairs in Florida.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl + 'contact',
    },
    form: {
      heading: 'Contact Us',
      messagePlaceholder: "Tell us what’s heating up — we’ll cool it down fast.",
    },
}
  
  export const blogPage = {
    seo: {
      title: 'Air Conditioning Tips & HVAC Insights - Florida',
      description: 'Stay cool and informed with expert advice on air conditioning maintenance, energy-saving tips, AC safety, and HVAC industry news.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl + 'blogs',
    },
}
  
  export const serviceAreaPage = {
    seo: {
      title: 'Air Conditioning Services In Florida',
      description: 'Serving all of Florida with expert air conditioning services — from minor tune-ups to complete HVAC installations.',
      ogImage: `${static_assets}/images/hero_bg_1.jpg`,
      canonical: siteUrl + 'service-areas',
    }
}
  
/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
    title: 'GET TO KNOW',
    heading: 'Air Conditioning Services with Comfort, Quality, and Integrity',
    description:
      'Total Care Air Conditioning is your dependable partner for cooling solutions across Florida. We prioritize energy efficiency, expert installation, and treating every home or business with respect and care.',
    keyPoints: [
      {
        title: 'Certified & Experienced Technicians',
        desc: 'Our HVAC professionals are licensed, insured, and trained to handle any AC system safely and effectively.',
      },
      {
        title: 'Top-Tier Cooling Equipment',
        desc: 'We use industry-leading brands and components to ensure powerful, reliable performance.',
      },
      {
        title: 'Clean Installations & Efficient Repairs',
        desc: 'Our team works neatly and efficiently, making sure your space is cool, comfortable, and compliant.',
      },
    ],
    image1_url: `${static_assets}/images/services/ac_installation.jpg`,
    image2_url: `${static_assets}/images/services/commercial_hvac.jpg`,
    image3_url: `${static_assets}/images/services/smart_thermostat.jpg`,
    image4_url: `${static_assets}/images/services/heat_pump.jpg`,
  };
  
  
  export const faqs = [
    {
      question: "Do you offer free AC inspections?",
      answer: "Yes, we provide free inspections and estimates for residential and commercial cooling systems."
    },
    {
      question: "What air conditioning services do you provide?",
      answer: "We handle installations, repairs, maintenance, ductwork, thermostat setups, and energy-efficient upgrades."
    },
    {
      question: "Are your technicians certified and insured?",
      answer: "Absolutely. All our HVAC technicians are licensed, insured, and trained to follow Florida HVAC standards."
    },
    {
      question: "Do you offer emergency AC services?",
      answer: "Yes, we’re available 24/7 for emergencies like breakdowns, refrigerant leaks, or system failures."
    },
    {
      question: "How quickly can you respond to a service call?",
      answer: "We strive for same-day service depending on availability and urgency of the issue."
    },
    {
      question: "Do you service both homes and commercial buildings?",
      answer: "Yes, we work with homeowners, offices, retail spaces, and other commercial facilities."
    }
  ];
  
  
  export const ourProcessData = {
    heading: 'Our Process',
    description: 'From your first call to the final system test, we make AC services fast, efficient, and worry-free.',
    list: [
      {
        title: "Initial Consultation",
        description: "We discuss your cooling needs, comfort goals, and budget preferences.",
        icon: FaComments
      },
      {
        title: "On-Site Assessment",
        description: "Our certified HVAC pros visit your property to inspect or assess the system or installation area.",
        icon: FaSearch
      },
      {
        title: "Custom Proposal",
        description: "We provide a clear estimate outlining recommended solutions, equipment, and timeline.",
        icon: FaFileAlt
      },
      {
        title: "Scheduling the Work",
        description: "We schedule the installation or repair at your convenience with minimal disruption.",
        icon: FaCalendarAlt
      },
      {
        title: "AC Service or Installation",
        description: "Our team handles the job precisely—whether it's repair, replacement, or full system setup.",
        icon: FaHammer
      },
      {
        title: "Final Inspection & Cool-Down",
        description: "We test your system, verify performance, and ensure your space is perfectly cooled.",
        icon: FaCheckCircle
      }
    ]
  };
  
  export const WhyUSData = [
    {
      title: "Certified HVAC Technicians",
      description: "Our skilled team is trained and licensed to handle all residential and commercial AC needs.",
      icon: FaUserTie
    },
    {
      title: "Quality-Focused Workmanship",
      description: "We use trusted brands and proven techniques to ensure your cooling system performs flawlessly.",
      icon: FaTools
    },
    {
      title: "Reliable & Transparent",
      description: "We show up on time, communicate clearly, and guide you every step of the way.",
      icon: FaHandshake
    },
    {
      title: "Honest, Upfront Pricing",
      description: "No surprises — we offer transparent quotes that align with your budget and comfort goals.",
      icon: FaDollarSign
    },
    {
      title: "Customer-First Mindset",
      description: "Your comfort is our mission. We’re not done until your AC runs perfectly and you’re fully satisfied.",
      icon: FaSmile
    },
    {
      title: "Code-Compliant & Safe",
      description: "We strictly follow Florida HVAC codes and safety standards to protect your home and family.",
      icon: FaShieldAlt
    }
  ];
  
  export const accomplishmentData = [
    { title: "Cooling Installations", number: 200 },
    { title: "Residential AC Jobs", number: 400 },
    { title: "Licensed HVAC Technicians", number: 35 },
    { title: "Satisfied Customers", number: 650 },
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
        { label: 'AC Installation', href: '/services/ac-installation', hasChildrens: false },
        { label: 'AC Repair', href: '/services/ac-repair', hasChildrens: false },
        { label: 'Duct Cleaning', href: '/services/duct-cleaning', hasChildrens: false },
        { label: 'Thermostat Installation', href: '/services/thermostat-installation', hasChildrens: false },
        { label: 'HVAC Maintenance', href: '/services/hvac-maintenance', hasChildrens: false },
        { label: 'Indoor Air Quality', href: '/services/indoor-air-quality', hasChildrens: false },
        { label: 'Emergency AC Services', href: '/services/emergency-ac-services', hasChildrens: false },
        { label: 'Commercial HVAC Solutions', href: '/services/commercial-hvac', hasChildrens: false },
        { label: 'Heat Pump Services', href: '/services/heat-pump-services', hasChildrens: false },
        { label: 'Energy Efficiency Upgrades', href: '/services/energy-efficiency', hasChildrens: false },
      ]
    },
    {
      label: 'Projects',
      href: '/projects',
      external: false,
      hasChildrens: true,
      children: [
        { label: 'Downtown Office Cooling', href: '/projects/downtown-office-cooling', hasChildrens: false },
        { label: 'Sunrise Apartments HVAC Upgrade', href: '/projects/sunrise-apartments-upgrade', hasChildrens: false },
        { label: 'Palm Heights AC Installation', href: '/projects/palm-heights-ac-installation', hasChildrens: false },
        { label: 'City Mall Cooling System', href: '/projects/city-mall-cooling', hasChildrens: false },
        { label: 'Heritage Hotel Climate Renovation', href: '/projects/heritage-hotel-renovation', hasChildrens: false },
        { label: 'Green Grove AC Setup', href: '/projects/green-grove-setup', hasChildrens: false },
        { label: 'Ocean Bay Resort HVAC Design', href: '/projects/ocean-bay-hvac', hasChildrens: false },
        { label: 'Community Center Cooling', href: '/projects/community-center-cooling', hasChildrens: false },
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
    tagline: 'Cooling Florida with Efficient AC Installations, Fast Repairs, and Expert HVAC Solutions.',
  };
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
    {
      name: "Miami",
      href: "/miami",
      title: "Air Conditioning Services in Miami, FL",
      description: "Trusted AC services in Miami, FL. Expert repairs, installations, and maintenance to keep your space cool year-round.",
      content: "Total Care Air Conditioning proudly serves Miami with dependable HVAC solutions built for Florida’s heat. We focus on efficiency, reliability, and customer comfort.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Orlando",
      href: "/orlando",
      title: "Air Conditioning Services in Orlando, FL",
      description: "Top-rated air conditioning services in Orlando, FL. From emergency repairs to full system installs — we’ve got you covered.",
      content: "In Orlando, Total Care Air Conditioning delivers cool comfort with fast, friendly, and professional HVAC services you can count on.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Tampa",
      href: "/tampa",
      title: "Air Conditioning Services in Tampa, FL",
      description: "Reliable AC solutions in Tampa, FL. Efficient repairs, installations, and clean air expertise for homes and businesses.",
      content: "Serving Tampa with care, Total Care Air Conditioning keeps your property comfortable with modern HVAC technology and energy-conscious service.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Jacksonville",
      href: "/jacksonville",
      title: "Air Conditioning Services in Jacksonville, FL",
      description: "Professional HVAC services in Jacksonville, FL. Specializing in AC installs, tune-ups, and indoor air quality improvements.",
      content: "Jacksonville homeowners rely on Total Care Air Conditioning for honest assessments, precision installs, and year-round comfort solutions.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Fort Lauderdale",
      href: "/fort-lauderdale",
      title: "Air Conditioning Services in Fort Lauderdale, FL",
      description: "Efficient cooling solutions in Fort Lauderdale, FL. Full-service AC repairs, replacements, and maintenance.",
      content: "Total Care Air Conditioning helps Fort Lauderdale beat the heat with high-efficiency cooling systems and expert HVAC care.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "St. Petersburg",
      href: "/st-petersburg",
      title: "Air Conditioning Services in St. Petersburg, FL",
      description: "Reliable HVAC services in St. Pete. Prompt, affordable cooling services for homes and light commercial spaces.",
      content: "From quick fixes to full installations, Total Care Air Conditioning brings clean, cool air to every St. Petersburg job.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Cape Coral",
      href: "/cape-coral",
      title: "Air Conditioning Services in Cape Coral, FL",
      description: "Cape Coral’s trusted HVAC team. We handle everything from ductless mini-splits to central air installations.",
      content: "In Cape Coral, Total Care Air Conditioning brings expertise, energy efficiency, and friendly service to every home and business.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Hialeah",
      href: "/hialeah",
      title: "Air Conditioning Services in Hialeah, FL",
      description: "Full-service AC repairs and installations in Hialeah, FL. Stay cool with trusted, local HVAC pros.",
      content: "Total Care Air Conditioning is Hialeah’s partner for responsive service, smart system upgrades, and year-round indoor comfort.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Gainesville",
      href: "/gainesville",
      title: "Air Conditioning Services in Gainesville, FL",
      description: "Dependable HVAC services in Gainesville. From filter swaps to full replacements, we keep your system running smoothly.",
      content: "Gainesville homes and businesses rely on Total Care Air Conditioning for cool air, cleaner ventilation, and lower energy bills.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Naples",
      href: "/naples",
      title: "Air Conditioning Services in Naples, FL",
      description: "Naples AC experts for cooling installations, maintenance, and smart thermostat solutions.",
      content: "Total Care Air Conditioning offers Naples residents efficient HVAC service designed for comfort, savings, and long-term reliability.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Pensacola",
      href: "/pensacola",
      title: "Air Conditioning Services in Pensacola, FL",
      description: "Professional HVAC care in Pensacola. We handle residential cooling systems with speed and precision.",
      content: "From seasonal tune-ups to new system installs, Total Care Air Conditioning keeps Pensacola cool and energy-smart.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "West Palm Beach",
      href: "/west-palm-beach",
      title: "Air Conditioning Services in West Palm Beach, FL",
      description: "Premier AC services in West Palm Beach. Repairs, installations, ductwork, and more — all in one place.",
      content: "West Palm Beach counts on Total Care Air Conditioning for modern cooling solutions with a focus on comfort and energy savings.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Lakeland",
      href: "/lakeland",
      title: "Air Conditioning Services in Lakeland, FL",
      description: "Lakeland’s trusted HVAC service provider. Quick diagnostics, quality repairs, and long-lasting results.",
      content: "At Total Care Air Conditioning, we bring cool comfort to Lakeland with responsive service and attention to every detail.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Ocala",
      href: "/ocala",
      title: "Air Conditioning Services in Ocala, FL",
      description: "Affordable AC services in Ocala. Reliable repairs and installs to keep your space cool all year long.",
      content: "Serving Ocala with pride, Total Care Air Conditioning offers expert HVAC solutions tailored to Florida’s unique climate.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Bradenton",
      href: "/bradenton",
      title: "Air Conditioning Services in Bradenton, FL",
      description: "Expert cooling services in Bradenton. Installations, tune-ups, and energy-saving upgrades done right.",
      content: "Bradenton residents turn to Total Care Air Conditioning for responsive service and long-term cooling comfort.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Fort Myers",
      href: "/fort-myers",
      title: "Air Conditioning Services in Fort Myers, FL",
      description: "Dependable HVAC contractors in Fort Myers. We specialize in efficient systems that last.",
      content: "Total Care Air Conditioning helps Fort Myers families and businesses stay cool with high-quality service and honest pricing.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Hollywood",
      href: "/hollywood",
      title: "Air Conditioning Services in Hollywood, FL",
      description: "Hollywood, FL’s trusted HVAC experts. Cool your space with modern, energy-efficient systems.",
      content: "We proudly serve Hollywood with high-efficiency cooling and a commitment to customer satisfaction and comfort.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
      name: "Boca Raton",
      href: "/boca-raton",
      title: "Air Conditioning Services in Boca Raton, FL",
      description: "Luxury AC service in Boca Raton. Perfect for elegant homes and high-end properties.",
      content: "Total Care Air Conditioning helps Boca Raton stay cool with discreet, powerful systems and reliable service tailored to upscale homes.",
      image: `${static_assets}/images/hero_bg_1.jpg`
    }
  ];
  
  

/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
  'ac-installation': {
      label: 'AC Installation',
      title: 'Expert Air Conditioning Installation Services in Florida',
      description: 'Stay cool year-round with our professional AC installation services. We install energy-efficient systems tailored to your property’s needs.',
      content: `A properly installed AC system is essential for comfort and energy savings in Florida’s heat. At Total Care Air Conditioning, we specialize in the professional installation of central air systems, ductless mini-splits, and high-efficiency HVAC units. Our experienced technicians evaluate your space, recommend the right system size and type, and ensure flawless installation. Whether it’s a new construction, renovation, or system replacement, we provide smooth, code-compliant installs that maximize performance and longevity.`,
      image: `${static_assets}/images/services/ac_installation.jpg`,
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Central AC Installation',
          'Ductless Mini-Split Installation',
          'Multi-Zone HVAC Installation',
          'New Construction AC Systems',
          'System Replacements & Upgrades',
          'Smart Thermostat Integration',
          'Air Handler & Condenser Installations',
          'Energy-Efficient System Planning',
          'HVAC Load Calculation & Sizing',
          'Code-Compliant Installations'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Tailored System Recommendations',
          description: 'We assess your property and needs to install the most efficient and cost-effective cooling solution.'
        },
        {
          title: 'Energy Efficiency & Savings',
          description: 'We install modern units that reduce energy bills and maintain consistent indoor comfort.'
        },
        {
          title: 'Certified HVAC Technicians',
          description: 'Our licensed experts follow Florida’s building codes and manufacturer guidelines for seamless installation.'
        },
        {
          title: 'Quick Turnaround',
          description: 'We complete most installations within a day or two, minimizing disruption to your daily life.'
        },
        {
          title: 'Flexible System Options',
          description: 'From budget-friendly models to high-end smart systems, we offer a range of options for every home or business.'
        },
        {
          title: 'Post-Installation Support',
          description: 'We walk you through system operation and provide ongoing support, maintenance plans, and warranties.'
        },
        {
          title: 'Upfront Pricing',
          description: 'No surprises. We give clear, honest estimates and guide you through the process from start to finish.'
        }
      ],
      
      faqs: [
        {
          question: "How do I know which AC system is right for my home?",
          answer: "We perform a load calculation based on your home’s size, layout, and insulation to recommend the ideal system."
        },
        {
          question: "Do you install ductless AC systems?",
          answer: "Yes, we install both ducted and ductless (mini-split) systems, depending on your needs and preferences."
        },
        {
          question: "How long does AC installation take?",
          answer: "Most standard installations are completed in 1–2 days, depending on system complexity and existing setup."
        },
        {
          question: "Will I need to upgrade my electrical system?",
          answer: "Sometimes. If your existing panel can’t handle the new load, we’ll advise on safe, code-compliant upgrades."
        },
        {
          question: "Is your work warrantied?",
          answer: "Yes, all installations include manufacturer warranties and workmanship guarantees for your peace of mind."
        },
        {
          question: "Do you remove old AC units?",
          answer: "Absolutely. We handle safe removal and disposal of old units as part of our service."
        }
      ],
      images:[]
  },
  'ac-repair': {
    label: 'AC Repair',
    title: 'Fast & Reliable Air Conditioning Repair Services in Florida',
    description: 'Restore cool comfort fast with our expert AC repair services. We fix all makes and models with upfront pricing and no hidden fees.',
    content: `Don’t sweat it—Total Care Air Conditioning is here when your AC system breaks down. Our certified HVAC technicians diagnose and repair all types of cooling systems with speed and precision. Whether it’s weak airflow, strange noises, or complete failure, we’ll get your system back up and running in no time. We service central AC units, ductless mini-splits, heat pumps, and more. Our repairs are code-compliant, efficient, and backed by satisfaction guarantees. Same-day and emergency service available across Florida.`,
    image: `${static_assets}/images/services/ac_repair.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'AC System Diagnostics',
        'Refrigerant Leak Repair',
        'Blower & Fan Motor Replacement',
        'Frozen Coil Troubleshooting',
        'Thermostat Malfunction Repair',
        'Electrical & Capacitor Repairs',
        'Drain Line Cleaning & Fixes',
        'Compressor & Condenser Repair',
        'Ductless Mini-Split Repair',
        'Emergency AC Repair'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Quick Response Times',
        description: 'Our local techs arrive fast and fully equipped to restore your comfort as quickly as possible.'
      },
      {
        title: 'Upfront, Honest Pricing',
        description: 'No hidden fees. You get clear estimates before any work begins.'
      },
      {
        title: 'All Brands & Models Serviced',
        description: 'We work with every major AC brand and system type, old and new.'
      },
      {
        title: 'Emergency Service Available',
        description: 'Late-night breakdowns? No problem. We offer 24/7 AC repair options in most areas.'
      },
      {
        title: 'Lasting Fixes',
        description: 'We don’t just patch symptoms — we address root causes to prevent future issues.'
      },
      {
        title: 'Fully Licensed & Insured',
        description: 'Our HVAC pros are certified and trained to Florida’s high standards of safety and reliability.'
      },
      {
        title: 'Satisfaction Guarantee',
        description: 'We back every repair with our Total Care promise — quality work or we’ll make it right.'
      }
    ],
    faqs: [
      {
        question: "What are common signs my AC needs repair?",
        answer: "Warm air, strange noises, bad odors, water leaks, high energy bills, or poor airflow are all red flags."
      },
      {
        question: "Can I run my AC if it’s acting up?",
        answer: "It’s best to shut it off and call a pro. Running a damaged system can make things worse and cost more."
      },
      {
        question: "Do you carry parts for on-the-spot repairs?",
        answer: "Yes, our service vans are stocked with common parts to fix most problems on the first visit."
      },
      {
        question: "Will you check refrigerant levels?",
        answer: "Absolutely. Low refrigerant is a common problem and we’ll refill or repair any leaks as needed."
      },
      {
        question: "Is it better to repair or replace my unit?",
        answer: "We’ll give honest advice based on age, repair history, and efficiency — not pushy upsells."
      },
      {
        question: "How much does AC repair cost?",
        answer: "Pricing varies by issue, but we always provide upfront estimates before work begins."
      }
    ],
    images:[],
  },
  'duct-cleaning': {
    label: 'Duct Cleaning',
    title: 'Professional Air Duct Cleaning Services in Florida',
    description: 'Improve your indoor air quality and HVAC efficiency with expert duct cleaning. We remove dust, debris, and allergens from your ductwork.',
    content: `Over time, dust, mold, pet dander, and other contaminants can build up in your air ducts — polluting your indoor air and reducing HVAC performance. At Total Care Air Conditioning, our duct cleaning services help restore clean airflow, improve system efficiency, and support healthier living. Using high-powered vacuums and safe techniques, we thoroughly clean every inch of your ductwork, vents, and returns. Whether it’s for allergy relief, energy savings, or peace of mind, our certified team ensures your ducts are spotless and functioning their best.`,
    image: `${static_assets}/images/services/duct_cleaning.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Whole-Home Duct Cleaning',
        'Vent & Return Cleaning',
        'Mold & Mildew Removal from Ducts',
        'Pet Hair & Allergen Extraction',
        'Duct Deodorizing & Sanitizing',
        'Duct Inspection with Camera Scopes',
        'Dryer Vent Cleaning',
        'Commercial Duct Cleaning',
        'HVAC System Optimization',
        'HEPA Filter Recommendations'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Healthier Indoor Air',
        description: 'Our services remove allergens, bacteria, and dust for cleaner, fresher air in your home or office.'
      },
      {
        title: 'Boosted HVAC Efficiency',
        description: 'Clean ducts allow air to flow freely, reducing energy consumption and extending equipment lifespan.'
      },
      {
        title: 'Allergy & Asthma Relief',
        description: 'We help reduce triggers that can worsen respiratory conditions by clearing out irritants from your ductwork.'
      },
      {
        title: 'Advanced Equipment',
        description: 'We use powerful vacuum systems and safe brushes that won’t damage your ducts.'
      },
      {
        title: 'Odor Elimination',
        description: 'Get rid of musty, stale air caused by mold or dust buildup with full duct sanitization.'
      },
      {
        title: 'Licensed HVAC Professionals',
        description: 'Our techs are trained in both HVAC function and indoor air quality best practices.'
      },
      {
        title: 'Honest Assessment',
        description: 'We only recommend duct cleaning when it’s actually needed — no scare tactics.'
      }
    ],
    
    faqs: [
      {
        question: "How often should air ducts be cleaned?",
        answer: "Every 3–5 years is typical, or sooner if you have pets, allergies, recent renovations, or visible dust buildup."
      },
      {
        question: "Will duct cleaning make my home dusty?",
        answer: "Nope. Our equipment contains debris during the cleaning process, leaving your home cleaner than before."
      },
      {
        question: "Can duct cleaning lower my energy bills?",
        answer: "Yes. Clean ducts improve airflow, which helps your HVAC system run more efficiently."
      },
      {
        question: "Do you clean dryer vents too?",
        answer: "Yes. Dryer vent cleaning reduces fire risk and improves appliance efficiency — we recommend it annually."
      },
      {
        question: "Is there any prep I need to do?",
        answer: "Just clear access to vents and registers. We’ll handle everything else, including furniture covers if needed."
      },
      {
        question: "Do you offer duct sanitizing?",
        answer: "Yes, we can apply safe antimicrobial treatments after cleaning to neutralize bacteria, mold, and odors."
      }
    ],
    images: []
  },
  'thermostat-installation': {
    label: 'Thermostat Installation',
    title: 'Smart & Programmable Thermostat Installation Services in Florida',
    description: 'Upgrade your HVAC control with expert thermostat installation. We install and configure smart, programmable, and manual thermostats.',
    content: `Take control of your indoor climate and energy use with a professionally installed thermostat. At Total Care Air Conditioning, we install a wide range of thermostats — from basic programmable units to advanced smart thermostats with Wi-Fi connectivity and app control. Whether you're replacing an outdated model or integrating a thermostat with a new HVAC system, our technicians ensure it’s wired, configured, and optimized for your specific setup. Enjoy improved comfort, energy savings, and smart features that let you adjust temperatures from anywhere.`,
    image: `${static_assets}/images/services/smart_thermostat.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Smart Thermostat Installation',
        'Programmable Thermostat Setup',
        'Wi-Fi & App-Controlled Thermostats',
        'Multi-Zone Thermostat Installation',
        'Thermostat Wiring & Rewiring',
        'Nest, Ecobee, Honeywell & More',
        'Thermostat Troubleshooting & Replacement',
        'Integration with HVAC & Home Automation',
        'Energy Usage Monitoring Setup',
        'Manual Thermostat to Smart Upgrade'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Energy Savings',
        description: 'Smart thermostats learn your patterns and help reduce heating/cooling waste — saving you money.'
      },
      {
        title: 'Remote Access',
        description: 'Control your home’s temperature from your phone, tablet, or voice assistant for ultimate convenience.'
      },
      {
        title: 'Seamless Compatibility',
        description: 'We install thermostats that work perfectly with your existing HVAC system — no guesswork.'
      },
      {
        title: 'Professional Wiring & Setup',
        description: 'Our experts ensure safe wiring, secure mounting, and full functionality of every feature.'
      },
      {
        title: 'User Training & Support',
        description: 'We show you how to use all features and settings, so you get the most out of your device.'
      },
      {
        title: 'Brand Flexibility',
        description: 'We work with Nest, Ecobee, Honeywell, and other leading brands — helping you choose what’s best.'
      },
      {
        title: 'Quick Installations',
        description: 'Most installations are completed in under an hour — no major disruptions.'
      }
    ],
    
    faqs: [
      {
        question: "Can I install a smart thermostat myself?",
        answer: "Some can, but it’s easy to make wiring mistakes or damage components. We recommend pro installation for best results."
      },
      {
        question: "Which smart thermostat do you recommend?",
        answer: "It depends on your HVAC system and goals. We’ll help you choose between brands like Nest, Ecobee, and Honeywell."
      },
      {
        question: "Do I need Wi-Fi for a smart thermostat?",
        answer: "Yes, for remote access and advanced features. If you don’t need those, we can install a programmable model instead."
      },
      {
        question: "Can a new thermostat lower my energy bills?",
        answer: "Absolutely. Smart thermostats can reduce energy usage by learning your habits and adjusting accordingly."
      },
      {
        question: "Will my old thermostat wiring work?",
        answer: "In most cases, yes. If not, we can upgrade or add a C-wire to power the new device safely."
      },
      {
        question: "Can you set up voice control too?",
        answer: "Yes, we can link your thermostat with Google Assistant, Alexa, or Apple HomeKit if supported."
      }
    ],
    images: []
  },
  'hvac-maintenance': {
    label: 'HVAC Maintenance',
    title: 'Comprehensive HVAC Maintenance Services in Florida',
    description: 'Keep your HVAC system running efficiently year-round with our scheduled maintenance and tune-up services.',
    content: `Prevent unexpected breakdowns and extend the life of your heating and cooling systems with professional HVAC maintenance from Total Care Air Conditioning. Our technicians perform seasonal tune-ups, clean key components, check refrigerant levels, test safety systems, and inspect for wear and tear. Whether it’s a residential unit or a large commercial system, routine maintenance improves performance, lowers energy bills, and helps you avoid costly repairs. Stay comfortable all year with Florida’s trusted HVAC experts.`,
    image: `${static_assets}/images/services/hvac_maintainence.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Seasonal HVAC Tune-Ups',
        'Filter Replacements & Cleaning',
        'Refrigerant Level Checks',
        'Coil Cleaning (Evaporator & Condenser)',
        'Thermostat Calibration',
        'Electrical Connection Tightening',
        'Blower Motor & Fan Inspection',
        'Drain Line Clearing',
        'Ductwork Inspection & Airflow Testing',
        'Emergency Maintenance Services'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Improved Energy Efficiency',
        description: 'Well-maintained systems consume less energy, lowering your monthly utility bills.'
      },
      {
        title: 'Longer System Lifespan',
        description: 'Routine care helps avoid wear and damage, keeping your HVAC running longer.'
      },
      {
        title: 'Fewer Emergency Repairs',
        description: 'Our inspections catch issues early — preventing unexpected failures and downtime.'
      },
      {
        title: 'Enhanced Indoor Air Quality',
        description: 'We replace filters and clean components to reduce allergens and improve air purity.'
      },
      {
        title: 'Consistent Comfort',
        description: 'Maintenance keeps your system operating smoothly through every season.'
      },
      {
        title: 'Priority Scheduling',
        description: 'Maintenance plan customers get preferred booking times and faster service.'
      },
      {
        title: 'Upfront Reports & Insights',
        description: 'After every visit, we share a full report with recommendations and system status.'
      }
    ],
    
    faqs: [
      {
        question: "How often should I service my HVAC system?",
        answer: "We recommend twice a year — once before summer and once before winter — for optimal performance."
      },
      {
        question: "What’s included in a tune-up?",
        answer: "We check all major components, clean coils, test refrigerant levels, inspect wiring, and replace filters."
      },
      {
        question: "Can maintenance really prevent breakdowns?",
        answer: "Yes, it helps detect and fix small issues before they become big, expensive problems."
      },
      {
        question: "Do you offer maintenance plans?",
        answer: "Yes! Our affordable plans cover biannual checkups and offer discounts on repairs and priority service."
      },
      {
        question: "Is maintenance necessary if my system is new?",
        answer: "Absolutely. Most manufacturers require proof of regular maintenance to honor warranties."
      },
      {
        question: "Will it reduce my energy bills?",
        answer: "Definitely. Clean, calibrated systems operate more efficiently and use less electricity."
      }
    ],
    images: []
  },
  'indoor-air-quality': {
    label: 'Indoor Air Quality',
    title: 'Indoor Air Quality Solutions in Florida',
    description: 'Breathe cleaner, healthier air with our air purification, filtration, and ventilation solutions tailored to Florida homes and businesses.',
    content: `Poor indoor air quality can trigger allergies, asthma, and long-term health issues. At Total Care Air Conditioning, we offer complete IAQ solutions to ensure your home or workspace has clean, healthy air. From high-efficiency filters and UV lights to air scrubbers and whole-home dehumidifiers, we tailor systems to your needs. Our team conducts thorough assessments and recommends improvements that target pollutants, humidity, mold, and stale air. Breathe easier with professional-grade air quality services trusted across Florida.`,
    image: `${static_assets}/images/services/indoor_quality.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Air Purification Systems',
        'HEPA & High-Efficiency Filter Installation',
        'UV Light Air Sanitizers',
        'Whole-House Dehumidifiers',
        'Humidity Control Solutions',
        'Ventilation System Upgrades',
        'Duct Cleaning & Mold Removal',
        'Carbon Monoxide Detection Systems',
        'Air Quality Testing & Monitoring',
        'Smart IAQ System Integration'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Healthier Living Environment',
        description: 'We reduce airborne allergens, dust, and bacteria — ideal for families with allergies or asthma.'
      },
      {
        title: 'Humidity & Mold Control',
        description: 'We help balance moisture levels to prevent mold growth and respiratory discomfort.'
      },
      {
        title: 'Odor Elimination',
        description: 'Advanced purification removes pet odors, smoke, and cooking smells for fresher indoor air.'
      },
      {
        title: 'Improved Sleep & Focus',
        description: 'Cleaner air contributes to better sleep quality and mental clarity.'
      },
      {
        title: 'Energy-Efficient IAQ Solutions',
        description: 'Our systems enhance air quality without compromising HVAC efficiency.'
      },
      {
        title: 'Customized Assessments',
        description: 'We test your current air quality and tailor a plan that suits your property and concerns.'
      },
      {
        title: 'Seamless System Integration',
        description: 'We install IAQ systems that work in harmony with your existing HVAC setup.'
      }
    ],
    
    faqs: [
      {
        question: "What are signs of poor indoor air quality?",
        answer: "Symptoms include frequent allergies, headaches, musty odors, or excess dust buildup."
      },
      {
        question: "How can I improve air quality at home?",
        answer: "Start with better filtration, ventilation upgrades, humidity control, and purification systems."
      },
      {
        question: "Do I need UV lights in my HVAC?",
        answer: "UV lights kill bacteria and mold inside your HVAC system, improving both air and system health."
      },
      {
        question: "Are these systems safe for kids and pets?",
        answer: "Yes, all our IAQ solutions are safe, effective, and compliant with health standards."
      },
      {
        question: "Can poor air quality affect sleep?",
        answer: "Definitely. Polluted indoor air can cause congestion, restless sleep, and fatigue."
      },
      {
        question: "How often should filters be replaced?",
        answer: "Typically every 1–3 months, depending on system type, usage, and home environment."
      }
    ],
    images: []
  },
  'ductwork-installation-repair': {
    label: 'Ductwork Installation & Repair',
    title: 'Expert Ductwork Installation & Repair Services in Florida',
    description: 'Efficient ductwork is key to proper airflow and energy savings. We design, install, and repair duct systems to ensure comfort and HVAC performance.',
    content: `Leaky or poorly designed ducts can waste energy and reduce indoor comfort. At Total Care Air Conditioning, we offer professional ductwork installation and repair services tailored to your property. Whether you need ducts for a new HVAC system or want to seal and optimize your current layout, our technicians ensure everything is properly sized, insulated, and sealed. From airflow balancing to fixing disconnected ducts, we guarantee improved efficiency, better air quality, and lower utility bills throughout Florida.`,
    image: `${static_assets}/images/services/duct_work.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'New Ductwork Installation',
        'Air Duct Repairs & Re-sealing',
        'Ductwork Replacement',
        'Duct Insulation Services',
        'Flexible Duct Systems',
        'Sheet Metal Duct Fabrication',
        'Zoned Ducting for Multi-Room Control',
        'Airflow Balancing',
        'Leak Detection & Sealing',
        'Duct Cleaning & Sanitization'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Energy Efficiency Boost',
        description: 'Sealed and optimized ducts reduce energy waste and improve HVAC performance.'
      },
      {
        title: 'Consistent Room Temperatures',
        description: 'Properly balanced ductwork ensures even heating and cooling across your space.'
      },
      {
        title: 'Improved Indoor Air Quality',
        description: 'We eliminate gaps and dust-prone areas that compromise the air you breathe.'
      },
      {
        title: 'Custom Duct Design',
        description: 'Each system is designed to suit your home or commercial layout perfectly.'
      },
      {
        title: 'Noise Reduction',
        description: 'Proper ductwork minimizes rattles and airflow noise for a quieter environment.'
      },
      {
        title: 'Durable Materials',
        description: 'We use high-quality duct materials built to last and resist wear or damage.'
      },
      {
        title: 'Fast & Clean Installation',
        description: 'Our technicians complete the job efficiently while respecting your property.'
      }
    ],
    
    faqs: [
      {
        question: "How do I know if my ducts need repair?",
        answer: "Signs include uneven temperatures, high energy bills, rattling noises, or visible gaps and tears."
      },
      {
        question: "Can you install ducts in an older home?",
        answer: "Yes, we specialize in retrofitting duct systems for older and historic homes."
      },
      {
        question: "What’s the benefit of duct sealing?",
        answer: "Sealing prevents air leaks, improves efficiency, and enhances comfort throughout your space."
      },
      {
        question: "How often should ducts be cleaned?",
        answer: "Generally every 3–5 years, or more frequently if you notice dust buildup or allergy symptoms."
      },
      {
        question: "Is ductwork covered under HVAC warranties?",
        answer: "That depends on your system and provider—our work is always backed by our own service warranty."
      },
      {
        question: "Do you offer duct design for new construction?",
        answer: "Absolutely. We provide full duct layout and installation for homes and commercial builds."
      }
    ],
    images: []
  },
  'air-balancing-zoning': {
    label: 'Air Balancing & Zoning',
    title: 'Air Balancing & Zoning Services for Comfortable Living in Florida',
    description: 'Achieve consistent temperatures in every room with expert air balancing and zoning solutions tailored to your home or business.',
    content: `Do some rooms feel too hot while others stay cold? Uneven airflow is a common HVAC issue, but Total Care Air Conditioning has the fix. Our air balancing and zoning services optimize your duct system to ensure even distribution of air throughout your property. Zoning allows you to control the temperature in different areas independently—perfect for multi-story homes or large office spaces. Whether you need better airflow, customized comfort, or energy savings, our solutions help you gain full control of your indoor environment.`,
    image: `${static_assets}/images/services/air_balance.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'HVAC Zoning System Installation',
        'Manual & Motorized Damper Integration',
        'Smart Thermostat Zoning Controls',
        'Airflow Balancing for Existing Systems',
        'Multi-Level HVAC Zoning',
        'Pressure Testing & Adjustment',
        'Zoning for Home Additions',
        'Humidity & Temperature Management',
        'Custom Zone Layout Design',
        'Balancing Register & Grille Adjustments'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Consistent Comfort',
        description: 'Say goodbye to hot or cold spots with properly balanced airflow.'
      },
      {
        title: 'Customized Temperature Control',
        description: 'Each zone can be independently managed to suit personal preferences or room use.'
      },
      {
        title: 'Energy Savings',
        description: 'Only heat or cool the zones in use, reducing utility bills and wear on your HVAC system.'
      },
      {
        title: 'Smart System Integration',
        description: 'We integrate zoning with smart thermostats and home automation systems.'
      },
      {
        title: 'Improved System Efficiency',
        description: 'Balanced airflow reduces strain on your HVAC equipment and extends system life.'
      },
      {
        title: 'Ideal for Large Properties',
        description: 'Perfect for homes with multiple stories, open plans, or rooms with varying sun exposure.'
      },
      {
        title: 'Professional Diagnostics',
        description: 'We use precise tools to assess airflow, pressure, and duct performance before adjustment.'
      }
    ],
    
    faqs: [
      {
        question: "What is HVAC zoning?",
        answer: "Zoning divides your home into sections, each controlled by its own thermostat and dampers for customized temperature control."
      },
      {
        question: "Is zoning suitable for older homes?",
        answer: "Yes, we can retrofit zoning systems to existing ductwork in most homes and buildings."
      },
      {
        question: "Will zoning reduce my energy bills?",
        answer: "Yes, by focusing HVAC output only where needed, zoning helps reduce energy consumption and costs."
      },
      {
        question: "How many zones can I have?",
        answer: "It depends on the size and layout of your space—we’ll recommend the ideal number during inspection."
      },
      {
        question: "Can you install zoning in a single-story home?",
        answer: "Absolutely. Zoning is beneficial for any layout, especially if rooms are used differently or have different sun exposure."
      },
      {
        question: "Do I need a smart thermostat for zoning?",
        answer: "Not necessarily, but smart thermostats enhance control and scheduling across zones."
      }
    ],
    images: []
  },
  'emergency-ac-services': {
    label: 'Emergency AC Services',
    title: '24/7 Emergency Air Conditioning Repair Services in Florida',
    description: 'Don’t sweat a breakdown—our emergency AC technicians are on call day and night to restore your comfort fast.',
    content: `Air conditioning issues don’t wait for convenient hours—and neither do we. At Total Care Air Conditioning, we provide 24/7 emergency AC repair across Florida. Whether your system stopped cooling, is making strange noises, or completely shut down during peak heat, our rapid-response team is ready to diagnose and fix the issue fast. We arrive fully equipped to handle common emergencies on the spot, restoring your cooling and comfort without delay. When your AC fails, trust our licensed techs to get things running again—any time, any day.`,
    image: `${static_assets}/images/services/emergency.jpg`,
    typeOfSolutions: {
      headings: 'Emergency Services We Provide',
      types: [
        'AC Not Cooling Repairs',
        'Complete AC System Failures',
        'Refrigerant Leaks & Recharge',
        'Frozen Coil Fixes',
        'Electrical & Thermostat Issues',
        'Unusual Noises or Burning Smells',
        'Blower Motor Replacement',
        'Emergency Duct Repair',
        'Fast Diagnostics & Fixes',
        'Same-Day System Restarts'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Available 24/7',
        description: 'We respond to AC emergencies day or night, weekends and holidays included.'
      },
      {
        title: 'Rapid Response Time',
        description: 'Our local techs are dispatched quickly to get your system back up and running fast.'
      },
      {
        title: 'Fully Equipped Technicians',
        description: 'We arrive with the tools and parts needed to fix most issues on the first visit.'
      },
      {
        title: 'Upfront Pricing',
        description: 'No surprise costs—just clear, honest pricing even in urgent situations.'
      },
      {
        title: 'All Brands & Models Serviced',
        description: 'We work with all major AC brands, including central, ductless, and hybrid systems.'
      },
      {
        title: 'Certified & Licensed Technicians',
        description: 'All emergency work is handled by qualified professionals who follow Florida code.'
      },
      {
        title: 'Follow-Up Support',
        description: 'We don’t just patch issues—we check your full system and offer tips to avoid repeat failures.'
      }
    ],
    
    faqs: [
      {
        question: "What qualifies as an AC emergency?",
        answer: "Complete system shutdown, no cooling during extreme heat, strange smells, leaks, or electrical issues all count as emergencies."
      },
      {
        question: "Do you charge extra for emergency service?",
        answer: "We offer transparent pricing. After-hours rates may apply but are discussed up front—no surprises."
      },
      {
        question: "How fast can you arrive?",
        answer: "In most Florida metro areas, we arrive within 1–2 hours of your call."
      },
      {
        question: "What if my system needs a part you don’t have?",
        answer: "We’ll provide a temporary solution and return as soon as the part arrives—usually within 24–48 hours."
      },
      {
        question: "Can I call you late at night or on weekends?",
        answer: "Absolutely. We operate 24/7, including holidays."
      },
      {
        question: "Do I need to replace my unit if it fails during an emergency?",
        answer: "Not necessarily. Most emergencies are repairable unless the system is very old or severely damaged."
      }
    ],
    images: []
  },
  'commercial-hvac': {
    label: 'Commercial HVAC Solutions',
    title: 'Reliable Commercial HVAC Services Across Florida',
    description: 'Keep your business running efficiently with tailored heating, ventilation, and cooling solutions from experienced commercial HVAC pros.',
    content: `Commercial buildings require robust HVAC systems that can handle large spaces, variable occupancy, and long operating hours. At Total Care Air Conditioning, we design, install, maintain, and repair commercial-grade HVAC systems for offices, retail spaces, restaurants, warehouses, and more. Our team understands local regulations and energy efficiency requirements to ensure your system is not only effective but compliant and cost-efficient. From rooftop unit replacements to VRF system upgrades and regular maintenance contracts—we deliver comfort and reliability for your business.`,
    image: `${static_assets}/images/services/commercial_hvac.jpg`,
    typeOfSolutions: {
      headings: 'Commercial HVAC Services We Offer',
      types: [
        'Full HVAC System Design & Build',
        'Rooftop Units (RTUs) Installation & Replacement',
        'VRF & Split System Installations',
        'HVAC Zoning & Controls',
        'Energy-Efficient Upgrades',
        'Preventive Maintenance Contracts',
        'Emergency HVAC Repairs',
        'Ductwork Design & Fabrication',
        'Indoor Air Quality Solutions',
        'Thermostat & Smart Control Integration'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Custom Solutions for Your Business',
        description: 'We assess your building’s layout and usage to deliver optimized HVAC solutions tailored to your industry.'
      },
      {
        title: 'Minimal Downtime',
        description: 'Our team works fast and around your schedule to ensure your business isn’t disrupted during installs or repairs.'
      },
      {
        title: 'Energy Efficiency Focus',
        description: 'We help reduce operational costs with efficient systems, smart controls, and proper load balancing.'
      },
      {
        title: 'Regulation Compliance',
        description: 'We adhere to all Florida commercial codes, including energy standards and ventilation requirements.'
      },
      {
        title: 'Maintenance Plans Available',
        description: 'Get routine check-ups and priority service with our affordable maintenance contracts.'
      },
      {
        title: 'Experienced Commercial Technicians',
        description: 'We bring years of expertise working with office buildings, retail spaces, restaurants, and more.'
      },
      {
        title: 'Scalable Systems',
        description: 'Our solutions grow with your business—from single-site operations to multi-location enterprises.'
      }
    ],
    
    faqs: [
      {
        question: "What types of commercial buildings do you service?",
        answer: "We work with offices, retail stores, restaurants, schools, warehouses, and multi-tenant buildings."
      },
      {
        question: "Can you design and install a new system from scratch?",
        answer: "Yes, we offer complete HVAC design and build services for new construction or major renovations."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "Absolutely. Our maintenance plans help avoid costly breakdowns and extend the life of your HVAC system."
      },
      {
        question: "How do I know if my current system needs an upgrade?",
        answer: "If it’s over 10–15 years old, energy bills are high, or comfort is uneven—it might be time for a more efficient solution."
      },
      {
        question: "Do you handle rooftop HVAC units?",
        answer: "Yes, we install, repair, and replace RTUs and integrate them with building management systems."
      },
      {
        question: "Can you help reduce HVAC energy costs for my business?",
        answer: "Yes—through system upgrades, smart controls, proper zoning, and routine maintenance."
      }
    ],
    images: []
  },
  'heat-pump-services': {
    label: 'Heat Pump Services',
    title: 'Reliable Heat Pump Installation & Repair Services in Florida',
    description: 'Stay comfortable year-round with energy-efficient heat pump systems, professionally installed and serviced by our Florida technicians.',
    content: `Heat pumps offer both heating and cooling in one efficient system—ideal for Florida's climate. At Total Care Air Conditioning, we provide expert installation, repair, and maintenance of all major heat pump brands. Whether you're replacing an old unit, upgrading for energy efficiency, or fixing performance issues, our team ensures seamless service and long-lasting comfort. From ducted systems to ductless mini-splits, we’ve got the experience to get it done right.`,
    image: `${static_assets}/images/services/heat_pump.jpg`,
    typeOfSolutions: {
      headings: 'Solutions We Offer',
      types: [
        'New Heat Pump Installation',
        'Heat Pump Repair & Troubleshooting',
        'Ducted & Ductless Mini-Splits',
        'Thermostat Calibration & Setup',
        'Refrigerant Leak Detection & Fixes',
        'Compressor & Fan Motor Replacement',
        'Seasonal Maintenance Plans',
        'High-Efficiency Upgrades',
        'Emergency Repair Services',
        'Smart Heat Pump Integration'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Year-Round Comfort',
        description: 'One system handles both heating and cooling—perfect for Florida’s mild winters and hot summers.'
      },
      {
        title: 'Energy Efficient Solutions',
        description: 'Our systems are ENERGY STAR® certified and optimized to reduce utility bills.'
      },
      {
        title: 'Expert Heat Pump Repairs',
        description: 'We diagnose and fix heat pump issues quickly to restore comfort without delay.'
      },
      {
        title: 'Flexible System Options',
        description: 'We install traditional and mini-split systems tailored to your space and needs.'
      },
      {
        title: 'Long-Term Reliability',
        description: 'We use high-quality components and proper installation methods for years of trouble-free operation.'
      },
      {
        title: 'Smart Controls Available',
        description: 'Control your heat pump remotely with smart thermostats and automation options.'
      },
      {
        title: 'Transparent Pricing',
        description: 'No hidden costs—just honest estimates and quality service every step of the way.'
      }
    ],
    
    faqs: [
      {
        question: "What is a heat pump and how does it work?",
        answer: "It transfers heat between indoors and outdoors, providing both heating and cooling using refrigerant cycles."
      },
      {
        question: "Is a heat pump good for Florida’s climate?",
        answer: "Yes! It’s ideal for areas with mild winters and warm summers like Florida."
      },
      {
        question: "Can you replace my old HVAC with a heat pump?",
        answer: "Absolutely. We can upgrade your system to a modern, energy-efficient heat pump setup."
      },
      {
        question: "Do you install ductless mini-split heat pumps?",
        answer: "Yes, we offer ductless options that are great for individual rooms or additions."
      },
      {
        question: "How often should a heat pump be serviced?",
        answer: "We recommend twice a year—before summer and before winter—for optimal performance."
      },
      {
        question: "Do you provide emergency heat pump repair?",
        answer: "Yes, we offer 24/7 emergency services across Florida."
      }
    ],
    images: []
  },
  'energy-efficiency': {
    label: 'Energy Efficiency Upgrades',
    title: 'Energy Efficiency Upgrades for Air Conditioning in Florida',
    description: 'Reduce your energy bills and carbon footprint with smart AC upgrades tailored for Florida homes and businesses.',
    content: `Upgrading your air conditioning system for energy efficiency not only saves money but also contributes to a greener planet. At Total Care Air Conditioning, we assess your existing setup and recommend cost-effective upgrades—from high-SEER units to smart thermostats and insulation improvements. Our team ensures your system runs at peak efficiency, helping you lower utility bills while staying cool even in the Florida heat.`,
    image: `${static_assets}/images/services/energy_efficient.jpg`,
    typeOfSolutions: {
      headings: 'Solutions We Offer',
      types: [
        'High-SEER AC Unit Upgrades',
        'Smart Thermostat Installation',
        'Zoning Systems for Targeted Cooling',
        'Insulation & Duct Sealing Enhancements',
        'Energy Audits & Load Calculations',
        'Variable-Speed AC Installation',
        'Eco-Friendly Refrigerant Conversions',
        'Filter & Coil Upgrades for Airflow',
        'Heat Pump Efficiency Upgrades',
        'Programmable Timers & Controls'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Lower Energy Bills',
        description: 'Efficient systems consume less power while delivering the same comfort, saving you money long-term.'
      },
      {
        title: 'Eco-Friendly Solutions',
        description: 'We offer green upgrades that reduce carbon footprint and align with energy standards.'
      },
      {
        title: 'Smart System Integration',
        description: 'Automate and control your AC remotely with smart home features and programmable thermostats.'
      },
      {
        title: 'Customized for Your Property',
        description: 'We tailor upgrades based on your building size, usage, and insulation to maximize savings.'
      },
      {
        title: 'Improved Comfort',
        description: 'Efficient cooling systems reduce temperature fluctuations and noise while increasing airflow.'
      },
      {
        title: 'Increased Equipment Lifespan',
        description: 'Well-optimized systems experience less wear and tear, leading to longer operational life.'
      },
      {
        title: 'Rebates & Incentives',
        description: 'We help you qualify for local energy rebates and utility incentives when available.'
      }
    ],
    
    faqs: [
      {
        question: "What’s the best way to make my AC more energy efficient?",
        answer: "Start with a high-SEER unit and a smart thermostat. We can assess and recommend a full upgrade plan."
      },
      {
        question: "Will energy-efficient upgrades really lower my bill?",
        answer: "Yes, customers typically save 20–40% on cooling costs depending on the upgrades applied."
      },
      {
        question: "Can I upgrade my current AC or do I need a full replacement?",
        answer: "Often, targeted upgrades like duct sealing or thermostat replacement can improve efficiency without full replacement."
      },
      {
        question: "Are there rebates available in Florida?",
        answer: "Yes, certain utility companies offer rebates—we’ll help you find and apply for them."
      },
      {
        question: "How long do efficiency upgrades take?",
        answer: "Most upgrades can be done in 1–2 days depending on the scope of work."
      },
      {
        question: "Do you provide an energy audit?",
        answer: "Yes, we conduct detailed audits to identify inefficiencies and suggest solutions."
      }
    ],
    images: []
  }
  
  }

  

/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
    'downtown-office-cooling': {
      label: 'Downtown Office Cooling',
      title: 'Downtown Office Air Conditioning Installation Project',
      description: 'Full-scale air conditioning system installation for a multi-floor downtown Miami office, designed for maximum cooling efficiency and minimal noise.',
      image: `${static_assets}/images/projects/office_cooling.jpg`,
      location: 'Downtown, Miami, FL',
      duration: 'Completed in 2 weeks',
      materials: [
        'Central AC Units',
        'Thermostat Controls',
        'Refrigerant Lines',
        'Air Handlers',
        'Ductwork Systems',
        'Insulation Wraps',
        'Vibration Dampeners',
        'UV Air Purifiers',
        'Drain Pans & Pumps',
        'Electrical Disconnects'
      ],
      content: `
  This downtown Miami office cooling project involved the installation of a state-of-the-art central air conditioning system across five office floors. The existing HVAC infrastructure was outdated and unable to support the growing energy demands of the building, resulting in inconsistent temperatures and high energy consumption.
  Our team began with a full-site inspection and thermal mapping to design a zone-based cooling strategy. We replaced all old units with high-efficiency central AC units and integrated programmable thermostat controls on each floor for granular climate management. New air handlers and ductwork systems were custom-fitted to optimize airflow, while vibration dampeners were added to reduce operational noise.
  `,
      
    },
    'sunrise-apartments-upgrade': {
      label: 'Sunrise Apartments HVAC Upgrade',
      title: 'Sunrise Apartments HVAC System Upgrade Project',
      description: 'Comprehensive HVAC upgrade for a mid-rise residential complex, improving cooling performance and energy efficiency for tenants.',
      image: `${static_assets}/images/projects/high_rise.jpg`,
      location: 'Sunrise, FL',
      duration: 'Completed in 3 weeks',
      materials: [
        'Multi-Zone HVAC Units',
        'Energy-Efficient Compressors',
        'Thermostat Controls',
        'Ductless Mini-Splits',
        'High-SEER Condensers',
        'Air Filters & Purifiers',
        'Insulated Ducting',
        'Smart Monitoring Systems',
        'Drainage & Ventilation Kits',
        'Noise-Reducing Mounts'
      ],
      content: `
  The Sunrise Apartments HVAC upgrade project focused on modernizing the building’s outdated cooling infrastructure. Our team replaced aging rooftop units with multi-zone HVAC systems capable of serving individual apartment needs more efficiently. High-SEER condensers and ductless mini-splits were installed in select units for better temperature control and energy savings.
  
  We also improved insulation in existing ducts and added smart monitoring systems to track usage and detect maintenance needs proactively. The result was a quieter, more efficient, and tenant-friendly cooling solution that reduced monthly energy costs and increased long-term reliability.
  `,
      
    },
    'palm-heights-ac-installation': {
      label: 'Palm Heights AC Installation',
      title: 'Palm Heights Residential AC Installation Project',
      description: 'New AC system installation for a luxury apartment complex, focusing on quiet operation, comfort zoning, and energy efficiency.',
      image: `${static_assets}/images/projects/appartment_ac.jpg`,
      location: 'Palm Heights, FL',
      duration: 'Completed in 10 days',
      materials: [
        'Split AC Units',
        'Digital Thermostats',
        'Insulated Ductwork',
        'Refrigerant Piping',
        'Drain Line Systems',
        'Smart Zone Controllers',
        'Wall-Mounted Air Handlers',
        'Ceiling Registers & Grilles',
        'Anti-Vibration Pads',
        'Condensate Pumps'
      ],
      content: `
  This Palm Heights AC installation project covered 30 luxury apartments, each receiving individual split AC units with digital thermostats and smart zoning controls. The focus was on achieving whisper-quiet operation, modern aesthetics, and personalized comfort.
  
  Our team installed insulated ductwork and wall-mounted air handlers to ensure efficient cooling without compromising on interior design. We also added anti-vibration mounts and condensate pumps for silent performance and long-term reliability. The entire job was completed in just 10 days with minimal disruption to residents.
  `,
      
    },
    'city-mall-cooling': {
      label: 'City Mall Cooling System',
      title: 'City Mall Central Cooling System Installation',
      description: 'Designed and implemented a powerful central cooling system for a multi-level shopping mall, ensuring comfort and energy efficiency.',
      image: `${static_assets}/images/projects/mall_ac.jpg`,
      location: 'Orlando, FL',
      duration: 'Completed in 4 weeks',
      materials: [
        'Commercial-Grade Chillers',
        'Air Handling Units (AHUs)',
        'Cooling Towers',
        'Variable Air Volume (VAV) Boxes',
        'Energy Management Systems',
        'Insulated Steel Ducts',
        'Thermostat Controllers',
        'Condenser Water Pumps',
        'Pressure Relief Dampers',
        'Vibration Isolation Systems'
      ],
      content: `
  The City Mall cooling system project involved designing and installing a robust central HVAC setup across 3 floors and over 100 retail units. We implemented commercial-grade chillers and air handling units, supported by a smart energy management system to control operational costs.
  
  Our engineers tailored the airflow strategy with VAV boxes for each retail zone, allowing independent climate control. To minimize energy waste, we used high-efficiency cooling towers and insulation throughout the duct network. The result was a consistent and comfortable shopping environment even during peak summer foot traffic.
  `,
      
    },
    'heritage-hotel-renovation': {
      label: 'Heritage Hotel Climate Renovation',
      title: 'Heritage Hotel HVAC Renovation Project',
      description: 'Upgraded the entire HVAC system of a historic hotel, blending modern efficiency with architectural preservation.',
      image: `${static_assets}/images/projects/hotel_ac.jpg`,
      location: 'St. Augustine, FL',
      duration: 'Completed in 3 weeks',
      materials: [
        'Ductless Mini-Splits',
        'Custom Air Vents',
        'Quiet Condensers',
        'Programmable Thermostats',
        'Energy-Efficient Compressors',
        'Humidity Control Systems',
        'Concealed Ducts',
        'Thermal Insulation',
        'Antique-Finish Registers',
        'Low-Profile Mounting Brackets'
      ],
      content: `The Heritage Hotel HVAC renovation required a delicate balance of modern climate control and historic preservation. Our team upgraded the full system with energy-efficient ductless mini-splits, chosen for their minimal visual impact and quiet performance.
      We installed custom air vents and concealed ductwork to maintain the building’s vintage aesthetic. New thermostats and humidity controls were added to improve guest comfort. Despite architectural challenges, we completed the project in 3 weeks without compromising the hotel's historic charm.`,
      
    },
    'green-grove-setup': {
      label: 'Green Grove AC Setup',
      title: 'Green Grove Residential AC System Setup',
      description: 'Installed high-efficiency AC systems across a newly developed residential community to ensure uniform comfort and long-term energy savings.',
      image: `${static_assets}/images/projects/ac_units.jpg`,
      location: 'Tampa, FL',
      duration: 'Completed in 4 weeks',
      materials: [
        'Split AC Units',
        'Programmable Thermostats',
        'High-Efficiency Air Filters',
        'Copper Refrigerant Lines',
        'Smart Control Panels',
        'Insulated Ductwork',
        'Outdoor Condensing Units',
        'Surge Protectors',
        'Zoned Dampers',
        'Noise-Reducing Mounts'
      ],
      content: `
  Green Grove was a newly built residential community where we handled the full AC system installation for over 20 homes. Our team implemented high-efficiency split units in each house, optimizing for low noise and minimal energy use.
  
  We installed programmable thermostats and zoned dampers for personalized climate control. The ductwork was precisely insulated, and outdoor units were equipped with mounts to reduce operational noise. The entire project was delivered on schedule and helped the development meet its sustainability goals.
  `,
      
    },
    'ocean-bay-hvac': {
      label: 'Ocean Bay Resort HVAC Design',
      title: 'Ocean Bay Resort HVAC Design & Installation',
      description: 'Custom HVAC design and installation for a beachfront resort, focused on humidity control, energy efficiency, and guest comfort.',
      image: `${static_assets}/images/projects/hvac.jpg`,
      location: 'Naples, FL',
      duration: 'Completed in 5 weeks',
      materials: [
        'Dehumidification Units',
        'Energy Recovery Ventilators (ERVs)',
        'Central AC Systems',
        'UV Air Purifiers',
        'Stainless Steel Ducting',
        'Salt-Air Resistant Coatings',
        'Digital Control Panels',
        'Smart Sensors',
        'Backup Generators',
        'Sealed Air Handlers'
      ],
      content: `
  The Ocean Bay Resort project involved the full design and implementation of a modern HVAC system tailored to coastal challenges. We engineered a custom solution that emphasized corrosion resistance, humidity regulation, and 24/7 comfort for guests.
  
  Energy recovery ventilators and sealed air handlers helped improve indoor air quality while reducing costs. We also installed UV air purifiers and stainless ducting to combat mold and salt air exposure. All systems were networked into a smart control hub, giving staff total climate oversight.
  `,
      
    },
    'community-center-cooling': {
      label: 'Community Center Cooling',
      title: 'Community Center AC System Overhaul',
      description: 'Modernized the air conditioning system for a busy community center, improving comfort, airflow, and energy efficiency for large gatherings.',
      image: `${static_assets}/images/projects/commiunity.jpg`,
      location: 'Orlando, FL',
      duration: 'Completed in 2.5 weeks',
      materials: [
        'High-Capacity Rooftop Units',
        'Zoned Thermostats',
        'Industrial Duct Systems',
        'Energy-Efficient Compressors',
        'Air Return Vents',
        'Smart Controllers',
        'Noise Dampening Panels',
        'Anti-Vibration Mounts',
        'HEPA Filters',
        'Aluminum Insulated Ducting'
      ],
      content: `
  This Orlando community center required a complete upgrade to its aging AC system, which struggled to keep up with fluctuating occupancy levels and frequent events.
  
  We installed rooftop HVAC units with zoning capabilities to control different halls separately. High-efficiency compressors, insulated ducts, and HEPA filters were added to improve performance and indoor air quality. Smart controllers allowed staff to adjust settings easily, while noise dampening ensured a quiet environment during public functions.
  `,
      
    },
  }

export const projectsImageGallery = [
    `${static_assets}/images/projects/ac_units.jpg`,
    `${static_assets}/images/projects/appartment_ac.jpg`,
    `${static_assets}/images/projects/commiunity.jpg`,
    `${static_assets}/images/projects/high_rise.jpg`,
    `${static_assets}/images/projects/hotel_ac.jpg`,
    `${static_assets}/images/projects/hvac.jpg`,
    `${static_assets}/images/projects/mall_ac.jpg`,
    `${static_assets}/images/projects/office_cooling.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */

export const testimonialsData = [
    {
      name: "John Davis",
      role: "Homeowner | Florida",
      feedback: "Total Care Air Conditioning installed a new central AC unit in our home—smooth process and great results!",
    },
    {
      name: "Rachel Green",
      role: "Property Manager",
      feedback: "They service all the HVAC systems in our apartment complex. Always reliable and responsive.",
    },
    {
      name: "Carlos Rivera",
      role: "Business Owner | Florida",
      feedback: "Our office was constantly overheating. Their zoning solution fixed everything. Professional from start to finish.",
    },
    {
      name: "Lisa Turner",
      role: "Interior Designer",
      feedback: "They managed to install sleek, ductless units in a modern remodel without impacting the design flow. Excellent team!",
    },
    {
      name: "Mark Johnson",
      role: "Hotel Manager",
      feedback: "Upgraded our hotel HVAC system with no downtime for guests. Fast, clean, and efficient.",
    },
    {
      name: "Emily Chen",
      role: "Homeowner | Florida",
      feedback: "Our old AC died in peak summer—Total Care got a new system up and running in just one day!",
    },
    {
      name: "David Kim",
      role: "Real Estate Developer",
      feedback: "They’ve handled HVAC installs across multiple properties. On-time, budget-friendly, and always to code.",
    },
    {
      name: "Sophia Allen",
      role: "Restaurant Owner",
      feedback: "The kitchen was unbearable before. Their commercial cooling system made a huge difference.",
    },
    {
      name: "Nathan Scott",
      role: "Construction Project Manager",
      feedback: "These guys know their stuff. Smooth HVAC integration on our high-rise project.",
    },
    {
      name: "Olivia Perez",
      role: "Retail Store Owner | Florida",
      feedback: "We had inconsistent cooling. Total Care diagnosed and fixed ducting issues quickly.",
    },
    {
      name: "Jason Brooks",
      role: "Commercial Building Owner",
      feedback: "Replaced our outdated rooftop units with high-efficiency ones. Lower energy bills already.",
    },
    {
      name: "Mia Thompson",
      role: "Home Renovator | Florida",
      feedback: "Their team handled HVAC design perfectly during our whole-house renovation. Highly recommend!",
    }
  ];
  