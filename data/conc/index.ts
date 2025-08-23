import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const siteUrl = 'https://totalcareservicesconcrete.com/';
export const siteName = 'Total Care Concrete';
export const siteLogo = `/images/logo.png`;
export const googleAnalyticId = 'G-4Z16WS61D0';
export const bussinessType = ["LocalBusiness", "ConcreteContractor"]


export const contactInfo = {
  phone: {
    text: '(561) 899-8926',
    href: 'tel:+15618998926',
    number: '+15618998926'
  },
  address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
  mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

  email: 'support@totalcareservicesconcrete.com',
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


export const landingPage= {
    seo: {
        title: 'Total Care Concrete',
        description: 'Reliable concrete services including driveways, patios, sidewalks, and more. We bring durability, precision, and value to every concrete project.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl,
    },
    hero: {
        title: 'Durable Concrete Solutions by Total Care',
        description: 'We specialize in expert concrete installations tailored to residential and commercial needs.',
        backgroundImage: '/images/hero_bg_1.jpg',
        ctaText: 'Get a Free Estimate',
        ctaLink: '/contact',
    },
    services: {
        heading: 'Our Concrete Services',
    },
    projects: {
        heading: 'Recent Concrete Work',
    },
}

export const servicesPage = {
    seo: {
        title: 'Concrete Installation & Repair Services',
        description: 'Explore our range of concrete services including stamped concrete, driveways, patios, walkways, and repairs.',
        ogImage: `/images/services/default.jpg`,
        canonical: siteUrl + 'services',
    },
}

export const projectsPage={
    seo: {
        title: 'Concrete Projects Portfolio',
        description: 'View completed concrete jobs — strong, clean, and built to last.',
        ogImage: `/images/projects/default.jpg`,
        canonical: siteUrl + 'projects',
    },
}

export const aboutPage = {
    seo: {
        title: 'About Total Care Concrete',
        description: 'Learn about our team’s experience delivering high-quality concrete solutions with professionalism and precision.',
        ogImage: '/images/hero_bg_1.jpg',
        canonical: siteUrl + 'about',
    },
    content: 'Total Care Concrete delivers durable, attractive, and long-lasting concrete installations for residential and commercial clients. We combine craftsmanship with efficiency to ensure every project exceeds expectations.',
}

export const contactPage = {
    seo: {
        title: 'Contact Total Care Concrete',
        description: 'Need concrete services? Reach out to Total Care Concrete for expert consultation and reliable service.',
        ogImage: '/images/hero_bg_1.jpg',
        canonical: siteUrl + 'contact',
    },
    form: {
        heading: 'Request a Quote',
        messagePlaceholder: "Tell us about your concrete project — we’ll get back to you shortly.",
    },
}

export const blogPage= {
    seo: {
        title: 'Concrete Tips & Outdoor Ideas',
        description: 'Read helpful articles on concrete maintenance, style ideas, and material recommendations.',
        ogImage: '/images/hero_bg_1.jpg',
        canonical: siteUrl + 'blogs',
    },
}

export const serviceAreaPage={
    seo: {
        title: 'Concrete Services in Your Area',
        description: 'We provide concrete services across your local area — with expert installation and reliable results.',
        ogImage: '/images/hero_bg_1.jpg',
        canonical: siteUrl + 'service-areas',
    }
}




/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
    title: 'GET TO KNOW',
    heading: 'Concrete Work Built for Strength, Style, and Longevity',
    description:
        'Total Care Concrete is your trusted partner for delivering expertly crafted concrete work. Whether it’s a patio, driveway, or foundation, we bring skill and care to every pour.',
    keyPoints: [
        {
            title: 'Skilled Concrete Professionals',
            desc: 'Our crew brings years of experience in residential and commercial concrete — ensuring clean, precise results.',
        },
        {
            title: 'Durable, High-Quality Materials',
            desc: 'We use top-grade cement and aggregates, reinforced as needed to ensure long-term performance.',
        },
        {
            title: 'Reliable and Tidy Process',
            desc: 'From planning to finish, we prioritize clear timelines, site cleanliness, and minimal disruption.',
        },
    ],
    image1_url: '/images/hero_bg_1.jpg',
    image2_url: '/images/hero_bg_1.jpg',
    image3_url: '/images/hero_bg_1.jpg',
    image4_url: '/images/hero_bg_1.jpg',
};

export const faqs = [
    {
        question: "Do you offer free concrete project estimates?",
        answer: "Yes, we provide free consultations and quotes based on your concrete needs and project size."
    },
    {
        question: "What concrete services do you provide?",
        answer: "We handle driveways, patios, walkways, slabs, stamped concrete, repairs, and more."
    },
    {
        question: "Is your team licensed and insured?",
        answer: "Yes, our crew is fully licensed, insured, and follows all local building codes and safety standards."
    },
    {
        question: "Can you take on small concrete jobs?",
        answer: "Absolutely. From small repairs to large-scale installations, we handle projects of all sizes."
    },
    {
        question: "How long does a typical concrete project take?",
        answer: "It depends on the scope, but most residential projects are completed in 1–5 days."
    },
    {
        question: "Do you serve both residential and commercial clients?",
        answer: "Yes, we offer concrete services for homes, offices, commercial buildings, and more."
    }
];
export const ourProcessData = {
    heading: 'Our Process',
    description: 'From planning to finishing, our concrete installation process is smooth, efficient, and built to last.',
    list: [
        {
            title: "Initial Consultation",
            description: "We discuss your project goals, site details, and budget to understand your needs.",
            icon: FaComments
        },
        {
            title: "Site Assessment",
            description: "We inspect the location, take measurements, and assess ground conditions for the best results.",
            icon: FaSearch
        },
        {
            title: "Custom Quote & Plan",
            description: "You’ll receive a clear plan with material specs, timeline, and upfront pricing.",
            icon: FaFileAlt
        },
        {
            title: "Scheduling & Prep",
            description: "We schedule the project and handle necessary prep work like excavation or formwork.",
            icon: FaCalendarAlt
        },
        {
            title: "Concrete Installation",
            description: "Our team pours, levels, and finishes the concrete with precision and care.",
            icon: FaHammer
        },
        {
            title: "Final Review & Clean-up",
            description: "We inspect the work with you, ensure satisfaction, and leave the site clean and safe.",
            icon: FaCheckCircle
        }
    ]
};

export const WhyUSData = [
    {
        title: "Certified Concrete Specialists",
        description: "Our crew is trained in all aspects of concrete work — from foundations to decorative finishes.",
        icon: FaUserTie
    },
    {
        title: "Durable, Long-Lasting Results",
        description: "We use premium-grade concrete and proven techniques to ensure your surfaces stand the test of time.",
        icon: FaTools
    },
    {
        title: "Clear, Consistent Communication",
        description: "We keep you informed throughout the project with timely updates and reliable support.",
        icon: FaHandshake
    },
    {
        title: "Transparent Pricing",
        description: "No surprises. Just honest quotes with options that fit your needs and budget.",
        icon: FaDollarSign
    },
    {
        title: "Custom Concrete Solutions",
        description: "Whether it’s stamped finishes or functional slabs, we tailor each project to your goals.",
        icon: FaSmile
    },
    {
        title: "Safe & Code-Compliant Work",
        description: "We adhere to local codes and strict safety practices on every job site.",
        icon: FaShieldAlt
    }
];

export const accomplishmentData = [
    { title: "Concrete Projects Completed", number: 350 },
    { title: "Residential & Commercial Jobs", number: 500 },
    { title: "Experienced Crew Members", number: 25 },
    { title: "Satisfied Clients", number: 700 }
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
            { label: 'Driveway Installation', href: '/services/driveway-installation', hasChildrens: false },
            { label: 'Stamped Concrete', href: '/services/stamped-concrete', hasChildrens: false },
            { label: 'Concrete Slabs', href: '/services/concrete-slabs', hasChildrens: false },
            { label: 'Patios & Walkways', href: '/services/patios-walkways', hasChildrens: false },
            { label: 'Foundation Work', href: '/services/foundation-work', hasChildrens: false },
            { label: 'Garage Flooring', href: '/services/garage-flooring', hasChildrens: false },
            { label: 'Retaining Walls', href: '/services/retaining-walls', hasChildrens: false },
            { label: 'Concrete Repair & Resurfacing', href: '/services/concrete-repair', hasChildrens: false },
            { label: 'Commercial Concrete Services', href: '/services/commercial-concrete', hasChildrens: false },
        ]
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        hasChildrens: true,
        children: [
            { label: 'Modern Driveway', href: '/projects/modern-driveway', hasChildrens: false },
            { label: 'Stamped Patio', href: '/projects/stamped-patio', hasChildrens: false },
            { label: 'Commercial Lot Paving', href: '/projects/commercial-lot', hasChildrens: false },
            { label: 'Garage Floor Finish', href: '/projects/garage-floor', hasChildrens: false },
            { label: 'Concrete Steps', href: '/projects/concrete-steps', hasChildrens: false },
            { label: 'Retaining Wall Build', href: '/projects/retaining-wall', hasChildrens: false },
            { label: 'Foundation Repair', href: '/projects/foundation-repair', hasChildrens: false },
            { label: 'Outdoor Living Space', href: '/projects/outdoor-concrete-living', hasChildrens: false },
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
    tagline: 'Delivering durable, beautiful concrete solutions across Florida — from driveways to foundations.',
};
/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
    {
        name: "Miami",
        href: "/miami",
        title: "Concrete Services in Miami, FL",
        description: "Professional concrete solutions in Miami. From driveways to patios — durable and stylish.",
        content: "Total Care Concrete enhances Miami properties with expert concrete work, decorative finishes, and solid foundations.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Orlando",
        href: "/orlando",
        title: "Concrete Services in Orlando, FL",
        description: "Top-quality concrete construction in Orlando. Poured to perfection, built to last.",
        content: "Orlando clients rely on Total Care Concrete for smooth installations, stamped designs, and reliable concrete foundations.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Tampa",
        href: "/tampa",
        title: "Concrete Services in Tampa, FL",
        description: "Concrete driveways, patios, and more in Tampa. Affordable and built for Florida weather.",
        content: "We help Tampa homeowners with custom concrete work — clean finishes, fast turnarounds, and long-lasting results.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Jacksonville",
        href: "/jacksonville",
        title: "Concrete Services in Jacksonville, FL",
        description: "Expert concrete services in Jacksonville — for homes, businesses, and more.",
        content: "Total Care Concrete delivers durable slabs, walkways, and foundations in Jacksonville with top-tier materials and workmanship.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Fort Lauderdale",
        href: "/fort-lauderdale",
        title: "Concrete Services in Fort Lauderdale, FL",
        description: "Custom concrete finishes in Fort Lauderdale. Sleek, strong, and weather-resistant.",
        content: "We provide Fort Lauderdale with premium concrete patios, stamped walkways, and reliable foundation solutions.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "St. Petersburg",
        href: "/st-petersburg",
        title: "Concrete Services in St. Petersburg, FL",
        description: "Versatile concrete work in St. Pete — from resurfacing to new pours.",
        content: "Total Care Concrete serves St. Petersburg with decorative concrete, smooth installations, and repair services.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Cape Coral",
        href: "/cape-coral",
        title: "Concrete Services in Cape Coral, FL",
        description: "Cape Coral’s trusted name for patios, sidewalks, and decorative concrete.",
        content: "In Cape Coral, we build long-lasting driveways, pool decks, and slabs tailored to Florida's coastal conditions.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Hialeah",
        href: "/hialeah",
        title: "Concrete Services in Hialeah, FL",
        description: "Affordable and efficient concrete services in Hialeah — functional and neat.",
        content: "From driveway repairs to new slab pours, Total Care Concrete brings reliability and value to every Hialeah project.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Gainesville",
        href: "/gainesville",
        title: "Concrete Services in Gainesville, FL",
        description: "Stamped concrete, driveways, and slab work in Gainesville, FL.",
        content: "Total Care Concrete improves Gainesville homes and businesses with clean designs and dependable surfaces.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Naples",
        href: "/naples",
        title: "Concrete Services in Naples, FL",
        description: "Elegant concrete work in Naples — stylish finishes and flawless pours.",
        content: "Naples clients count on us for premium concrete patios, coastal-resistant driveways, and unique stamped textures.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Pensacola",
        href: "/pensacola",
        title: "Concrete Services in Pensacola, FL",
        description: "Reliable concrete services in Pensacola — for homes and commercial sites.",
        content: "We deliver solid concrete foundations, custom walkways, and affordable slab solutions across Pensacola.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "West Palm Beach",
        href: "/west-palm-beach",
        title: "Concrete Services in West Palm Beach, FL",
        description: "Modern concrete options for West Palm Beach — strong, clean, and stylish.",
        content: "Our concrete team builds driveways, patios, and pathways in West Palm Beach with attention to style and durability.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Lakeland",
        href: "/lakeland",
        title: "Concrete Services in Lakeland, FL",
        description: "Your local concrete experts in Lakeland — budget-friendly and dependable.",
        content: "Lakeland homeowners trust Total Care Concrete for concrete resurfacing, new installs, and decorative finishes.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Ocala",
        href: "/ocala",
        title: "Concrete Services in Ocala, FL",
        description: "Functional and attractive concrete services in Ocala, FL.",
        content: "In Ocala, we deliver everything from large slab pours to intricate walkway designs — done right the first time.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Bradenton",
        href: "/bradenton",
        title: "Concrete Services in Bradenton, FL",
        description: "Top-rated concrete services in Bradenton — built to last.",
        content: "Total Care Concrete upgrades Bradenton spaces with strong structures, modern textures, and expert finishes.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Fort Myers",
        href: "/fort-myers",
        title: "Concrete Services in Fort Myers, FL",
        description: "Fort Myers concrete pros — from residential slabs to decorative pathways.",
        content: "We help Fort Myers clients with custom concrete solutions tailored to your space, style, and schedule.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Hollywood",
        href: "/hollywood",
        title: "Concrete Services in Hollywood, FL",
        description: "Hollywood’s go-to for modern concrete work. Sleek, strong, and stylish.",
        content: "Hollywood homes and businesses shine with our expert concrete driveways, stamped patios, and walkways.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Boca Raton",
        href: "/boca-raton",
        title: "Concrete Services in Boca Raton, FL",
        description: "Upscale concrete finishes in Boca Raton — luxury meets function.",
        content: "Boca Raton clients choose us for premium concrete surfaces with elegant textures and long-term strength.",
        image: "/images/areaofservices/default.jpg"
    }
];


/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
    'driveway-installation': {
      label: 'Driveway Installation',
      title: 'Durable & Stylish Driveway Installation by Total Care Concrete',
      description: 'Upgrade your property’s curb appeal and functionality with expertly installed concrete driveways tailored to your needs.',
      content: `Your driveway is more than just a path to your garage — it’s the first impression of your home or business. At Total Care Concrete, we specialize in custom driveway installations that blend form and function. Whether you need a traditional flat concrete driveway or a decorative stamped finish, our team ensures every project is built to last. We begin with a thorough site assessment, proper base preparation, and reinforcement for long-term durability. Our driveways are engineered to handle daily wear, extreme weather, and heavy vehicle loads without cracking or fading. We also offer design consultations to align with your aesthetic preferences and property layout.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'New Concrete Driveway Installation',
          'Stamped or Textured Finishes',
          'Driveway Resurfacing & Overlays',
          'Grading & Drainage Planning',
          'Rebar & Mesh Reinforcement',
          'Concrete Sealing & Finishing',
          'Decorative Edging & Borders',
          'Colored Concrete Options',
          'Extension for Additional Parking',
          'Demolition & Removal of Old Driveways'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'High Durability',
          description: 'Our concrete driveways are built to withstand heavy traffic and harsh conditions.'
        },
        {
          title: 'Custom Designs',
          description: 'Choose from various textures, colors, and finishes to match your property’s style.'
        },
        {
          title: 'Expert Installation',
          description: 'Our crew ensures precise grading and reinforcement for long-term performance.'
        },
        {
          title: 'Enhanced Property Value',
          description: 'A professionally installed driveway improves curb appeal and boosts real estate value.'
        },
        {
          title: 'Fast Turnaround',
          description: 'We complete projects quickly without compromising quality or safety.'
        },
        {
          title: 'Proper Drainage',
          description: 'We design driveways with proper slope and drainage to prevent water pooling and damage.'
        }
      ],
      faqs: [
        {
          question: "How long does a concrete driveway installation take?",
          answer: "Most driveway installations are completed in 3–5 days, depending on size and design."
        },
        {
          question: "Is reinforcement necessary for my driveway?",
          answer: "Yes, we use rebar or mesh reinforcement to enhance strength and prevent cracking over time."
        },
        {
          question: "Can I drive on the new concrete immediately?",
          answer: "We recommend waiting 7 days before driving on the surface to ensure proper curing."
        },
        {
          question: "Do you remove old driveways?",
          answer: "Yes, we handle the demolition and disposal of existing surfaces before new installation."
        },
        {
          question: "Can I customize the look of my driveway?",
          answer: "Absolutely! We offer decorative finishes like stamping, coloring, and borders to suit your style."
        }
      ],
      images: ['/images/services/driveway.jpg', '/images/services/driveway2.jpg']
    },
    'concrete-slabs': {
      label: 'Concrete Slabs',
      title: 'Precision Concrete Slab Installation by Total Care Concrete',
      description: 'Strong, stable, and durable concrete slabs for residential and commercial foundations, pads, and more.',
      content: `Concrete slabs form the backbone of countless structures—from homes and garages to patios and sheds. At Total Care Concrete, we specialize in expertly poured slabs that meet structural codes, offer long-term durability, and serve as reliable foundations for your projects. Whether you’re building a new home, installing a shed, or preparing for a commercial setup, our team ensures accurate grading, formwork, reinforcement, and curing. We use premium materials and advanced techniques to prevent cracks, settlement, and drainage issues. Our process is fast, clean, and customized for your specific site conditions and project requirements.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Residential Slabs for Homes & Garages',
          'Shed & Workshop Foundations',
          'Patio and Porch Slabs',
          'Commercial Floor Slabs',
          'Sidewalk & Entryway Pads',
          'Slabs with Reinforced Rebar or Mesh',
          'Slabs with Vapor Barriers & Insulation',
          'Precision Site Grading & Preparation',
          'Post-Tensioned Slab Systems',
          'Concrete Pads for Equipment & HVAC Units'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Structural Strength',
          description: 'Our slabs are engineered for durability, supporting heavy loads without cracking or shifting.'
        },
        {
          title: 'Custom Applications',
          description: 'We pour slabs for any use—residential, commercial, or industrial—with tailored reinforcement.'
        },
        {
          title: 'Proper Drainage',
          description: 'We ensure slope and grading are done right to prevent pooling or water damage.'
        },
        {
          title: 'Fast Turnaround',
          description: 'Our streamlined process minimizes delays and gets your project off the ground quickly.'
        },
        {
          title: 'Compliance Guaranteed',
          description: 'We meet or exceed all local codes and regulations for slab depth, reinforcement, and curing.'
        },
        {
          title: 'Precision Finish',
          description: 'Smooth, level, and ready-for-use surfaces delivered with professional workmanship.'
        }
      ],
      faqs: [
        {
          question: "How thick should a concrete slab be?",
          answer: "Most residential slabs are 4–6 inches thick, but we adjust based on load and application."
        },
        {
          question: "Do you include reinforcement in your slabs?",
          answer: "Yes, we use rebar or wire mesh based on the slab type and structural needs."
        },
        {
          question: "Can I build directly on the slab?",
          answer: "Absolutely—our slabs are designed to support construction such as garages, sheds, and patios."
        },
        {
          question: "How long before I can use the slab?",
          answer: "Light foot traffic is possible in 24–48 hours; full cure for heavy loads may take 7–28 days."
        },
        {
          question: "Do you handle permits and inspections?",
          answer: "Yes, we assist with permits and coordinate inspections as needed for your municipality."
        }
      ],
      images: ['/images/services/concrete-slabs.jpg', '/images/services/slab-pour.jpg']
    },
    'patios-walkways': {
      label: 'Patios & Walkways',
      title: 'Custom Concrete Patios & Walkways by Total Care Concrete',
      description: 'Transform your outdoor spaces with beautifully designed and expertly installed concrete patios and walkways.',
      content: `Well-crafted patios and walkways enhance your property’s functionality, safety, and curb appeal. At Total Care Concrete, we design and build custom outdoor surfaces that blend seamlessly with your landscape and architectural style. Whether you prefer a clean modern slab, decorative stamped patterns, or textured finishes for grip, our team delivers with attention to detail and precision. From backyard patios perfect for gatherings to walkways that guide guests with elegance and ease, we use high-quality materials and proven techniques to ensure long-lasting results. Every step—from grading and forming to finishing and sealing—is handled professionally to bring your vision to life.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Concrete Backyard Patios',
          'Stamped & Decorative Concrete Paths',
          'Walkways Connecting Entrances & Garden Areas',
          'Curved, Angular, or Custom Shapes',
          'Textured Surfaces for Slip Resistance',
          'Concrete Borders & Edging Integration',
          'Drainage Solutions for Outdoor Areas',
          'Fire Pit & Seating Area Foundations',
          'Covered Patio Bases',
          'Stained or Colored Finishes for Style'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Customized Designs',
          description: 'We tailor patio and walkway designs to match your home’s character and your lifestyle.'
        },
        {
          title: 'Slip-Resistant Textures',
          description: 'Safe, functional surfaces for walking even in wet or high-traffic conditions.'
        },
        {
          title: 'Curb Appeal Boost',
          description: 'Enhance the look of your front or backyard with attractive, functional concrete paths.'
        },
        {
          title: 'Weather Resistant',
          description: 'Our outdoor surfaces withstand Florida’s sun, rain, and humidity without cracking or fading.'
        },
        {
          title: 'Low Maintenance',
          description: 'Easy-to-clean and durable concrete that doesn’t require frequent upkeep.'
        },
        {
          title: 'Fast & Clean Installation',
          description: 'We complete most patio and walkway projects with minimal disruption to your property.'
        }
      ],
      faqs: [
        {
          question: "Can you build curved walkways?",
          answer: "Yes, we specialize in both straight and curved layouts to match your landscape design."
        },
        {
          question: "How long does it take to install a patio?",
          answer: "Most patios are completed within 3–5 days depending on size and complexity."
        },
        {
          question: "Are stamped concrete options available?",
          answer: "Absolutely—we offer a range of stamped and decorative finishes for custom styling."
        },
        {
          question: "Will the concrete crack over time?",
          answer: "We use control joints, reinforcement, and proper curing methods to prevent cracking."
        },
        {
          question: "Do you offer drainage solutions?",
          answer: "Yes, we incorporate grading and optional drainage systems to prevent water pooling."
        }
      ],
      images: ['/images/services/patios.jpg', '/images/services/walkway.jpg']
    },
    'foundation-work': {
      label: 'Foundation Work',
      title: 'Reliable Concrete Foundation Services by Total Care Concrete',
      description: 'Ensure the structural integrity of your property with our expert concrete foundation solutions.',
      content: `A strong, stable foundation is the most critical part of any construction project. At Total Care Concrete, we specialize in creating durable, precise foundations that serve as the solid base for homes, garages, additions, and commercial structures. Whether you need a new foundation, underpinning, or repairs to an existing slab, our experienced team delivers results you can trust. We handle every phase—excavation, forming, reinforcement, pouring, and finishing—with careful planning and engineering expertise to meet local building codes and withstand Florida’s challenging soil conditions. Trust us to keep your project grounded—literally.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'New Concrete Slab Foundations',
          'Footings & Grade Beams',
          'Foundation Repair & Leveling',
          'Garage & Shed Foundations',
          'Pier & Beam Support Work',
          'Underpinning for Settling Structures',
          'Stem Wall Construction',
          'Waterproofing & Drainage Integration',
          'Concrete Reinforcement (Rebar & Mesh)',
          'Code-Compliant Engineering & Permits'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Engineered Precision',
          description: 'We build foundations to exact specifications, ensuring long-term durability and safety.'
        },
        {
          title: 'Licensed & Code-Compliant',
          description: 'Our team ensures all work meets Florida regulations and passes inspections with ease.'
        },
        {
          title: 'Custom Foundation Types',
          description: 'From slabs to footings, we build foundations to suit your structure and soil conditions.'
        },
        {
          title: 'Timely Project Delivery',
          description: 'We keep your timeline in check by coordinating efficiently with builders and inspectors.'
        },
        {
          title: 'Crack-Resistant Builds',
          description: 'We use top-grade materials and reinforcement techniques to minimize cracking and settling.'
        },
        {
          title: 'Comprehensive Site Prep',
          description: 'Our crew manages excavation, grading, and soil compaction before any concrete is poured.'
        }
      ],
      faqs: [
        {
          question: "Do you handle permits and inspections?",
          answer: "Yes, we manage all necessary permits and work closely with inspectors to ensure compliance."
        },
        {
          question: "How long does a foundation project take?",
          answer: "Typical residential foundations take 5–7 days, depending on weather and complexity."
        },
        {
          question: "Can you repair existing foundations?",
          answer: "Absolutely. We offer crack repair, leveling, and structural strengthening services."
        },
        {
          question: "What kind of reinforcement do you use?",
          answer: "We use steel rebar and welded wire mesh to enhance structural integrity."
        },
        {
          question: "Will you coordinate with my builder or contractor?",
          answer: "Yes, we work seamlessly with other trades to align timelines and requirements."
        }
      ],
      images: ['/images/services/default.jpg', '/images/services/default.jpg']
    },
    'garage-flooring': {
      label: 'Garage Flooring',
      title: 'Durable & Stylish Garage Flooring Solutions by Total Care Concrete',
      description: 'Upgrade your garage with professional concrete flooring that’s tough, clean, and built to last.',
      content: `Total Care Concrete delivers garage flooring that’s not only tough but visually appealing. Whether you're turning your garage into a showroom, workshop, or storage space, we install high-performance concrete floors designed for heavy loads and high traffic. Our flooring systems resist stains, cracks, moisture, and chemicals, making them ideal for residential and commercial use. Choose from polished concrete, epoxy coatings, or textured finishes for improved traction and a clean, professional appearance. We handle surface prep, leveling, sealing, and finishing to ensure a long-lasting result that transforms your garage into a functional and beautiful extension of your home.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Concrete Garage Floor Installation',
          'Epoxy Coatings & Sealers',
          'Polished & Stained Finishes',
          'Crack & Surface Repair',
          'Slip-Resistant Textured Surfaces',
          'Chemical & Oil Resistant Sealants',
          'Moisture Barrier Installations',
          'Garage Floor Leveling & Smoothing',
          'Custom Color & Design Options',
          'UV-Protective Coatings'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Heavy-Duty Durability',
          description: 'Built to withstand vehicle weight, spills, and tools without cracking or fading.'
        },
        {
          title: 'Low Maintenance',
          description: 'Our sealed surfaces are easy to clean and resist oil, dust, and grime.'
        },
        {
          title: 'Custom Finishes',
          description: 'Choose from a range of colors, textures, and coatings to match your garage’s use and style.'
        },
        {
          title: 'Fast Turnaround',
          description: 'We complete most garage flooring installations in just 1–2 days.'
        },
        {
          title: 'Slip Resistance',
          description: 'Options like textured or sand-coated epoxy help improve grip and safety.'
        },
        {
          title: 'Long-Term Value',
          description: 'Enhance your garage’s look and usability while boosting home value.'
        }
      ],
      faqs: [
        {
          question: "How long does a garage floor installation take?",
          answer: "Most installs take 1–2 days, including surface prep and curing time."
        },
        {
          question: "Will the flooring resist oil and chemical stains?",
          answer: "Yes, our sealers and epoxy systems are designed to resist automotive fluids and household chemicals."
        },
        {
          question: "Can you repair and coat my existing concrete floor?",
          answer: "Absolutely. We repair cracks, clean, and prepare the surface before applying any coatings."
        },
        {
          question: "Are your floors safe when wet?",
          answer: "We offer slip-resistant textures and additives to reduce slipperiness even when wet."
        },
        {
          question: "What’s the maintenance like?",
          answer: "Just occasional mopping or sweeping—no special cleaners required."
        }
      ],
      images: ['/images/services/default.jpg', '/images/services/default.jpg']
    },
    'retaining-walls': {
      label: 'Retaining Walls',
      title: 'Expertly Built Retaining Walls by Total Care Concrete',
      description: 'Ensure structural stability and enhance your landscape with professionally engineered concrete retaining walls.',
      content: `Retaining walls are essential for managing sloped terrain, preventing soil erosion, and adding dimension to your outdoor space. At Total Care Concrete, we design and construct retaining walls that are as strong as they are attractive. Whether it's a functional barrier for water runoff or an aesthetic feature in your garden, our walls are built to last. We work with poured concrete, concrete blocks, and decorative finishes to match your property’s needs. Every project begins with proper assessment and engineering, followed by precise excavation, drainage solutions, and expert installation. Our walls are built with both structural integrity and curb appeal in mind.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Poured Concrete Retaining Walls',
          'Concrete Block Retaining Walls',
          'Tiered & Terraced Wall Systems',
          'Reinforced Structural Retaining Walls',
          'Decorative & Stamped Finishes',
          'Drainage System Integration',
          'Sloped Landscape Support',
          'Garden & Flowerbed Walls',
          'Retaining Wall Repairs & Reinforcements',
          'Customized Wall Designs'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Structural Reliability',
          description: 'Our walls are engineered to hold back soil and water with long-term stability.'
        },
        {
          title: 'Enhanced Curb Appeal',
          description: 'Decorative finishes and clean lines add beauty to any yard or landscape.'
        },
        {
          title: 'Erosion & Drainage Control',
          description: 'We integrate proper drainage to reduce pressure and prevent water damage.'
        },
        {
          title: 'Custom Configurations',
          description: 'Built to fit your slope, garden, or outdoor living space perfectly.'
        },
        {
          title: 'Licensed Professionals',
          description: 'We meet local codes and engineering standards to ensure compliance and safety.'
        },
        {
          title: 'Low Maintenance',
          description: 'Built to withstand weather without constant upkeep or repairs.'
        }
      ],
      faqs: [
        {
          question: "Do I need a retaining wall for my property?",
          answer: "If you have sloped terrain, drainage issues, or need to level an area, a retaining wall is often necessary."
        },
        {
          question: "How long do concrete retaining walls last?",
          answer: "With proper construction, they can last 50+ years with minimal maintenance."
        },
        {
          question: "Do you handle drainage with the wall installation?",
          answer: "Yes, we incorporate drainage systems like weep holes and gravel backfill to prevent hydrostatic pressure."
        },
        {
          question: "Can you match the wall to my existing landscaping?",
          answer: "Definitely. We offer decorative finishes and can design around your landscape aesthetic."
        },
        {
          question: "Is a permit required for a retaining wall?",
          answer: "For walls over a certain height (typically 4 feet), local permits and engineering may be required. We assist with this process."
        }
      ],
      images: ['/images/services/default.jpg', '/images/services/default.jpg']
    },
    'concrete-repair': {
      label: 'Concrete Repair & Resurfacing',
      title: 'Professional Concrete Repair & Resurfacing Services',
      description: 'Restore the strength and appearance of your concrete surfaces with expert repair and resurfacing solutions from Total Care Concrete.',
      content: `Cracked, chipped, or stained concrete can affect both safety and curb appeal. Our concrete repair and resurfacing services provide an affordable way to restore functionality and aesthetics without full replacement. Whether it's a worn-out driveway, spalling patio, or chipped walkway, we assess the damage and apply targeted solutions. Our techniques include crack filling, resurfacing overlays, grinding, patching, and sealing. We also offer decorative finishes to give old surfaces a refreshed, modern look. With advanced tools and materials, our team ensures that repairs blend seamlessly and last for years.`,
      image: '/images/services/default.jpg',
      typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
          'Crack & Joint Repair',
          'Surface Grinding & Leveling',
          'Concrete Overlay Systems',
          'Stamped Concrete Resurfacing',
          'Spalling & Pitting Treatment',
          'Epoxy & Polyurethane Injections',
          'Garage & Driveway Resurfacing',
          'Walkway & Patio Repairs',
          'Concrete Sealing & Protection',
          'Decorative Concrete Finishes'
        ]
      },
      benefitsOFChoosing: [
        {
          title: 'Cost-Effective Alternative',
          description: 'Save money by repairing or resurfacing instead of replacing entire slabs.'
        },
        {
          title: 'Improved Safety',
          description: 'Smooth out tripping hazards and cracks to make surfaces safer to walk or drive on.'
        },
        {
          title: 'Aesthetic Upgrade',
          description: 'Restore the look of your concrete with color options and texture improvements.'
        },
        {
          title: 'Quick Turnaround',
          description: 'Most repairs can be completed in a day or two, minimizing downtime.'
        },
        {
          title: 'Durable Materials',
          description: 'We use premium repair products to ensure long-lasting results.'
        },
        {
          title: 'Eco-Friendly Approach',
          description: 'Extend the life of your existing concrete to reduce demolition waste.'
        }
      ],
      faqs: [
        {
          question: "Can all cracks in concrete be repaired?",
          answer: "Most surface and structural cracks can be repaired. We assess each case to choose the right solution."
        },
        {
          question: "How long does resurfacing last?",
          answer: "With proper maintenance, resurfaced concrete can last 10–15 years or longer."
        },
        {
          question: "Is resurfacing suitable for driveways and garages?",
          answer: "Absolutely. It's commonly used on driveways, garages, patios, and commercial floors."
        },
        {
          question: "Will the repaired area match the rest of the surface?",
          answer: "We aim for seamless blending. Color matching and texturing options are available."
        },
        {
          question: "Do you offer decorative options during repair?",
          answer: "Yes, we can apply stamped overlays or colored finishes as part of the resurfacing process."
        }
      ],
      images: ['/images/services/default.jpg', '/images/services/default.jpg']
    },
    'commercial-concrete': {
    label: 'Commercial Concrete Services',
    title: 'Reliable Commercial Concrete Services for Florida Businesses',
    description: 'From warehouses to storefronts, our commercial concrete services are tailored to meet high-volume, code-compliant construction needs.',
    content: `At Total Care Concrete, we understand the unique demands of commercial concrete projects—whether you're developing new structures or maintaining existing ones. Our team delivers durable, code-compliant concrete work that supports heavy traffic and long-term performance. We handle everything from foundations and parking lots to sidewalks, ramps, and slab work. Our commercial-grade equipment, experienced crews, and adherence to strict timelines ensure your project stays on track. We also collaborate with contractors, property managers, and business owners to develop efficient solutions that minimize downtime and support business operations.`,
    image: '/images/services/default.jpg',
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Commercial Foundations',
        'Concrete Slabs & Flooring',
        'Sidewalks & Curbs',
        'Parking Lot Construction',
        'ADA Compliant Ramps',
        'Loading Dock Pads',
        'Concrete Retaining Walls',
        'Drainage & Grading Solutions',
        'Expansion Joint Installation',
        'Concrete Demolition & Replacement'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Heavy-Duty Performance',
        description: 'Our concrete solutions are built to withstand high traffic, weight loads, and daily wear.'
      },
      {
        title: 'Strict Code Compliance',
        description: 'We follow all building regulations and ADA requirements to ensure safety and approval.'
      },
      {
        title: 'Timely Project Delivery',
        description: 'We understand time is money—our crews work efficiently to meet business-critical timelines.'
      },
      {
        title: 'Collaborative Approach',
        description: 'We partner with contractors, engineers, and business owners to ensure seamless project execution.'
      },
      {
        title: 'Long-Term Value',
        description: 'Our concrete surfaces are built for longevity, reducing maintenance and future repair costs.'
      },
      {
        title: 'Custom Solutions',
        description: 'From layout to finish, we tailor our services to fit your business needs and site conditions.'
      }
    ],
    faqs: [
      {
        question: "Do you handle large-scale commercial projects?",
        answer: "Yes, we’re equipped to take on projects of all sizes, from retail stores to warehouses and industrial facilities."
      },
      {
        question: "Are your commercial services ADA compliant?",
        answer: "Absolutely. We ensure ramps, sidewalks, and access points meet ADA standards."
      },
      {
        question: "Can you coordinate with general contractors?",
        answer: "Yes, we work closely with contractors and project managers for smooth integration into larger projects."
      },
      {
        question: "What kind of turnaround can we expect?",
        answer: "Project timelines vary, but we prioritize speed without compromising quality or safety."
      },
      {
        question: "Is nighttime or off-hour work available?",
        answer: "Yes, we offer flexible scheduling to minimize disruption to your business operations."
      }
    ],
    images: ['/images/services/default.jpg', '/images/services/default.jpg']
  },
  'stamped-concrete': {
    label: 'Stamped Concrete',
    title: 'Stylish & Durable Stamped Concrete Solutions',
    description: 'Add texture and personality to your concrete surfaces with our custom stamped concrete services.',
    content: `Stamped concrete is the perfect choice when you want the durability of concrete with the beauty of stone, brick, tile, or even wood textures. At Total Care Concrete, we specialize in stamped concrete installations that elevate the curb appeal of driveways, patios, walkways, and pool decks. You can choose from a wide range of patterns, textures, and color finishes to match your home’s style. Our experts ensure precise stamping and sealing techniques for a long-lasting, low-maintenance finish that resists weathering and fading. Whether you're aiming for a rustic stone look or a modern geometric pattern, stamped concrete brings elegance without the high cost of natural materials.`,
    image: '/images/services/default.jpg',
    typeOfSolutions: {
      headings: 'Solutions we offer',
      types: [
        'Stamped Driveways',
        'Stamped Patios & Walkways',
        'Pool Deck Stamping',
        'Textured Concrete Slabs',
        'Color-Tinted Stamped Finishes',
        'Brick, Slate, & Stone Patterns',
        'Custom Stamping Designs',
        'Stamped Concrete Sealing',
        'Resurfacing & Resealing Services',
        'Decorative Borders & Inlays'
      ]
    },
    benefitsOFChoosing: [
      {
        title: 'Elegant Appearance',
        description: 'Achieve the look of high-end materials like slate or brick at a fraction of the cost.'
      },
      {
        title: 'Durability Meets Design',
        description: 'Stamped concrete offers long-term strength with beautiful surface texture and color.'
      },
      {
        title: 'Low Maintenance',
        description: 'Properly sealed stamped concrete resists fading, staining, and weather damage.'
      },
      {
        title: 'Custom Styles',
        description: 'Choose from a wide range of patterns, textures, and colors for a truly custom look.'
      },
      {
        title: 'Fast Installation',
        description: 'Compared to pavers or natural stone, stamped concrete is installed faster with fewer joints.'
      },
      {
        title: 'Slip-Resistant Options',
        description: 'We offer textured finishes and non-slip sealers for safe outdoor surfaces.'
      }
    ],
    faqs: [
      {
        question: "How long does stamped concrete last?",
        answer: "With proper sealing and maintenance, stamped concrete can last over 20 years."
      },
      {
        question: "Can stamped concrete be used around pools?",
        answer: "Yes, we apply slip-resistant finishes that make stamped concrete ideal for pool decks."
      },
      {
        question: "Will the color fade over time?",
        answer: "Our UV-resistant sealers help preserve color and protect against fading from sun exposure."
      },
      {
        question: "Can I customize the pattern or texture?",
        answer: "Absolutely! We offer a variety of stamping patterns and color combinations to match your style."
      },
      {
        question: "Is stamped concrete more affordable than pavers?",
        answer: "Yes, stamped concrete typically costs less than natural stone or paver installations."
      }
    ],
    images: ['/images/services/default.jpg', '/images/services/default.jpg']
  }
  
  };
  
  
  

/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
    "modern-driveway": {
     label: "Modern Driveway",
     title: "Sleek and Durable Modern Driveway Installation",
     description: "A clean, stylish concrete driveway upgrade designed to enhance curb appeal and provide long-lasting performance for modern homes.",
     image: "/images/projects/default.jpg",
     location: "Suburban Residence, Orlando, FL",
     duration: "Completed in 2 weeks",
     materials: [
       "Fiber-reinforced concrete mix",
       "Smooth broom finish surface",
       "Control joints for crack prevention",
       "Exposed aggregate accents",
       "Steel rebar reinforcement",
       "Concrete sealer for weather resistance",
       "Edge-forming for clean lines",
       "Compact gravel sub-base",
       "Drainage channels",
       "Stamped border detailing"
     ],
     content: `
   This modern driveway installation was tailored for a homeowner seeking a bold upgrade to their exterior aesthetic. Functionality met elegance with our streamlined concrete layout and custom border accents.
   
   Our team began by excavating the old pavement and installing a gravel sub-base for drainage and durability. Steel reinforcement ensured long-term strength, and control joints were placed strategically to avoid future cracking. The surface was finished with a sleek broom texture for traction and minimal maintenance.
   
   A standout feature was the stamped border, which added a visual frame to the slab and elevated its curb appeal. The entire driveway was sealed to protect against Florida’s humidity and heavy rain, ensuring lasting beauty and performance.
   
   The result is a modern, low-maintenance driveway that enhances the home’s value and delivers reliable use for years to come.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "outdoor-concrete-living": {
     label: "Outdoor Living Space",
     title: "Outdoor Concrete Living Space for Relaxation and Entertainment",
     description: "A custom-built outdoor area featuring stamped concrete, integrated seating, and fire features — crafted for open-air comfort and gatherings.",
     image: "/images/projects/default.jpg",
     location: "Winter Park Backyard, Orlando, FL",
     duration: "Completed in 4 weeks",
     materials: [
       "Stamped concrete with wood texture pattern",
       "Built-in concrete seating walls",
       "Natural stone fire pit",
       "Weather-resistant sealant",
       "Outdoor lighting fixtures",
       "Decorative expansion joints",
       "Reinforced concrete base",
       "Drainage system components",
       "Pergola frame base mounts",
       "Slip-resistant concrete finish"
     ],
     content: `
   This backyard transformation turned an underused lawn into a beautifully designed outdoor living space perfect for Florida evenings. Our team at Total Care Services crafted a seamless stamped concrete surface that mimicked the warmth of natural wood while offering superior durability and weather resistance.
   
   We integrated curved concrete seating around a stone-clad fire pit, perfect for cozy gatherings. The stamped surface included strategic expansion joints to prevent cracking, while outdoor-rated lighting created ambiance after sunset. The client also planned to add a pergola in the future, so base mounts were embedded into the layout.
   
   The final result? A low-maintenance, elegant concrete patio that extends the home’s usable living space and brings family and friends together under the open sky.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "foundation-repair": {
     label: "Foundation Repair",
     title: "Structural Foundation Repair for Lasting Stability",
     description: "Expert-level concrete foundation repair to restore structural integrity, fix settling issues, and prevent further property damage.",
     image: "/images/projects/default.jpg",
     location: "Colonialtown Home, Orlando, FL",
     duration: "Completed in 2 weeks",
     materials: [
       "Concrete patching compound",
       "Steel reinforcement bars",
       "Hydraulic jacks",
       "Piering system (helical piers)",
       "Waterproof sealant",
       "Crack injection epoxy",
       "Concrete mix for footings",
       "Pressure-treated wood forms",
       "Moisture barrier sheets",
       "Backfill gravel"
     ],
     content: `
   This residential foundation repair project focused on correcting years of settling that had led to visible cracks and uneven flooring. The goal was to not only fix the cosmetic damage but to address the root structural issues and prevent future complications.
   
   We began by assessing the soil and load points, then implemented a helical pier system to lift and re-stabilize the foundation. Cracks were sealed with industrial epoxy injections, and reinforcements were added using rebar and patching compounds. The area was sealed with a moisture barrier to mitigate future water intrusion, and the landscaping was carefully restored to its original state.
   
   Thanks to this comprehensive repair, the home now sits level, secure, and ready to withstand the elements for decades to come.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "retaining-wall": {
     label: "Retaining Wall Build",
     title: "Functional & Decorative Retaining Wall Construction",
     description: "Expertly crafted concrete retaining walls that offer structural integrity and enhance landscaping with a seamless blend of utility and design.",
     image: "/images/projects/default.jpg",
     location: "Lake Nona Backyard, Orlando, FL",
     duration: "Completed in 1 week",
     materials: [
       "Poured concrete blocks",
       "Geo-grid reinforcement mesh",
       "Drainage gravel and pipe",
       "Concrete adhesive",
       "Decorative stone veneer",
       "Compacted backfill soil",
       "Weep hole drains",
       "Concrete footing mix",
       "Rebar framework",
       "Waterproof membrane coating"
     ],
     content: `
   This retaining wall project addressed both functional and aesthetic needs for a sloped backyard that was prone to soil erosion. The homeowners wanted a solution that provided slope support while upgrading the outdoor space’s visual appeal.
   
   We began with proper excavation and poured a concrete footing reinforced with rebar to support long-term load. Concrete blocks were then stacked and bonded using industrial adhesive, with a gravel-backed drain system installed to ensure water runoff didn't compromise the wall’s stability. A stone veneer finish gave it a high-end appearance that complements the surrounding landscape.
   
   The new retaining wall not only prevents soil movement but also carves out a beautiful, flat garden zone, turning a tricky slope into a feature-worthy space.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "concrete-steps": {
     label: "Concrete Steps",
     title: "Safe & Stylish Outdoor Concrete Steps Installation",
     description: "Custom-built concrete steps that enhance both accessibility and curb appeal, crafted for durability and designed to complement any exterior aesthetic.",
     image: "/images/projects/default.jpg",
     location: "Suburban Residence, Kissimmee, FL",
     duration: "Completed in 3 days",
     materials: [
       "High-strength poured concrete",
       "Rebar reinforcement",
       "Smooth trowel finish",
       "Slip-resistant sealer",
       "Compact gravel base",
       "Color-integrated concrete mix",
       "Aluminum stair nosing",
       "Forming lumber and stakes",
       "Concrete bonding adhesive",
       "Anti-crack joint inserts"
     ],
     content: `
   These outdoor concrete steps were built to provide safe, lasting access to the home’s main entrance while enhancing its front-yard appeal. The homeowners wanted a clean, modern look with minimal maintenance — and concrete was the perfect choice.
   
   We began by excavating the site and laying a stable gravel base, ensuring proper drainage. Reinforced concrete was poured and shaped using precision forms to create wide, even risers. After curing, a non-slip sealer was applied for safety and longevity, especially during Florida’s rainy seasons.
   
   The result? A simple yet striking entrance upgrade that’s built to last and elevates the home’s overall look and function.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "garage-floor": {
     label: "Garage Floor Finish",
     title: "Durable Epoxy Garage Floor Installation",
     description: "A rugged yet sleek epoxy-coated garage floor designed to resist stains, cracking, and wear, turning a basic garage into a functional and polished space.",
     image: "/images/projects/default.jpg",
     location: "Residential Home, Sanford, FL",
     duration: "Completed in 2 days",
     materials: [
       "Industrial-grade epoxy resin",
       "Polyaspartic topcoat",
       "Diamond-ground concrete surface",
       "Decorative vinyl flakes",
       "Concrete crack filler",
       "Anti-slip additive",
       "Moisture barrier primer",
       "Edge and corner sealant",
       "High-gloss finish",
       "UV-resistant clear coat"
     ],
     content: `
   This garage transformation was all about function and finish. The client wanted a professional-grade surface that could withstand daily vehicle use while looking clean and modern. We delivered a seamless epoxy floor system that offers superior durability and easy maintenance.
   
   After prepping the concrete with diamond grinding, we filled any imperfections and applied a moisture-resistant primer. The base coat was layered with decorative vinyl flakes for texture and style, followed by a polyaspartic topcoat for maximum protection.
   
   This new garage floor resists oil stains, abrasions, and chemicals — all while giving the space a showroom-quality finish that elevates the entire property.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "commercial-lot": {
     label: "Commercial Lot Paving",
     title: "Heavy-Duty Concrete Paving for Commercial Parking Lot",
     description: "A durable and well-drained concrete parking lot tailored for high traffic, designed with precision grading and structural integrity to support commercial use.",
     image: "/images/projects/default.jpg",
     location: "Retail Strip, Kissimmee, FL",
     duration: "Completed in 3 weeks",
     materials: [
       "High PSI concrete mix (4000+)",
       "Laser-graded base",
       "Rebar reinforcement grid",
       "Expansion joints & control joints",
       "Drainage slopes and catch basins",
       "Slip-resistant broom finish",
       "Concrete curing compound",
       "Steel formwork",
       "ADA-compliant ramps & markings",
       "Durable striping paint"
     ],
     content: `
   This project involved constructing a robust concrete parking lot for a busy retail strip that demanded durability, drainage, and compliance. Our scope covered everything from grading and base compaction to final striping and ADA accessibility.
   
   We began by preparing a properly sloped sub-base to encourage runoff, then reinforced the area with a rebar grid for load-bearing support. Concrete was poured in large sections, with expansion and control joints carefully placed to prevent cracking.
   
   Once cured and sealed, we applied clear markings for traffic flow, accessible spots, and fire lanes. The result is a commercial-grade surface that looks professional, lasts long, and meets all safety and zoning requirements for heavy daily use.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   },
   "stamped-patio": {
     label: "Stamped Patio",
     title: "Decorative Stamped Concrete Patio with Natural Stone Finish",
     description: "A beautifully crafted outdoor patio using stamped concrete techniques to mimic natural stone, adding elegance and durability to the backyard space.",
     image: "/images/projects/default.jpg",
     location: "Private Backyard, Winter Park, FL",
     duration: "Completed in 10 days",
     materials: [
       "High-strength concrete mix",
       "Ashlar slate stamp pattern",
       "Color hardener and antique release",
       "Concrete sealer for UV protection",
       "Expansion joints",
       "Smooth control edging",
       "Gravel and sand base layer",
       "Concrete resurfacing overlay",
       "Stenciled border accents",
       "Anti-slip textured finish"
     ],
     content: `
   This stamped concrete patio project brought timeless charm and increased usability to a once-underutilized backyard. The homeowners desired a stone-like look without the cost or maintenance of real pavers — and stamped concrete was the perfect solution.
   
   After site prep and a sturdy base installation, we poured and stamped the concrete using an ashlar slate pattern, adding rich color hardeners and antique release agents for a natural, multi-tone effect. Precision-edged borders gave the patio a polished, intentional feel.
   
   Sealed for long-term weather resistance and finished with a slip-resistant texture, this patio is now an inviting space for outdoor dining, lounging, and family gatherings. It adds immediate aesthetic value and low-maintenance durability to the home.
   `,
     images: [
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg",
       "/projects/default.jpg"
     ]
   }
   
   
   
   
   };

export const projectsImageGallery = [
  '/projects/costal.jpg',
  '/projects/buildings.jpg',
  '/projects/condos.jpg',
  '/projects/mall.jpg',
  '/projects/luxry.jpg',
  '/projects/lake-view.jpg',
  '/projects/ocean-breeze.jpg',
  '/projects/measueam.jpg',
  '/services/metal.jpg',
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
    {
      name: "John Davis",
      role: "Homeowner | Driveway",
      feedback: "Total Care Concrete replaced our cracked driveway with a stunning stamped finish. Great craftsmanship and attention to detail!",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Rachel Green",
      role: "Property Manager",
      feedback: "They poured new sidewalks and patio slabs across several properties. Reliable, professional, and on schedule every time.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Carlos Rivera",
      role: "Business Owner | Commercial Lot",
      feedback: "Our commercial parking lot was resurfaced flawlessly. Minimal downtime and excellent results.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Lisa Turner",
      role: "Landscape Architect",
      feedback: "We’ve collaborated on several stamped concrete patio projects—always impressed by their finish quality and site cleanliness.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Mark Johnson",
      role: "Hotel Manager",
      feedback: "They added new retaining walls and concrete walkways around our hotel. Guests noticed the upgrade immediately.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Emily Chen",
      role: "Homeowner | Patio",
      feedback: "From planning to pouring, they helped us create a gorgeous outdoor living area. We love entertaining now!",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "David Kim",
      role: "Real Estate Developer",
      feedback: "Total Care Concrete handled foundation pours for our new builds—accurate, clean, and always to spec.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Sophia Allen",
      role: "Restaurant Owner",
      feedback: "They poured our new concrete flooring during renovations. Easy maintenance and super durable for heavy foot traffic.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Nathan Scott",
      role: "Construction Project Manager",
      feedback: "This team nailed every slab pour on our recent development. Great finish quality and communication throughout.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Olivia Perez",
      role: "Retail Store Owner",
      feedback: "We needed concrete repairs in a high-traffic area—they were fast, clean, and restored it like new.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Jason Brooks",
      role: "Warehouse Operator",
      feedback: "Our new concrete flooring handles forklift traffic without issue. Great job from Total Care Concrete.",
      image: "/images/testimonials/default.jpg"
    },
    {
      name: "Mia Thompson",
      role: "Home Renovator | Garage",
      feedback: "We had them refinish a cracked garage floor—smooth finish, sealed, and looks brand new!",
      image: "/images/testimonials/default.jpg"
    }
  ];
  