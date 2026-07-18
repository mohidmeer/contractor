import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/bath'
export const siteUrl = 'https://bathrooms.berggc.com/';
export const siteName = 'Berg General Contractor Bathrooms';
export const bussinessType = ["LocalBusiness", "HomeAndConstructionBusiness"]
export const siteLogo = `${static_assets}/images/logo.png`;
export const googleAnalyticId = 'G-79RRTN6VDP';

export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@bathrooms.berggc.com',
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
    title: 'Berg General Contractor Bathrooms',
    description: 'Expert bathroom renovation and installation services. From modern makeovers to full-scale remodeling â€” we bring style, comfort, and quality to your home.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl,
  },
  hero: {
    title: 'Transform Your Bathroom with Berg General Contractor',
    description: 'We specialize in stylish, functional, and high-quality bathroom renovations tailored to your space and lifestyle.',
    backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
    ctaText: 'Get a Free Quote',
    ctaLink: '/contact',
  },
  services: {
    heading: 'Our Bathroom Services',
  },
  projects: {
    heading: 'Recent Bathroom Renovations',
  },
}

export const hero2 = {
  slides: [
    {
      tagline: 'Bathroom Renovation',
      title: 'Refresh Your Bathroom from Floor to Finish',
      description: 'Full bathroom renovations designed for comfort, style, and everyday function — tailored to your home and budget.',
      backgroundImage: `${static_assets}/images/services/renovation.jpg`,
    },
    {
      tagline: 'Shower & Tub Upgrades',
      title: 'Modern Showers and Tub Conversions',
      description: 'Upgrade outdated fixtures with sleek shower systems and tub solutions that feel spa-ready and easy to maintain.',
      backgroundImage: `${static_assets}/images/services/shower_tub.jpg`,
    },
    {
      tagline: 'Vanity & Storage',
      title: 'Beautiful Vanities with Smarter Storage',
      description: 'Custom vanity installs that elevate your bathroom look while adding the storage and lighting your routine needs.',
      backgroundImage: `${static_assets}/images/services/vanity.jpg`,
    },
    {
      tagline: 'Spa-Inspired Bathrooms',
      title: 'Turn Everyday Routines into a Retreat',
      description: 'Create a calm, spa-like bathroom with premium finishes, thoughtful layouts, and lasting craftsmanship.',
      backgroundImage: `${static_assets}/images/projects/spa.jpg`,
    },
  ],
}

export const servicesPage = {
  seo: {
    title: 'Bathroom Renovation Services',
    description: 'Discover our range of bathroom services including design, remodeling, tiling, plumbing, and complete bathroom transformations.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'services',
  }
}

export const projectsPage = {
  seo: {
    title: 'Bathroom Renovation Projects',
    description: 'View our portfolio of completed bathroom remodels â€” elegant, efficient, and designed to inspire.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'projects',
  },
}


export const aboutPage = {
  seo: {
    title: 'About Berg General Contractor Bathrooms',
    description: 'Meet the team behind Berg General Contractor Bathrooms and learn how we deliver stunning and stress-free bathroom renovations.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'about',
  },
  content: 'Berg General Contractor Bathrooms is a trusted provider of bathroom remodeling services. With a focus on quality craftsmanship, innovative design, and customer satisfaction, we transform outdated bathrooms into beautiful, modern spaces.',
}

export const contactPage = {
  seo: {
    title: 'Contact Berg General Contractor Bathrooms',
    description: 'Ready to renovate your bathroom? Reach out to Berg General Contractor Bathrooms to start planning your dream space.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'contact',
  },
  form: {
    heading: 'Get In Touch',
    messagePlaceholder: "Tell us about your bathroom goals â€” we're ready to bring them to life.",
  }
}

export const blogPage = {
  seo: {
    title: 'Bathroom Design Ideas & Renovation Tips',
    description: 'Get inspired with expert tips on bathroom trends, remodeling advice, maintenance tricks, and more.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'blogs',
  },
}

export const serviceAreaPage = {
  seo: {
    title: 'Bathroom Renovation Services Near You',
    description: 'We proudly serve homeowners across your region with complete bathroom design and remodeling solutions.',
    ogImage: `${static_assets}/images/hero_bg_1.jpg`,
    canonical: siteUrl + 'service-areas',
  }
}


/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
  title: 'GET TO KNOW',
  heading: 'Bathroom Renovations with Comfort, Craftsmanship, and Care',
  description:
      'Berg General Contractor Bathrooms is your trusted partner for bathroom transformations. We focus on high-quality design, expert installation, and treating every space with precision and respect.',
  keyPoints: [
      {
          title: 'Skilled & Experienced Renovators',
          desc: 'Our team is trained in modern bathroom construction, tiling, plumbing, and finishing â€” ensuring professional results.',
      },
      {
          title: 'Premium Fixtures & Materials',
          desc: 'We source and install top-grade fittings, tiles, and vanities that blend style with long-term durability.',
      },
      {
          title: 'Clean Work & Seamless Execution',
          desc: 'We keep your space tidy and disruption-free, delivering beautiful bathrooms with minimal mess or stress.',
      }
  ],
  image1_url: `${static_assets}/images/projects/wet_room.jpg`,
  image2_url: `${static_assets}/images/projects/master.jpg`,
  image3_url: `${static_assets}/images/projects/coastal.jpg`,
  image4_url: `${static_assets}/images/projects/commercial.jpg`,
}
export const faqs = [
  {
      question: "Do you offer free bathroom renovation quotes?",
      answer: "Yes, we provide free consultations and quotes for all bathroom renovation and installation projects."
  },
  {
      question: "What bathroom services do you provide?",
      answer: "We handle full renovations, tiling, plumbing, lighting, shower and tub installations, and custom vanity work."
  },
  {
      question: "Are your renovators certified and insured?",
      answer: "Absolutely. Our team is licensed, insured, and trained to meet all building codes and quality standards."
  },
  {
      question: "Can you help with small bathroom updates too?",
      answer: "Yes, whether itâ€™s a minor refresh or a complete remodel, we tailor our services to your needs and budget."
  },
  {
      question: "How long does a typical bathroom remodel take?",
      answer: "Most projects take 1â€“3 weeks depending on scope, materials, and customization."
  },
  {
      question: "Do you work on both residential and commercial bathrooms?",
      answer: "Yes, we service both homes and commercial properties like offices, clinics, and salons."
  }
];

export const ourProcessData = {
  heading: 'Our Process',
  description: 'From consultation to the final tile, we make bathroom renovations smooth, efficient, and stress-free.',
  list: [
      {
          title: "Initial Consultation",
          description: "We discuss your bathroom goals, style preferences, and budget in detail.",
          icon: FaComments
      },
      {
          title: "On-Site Assessment",
          description: "Our team visits your property to evaluate space, plumbing, and design opportunities.",
          icon: FaSearch
      },
      {
          title: "Custom Design & Proposal",
          description: "We provide a tailored renovation plan with a clear estimate, materials, and timeline.",
          icon: FaFileAlt
      },
      {
          title: "Scheduling the Project",
          description: "We schedule the renovation at your convenience with minimal disruption to your routine.",
          icon: FaCalendarAlt
      },
      {
          title: "Renovation Execution",
          description: "Our expert team handles all installation workâ€”tiling, fixtures, plumbing, and finishes.",
          icon: FaHammer
      },
      {
          title: "Final Inspection & Walkthrough",
          description: "We review everything with you, ensure quality, and leave your space spotless and ready.",
          icon: FaCheckCircle
      }
  ]
};
export const WhyUSData = [
  {
      title: "Certified Bathroom Specialists",
      description: "Our skilled team is trained and experienced in delivering top-tier bathroom renovations.",
      icon: FaUserTie
  },
  {
      title: "Craftsmanship You Can Trust",
      description: "We use durable materials and proven methods to ensure every detail is built to last.",
      icon: FaTools
  },
  {
      title: "Clear, Consistent Communication",
      description: "We keep you in the loop from start to finish â€” no confusion, no surprises.",
      icon: FaHandshake
  },
  {
      title: "Upfront, Honest Pricing",
      description: "Our quotes are transparent and customized to fit your vision and your budget.",
      icon: FaDollarSign
  },
  {
      title: "Client-Centered Approach",
      description: "Weâ€™re focused on your comfort, style, and satisfaction â€” down to the final tile.",
      icon: FaSmile
  },
  {
      title: "Safety & Compliance Guaranteed",
      description: "We follow all building codes and safety standards to ensure a worry-free renovation.",
      icon: FaShieldAlt
  }
];


export const accomplishmentData = [
  { title: "Bathrooms Renovated", number: 250 },
  { title: "Residential Projects", number: 400 },
  { title: "Skilled Renovators", number: 30 },
  { title: "Happy Clients", number: 600 },
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
          { label: 'Full Bathroom Renovation', href: '/services/full-bathroom-renovation', hasChildrens: false },
          { label: 'Shower & Tub Installation', href: '/services/shower-tub-installation', hasChildrens: false },
          { label: 'Custom Vanities', href: '/services/custom-vanities', hasChildrens: false },
          { label: 'Tiling & Waterproofing', href: '/services/tiling-waterproofing', hasChildrens: false },
          { label: 'Bathroom Plumbing', href: '/services/bathroom-plumbing', hasChildrens: false },
          { label: 'Lighting & Mirrors', href: '/services/lighting-mirrors', hasChildrens: false },
          { label: 'Luxury Spa Upgrades', href: '/services/luxury-spa-upgrades', hasChildrens: false },
          { label: 'Accessibility Solutions', href: '/services/accessible-bathrooms', hasChildrens: false },
          { label: 'Powder Room Updates', href: '/services/powder-room-upgrades', hasChildrens: false },
      ]
  },
  {
      label: 'Projects',
      href: '/projects',
      external: false,
      hasChildrens: true,
      children: [
          { label: 'Modern Master Bathroom', href: '/projects/modern-master-bathroom', hasChildrens: false },
          { label: 'Luxury Spa Ensuite', href: '/projects/luxury-spa-ensuite', hasChildrens: false },
          { label: 'Small Bathroom Makeover', href: '/projects/small-bathroom-makeover', hasChildrens: false },
          { label: 'Accessible Bathroom Upgrade', href: '/projects/accessible-bathroom', hasChildrens: false },
          { label: 'Downtown Condo Renovation', href: '/projects/downtown-condo', hasChildrens: false },
          { label: 'Suburban Family Bath', href: '/projects/family-bathroom', hasChildrens: false },
          { label: 'Commercial Washroom Fitout', href: '/projects/commercial-washroom', hasChildrens: false },
          { label: 'Guest Bathroom Remodel', href: '/projects/guest-bathroom-remodel', hasChildrens: false },
          { label: 'Coastal Style Bathroom', href: '/projects/coastal-style-bathroom', hasChildrens: false },
          { label: 'Minimalist Wet Room', href: '/projects/minimalist-wet-room', hasChildrens: false },
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
  tagline: 'Transforming Florida bathrooms with stylish renovations, quality fittings, and expert craftsmanship.',
};

/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
  {
      name: "Miami",
      href: "/miami",
      title: "Bathroom Renovation Services in Miami, FL",
      description: "Stylish bathroom remodeling in Miami, FL. From luxury upgrades to space-saving designs â€” we do it all.",
      content: "Berg General Contractor Bathrooms brings modern designs and expert craftsmanship to every Miami renovation project. We focus on elegance, functionality, and long-lasting quality.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Orlando",
      href: "/orlando",
      title: "Bathroom Renovation Services in Orlando, FL",
      description: "Trusted bathroom renovation in Orlando, FL. High-end finishes, custom vanities, and expert tile work.",
      content: "In Orlando, Berg General Contractor Bathrooms delivers personalized renovations with attention to every detail â€” ensuring comfort, beauty, and durability.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Tampa",
      href: "/tampa",
      title: "Bathroom Renovation Services in Tampa, FL",
      description: "Transform your bathroom in Tampa, FL. Full remodeling and partial upgrades tailored to your vision.",
      content: "We serve Tampa with premium materials and creative solutions to make your bathroom stylish, safe, and spa-like.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Jacksonville",
      href: "/jacksonville",
      title: "Bathroom Renovation Services in Jacksonville, FL",
      description: "Expert bathroom remodeling in Jacksonville, FL. Custom showers, lighting, and smart storage included.",
      content: "Berg General Contractor Bathrooms helps Jacksonville homeowners upgrade their space with elegant designs and quality installations that last.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Fort Lauderdale",
      href: "/fort-lauderdale",
      title: "Bathroom Renovation Services in Fort Lauderdale, FL",
      description: "High-end bathroom renovation in Fort Lauderdale, FL. Bring a touch of luxury to your home.",
      content: "We bring sleek, modern finishes and luxury bathroom remodeling to Fort Lauderdale â€” with top-notch service from start to finish.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "St. Petersburg",
      href: "/st-petersburg",
      title: "Bathroom Renovation Services in St. Petersburg, FL",
      description: "Bathroom makeovers in St. Pete, FL. Elegant designs, walk-in showers, and efficient project delivery.",
      content: "From small powder rooms to master baths, Berg General Contractor Bathrooms transforms St. Petersburg homes with precision and creativity.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Cape Coral",
      href: "/cape-coral",
      title: "Bathroom Renovation Services in Cape Coral, FL",
      description: "Cape Coralâ€™s go-to team for bathroom remodels. Fresh layouts, quality materials, and expert finish.",
      content: "Cape Coral homeowners count on Berg General Contractor Bathrooms for sleek designs, efficient plumbing upgrades, and lasting beauty.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Hialeah",
      href: "/hialeah",
      title: "Bathroom Renovation Services in Hialeah, FL",
      description: "Affordable and stylish bathroom renovations in Hialeah, FL. Built to impress and built to last.",
      content: "In Hialeah, we help homeowners upgrade their bathrooms with quality craftsmanship and modern design tailored to your needs.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Gainesville",
      href: "/gainesville",
      title: "Bathroom Renovation Services in Gainesville, FL",
      description: "Full-service bathroom remodeling in Gainesville. Efficient, beautiful, and affordable transformations.",
      content: "Berg General Contractor Bathrooms improves Gainesville homes with creative bathroom designs and skilled renovation work that adds value.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Naples",
      href: "/naples",
      title: "Bathroom Renovation Services in Naples, FL",
      description: "Luxury bathroom remodeling in Naples, FL. Sophisticated designs for elegant coastal living.",
      content: "Naples homeowners choose Berg General Contractor Bathrooms for upscale remodels featuring premium finishes and thoughtful layouts.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Pensacola",
      href: "/pensacola",
      title: "Bathroom Renovation Services in Pensacola, FL",
      description: "Expert bathroom renovation in Pensacola. Clean lines, smart storage, and water-efficient upgrades.",
      content: "Berg General Contractor Bathrooms serves Pensacola with detail-focused remodels that enhance comfort and functionality.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "West Palm Beach",
      href: "/west-palm-beach",
      title: "Bathroom Renovation Services in West Palm Beach, FL",
      description: "Premier bathroom remodeling in West Palm Beach. Modern designs and timeless craftsmanship.",
      content: "We help West Palm Beach clients achieve spa-worthy bathrooms with clean aesthetics and top-tier materials.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Lakeland",
      href: "/lakeland",
      title: "Bathroom Renovation Services in Lakeland, FL",
      description: "Trusted remodelers in Lakeland. Complete bathroom makeovers with efficient project timelines.",
      content: "Berg General Contractor Bathrooms transforms Lakeland bathrooms with smart planning, skilled labor, and elegant results.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Ocala",
      href: "/ocala",
      title: "Bathroom Renovation Services in Ocala, FL",
      description: "Affordable upgrades and full bathroom remodels in Ocala, FL. Always on time, always quality work.",
      content: "Ocala homes shine with new bathroom styles, tilework, and fixtures installed by our dedicated renovation team.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Bradenton",
      href: "/bradenton",
      title: "Bathroom Renovation Services in Bradenton, FL",
      description: "Bradentonâ€™s top bathroom renovation service. Clean finishes, luxury details, and fair pricing.",
      content: "We bring beautiful transformations to Bradenton bathrooms with custom solutions and dependable execution.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Fort Myers",
      href: "/fort-myers",
      title: "Bathroom Renovation Services in Fort Myers, FL",
      description: "Stylish and practical bathroom upgrades in Fort Myers. Designed for comfort and built to last.",
      content: "Fort Myers residents trust Berg General Contractor Bathrooms to deliver clean, modern, and functional bathrooms with smooth project flow.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Hollywood",
      href: "/hollywood",
      title: "Bathroom Renovation Services in Hollywood, FL",
      description: "Modern bathroom remodeling in Hollywood, FL. Personal style, expert quality.",
      content: "We help Hollywood homeowners elevate their bathrooms with sleek designs, functional features, and premium materials.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Boca Raton",
      href: "/boca-raton",
      title: "Bathroom Renovation Services in Boca Raton, FL",
      description: "High-end bathroom design and remodeling in Boca Raton. Luxury finishes, refined taste.",
      content: "Boca Raton clients choose Berg General Contractor Bathrooms for timeless elegance, upscale hardware, and flawless execution in every bathroom remodel.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  }
];

/* ------------------------
   SERVICES & PROJECTS
------------------------ */
export { servicesData } from './services'
export { projectsData, projectsImageGallery } from './projects'

/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [

  {
    "name": "John Davis",
    "role": "Homeowner | Bath",
    "feedback": "Berg General Contractor Bathrooms transformed our old bathroom into a modern oasisâ€”smooth process and stunning results!",
  },

  {
    "name": "Rachel Green",
    "role": "Property Manager",
    "feedback": "They handled the renovation of multiple bathrooms in our properties. Always reliable and responsive, delivering high-quality work.",
  },

  {
    "name": "Carlos Rivera",
    "role": "Business Owner | Bath",
    "feedback": "Our commercial washrooms were outdated. Their renovation solution made a huge difference. Professional from start to finish.",
  },



  {
    "name": "Lisa Turner",
    "role": "Interior Designer",
    "feedback": "They managed to integrate sleek, modern bathroom designs into our projects without impacting the overall aesthetic. Excellent team!",
  },



  {
    "name": "Mark Johnson",
    "role": "Hotel Manager",
    "feedback": "Upgraded our hotel bathrooms with no downtime for guests. Fast, clean, and efficient.",
  },



  {
    "name": "Emily Chen",
    "role": "Homeowner | Bath",
    "feedback": "Our old bathroom was a disasterâ€”Berg General Contractor got a new one up and running in just a few weeks!",
  },



  {
    "name": "David Kim",
    "role": "Real Estate Developer",
    "feedback": "Theyâ€™ve handled bathroom renovations across multiple properties. On-time, budget-friendly, and always to code.",
  },



  {
    "name": "Sophia Allen",
    "role": "Restaurant Owner",
    "feedback": "The customer washrooms were uninviting before. Their renovation made a huge difference to our business.",
  },



  {
    "name": "Nathan Scott",
    "role": "Construction Project Manager",
    "feedback": "These guys know their stuff. Smooth bathroom renovation integration on our high-rise project.",
  },



  {
    "name": "Olivia Perez",
    "role": "Retail Store Owner | Bath",
    "feedback": "We had outdated restrooms. Berg General Contractor diagnosed and fixed plumbing issues quickly, and updated the space beautifully.",
  },



  {
    "name": "Jason Brooks",
    "role": "Commercial Building Owner",
    "feedback": "Replaced our outdated washroom fixtures with high-efficiency ones. Lower water bills already.",
  },



  {
    "name": "Mia Thompson",
    "role": "Home Renovator | Bath",
    "feedback": "Their team handled bathroom design perfectly during our whole-house renovation. Highly recommend!",
  }
];