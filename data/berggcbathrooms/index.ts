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
    title: 'Berg General Contractor Bathrooms',
    description: 'Expert bathroom renovation and installation services. From modern makeovers to full-scale remodeling — we bring style, comfort, and quality to your home.',
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
    description: 'View our portfolio of completed bathroom remodels — elegant, efficient, and designed to inspire.',
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
    messagePlaceholder: "Tell us about your bathroom goals — we're ready to bring them to life.",
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
          desc: 'Our team is trained in modern bathroom construction, tiling, plumbing, and finishing — ensuring professional results.',
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
      answer: "Yes, whether it’s a minor refresh or a complete remodel, we tailor our services to your needs and budget."
  },
  {
      question: "How long does a typical bathroom remodel take?",
      answer: "Most projects take 1–3 weeks depending on scope, materials, and customization."
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
          description: "Our expert team handles all installation work—tiling, fixtures, plumbing, and finishes.",
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
      description: "We keep you in the loop from start to finish — no confusion, no surprises.",
      icon: FaHandshake
  },
  {
      title: "Upfront, Honest Pricing",
      description: "Our quotes are transparent and customized to fit your vision and your budget.",
      icon: FaDollarSign
  },
  {
      title: "Client-Centered Approach",
      description: "We’re focused on your comfort, style, and satisfaction — down to the final tile.",
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
      description: "Stylish bathroom remodeling in Miami, FL. From luxury upgrades to space-saving designs — we do it all.",
      content: "Berg General Contractor Bathrooms brings modern designs and expert craftsmanship to every Miami renovation project. We focus on elegance, functionality, and long-lasting quality.",
      image: `${static_assets}/images/hero_bg_1.jpg`
  },
  {
      name: "Orlando",
      href: "/orlando",
      title: "Bathroom Renovation Services in Orlando, FL",
      description: "Trusted bathroom renovation in Orlando, FL. High-end finishes, custom vanities, and expert tile work.",
      content: "In Orlando, Berg General Contractor Bathrooms delivers personalized renovations with attention to every detail — ensuring comfort, beauty, and durability.",
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
      content: "We bring sleek, modern finishes and luxury bathroom remodeling to Fort Lauderdale — with top-notch service from start to finish.",
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
      description: "Cape Coral’s go-to team for bathroom remodels. Fresh layouts, quality materials, and expert finish.",
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
      description: "Bradenton’s top bathroom renovation service. Clean finishes, luxury details, and fair pricing.",
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
   SERVICES START
------------------------ */
export const servicesData = {
  'full-bathroom-renovation': {
    label: 'Full Bathroom Renovation',
    title: 'Complete Bathroom Renovation Services by Berg General Contractor Bathrooms',
    description: 'Transform your entire bathroom into a luxurious and functional space with our comprehensive renovation services. From design to installation, we handle every detail.',
    content: `A full bathroom renovation is an investment in your home's comfort, value, and aesthetic appeal. At Berg General Contractor Bathrooms, we specialize in delivering bespoke bathroom transformations that reflect your style and meet your functional needs. Our process begins with a detailed consultation to understand your vision, followed by expert design planning, material selection, and professional installation. We manage every aspect of the project, including demolition, plumbing, electrical work, tiling, and fixture installation, ensuring a seamless and stress-free experience. Our commitment to quality craftsmanship and attention to detail guarantees a stunning outcome that you'll cherish for years to come.`,
    image: `${static_assets}/images/services/renovation.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Custom Bathroom Design',
        'Demolition and Waste Removal',
        'Plumbing System Upgrades',
        'Electrical Wiring and Lighting',
        'Flooring and Wall Tiling',
        'Shower and Bathtub Installation',
        'Vanity and Countertop Installation',
        'Toilet and Fixture Installation',
        'Ventilation System Integration',
        'Painting and Finishing Touches'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'End-to-End Project Management',
        description: 'We oversee every phase of your renovation, ensuring a smooth process from concept to completion.'
      },
      {
        title: 'Experienced Design Team',
        description: 'Our designers work with you to create a personalized bathroom layout that maximizes space and style.'
      },
      {
        title: 'Quality Craftsmanship',
        description: 'Our skilled tradespeople use only the highest quality materials and proven techniques for lasting results.'
      },
      {
        title: 'Timely Completion',
        description: 'We adhere to agreed-upon timelines, minimizing disruption to your daily life.'
      },
      {
        title: 'Transparent Pricing',
        description: 'Receive a detailed, upfront estimate with no hidden costs, ensuring complete financial clarity.'
      },
      {
        title: 'Customer Satisfaction Guaranteed',
        description: 'Your satisfaction is our priority. We strive to exceed expectations with every project.'
      }
    ],
    faqs: [
      {
        question: "How long does a full bathroom renovation typically take?",
        answer: "The duration varies based on complexity, but most full renovations are completed within 2-4 weeks."
      },
      {
        question: "Do you help with material selection?",
        answer: "Yes, our design team will guide you through selecting the best tiles, fixtures, and finishes to match your vision and budget."
      },
      {
        question: "Can I stay in my home during the renovation?",
        answer: "In most cases, yes. We work efficiently to minimize disruption, though access to the bathroom will be limited during certain phases."
      },
      {
        question: "What is the typical cost of a full bathroom renovation?",
        answer: "Costs vary widely depending on size, materials, and scope. We provide a detailed quote after our initial consultation."
      },
      {
        question: "Are your services insured and licensed?",
        answer: "Absolutely. Berg General Contractor Bathrooms is fully licensed and insured, providing you with peace of mind throughout the renovation process."
      }
    ],
    images:[],
  },

  'shower-tub-installation': {
    label: 'Shower & Tub Installation',
    title: 'Professional Shower and Bathtub Installation Services',
    description: 'Upgrade your bathing experience with our expert shower and tub installation services. We offer a wide range of styles and configurations to fit your needs.',
    content: `Whether you're looking to replace an old, worn-out tub, install a new walk-in shower, or create a luxurious spa-like retreat, Berg General Contractor Bathrooms provides professional shower and tub installation services. We work with all types of materials and designs, from standard acrylic units to custom tile showers and freestanding bathtubs. Our experienced technicians ensure precise installation, proper waterproofing, and seamless integration with your existing bathroom design. We focus on durability, functionality, and aesthetics to deliver a bathing solution that enhances your daily routine and adds value to your home.`,
    image: `${static_assets}/images/services/shower_tub.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Walk-in Shower Installation',
        'Bathtub Replacement',
        'Freestanding Tub Installation',
        'Custom Tile Showers',
        'Shower Pan Installation',
        'Shower Door & Enclosure Installation',
        'Tub-to-Shower Conversions',
        'Accessibility Showers & Tubs',
        'Jetted Tub Installation',
        'Waterproofing & Sealing'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Expert Installation',
        description: 'Our skilled installers ensure a perfect fit and finish, preventing leaks and ensuring longevity.'
      },
      {
        title: 'Wide Selection',
        description: 'Choose from a vast array of shower and tub styles, materials, and features to match your vision.'
      },
      {
        title: 'Enhanced Functionality',
        description: 'We help you select options that improve accessibility, water efficiency, and overall bathing comfort.'
      },
      {
        title: 'Increased Home Value',
        description: 'A modern, well-installed shower or tub can significantly boost your bathrooms appeal and resale value.'
      },
      {
        title: 'Efficient Project Completion',
        description: 'We work diligently to complete your installation quickly and with minimal disruption to your home.'
      },
      {
        title: 'Guaranteed Satisfaction',
        description: 'We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.'
      }
    ],
    faqs: [
      {
        question: "How long does shower or tub installation take?",
        answer: "Most installations can be completed within 1-3 days, depending on the complexity and any necessary plumbing adjustments."
      },
      {
        question: "Can you convert my tub into a shower?",
        answer: "Yes, tub-to-shower conversions are a popular service we offer, providing a more accessible and modern bathing solution."
      },
      {
        question: "Do you handle custom tile showers?",
        answer: "Absolutely. We specialize in custom tile showers, allowing for unique designs and personalized finishes."
      },
      {
        question: "What kind of warranty do you offer on installations?",
        answer: "We provide a comprehensive warranty on both materials and labor, ensuring peace of mind for your investment."
      },
      {
        question: "Do I need to purchase the shower or tub myself?",
        answer: "You can, or we can assist you in sourcing high-quality fixtures from our trusted suppliers, often at competitive prices."
      }
    ],
    images:[],
  },

  'custom-vanities': {
    label: 'Custom Vanities',
    title: 'Bespoke Custom Vanity Design and Installation Services',
    description: 'Elevate your bathroom with a custom-designed vanity that perfectly combines style, storage, and functionality. Tailored to your exact specifications.',
    content: `A custom vanity is the centerpiece of any well-designed bathroom, offering both aesthetic appeal and essential storage. At Berg General Contractor Bathrooms, we specialize in creating bespoke vanities that fit your space, style, and storage needs precisely. From selecting the finest materials like natural stone, quartz, or custom wood finishes, to integrating sinks, faucets, and intelligent storage solutions, our team works closely with you. We ensure every detail, from the height and depth to the drawer configurations and hardware, is meticulously crafted to deliver a unique and highly functional piece that enhances your bathroom's overall design and utility.`,
    image: `${static_assets}/images/services/vanity.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Personalized Vanity Design',
        'Material Selection (Wood, Laminate, Stone, etc.)',
        'Integrated Sink Options (Undermount, Vessel, Integrated)',
        'Custom Countertop Fabrication',
        'Drawer and Cabinetry Configuration',
        'Hardware Selection and Installation',
        'Lighting Integration',
        'Mirror and Medicine Cabinet Coordination',
        'Space-Saving Vanity Solutions',
        'Double Vanity Installations'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Tailored to Your Space',
        description: 'Maximize your bathrooms potential with a vanity designed to fit its exact dimensions and layout.'
      },
      {
        title: 'Unique Aesthetic Appeal',
        description: 'Create a one-of-a-kind look that reflects your personal style and complements your bathroom décor.'
      },
      {
        title: 'Optimized Storage Solutions',
        description: 'Enjoy smart storage options, including custom drawers, shelving, and pull-outs for ultimate organization.'
      },
      {
        title: 'High-Quality Materials',
        description: 'We use durable, premium materials that ensure longevity and withstand the demands of a bathroom environment.'
      },
      {
        title: 'Increased Home Value',
        description: 'A custom vanity is a significant upgrade that enhances your bathrooms functionality and boosts your propertys resale value.'
      },
      {
        title: 'Expert Craftsmanship',
        description: 'Our skilled artisans and installers deliver precision and quality in every aspect of your custom vanity project.'
      }
    ],
    faqs: [
      {
        question: "How long does it take to design and install a custom vanity?",
        answer: "The process typically takes 3-6 weeks, depending on the complexity of the design, material availability, and installation requirements."
      },
      {
        question: "Can I choose any material for my custom vanity?",
        answer: "Yes, we offer a wide range of materials for both cabinetry and countertops, including various wood types, laminates, quartz, granite, and marble."
      },
      {
        question: "Do you include sinks and faucets with the custom vanity?",
        answer: "We can integrate sinks and faucets of your choice into the design, or you can provide your own. We ensure perfect compatibility and installation."
      },
      {
        question: "What kind of storage options are available for custom vanities?",
        answer: "We can design vanities with various storage solutions, including soft-close drawers, pull-out shelves, hidden compartments, and open shelving."
      },
      {
        question: "Can you match the custom vanity to my existing bathroom style?",
        answer: "Absolutely. Our designers work to ensure your new custom vanity seamlessly integrates with your bathroom's current aesthetic, or helps define a new one."
      }
    ],
    images:[],
  },

  'tiling-waterproofing': {
    label: 'Tiling & Waterproofing',
    title: 'Expert Bathroom Tiling and Waterproofing Services',
    description: 'Ensure the longevity and beauty of your bathroom with our professional tiling and waterproofing services. We provide durable, stylish, and leak-proof solutions.',
    content: `Tiling is a critical element in any bathroom, defining its aesthetic and protecting its structure. At Berg General Contractor Bathrooms, we specialize in expert tile installation for floors, walls, showers, and backsplashes, using a wide range of materials including ceramic, porcelain, natural stone, and mosaic. Crucially, our services extend to comprehensive waterproofing, a vital step often overlooked but essential for preventing water damage, mold, and mildew. We utilize advanced waterproofing membranes and techniques to create an impenetrable barrier, ensuring your bathroom remains beautiful and structurally sound for years to come. Our meticulous approach guarantees a flawless finish and lasting protection.`,
    image: `${static_assets}/images/services/tiling.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Floor Tiling Installation',
        'Wall Tiling Installation',
        'Shower & Bathtub Surround Tiling',
        'Backsplash Tiling',
        'Mosaic & Decorative Tiling',
        'Natural Stone Tiling (Marble, Granite, Travertine)',
        'Porcelain & Ceramic Tiling',
        'Waterproofing Membrane Installation',
        'Shower Pan Waterproofing',
        'Subfloor Preparation & Leveling',
        'Grouting & Sealing',
        'Tile Repair & Regrouting'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Superior Waterproofing',
        description: 'Our advanced waterproofing techniques protect your home from water damage, mold, and mildew, ensuring a healthy environment.'
      },
      {
        title: 'Flawless Tile Installation',
        description: 'Our experienced tilers ensure precise cuts, perfect alignment, and a smooth, durable finish for all tile types.'
      },
      {
        title: 'Wide Material Selection',
        description: 'Choose from an extensive range of high-quality tiles and materials to match your design vision and budget.'
      },
      {
        title: 'Enhanced Durability & Longevity',
        description: 'Proper tiling and waterproofing significantly extend the lifespan of your bathroom surfaces and structure.'
      },
      {
        title: 'Increased Property Value',
        description: 'Beautifully tiled and well-protected bathrooms are a significant asset, enhancing your homes appeal and resale value.'
      },
      {
        title: 'Meticulous Attention to Detail',
        description: 'We pride ourselves on our precision and thoroughness, ensuring every aspect of the tiling and waterproofing is executed to perfection.'
      }
    ],
    faqs: [
      {
        question: "Why is waterproofing so important in a bathroom?",
        answer: "Waterproofing prevents water from seeping into walls and floors, which can cause structural damage, rot, and mold growth, protecting your investment."
      },
      {
        question: "What types of tiles do you work with?",
        answer: "We work with all major tile types, including ceramic, porcelain, natural stone (marble, granite, travertine), mosaic, and glass tiles."
      },
      {
        question: "How long does tiling and waterproofing take?",
        answer: "The duration depends on the size of the area and complexity of the design, but typically ranges from 3-7 days for a standard bathroom."
      },
      {
        question: "Can you repair existing tile or grout?",
        answer: "Yes, we offer tile repair, regrouting, and resealing services to refresh and extend the life of your current bathroom surfaces."
      },
      {
        question: "Do you handle subfloor preparation before tiling?",
        answer: "Absolutely. Proper subfloor preparation and leveling are crucial for a durable tile installation, and we handle all necessary steps."
      }
    ],
    images:[],
  },

  'bathroom-plumbing': {
    label: 'Bathroom Plumbing',
    title: 'Reliable Bathroom Plumbing Services for Renovations and Repairs',
    description: 'From new installations to complex repairs, our certified plumbers ensure your bathroom plumbing is efficient, reliable, and up to code.',
    content: `Efficient and reliable plumbing is the backbone of any functional bathroom. Berg General Contractor Bathrooms offers comprehensive plumbing services, whether you're undertaking a full renovation or need expert repairs. Our licensed plumbers are proficient in installing new pipes, fixtures, and drainage systems, as well as diagnosing and fixing leaks, clogs, and low water pressure issues. We ensure all plumbing work adheres to the highest standards of safety and local building codes, providing you with peace of mind and a perfectly functioning bathroom. We handle everything from rough-ins to final fixture connections, ensuring seamless integration with your overall bathroom design.`,
    image: `${static_assets}/images/services/plumbing.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'New Plumbing Installation',
        'Fixture Installation (Sinks, Toilets, Showers, Tubs)',
        'Pipe Replacement & Repair',
        'Drainage System Installation & Repair',
        'Water Heater Installation & Service',
        'Leak Detection & Repair',
        'Clog Removal',
        'Water Pressure Adjustments',
        'Rough-in Plumbing',
        'Final Fixture Connections',
        'Code Compliance Upgrades'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Certified & Experienced Plumbers',
        description: 'Our team consists of licensed professionals with extensive experience in all aspects of bathroom plumbing.'
      },
      {
        title: 'Reliable & Efficient Systems',
        description: 'We install and repair plumbing systems designed for optimal performance and longevity, minimizing future issues.'
      },
      {
        title: 'Code Compliant Work',
        description: 'All our plumbing services strictly adhere to local building codes and safety regulations, ensuring your peace of mind.'
      },
      {
        title: 'Prompt & Professional Service',
        description: 'We pride ourselves on timely arrivals, efficient work, and clear communication throughout the project.'
      },
      {
        title: 'Advanced Diagnostic Tools',
        description: 'We use modern equipment to accurately diagnose plumbing issues, leading to effective and lasting solutions.'
      },
      {
        title: 'Comprehensive Solutions',
        description: 'From minor repairs to complete system overhauls, we offer a full range of plumbing services to meet your needs.'
      }
    ],
    faqs: [
      {
        question: "Do you handle both new plumbing installations and repairs?",
        answer: "Yes, we offer a full spectrum of bathroom plumbing services, including new installations for renovations and expert repairs for existing systems."
      },
      {
        question: "Are your plumbers licensed and insured?",
        answer: "Absolutely. All our plumbers are fully licensed, insured, and highly trained to provide safe and reliable services."
      },
      {
        question: "Can you help with low water pressure issues?",
        answer: "Yes, we can diagnose the cause of low water pressure and implement effective solutions to restore optimal flow."
      },
      {
        question: "What types of fixtures do you install?",
        answer: "We install all types of bathroom fixtures, including sinks, faucets, toilets, showers, bathtubs, and bidets."
      },
      {
        question: "How do you prevent leaks during installation?",
        answer: "We use high-quality materials, precise installation techniques, and thorough testing to ensure all connections are secure and leak-free."
      }
    ],
    images:[],
  },

  'lighting-mirrors': {
    label: 'Lighting & Mirrors',
    title: 'Bathroom Lighting and Mirror Installation Services',
    description: 'Illuminate your bathroom and enhance its aesthetics with our professional lighting and mirror installation services. We offer solutions that combine functionality with style.',
    content: `Proper lighting and strategically placed mirrors are crucial for both the functionality and ambiance of a bathroom. At Berg General Contractor Bathrooms, we provide expert installation of a wide range of lighting fixtures, including vanity lights, recessed lighting, task lighting, and ambient lighting, all designed to create the perfect atmosphere. We also specialize in installing various types of mirrors, from standard wall-mounted options to custom-cut, backlit, or smart mirrors. Our team ensures safe electrical connections and precise placement, transforming your bathroom into a brighter, more spacious, and visually appealing area. We help you choose solutions that not only meet your practical needs but also complement your bathroom's overall design.`,
    image: `${static_assets}/images/services/light.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Vanity Lighting Installation',
        'Recessed Lighting Installation',
        'Task Lighting Solutions',
        'Ambient Lighting Design',
        'LED Lighting Upgrades',
        'Dimmer Switch Installation',
        'Custom Mirror Installation',
        'Backlit Mirror Installation',
        'Smart Mirror Integration',
        'Medicine Cabinet with Mirror Installation',
        'Electrical Wiring for Lighting',
        'Fixture Selection & Placement'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Enhanced Ambiance',
        description: 'Create a welcoming and relaxing atmosphere with expertly designed and installed lighting solutions.'
      },
      {
        title: 'Improved Functionality',
        description: 'Ensure optimal visibility for daily tasks with well-placed task and vanity lighting.'
      },
      {
        title: 'Increased Perceived Space',
        description: 'Mirrors are strategically placed to make your bathroom feel larger and more open.'
      },
      {
        title: 'Energy Efficiency',
        description: 'Upgrade to energy-efficient LED lighting to reduce electricity consumption and save on utility bills.'
      },
      {
        title: 'Modern Aesthetic',
        description: 'Modern lighting and mirror designs can significantly update the look and feel of your bathroom.'
      },
      {
        title: 'Professional Installation',
        description: 'Our skilled technicians ensure safe, secure, and aesthetically pleasing installation of all fixtures and mirrors.'
      }
    ],
    faqs: [
      {
        question: "What types of lighting are best for a bathroom?",
        answer: "A combination of vanity lighting for tasks, recessed lighting for general illumination, and accent lighting for ambiance is usually ideal."
      },
      {
        question: "Can you install smart mirrors?",
        answer: "Yes, we can install smart mirrors with features like integrated lighting, defoggers, and digital displays."
      },
      {
        question: "Do you handle the electrical wiring for new lighting?",
        answer: "Absolutely. Our team includes qualified electricians who ensure all wiring is safely and correctly installed and meets code requirements."
      },
      {
        question: "How do I choose the right size mirror for my vanity?",
        answer: "Generally, the mirror should be slightly narrower than your vanity, or the same width, for a balanced look. We can advise on the best size during consultation."
      },
      {
        question: "Can you help with lighting design?",
        answer: "Yes, our design team can help you plan a lighting scheme that enhances both the functionality and aesthetics of your bathroom."
      }
    ],
    images:[],
  },

  'luxury-spa-upgrades': {
    label: 'Luxury Spa Upgrades',
    title: 'Transform Your Bathroom into a Luxury Spa Retreat',
    description: 'Indulge in ultimate relaxation with our luxury spa upgrade services. We bring high-end features and sophisticated designs to your private oasis.',
    content: `Elevate your daily routine into a luxurious spa experience with Berg General Contractor Bathrooms' exclusive upgrade services. We specialize in integrating premium features that transform your ordinary bathroom into a serene and indulgent sanctuary. From therapeutic jetted tubs and steam showers to heated flooring and chromotherapy lighting, we offer a curated selection of high-end amenities. Our design team works with you to select sophisticated materials, advanced technologies, and elegant finishes that create a cohesive and opulent environment. Experience unparalleled comfort and rejuvenation right in your home with our bespoke luxury spa upgrades.`,
    image: `${static_assets}/images/services/luxry.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Jetted & Soaking Tub Installation',
        'Steam Shower & Sauna Installation',
        'Heated Flooring Systems',
        'Chromotherapy & Mood Lighting',
        'Rainfall Shower Heads & Body Jets',
        'Smart Bathroom Technology Integration',
        'Custom Sound Systems',
        'High-End Fixtures & Finishes',
        'Towel Warmers',
        'Integrated Vanities & Storage',
        'Aromatherapy Systems'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Ultimate Relaxation & Wellness',
        description: 'Create a personal haven for unwinding and de-stressing with therapeutic features and serene ambiance.'
      },
      {
        title: 'Increased Home Value & Appeal',
        description: "Luxury upgrades significantly enhance your property's market value and appeal to discerning buyers."
      },
      {
        title: 'Bespoke Design & Customization',
        description: 'Every upgrade is tailored to your preferences, ensuring a unique and personalized spa experience.'
      },
      {
        title: 'Premium Quality & Durability',
        description: 'We use only the finest materials and advanced technologies for lasting beauty and performance.'
      },
      {
        title: 'Expert Installation & Integration',
        description: 'Our specialists ensure seamless installation and perfect integration of all luxury features into your existing space.'
      },
      {
        title: 'Enhanced Lifestyle',
        description: 'Transform your daily routine into an indulgent ritual, promoting well-being and comfort.'
      }
    ],
    faqs: [
      {
        question: "What are some popular luxury spa upgrades?",
        answer: "Popular upgrades include jetted tubs, steam showers, heated floors, smart mirrors, chromotherapy lighting, and integrated sound systems."
      },
      {
        question: "Can these upgrades be integrated into an existing bathroom?",
        answer: "Yes, many luxury features can be seamlessly integrated into your current bathroom layout, depending on space and existing plumbing/electrical."
      },
      {
        question: "How long does a luxury spa upgrade project take?",
        answer: "The timeline varies based on the scope and complexity of the upgrades, but typically ranges from 2-6 weeks."
      },
      {
        question: "Do you offer smart bathroom technology integration?",
        answer: "Absolutely. We can integrate smart features like voice-activated controls, digital shower systems, and smart lighting."
      },
      {
        question: "What is the cost range for luxury spa upgrades?",
        answer: "Costs vary significantly based on the features selected and the extent of the renovation. We provide detailed, transparent quotes after a consultation."
      }
    ],
    images: []
  },

  'accessible-bathrooms': {
    label: 'Accessibility Solutions',
    title: 'Accessible Bathroom Design and Installation Services',
    description: 'Create a safe, comfortable, and independent bathing environment with our specialized accessibility solutions. Designed for all ages and abilities.',
    content: `At Berg General Contractor Bathrooms, we believe that every bathroom should be accessible and safe for everyone, regardless of age or mobility. Our accessibility solutions are thoughtfully designed to provide comfort, independence, and peace of mind. We specialize in installing features such as walk-in tubs, roll-in showers, grab bars, comfort-height toilets, and non-slip flooring. Our team works closely with you to understand your specific needs and create a customized bathroom layout that is both functional and aesthetically pleasing. We ensure all installations meet ADA compliance standards where applicable, providing a secure and dignified bathing experience for years to come.`,
    image: `${static_assets}/images/services/accessible.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Walk-in Tub Installation',
        'Roll-in Shower Installation',
        'Grab Bar Installation',
        'Comfort-Height Toilet Installation',
        'Non-Slip Flooring Solutions',
        'Wider Doorways & Entryways',
        'Accessible Vanity & Sink Design',
        'Handheld Shower Heads',
        'Shower Seats & Benches',
        'Ramps & Level Entryways',
        'ADA Compliant Designs'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Enhanced Safety & Independence',
        description: 'Reduce the risk of falls and allow for easier, more independent use of the bathroom for individuals with mobility challenges.'
      },
      {
        title: 'Increased Comfort & Convenience',
        description: 'Enjoy a more comfortable and user-friendly bathroom experience tailored to specific physical needs.'
      },
      {
        title: 'Improved Quality of Life',
        description: 'Maintain dignity and privacy with a bathroom designed to support daily routines without assistance.'
      },
      {
        title: 'Future-Proofing Your Home',
        description: 'Invest in a bathroom that adapts to changing needs, allowing you to age in place comfortably and safely.'
      },
      {
        title: 'Expert Design & Installation',
        description: 'Our specialists are trained in accessible design principles and ensure all installations are secure and compliant.'
      },
      {
        title: 'Increased Home Value',
        description: 'Accessible features can add significant value to your home, appealing to a broader range of potential buyers.'
      }
    ],
    faqs: [
      {
        question: "What is a walk-in tub and how does it benefit me?",
        answer: "A walk-in tub has a watertight door, allowing easy entry without stepping over a high ledge, ideal for those with limited mobility or a risk of falls."
      },
      {
        question: "Can you convert my existing shower into a roll-in shower?",
        answer: "Yes, we specialize in converting traditional showers into barrier-free, roll-in showers for wheelchair accessibility."
      },
      {
        question: "Are your accessible bathroom solutions ADA compliant?",
        answer: "We design and install solutions that meet or exceed ADA guidelines, ensuring maximum safety and functionality."
      },
      {
        question: "What types of grab bars do you install?",
        answer: "We install various types of grab bars, including wall-mounted, floor-to-ceiling, and fold-down options, strategically placed for optimal support."
      },
      {
        question: "Do you offer non-slip flooring options?",
        answer: "Yes, we provide and install a range of non-slip flooring materials that are safe and durable for accessible bathrooms."
      }
    ],
    images:[],
  },

  'powder-room-upgrades': {
    label: 'Powder Room Upgrade',
    title: 'Stylish Powder Room Upgrade and Renovations',
    description: 'Refresh your powder room with our efficient and stylish update services. A small space can make a big impression with the right design.',
    content: `A powder room, though small, offers a significant opportunity to make a design statement and enhance your home's overall aesthetic. Berg General Contractor Bathrooms specializes in efficient and impactful powder room updates that transform these compact spaces into stylish and inviting areas. We focus on maximizing functionality and visual appeal within limited square footage, offering services from new vanity and toilet installations to updated lighting, mirrors, and flooring. Whether you desire a modern, classic, or eclectic look, our team works to create a cohesive design that reflects your taste and leaves a lasting impression on your guests. We ensure quick turnaround times and minimal disruption, delivering a refreshed space that adds value and charm to your home.`,
    image: `${static_assets}/images/services/powder_room.jpg`,
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Vanity & Sink Replacement',
        'Toilet Upgrades',
        'Lighting Fixture Installation',
        'Mirror & Decor Updates',
        'Flooring Installation',
        'Wall Treatment (Paint, Wallpaper, Paneling)',
        'Faucet & Hardware Replacement',
        'Space-Saving Solutions',
        'Accent Lighting',
        'Small Bathroom Design Consultation'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'High Impact, Low Footprint',
        description: 'Powder room updates offer a significant aesthetic return with a relatively small investment of time and resources.'
      },
      {
        title: 'Enhanced Guest Experience',
        description: 'A beautifully updated powder room leaves a positive impression on visitors and reflects your attention to detail.'
      },
      {
        title: 'Increased Home Value',
        description: 'Even small renovations can boost your home appeal and market value, especially in high-traffic areas like powder rooms.'
      },
      {
        title: 'Efficient & Quick Turnaround',
        description: 'Our streamlined process ensures your powder room update is completed efficiently, minimizing disruption to your home.'
      },
      {
        title: 'Customized Design',
        description: 'We tailor every aspect of the update to your personal style and the existing decor of your home.'
      },
      {
        title: 'Expert Craftsmanship',
        description: 'Our skilled team ensures every detail, from installation to finishing touches, is executed with precision and quality.'
      }
    ],
    faqs: [
      {
        question: "How long does a powder room update typically take?",
        answer: "Most powder room updates can be completed within 1-3 days, depending on the scope of work and material availability."
      },
      {
        question: "What are some popular trends for powder rooms?",
        answer: "Popular trends include bold wallpaper, unique lighting fixtures, statement mirrors, floating vanities, and decorative sinks."
      },
      {
        question: "Can you help with small space design challenges?",
        answer: "Absolutely. We specialize in maximizing space and functionality in compact areas, offering smart storage and layout solutions."
      },
      {
        question: "Do I need to replace everything in my powder room?",
        answer: "Not necessarily. We can focus on key elements like the vanity, toilet, and lighting to achieve a fresh look without a full overhaul."
      },
      {
        question: "What is the cost range for a powder room update?",
        answer: "Costs vary based on the extent of the update and chosen materials. We provide a detailed estimate after understanding your vision."
      }
    ],
    images:[],
  },

};

/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
  "modern-master-bathroom": {
    label: "Modern Master Bathroom",
    title: "Sleek Modern Master Bathroom Renovation",
    description: "A complete overhaul of a master bathroom, transforming it into a luxurious, minimalist, and highly functional space with contemporary fixtures and finishes.",
    image: `${static_assets}/images/projects/master.jpg`,
    location: "Suburban Home, Bath, UK",
    duration: "Completed in 4 weeks",
    materials: [
      "Large-format porcelain tiles",
      "Floating double vanity with quartz countertop",
      "Frameless glass shower enclosure",
      "Rainfall shower head and body jets",
      "Smart toilet with bidet function",
      "Recessed LED lighting",
      "Heated towel rail",
      "Underfloor heating system",
      "Matte black fixtures",
      "Custom built-in storage"
    ],
    content: `
This project involved the comprehensive renovation of a master bathroom in a suburban home, aiming to create a modern, spa-like retreat. The client desired a minimalist aesthetic with clean lines, high-end finishes, and smart technology integration.

We began by reconfiguring the layout to optimize space and flow, relocating the shower and vanity areas. Large-format porcelain tiles were selected for both the floor and shower walls, providing a seamless and expansive feel. A custom-built floating double vanity with a sleek quartz countertop was installed, offering ample storage and a contemporary look. The shower was transformed into a spacious wet room with a frameless glass enclosure, complete with a rainfall shower head and integrated body jets for a luxurious bathing experience. Underfloor heating was installed for added comfort, and all lighting was upgraded to energy-efficient recessed LEDs, complemented by a heated towel rail.

The project emphasized smart solutions, including a smart toilet with bidet functionality and integrated storage solutions to maintain the minimalist design. The result is a stunning, highly functional master bathroom that serves as a tranquil sanctuary for the homeowners.
`,
  },

  "luxury-spa-ensuite": {
    label: "Luxury Spa Ensuite",
    title: "Opulent Luxury Spa Ensuite Creation",
    description: "Designing and building a lavish spa-inspired ensuite bathroom, featuring high-end amenities, therapeutic elements, and bespoke finishes for ultimate relaxation.",
    image: `${static_assets}/images/projects/spa.jpg`,
    location: "High-End Residence, Bath, UK",
    duration: "Completed in 6 weeks",
    materials: [
      "Italian marble tiling",
      "Custom-built steam shower with aromatherapy",
      "Freestanding jetted bathtub",
      "Heated natural stone flooring",
      "Integrated smart lighting system (chromotherapy)",
      "Custom double vanity with integrated sinks",
      "Designer fixtures and fittings",
      "Sound system with waterproof speakers",
      "Towel warmer",
      "Bespoke storage solutions"
    ],
    content: `
This ambitious project involved transforming an existing ensuite into a luxurious, private spa retreat. The client envisioned a space dedicated to relaxation and rejuvenation, incorporating advanced therapeutic features and the finest materials.

The design focused on creating a serene atmosphere, beginning with the installation of exquisite Italian marble on all floor and wall surfaces. A custom-built steam shower, complete with aromatherapy and multiple body jets, became a central feature. Adjacent to it, a stunning freestanding jetted bathtub was positioned to offer a focal point for relaxation. Underfoot, natural stone flooring was installed with an integrated heating system for year-round comfort.

Smart technology played a key role, with an integrated lighting system offering chromotherapy options and a hidden sound system providing ambient music. A bespoke double vanity, crafted from premium wood and topped with matching marble, provided ample space and storage. Every detail, from the designer fixtures to the heated towel warmer, was carefully selected to contribute to the opulent spa experience. The result is an unparalleled personal sanctuary that offers both indulgence and tranquility.
`,
  },

  "small-bathroom-makeover": {
    label: "Small Bathroom Makeover",
    title: "Efficient Small Bathroom Makeover for Maximized Space",
    description: "A clever renovation of a compact bathroom, focusing on space-saving solutions, bright aesthetics, and enhanced functionality to make the most of a small area.",
    image: `${static_assets}/images/projects/small.jpg`,
    location: "City Apartment, Bath, UK",
    duration: "Completed in 2 weeks",
    materials: [
      "Compact vanity with integrated sink",
      "Wall-mounted toilet",
      "Corner shower unit",
      "Large format light-colored tiles",
      "Recessed lighting",
      "Large mirror with integrated storage",
      "Sliding barn door (for entry)",
      "Floating shelves",
      "Bright paint colors",
      "Chrome fixtures"
    ],
    content: `
This project tackled the challenge of transforming a small, outdated bathroom in a city apartment into a bright, modern, and highly functional space. The primary goal was to maximize the perception of space and improve usability without expanding the room\'s footprint.

We started by replacing the bulky traditional vanity with a sleek, compact wall-mounted unit that included an integrated sink, freeing up valuable floor space. A wall-mounted toilet was installed, further enhancing the open feel and making cleaning easier. For the shower, a custom corner unit with a clear glass enclosure was chosen to fit snugly into the available space, providing a comfortable showering area without overwhelming the room. Large format, light-colored porcelain tiles were used on both the floor and walls to create a seamless look and reflect light, making the room appear larger.

Strategic lighting was crucial; recessed LED lights were installed to provide ample illumination without visual clutter. A large mirror, extending across the vanity, was chosen to reflect light and expand the room visually, and it included hidden storage. To save space at the entrance, a stylish sliding barn door was fitted. The overall design focused on clean lines, bright colors, and smart storage solutions, resulting in a small bathroom that feels surprisingly spacious and inviting.
`,
  },

  "accessible-bathroom": {
    label: "Accessible Bathroom Upgrade",
    title: "Comprehensive Accessible Bathroom Renovation",
    description: "Creating a safe, comfortable, and fully accessible bathroom designed for ease of use and independence for individuals with mobility challenges.",
    image: `${static_assets}/images/projects/accessible.jpg`,
    location: "Residential Home, Bath, UK",
    duration: "Completed in 3 weeks",
    materials: [
      "Roll-in shower with zero-threshold entry",
      "Fold-down shower seat",
      "Strategically placed grab bars (ADA compliant)",
      "Comfort-height toilet",
      "Non-slip porcelain tiles",
      "Adjustable height vanity with open knee space",
      "Lever handle faucets",
      "Handheld shower head",
      "Wider doorway (if required)",
      "Reinforced wall blocking for future grab bar installation"
    ],
    content: `
This project focused on transforming an existing bathroom into a fully accessible space, ensuring safety, comfort, and independence for a homeowner with mobility needs. The design prioritized universal design principles, making the bathroom functional for all users.

The most significant modification was the installation of a roll-in shower with a zero-threshold entry, eliminating any barriers for wheelchair access. A durable, fold-down shower seat was integrated, along with multiple ADA-compliant grab bars strategically placed within the shower and around the toilet area. The toilet was replaced with a comfort-height model for easier use. Non-slip porcelain tiles were installed throughout the bathroom to prevent falls, even when wet.

A custom-built vanity with an open knee space was designed to allow for wheelchair access, and all faucets were replaced with easy-to-operate lever handles. A handheld shower head was installed for added convenience. Where necessary, the doorway was widened to accommodate a wheelchair. All wall areas where grab bars were installed or might be installed in the future were reinforced with blocking to ensure maximum security. The result is a beautifully designed, highly functional, and safe bathroom that enhances the homeowner\'s quality of life.
`,
  },

  "downtown-condo": {
    label: "Downtown Condo Renovation",
    title: "Chic Downtown Condo Bathroom Renovation",
    description: "A modern and space-efficient bathroom renovation for a downtown condominium, focusing on contemporary design, smart storage, and high-end finishes suitable for urban living.",
    image: `${static_assets}/images/projects/small.jpg`,
    location: "Downtown, Bath, UK",
    duration: "Completed in 3.5 weeks",
    materials: [
      "Porcelain large-format tiles (floor and walls)",
      "Floating vanity with integrated sink",
      "Quartz countertop",
      "Wall-mounted toilet",
      "Walk-in shower with linear drain and frameless glass",
      "Rainfall shower head and thermostatic mixer",
      "Integrated LED lighting (recessed and vanity)",
      "Backlit mirror with demister pad",
      "Compact heated towel rail",
      "Smart storage solutions (e.g., pull-out drawers, hidden cabinets)"
    ],
    content: `
This project involved the complete renovation of a compact bathroom within a bustling downtown condominium. The client sought a sophisticated, contemporary design that maximized every inch of space while incorporating luxurious touches and smart functionality.

The existing layout was reconfigured to accommodate a more open and efficient design. Large-format porcelain tiles were chosen for both the floor and shower walls, creating a seamless and expansive feel, ideal for smaller spaces. A sleek floating vanity with an integrated sink and quartz countertop was installed, providing a clean aesthetic and practical storage without cluttering the floor. A wall-mounted toilet further contributed to the minimalist look and made cleaning easier.

The shower area was transformed into a stylish walk-in shower, featuring a linear drain and a frameless glass enclosure to maintain an open feel. A rainfall shower head combined with a thermostatic mixer offered a luxurious and consistent showering experience. Integrated LED lighting, including recessed ceiling lights and subtle vanity lighting, enhanced the ambiance. A backlit mirror with a demister pad added both functionality and a touch of modern elegance. Smart storage solutions, such as pull-out drawers and hidden cabinets, were incorporated to keep the space tidy and organized. The result is a highly functional, visually stunning bathroom that perfectly complements the urban lifestyle of the condominium.
`,
  },

  "family-bathroom": {
    label: "Suburban Family Bath",
    title: "Durable and Functional Suburban Family Bathroom Renovation",
    description: "A practical and stylish renovation of a family bathroom in a suburban home, designed to withstand daily use while offering comfort and ample storage for a busy household.",
    image: `${static_assets}/images/projects/family.jpg`,
    location: "Suburban Home, Bath, UK",
    duration: "Completed in 3 weeks",
    materials: [
      "Durable ceramic or porcelain tiles",
      "Double vanity with ample storage",
      "Quartz or solid surface countertop",
      "Combination shower/bathtub unit",
      "Water-efficient toilet",
      "Bright LED lighting",
      "Large mirror",
      "Built-in shelving or linen closet",
      "Child-friendly fixtures",
      "Non-slip bath mat area"
    ],
    content: `
This project focused on renovating a family bathroom in a suburban home, with a strong emphasis on durability, functionality, and ease of maintenance to accommodate the demands of a busy family with children. The goal was to create a space that was both aesthetically pleasing and highly practical.

We selected durable ceramic tiles for the floor and shower surround, known for their resistance to wear and tear and ease of cleaning. A large double vanity with extensive storage was installed, featuring a resilient quartz countertop to withstand daily use and provide ample space for multiple users. A combination shower/bathtub unit was chosen to cater to both quick showers and relaxing baths for children. A water-efficient toilet was installed to reduce water consumption.

Bright LED lighting was integrated throughout the bathroom to ensure excellent visibility, and a large mirror was placed above the vanity. To maximize storage, a built-in linen closet was added, providing convenient access to towels and toiletries. All fixtures were chosen for their child-friendly design and robust construction. The design also incorporated a dedicated non-slip area near the bath for added safety. The result is a highly functional, comfortable, and attractive family bathroom that can stand up to the rigors of everyday family life.
`,
  },

  "commercial-washroom": {
    label: "Commercial Washroom Fitout",
    title: "Modern Commercial Washroom Fitout for Office Building",
    description: "A complete fitout of commercial washrooms in an office building, focusing on durability, hygiene, and modern aesthetics to accommodate high traffic and professional standards.",
    image: `${static_assets}/images/projects/commercial.jpg`,
    location: "Office Building, City Centre, Bath, UK",
    duration: "Completed in 5 weeks",
    materials: [
      "Heavy-duty porcelain tiles (floor and walls)",
      "Solid surface countertops",
      "Sensor-activated faucets and soap dispensers",
      "Water-efficient toilets with automatic flush",
      "Durable stainless steel fixtures",
      "High-efficiency hand dryers",
      "Commercial-grade vanity units",
      "LED panel lighting",
      "Anti-slip flooring",
      "Robust partition systems"
    ],
    content: `
This project involved the comprehensive fitout of multiple commercial washrooms within a newly constructed office building in the city center. The client required washrooms that were not only aesthetically pleasing but also highly durable, easy to maintain, and hygienic, capable of handling significant daily traffic.

We installed heavy-duty porcelain tiles on both the floors and walls, chosen for their extreme durability, ease of cleaning, and modern appearance. Solid surface countertops were selected for their seamless finish and resistance to stains and bacteria. To promote hygiene and reduce water consumption, all faucets and soap dispensers were sensor-activated, and toilets were replaced with water-efficient models featuring automatic flush mechanisms.

Stainless steel fixtures were used throughout for their longevity and sleek, professional look. High-efficiency hand dryers were installed to minimize waste. Custom-designed commercial-grade vanity units provided ample space and integrated waste disposal. The lighting was upgraded to bright, energy-efficient LED panels, ensuring excellent illumination. Anti-slip flooring was a critical safety feature, and robust partition systems were installed for privacy and durability. The result is a series of modern, highly functional, and low-maintenance commercial washrooms that meet the highest standards of cleanliness and design.
`,
  },

  "guest-bathroom-remodel": {
    label: "Guest Bathroom Remodel",
    title: "Inviting Guest Bathroom Remodel with Modern Touches",
    description: "A complete remodel of a guest bathroom, focusing on creating a welcoming and stylish space with updated fixtures, finishes, and improved functionality for visitors.",
    image: `${static_assets}/images/projects/guest.jpg`,
    location: "Residential Home, Bath, UK",
    duration: "Completed in 2.5 weeks",
    materials: [
      "Ceramic subway tiles (shower walls)",
      "Hexagonal mosaic floor tiles",
      "Floating single vanity with ceramic sink",
      "Quartz countertop",
      "Low-flow toilet",
      "Combination shower/tub with new fixtures",
      "Vanity mirror with integrated LED lighting",
      "Modern wall sconces",
      "Fresh paint (light, neutral tones)",
      "Chrome or brushed nickel hardware"
    ],
    content: `
This project involved remodeling a guest bathroom to create a more inviting, functional, and aesthetically pleasing space for visitors. The existing bathroom was outdated and lacked modern amenities.

We began by removing all old fixtures and finishes. For the shower walls, classic ceramic subway tiles were chosen, providing a clean and timeless look. The floor was updated with hexagonal mosaic tiles, adding a touch of contemporary design and visual interest. A new floating single vanity with a ceramic sink and a durable quartz countertop was installed, offering a sleek appearance and practical storage for guest essentials. A low-flow toilet was chosen for water efficiency.

The old shower/tub combination was replaced with a new, more efficient unit, complete with updated fixtures for a better showering experience. A vanity mirror with integrated LED lighting was installed, providing excellent illumination for grooming. Modern wall sconces were added to complement the overall lighting scheme. The walls were painted in light, neutral tones to create a bright and airy atmosphere. All hardware was updated to chrome or brushed nickel, tying the modern elements together. The result is a beautifully refreshed guest bathroom that is both comfortable and stylish, ensuring a pleasant experience for any visitor.
`,
  },

  "coastal-style-bathroom": {
    label: "Coastal Style Bathroom",
    title: "Serene Coastal Style Bathroom Renovation",
    description: "Transforming a bathroom into a tranquil coastal retreat, featuring light colors, natural textures, and elements inspired by the sea for a relaxed and airy ambiance.",
    image: `${static_assets}/images/projects/coastal.jpg`,
    location: "Seaside Property, Bath, UK",
    duration: "Completed in 3 weeks",
    materials: [
      "Light blue or sandy tone ceramic tiles",
      "White shiplap wall paneling",
      "Distressed wood vanity with open shelving",
      "Quartz or light granite countertop",
      "Pebble-look shower floor tiles",
      "Freestanding clawfoot tub or walk-in shower with clear glass",
      "Brushed nickel or chrome fixtures",
      "Nautical-themed lighting (e.g., lantern-style sconces)",
      "Rope or driftwood accents",
      "Large round mirror (porthole style)"
    ],
    content: `
This project aimed to infuse a bathroom in a seaside property with a serene coastal style, creating a light, airy, and relaxed atmosphere reminiscent of a beach house. The design focused on natural elements, soft colors, and subtle nautical touches.

Light blue ceramic tiles were chosen for the shower walls, evoking the calm of the ocean, while sandy-toned tiles were used for the main floor to mimic beach sand. White shiplap paneling was installed on the lower half of the walls, adding a classic coastal charm. A distressed wood vanity with open shelving was custom-built, providing a rustic yet elegant focal point and ample storage for towels and decorative items. A light quartz countertop complemented the vanity perfectly.

The shower floor was laid with pebble-look tiles, offering a tactile connection to the beach. A freestanding clawfoot tub was installed for a touch of vintage elegance and relaxation, though a walk-in shower with clear glass could also fit the aesthetic. Brushed nickel fixtures were selected to complete the look. Nautical-themed lighting, such as lantern-style sconces, and subtle rope and driftwood accents were incorporated to enhance the coastal theme. A large round mirror, reminiscent of a ship\'s porthole, was mounted above the vanity. The result is a tranquil and inviting coastal-style bathroom that feels like a permanent vacation.
`,
  },

  "minimalist-wet-room": {
    label: "Minimalist Wet Room",
    title: "Sleek Minimalist Wet Room Design and Installation",
    description: "Creating a contemporary and highly functional wet room with a minimalist aesthetic, emphasizing seamless transitions, open space, and sophisticated drainage solutions.",
    image: `${static_assets}/images/projects/wet_room.jpg`,
    location: "Modern Home, Bath, UK",
    duration: "Completed in 4 weeks",
    materials: [
      "Large-format concrete-effect porcelain tiles (floor and walls)",
      "Linear shower drain",
      "Recessed shower niche",
      "Wall-mounted toilet and bidet",
      "Floating vanity with integrated sink",
      "Minimalist black or chrome fixtures",
      "Integrated LED strip lighting",
      "Underfloor heating",
      "Waterproof membrane system",
      "Frameless glass screen (optional)"
    ],
    content: `
This project involved the design and installation of a minimalist wet room, transforming a conventional bathroom into an open, seamless, and highly functional space. The client desired a contemporary aesthetic with clean lines and an uncluttered feel.

The core of the wet room design was the use of large-format concrete-effect porcelain tiles applied consistently across both the floor and walls, creating a continuous, monolithic look. A linear shower drain was seamlessly integrated into the floor, ensuring efficient water runoff without disrupting the visual flow. A recessed shower niche was built into the wall for discreet storage of toiletries.

To maintain the minimalist aesthetic, a wall-mounted toilet and bidet were installed, freeing up floor space and simplifying cleaning. A sleek floating vanity with an integrated sink was chosen, further contributing to the open feel. All fixtures were selected in a minimalist black finish to provide a striking contrast against the light grey tiles. Integrated LED strip lighting was used to create subtle illumination and highlight the architectural features of the room. Underfloor heating was installed for comfort, and a robust waterproof membrane system was applied beneath all surfaces to ensure complete water containment. An optional frameless glass screen was installed to define the shower area without visually closing off the space. The result is a sophisticated, easy-to-maintain wet room that embodies modern minimalism and offers a luxurious showering experience.
`,
  }
};

export const projectsImageGallery = [
  `${static_assets}/images/projects/accessible.jpg`,
  `${static_assets}/images/projects/coastal.jpg`,
  `${static_assets}/images/projects/commercial.jpg`,
  `${static_assets}/images/projects/compact.jpg`,
  `${static_assets}/images/projects/family.jpg`,
  `${static_assets}/images/projects/guest.jpg`,
  `${static_assets}/images/projects/master.jpg`,
  `${static_assets}/images/projects/small.jpg`,
  `${static_assets}/images/projects/spa.jpg`,
  `${static_assets}/images/projects/wet_room.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [

  {
    "name": "John Davis",
    "role": "Homeowner | Bath",
    "feedback": "Berg General Contractor Bathrooms transformed our old bathroom into a modern oasis—smooth process and stunning results!",
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
    "feedback": "Our old bathroom was a disaster—Berg General Contractor got a new one up and running in just a few weeks!",
  },



  {
    "name": "David Kim",
    "role": "Real Estate Developer",
    "feedback": "They’ve handled bathroom renovations across multiple properties. On-time, budget-friendly, and always to code.",
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