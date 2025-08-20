import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */
export const siteUrl = 'https://totalcareserviceswindows.com/';
export const siteName = 'Total Care Windows';
export const siteLogo = `/images/logo.png`;
export const googleAnalyticId = 'G-7M6MH4L70';
export const bussinessType = ["LocalBusiness", "HomeAndConstructionBusiness"]


export const contactInfo = {
    phone: {
        text: '(561) 899-8926',
        href: 'tel:+15618998926',
        number: '+15618998926'
    },
    address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
    mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

    email: 'support@totalcareserviceswindows.com',
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
        title: 'Total Care Windows',
        description: 'Expert window installation, repair, and maintenance services for residential and commercial properties. Quality you can see through.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl,
    },
    hero: {
        title: 'Crystal Clear Window Solutions',
        description: 'From repairs to installations, we provide reliable, energy-efficient window services with professional care.',
        backgroundImage: '/images/hero_bg_1.jpg',
        ctaText: 'Request a Quote',
        ctaLink: '/contact',
    },
    services: {
        heading: 'Our Window Services',
    },
    projects: {
        heading: 'Recent Window Projects',
    },
}

export const servicesPage = {
    seo: {
        title: 'Professional Window Services',
        description: 'Explore our window services — installation, glass replacement, sealing, tinting, and maintenance for homes and offices.',
        ogImage: `/images/services/default.jpg`,
        canonical: siteUrl + 'services',
    },
}

export const projectsPage = {
    seo: {
        title: 'Completed Window Projects',
        description: 'See our latest window work — expertly installed, energy-efficient, and aesthetically pleasing.',
        ogImage: `/images/projects/default.jpg`,
        canonical: siteUrl + 'projects',
    },
}

export const aboutPage = {
    seo: {
        title: 'About Total Care Windows',
        description: 'Get to know our expert team specializing in high-quality window services for all property types.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'about',
    },
    content: 'Total Care Windows is dedicated to delivering precise, clean, and high-performing window services. Whether you’re upgrading your view or improving insulation, we’re here to help with top-tier materials and workmanship.',
}

export const contactPage = {
    seo: {
        title: 'Contact Total Care Windows',
        description: 'Reach out for professional window repairs, installations, and consultations tailored to your needs.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'contact',
    },
    form: {
        heading: 'Book Your Window Service',
        messagePlaceholder: "Tell us about your window needs — we'll respond promptly.",
    },
}

export const blogPage = {
    seo: {
        title: 'Window Maintenance & Tips',
        description: 'Learn about window care, energy savings, seasonal maintenance tips, and design inspiration.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'blogs',
    },
}

export const serviceAreaPage = {
    seo: {
        title: 'Window Services Near You',
        description: 'Providing expert window solutions to neighborhoods and businesses in your area.',
        ogImage: `/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'service-areas',
    },
}



/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
    title: 'GET TO KNOW',
    heading: 'Expert Window Services You Can Trust',
    description:
        'Total Care Windows delivers professional window cleaning, repair, and installation for homes and businesses. We focus on clear results, quality materials, and dependable service.',
    keyPoints: [
        {
            title: 'Skilled Window Specialists',
            desc: 'Our technicians are experienced in handling all window types — from traditional to modern setups.',
        },
        {
            title: 'Transparent Pricing',
            desc: 'We provide upfront quotes with no hidden fees, ensuring full clarity on every project.',
        },
        {
            title: 'Prompt Scheduling',
            desc: 'From single window fixes to full installations, we respond quickly and work efficiently.',
        },
    ],
    image1_url: '/images/hero_bg_1.jpg',
    image2_url: '/images/hero_bg_1.jpg',
    image3_url: '/images/hero_bg_1.jpg',
};


export const faqs = [
    {
        question: "Do you offer free maintenance consultations?",
        answer: "Yes, we provide free assessments and quotes for your maintenance or repair needs."
    },
    {
        question: "What types of maintenance services do you provide?",
        answer: "We cover electrical, plumbing, HVAC, painting, appliance repair, and general handyman services."
    },
    {
        question: "Is your team licensed and insured?",
        answer: "Absolutely. Our technicians are certified, insured, and adhere to safety and compliance standards."
    },
    {
        question: "Do you handle emergency repairs?",
        answer: "Yes, we offer urgent repair services and quick scheduling for critical maintenance issues."
    },
    {
        question: "Do you provide services for both homes and businesses?",
        answer: "Yes, we work with residential, commercial, and rental properties of all sizes."
    },
    {
        question: "Can I schedule recurring maintenance?",
        answer: "Definitely. We offer customizable maintenance plans for ongoing property care."
    }
];


export const ourProcessData = {
    heading: 'Our Process',
    description: 'Our window service workflow is designed to deliver spotless results with precision, speed, and care.',
    list: [
        {
            title: "Free Window Consultation",
            description: "We listen to your needs, whether it's cleaning, repair, or new installation.",
            icon: FaComments
        },
        {
            title: "On-Site Window Inspection",
            description: "Our technician evaluates the condition and scope of work needed on-site.",
            icon: FaSearch
        },
        {
            title: "Detailed Quote & Plan",
            description: "You receive a clear, upfront quote with steps, materials, and timeline outlined.",
            icon: FaFileAlt
        },
        {
            title: "Schedule & Prep",
            description: "We pick a time that works best and prepare everything for a smooth service.",
            icon: FaCalendarAlt
        },
        {
            title: "Professional Window Service",
            description: "Our experts carry out the work efficiently — whether cleaning, fixing, or installing.",
            icon: FaHammer
        },
        {
            title: "Final Review & Clean-Up",
            description: "We walk you through the results, ensure satisfaction, and leave the area spotless.",
            icon: FaCheckCircle
        }
    ]
};


export const WhyUSData = [
    {
        title: "Certified Window Specialists",
        description: "Our team is trained in window installation, sealing, tinting, and cleaning for all property types.",
        icon: FaUserTie
    },
    {
        title: "Crystal Clear Results",
        description: "We use professional tools and high-quality materials to ensure streak-free, durable finishes.",
        icon: FaTools
    },
    {
        title: "Clear & Timely Communication",
        description: "From first contact to final walkthrough, we keep everything transparent and on schedule.",
        icon: FaHandshake
    },
    {
        title: "Honest Pricing, No Surprises",
        description: "We quote accurately with no hidden fees — just great value and clean results.",
        icon: FaDollarSign
    },
    {
        title: "Customized Window Solutions",
        description: "We tailor services for residential, commercial, and high-rise properties, big or small.",
        icon: FaSmile
    },
    {
        title: "Fully Licensed & Insured",
        description: "Our crew follows all safety codes and regulations — so you’re always in good hands.",
        icon: FaShieldAlt
    }
];

export const accomplishmentData = [
    { title: "Maintenance Jobs Completed", number: 1200 },
    { title: "Homes & Businesses Served", number: 900 },
    { title: "Skilled Technicians", number: 30 },
    { title: "Happy Clients", number: 1500 }
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
            { label: 'Window Installation', href: '/services/installation', hasChildrens: false },
            { label: 'Glass Replacement', href: '/services/glass-replacement', hasChildrens: false },
            { label: 'Window Sealing', href: '/services/sealing', hasChildrens: false },
            { label: 'Window Tinting', href: '/services/tinting', hasChildrens: false },
            { label: 'Maintenance & Repair', href: '/services/maintenance', hasChildrens: false },
        ],
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        hasChildrens: true,
        children: [
            { label: 'Oceanview Condo Install', href: '/projects/oceanview-condo-install', hasChildrens: false },
            { label: 'Downtown Office Tinting', href: '/projects/downtown-office-tinting', hasChildrens: false },
            { label: 'Glass Panel Replacement', href: '/projects/glass-panel-replacement', hasChildrens: false },
            { label: 'Energy-Efficient Windows', href: '/projects/energy-efficient-windows', hasChildrens: false },
            { label: 'Custom Arch Window Install', href: '/projects/custom-arch-window-install', hasChildrens: false },
        ],
    },
    {
        label: 'About Us',
        href: '/about',
        external: false,
        hasChildrens: false,
    },
    {
        label: 'Blog',
        href: '/blogs',
        external: false,
        hasChildrens: false,
    },
    {
        label: 'Contact',
        href: '/contact',
        external: false,
        hasChildrens: false,
    },
];

/* ------------------------
   NAVITEMS FOOTER 
------------------------ */
export const FooterData = {
    tagline: 'Crystal-clear window solutions for homes and businesses across Florida — installation, repair, tinting, and more.',
};

/* ------------------------
   AREAS OF SERVICES
------------------------ */
export const serviceAreasData = [
    {
        name: "Miami",
        href: "/miami",
        title: "Window Services in Miami, FL",
        description: "Expert window installation, repair, and tinting services in Miami for homes and businesses.",
        content: "Total Care Windows serves Miami with professional window upgrades, energy-efficient solutions, and crystal-clear results.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Orlando",
        href: "/orlando",
        title: "Window Services in Orlando, FL",
        description: "Reliable and affordable window services across Orlando — installation, sealing, and maintenance.",
        content: "From historic homes to modern buildings, our Orlando team delivers clean installs and top-tier repairs.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Tampa",
        href: "/tampa",
        title: "Window Services in Tampa, FL",
        description: "Energy-efficient window replacements and custom solutions for Tampa properties.",
        content: "We help Tampa homeowners and offices save energy and boost curb appeal with expert window work.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Jacksonville",
        href: "/jacksonville",
        title: "Window Services in Jacksonville, FL",
        description: "Full-service window solutions in Jacksonville — from broken panes to full replacements.",
        content: "Jacksonville clients trust Total Care Windows for precise, lasting, and budget-friendly window care.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Fort Lauderdale",
        href: "/fort-lauderdale",
        title: "Window Services in Fort Lauderdale, FL",
        description: "Professional window installation and repair services for homes and condos in Fort Lauderdale.",
        content: "Our Fort Lauderdale team ensures clear, secure, and stylish windows tailored to coastal living.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "St. Petersburg",
        href: "/st-petersburg",
        title: "Window Services in St. Petersburg, FL",
        description: "Complete window care services for St. Petersburg homeowners and commercial properties.",
        content: "We bring expert craftsmanship and dependable service to every window project in St. Pete.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Cape Coral",
        href: "/cape-coral",
        title: "Window Services in Cape Coral, FL",
        description: "Coastal-grade window services for Cape Coral homes — installation, tinting, and sealing.",
        content: "From hurricane-rated windows to glare-reducing tints, we’ve got Cape Coral covered.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Hialeah",
        href: "/hialeah",
        title: "Window Services in Hialeah, FL",
        description: "Affordable and reliable window installation and repair in Hialeah.",
        content: "Our window specialists in Hialeah deliver fast and clean service with long-lasting results.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Gainesville",
        href: "/gainesville",
        title: "Window Services in Gainesville, FL",
        description: "Energy-efficient and stylish window services for Gainesville homes and offices.",
        content: "We help Gainesville residents enjoy better insulation, improved views, and professional-grade windows.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Naples",
        href: "/naples",
        title: "Window Services in Naples, FL",
        description: "Premium window upgrades and glass solutions for Naples properties.",
        content: "Naples homeowners choose us for refined window installs and luxury-grade finishes.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Pensacola",
        href: "/pensacola",
        title: "Window Services in Pensacola, FL",
        description: "Durable and dependable window services for homes and businesses in Pensacola.",
        content: "We offer fast and professional window work tailored to Pensacola’s weather and style.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "West Palm Beach",
        href: "/west-palm-beach",
        title: "Window Services in West Palm Beach, FL",
        description: "Clean, modern window installations and repairs in West Palm Beach.",
        content: "Our team enhances West Palm homes with sleek designs and energy-saving upgrades.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Lakeland",
        href: "/lakeland",
        title: "Window Services in Lakeland, FL",
        description: "Trusted window care and replacements for Lakeland residents.",
        content: "From sealing drafts to upgrading aesthetics, we support Lakeland with expert service.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Ocala",
        href: "/ocala",
        title: "Window Services in Ocala, FL",
        description: "Affordable, high-quality window solutions for Ocala homeowners.",
        content: "We serve Ocala with dependable repairs and installations that stand up to the Florida sun.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Bradenton",
        href: "/bradenton",
        title: "Window Services in Bradenton, FL",
        description: "Full-range window services — from custom sizing to energy-efficient upgrades.",
        content: "Bradenton homes get lasting value and style with our expert window craftsmanship.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Fort Myers",
        href: "/fort-myers",
        title: "Window Services in Fort Myers, FL",
        description: "Complete residential and commercial window care in Fort Myers.",
        content: "From broken glass to full installations, we keep Fort Myers properties safe and bright.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Hollywood",
        href: "/hollywood",
        title: "Window Services in Hollywood, FL",
        description: "Modern window solutions and maintenance in Hollywood, FL.",
        content: "We bring clarity and comfort to Hollywood homes with expertly installed window systems.",
        image: "/images/areaofservices/default.jpg"
    },
    {
        name: "Boca Raton",
        href: "/boca-raton",
        title: "Window Services in Boca Raton, FL",
        description: "High-end window installations and repairs for Boca Raton homes.",
        content: "Our white-glove service in Boca ensures every window is elegant, secure, and efficient.",
        image: "/images/areaofservices/default.jpg"
    }
];


/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
    'emergency-services': {
        label: 'Emergency Services',
        title: '24/7 Emergency Maintenance Services by Total Care Maintenance',
        description: 'Fast, reliable emergency repairs to protect your property and restore safety — any time, day or night.',
        content: `Emergencies don’t follow a schedule — that’s why Total Care Maintenance is available around the clock to respond when you need us most. Whether it's a burst pipe, electrical outage, gas leak, or structural damage, our emergency response team arrives quickly with the tools and experience to minimize damage and restore order. We serve both residential and commercial properties and coordinate with other professionals when needed to ensure everything is safe and functional. Don’t wait — call us any time, 24/7.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Burst Pipe & Water Leak Repairs',
                'Electrical Failures & Hazard Response',
                'Storm & Flood Damage Control',
                'Gas Leak Detection & Shutoff',
                'Emergency HVAC Shutdown or Repairs',
                'Emergency Plumbing Services',
                'Temporary Structural Supports',
                'Board-Ups & Securing Entryways',
                'Immediate Appliance Malfunctions',
                'Fast Cleanup & Damage Mitigation'
            ]
        },
        benefitsOFChoosing: [
            {
                title: '24/7 Availability',
                description: 'We’re on-call day and night, weekends and holidays included.'
            },
            {
                title: 'Rapid Response',
                description: 'We dispatch technicians promptly to minimize further damage.'
            },
            {
                title: 'Full-Service Team',
                description: 'We handle electrical, plumbing, HVAC, and structural emergencies.'
            },
            {
                title: 'Peace of Mind',
                description: 'You can count on us when unexpected issues arise.'
            },
            {
                title: 'Damage Control',
                description: 'Our quick action helps reduce property loss and restoration costs.'
            },
            {
                title: 'Insurance-Friendly Reports',
                description: 'We provide documentation to support insurance claims if needed.'
            }
        ],
        faqs: [
            {
                question: "What qualifies as an emergency service call?",
                answer: "Anything that poses immediate risk to health, safety, or property — like water leaks, outages, or gas smells."
            },
            {
                question: "How quickly can someone arrive?",
                answer: "We aim to be onsite within 1–2 hours of your emergency call depending on location."
            },
            {
                question: "Do you charge extra for emergency visits?",
                answer: "Yes, emergency services include an additional fee, but we always quote upfront."
            },
            {
                question: "Do you work with insurance companies?",
                answer: "Yes, we provide detailed service reports and photos to support your claims."
            },
            {
                question: "Is your emergency crew licensed and insured?",
                answer: "Absolutely — all our technicians are certified and fully insured."
            }
        ],
        images: ['/images/services/emergency.jpg', '/images/services/emergency2.jpg']
    },
    'handyman': {
        label: 'General Handyman',
        title: 'Dependable General Handyman Services by Total Care Maintenance',
        description: 'From small fixes to home improvements, our skilled handymen are ready to help you tackle it all.',
        content: `Not every repair or upgrade needs a specialist — sometimes you just need a reliable handyman to get the job done right. Total Care Maintenance offers comprehensive general handyman services to keep your home or business in top shape. Whether it’s hanging shelves, fixing doors, patching drywall, or installing fixtures, we handle the tasks you don’t have time for. Our team is prompt, experienced, and equipped to take on a wide range of repairs and maintenance tasks with quality workmanship.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Furniture Assembly & Mounting',
                'Door, Window & Lock Repairs',
                'Drywall Repair & Touch-Ups',
                'Caulking & Grouting Services',
                'Shelf & Cabinet Installation',
                'Toilet, Faucet & Fixture Repairs',
                'Tile & Flooring Minor Fixes',
                'TV & Art Mounting',
                'Interior Painting Touch-Ups',
                'General Home Maintenance Tasks'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'All-in-One Service',
                description: 'We cover a wide variety of tasks so you don’t need multiple contractors.'
            },
            {
                title: 'Time-Saving',
                description: 'Free up your schedule by letting us handle your fix-it list quickly.'
            },
            {
                title: 'Professional Results',
                description: 'Every job is completed with attention to detail and long-term durability in mind.'
            },
            {
                title: 'Flexible Scheduling',
                description: 'We work around your schedule for maximum convenience.'
            },
            {
                title: 'Cost-Effective',
                description: 'Pay only for the services you need — no unnecessary upsells.'
            },
            {
                title: 'Trusted Technicians',
                description: 'Our team is background-checked, respectful, and committed to your satisfaction.'
            }
        ],
        faqs: [
            {
                question: "What kinds of jobs do your handymen handle?",
                answer: "From basic repairs and installations to minor home upgrades — we cover it all."
            },
            {
                question: "Is there a minimum service fee?",
                answer: "Yes, we have a minimum fee for small jobs, which we’ll share upfront before booking."
            },
            {
                question: "Can I book multiple tasks in one visit?",
                answer: "Absolutely. We can tackle a full checklist during one service call."
            },
            {
                question: "Do I need to provide tools or materials?",
                answer: "Our team comes fully equipped, though specialty materials may be provided by the client if preferred."
            },
            {
                question: "Are your handyman services insured?",
                answer: "Yes, we are licensed and insured for your peace of mind."
            }
        ],
        images: ['/images/services/handyman.jpg', '/images/services/handyman2.jpg']
    },
    'appliance-repair': {
        label: 'Appliance Repair',
        title: 'Fast & Reliable Appliance Repair by Total Care Maintenance',
        description: 'Keep your appliances running smoothly with expert repairs for washers, dryers, ovens, refrigerators, and more.',
        content: `When appliances break down, it can disrupt your entire routine. That’s where we come in. Total Care Maintenance provides prompt, affordable, and dependable appliance repair services for residential and light commercial clients. From minor fixes to complex diagnostics, our technicians are trained to work on all major brands and models. Whether it's your fridge not cooling, your dryer not heating, or your dishwasher leaking — we’ll get it working again quickly and correctly.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Refrigerator & Freezer Repair',
                'Washer & Dryer Repair',
                'Dishwasher Diagnostics & Fixes',
                'Oven, Stove & Range Repair',
                'Microwave Repair',
                'Garbage Disposal Troubleshooting',
                'Ice Maker & Water Dispenser Repair',
                'Smart Appliance Configuration',
                'Seal & Gasket Replacement',
                'Preventive Maintenance & Tune-Ups'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Quick Turnaround',
                description: 'We respond fast and complete most repairs on the first visit.'
            },
            {
                title: 'Certified Technicians',
                description: 'Our team is trained to handle appliances from all major manufacturers.'
            },
            {
                title: 'Transparent Pricing',
                description: 'No hidden fees — just clear, upfront quotes before any work starts.'
            },
            {
                title: 'Genuine Replacement Parts',
                description: 'We use OEM or high-quality parts to ensure long-term performance.'
            },
            {
                title: 'Emergency Support',
                description: 'We’re available for urgent appliance breakdowns — even after hours.'
            },
            {
                title: 'Service Warranty',
                description: 'We stand behind our repairs with satisfaction guarantees.'
            }
        ],
        faqs: [
            {
                question: "Which appliances do you repair?",
                answer: "We service refrigerators, washers, dryers, ovens, dishwashers, microwaves, and more."
            },
            {
                question: "How do I know if it’s worth repairing?",
                answer: "We’ll give honest advice based on cost-effectiveness and appliance age."
            },
            {
                question: "Do you carry parts with you?",
                answer: "Yes, we bring common parts with us and can order any special components quickly."
            },
            {
                question: "Are your repairs under warranty?",
                answer: "Yes, we offer warranties on labor and parts for peace of mind."
            },
            {
                question: "Can you fix smart home appliances?",
                answer: "Absolutely — we’re equipped to repair and configure smart-enabled devices."
            }
        ],
        images: ['/images/services/appliances.jpg', '/images/services/appliances2.jpg']
    },
    'painting-drywall': {
        label: 'Painting & Drywall',
        title: 'Flawless Painting & Drywall Services by Total Care Maintenance',
        description: 'Give your space a fresh, professional look with expert drywall repairs and precision painting — inside and out.',
        content: `Whether you're renovating, fixing damage, or just refreshing your space, Total Care Maintenance delivers smooth drywall finishes and crisp paintwork every time. We handle everything from patching holes to complete wall replacements and high-quality painting services. Our team uses durable paints and materials to ensure long-lasting results with minimal mess or disruption. From homes to offices and commercial buildings, we help bring your vision to life — cleanly and professionally.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Interior & Exterior Painting',
                'Drywall Repair & Installation',
                'Ceiling Crack & Hole Patching',
                'Texture Matching & Smoothing',
                'Water Damage Restoration',
                'Trim & Molding Painting',
                'Stain & Odor Blocker Application',
                'Color Consultation Services',
                'Repainting for Rentals or Sales',
                'Commercial Repaints & Upgrades'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Seamless Repairs',
                description: 'We restore walls and ceilings to a flawless, like-new condition.'
            },
            {
                title: 'High-Quality Materials',
                description: 'We use trusted paint brands and durable drywall compounds.'
            },
            {
                title: 'Professional Finish',
                description: 'Expect sharp edges, smooth coats, and consistent color coverage.'
            },
            {
                title: 'Color Expertise',
                description: 'We help you choose shades that enhance your space and lighting.'
            },
            {
                title: 'Minimal Disruption',
                description: 'Our team works efficiently and cleanly to minimize downtime.'
            },
            {
                title: 'Value Boost',
                description: 'Fresh walls and paint elevate your property’s appeal and resale value.'
            }
        ],
        faqs: [
            {
                question: "Do you handle both small patchwork and full repainting?",
                answer: "Yes — from small repairs to full interior or exterior jobs, we’ve got you covered."
            },
            {
                question: "How long does a typical painting job take?",
                answer: "Most jobs are completed in 1–3 days depending on the size and prep work needed."
            },
            {
                question: "Do you offer color consultations?",
                answer: "Absolutely! We can help you choose paint colors that complement your space."
            },
            {
                question: "Is drywall repair messy?",
                answer: "We take care to keep your space clean and tidy, using drop cloths and careful sanding."
            },
            {
                question: "Can you match existing wall textures or colors?",
                answer: "Yes, we specialize in texture and color matching for seamless results."
            }
        ],
        images: ['/images/services/painting.jpg', '/images/services/painting2.jpg']
    },

    'hvac-maintenance': {
        label: 'HVAC Maintenance',
        title: 'Year-Round HVAC Maintenance by Total Care Maintenance',
        description: 'Keep your home or business comfortable and energy-efficient with expert HVAC inspections, tune-ups, and repairs.',
        content: `Your heating and cooling system works hard all year long — let us help it run at peak performance. At Total Care Maintenance, we offer complete HVAC maintenance services to prevent breakdowns, reduce energy bills, and extend the life of your system. From seasonal tune-ups to filter replacements and ductwork inspections, we make sure your AC and heating units stay efficient and reliable. Whether it’s a small residential system or a large commercial setup, our technicians bring expert care to every visit.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'AC & Furnace Tune-Ups',
                'Air Filter Replacement',
                'Thermostat Calibration',
                'Ductwork Inspection & Cleaning',
                'Coolant Level Checks',
                'Blower & Motor Testing',
                'System Performance Evaluation',
                'Energy Efficiency Recommendations',
                'Emergency HVAC Repairs',
                'Seasonal Maintenance Plans'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Improved Efficiency',
                description: 'Regular maintenance keeps your HVAC system running smoothly and reduces energy waste.'
            },
            {
                title: 'Lower Utility Bills',
                description: 'Well-maintained systems use less energy and cost less to operate.'
            },
            {
                title: 'Longer System Life',
                description: 'Preventative care helps avoid major breakdowns and costly replacements.'
            },
            {
                title: 'Better Air Quality',
                description: 'Clean filters and ductwork contribute to healthier indoor air for your family or staff.'
            },
            {
                title: 'Fewer Repairs',
                description: 'Catch small issues before they turn into expensive problems.'
            },
            {
                title: 'Seasonal Readiness',
                description: 'We make sure your system is ready to handle summer heat and winter cold efficiently.'
            }
        ],
        faqs: [
            {
                question: "How often should HVAC maintenance be done?",
                answer: "We recommend servicing your system twice a year — once before summer and once before winter."
            },
            {
                question: "Is HVAC maintenance really necessary?",
                answer: "Yes, it improves performance, reduces breakdowns, and extends your system’s life."
            },
            {
                question: "Do you work on both heating and cooling systems?",
                answer: "Absolutely — we maintain furnaces, AC units, heat pumps, and more."
            },
            {
                question: "Can I sign up for a maintenance plan?",
                answer: "Yes, we offer seasonal and annual maintenance plans tailored to your needs."
            },
            {
                question: "What’s included in a tune-up?",
                answer: "Our tune-ups cover inspection, cleaning, lubrication, filter change, and performance testing."
            }
        ],
        images: ['/images/services/hvac.jpg', '/images/services/hvac2.jpg']
    },

    'electrical-services': {
        label: 'Electrical Services',
        title: 'Safe & Professional Electrical Services by Total Care Maintenance',
        description: 'From minor fixes to major rewiring, our licensed electricians keep your home and business safe, efficient, and up to code.',
        content: `Electrical problems can be frustrating — and dangerous if ignored. At Total Care Maintenance, we provide reliable electrical services to handle everything from simple repairs to full installations. Our licensed electricians follow strict safety standards while delivering neat, efficient work. Whether you’re experiencing power outages, flickering lights, or planning a new lighting setup, we ensure every wire and outlet functions flawlessly. We also offer energy-saving upgrades, panel replacements, and inspections to keep your property running safely and efficiently.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Outlet & Switch Repairs',
                'Light Fixture Installation',
                'Circuit Breaker Replacement',
                'Electrical Panel Upgrades',
                'Ceiling Fan Wiring',
                'New Electrical Installations',
                'Troubleshooting Power Issues',
                'Generator Hookups',
                'Surge Protection Systems',
                'Code Compliance Upgrades'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Licensed Electricians',
                description: 'Our team is trained, certified, and experienced in handling all types of electrical work.'
            },
            {
                title: 'Safety First',
                description: 'We follow strict safety protocols to protect your property and your loved ones.'
            },
            {
                title: 'Up-to-Code Work',
                description: 'All installations and repairs are performed to meet or exceed current code standards.'
            },
            {
                title: 'Fast Diagnostics',
                description: 'We quickly identify electrical issues and fix them with minimal disruption.'
            },
            {
                title: 'Clean, Organized Installs',
                description: 'We deliver clean workmanship and clearly labeled panels, switches, and circuits.'
            },
            {
                title: 'Energy Efficiency Options',
                description: 'We help you save energy with LED upgrades, smart controls, and better wiring design.'
            }
        ],
        faqs: [
            {
                question: "Do you handle residential and commercial electrical work?",
                answer: "Yes, we’re equipped for both residential and commercial properties of all sizes."
            },
            {
                question: "Can you install new outlets or circuits?",
                answer: "Absolutely — we install outlets, lighting, and dedicated circuits safely and professionally."
            },
            {
                question: "Is it time to upgrade my electrical panel?",
                answer: "If your panel is outdated, overloaded, or showing signs of wear, we recommend an upgrade for safety and reliability."
            },
            {
                question: "Are your electricians licensed and insured?",
                answer: "Yes, all our electricians are fully licensed, insured, and trained to industry standards."
            },
            {
                question: "Do you provide emergency electrical services?",
                answer: "Yes, we offer emergency response for urgent electrical issues that need immediate attention."
            }
        ],
        images: ['/images/services/electrical.jpg', '/images/services/electrical2.jpg']
    },

    'plumbing-repair': {
        label: 'Plumbing Repair',
        title: 'Reliable & Fast Plumbing Repair by Total Care Maintenance',
        description: 'Restore your home’s water flow and fix leaks with expert plumbing repair services — available when you need them most.',
        content: `From dripping faucets to burst pipes, Total Care Maintenance provides professional plumbing repair services to get your system back in top shape. Our trained technicians diagnose issues quickly and use the latest tools and methods to fix leaks, clogs, and faulty fixtures. Whether it’s a small repair or an emergency response, we deliver efficient, lasting solutions. We also inspect for underlying issues that could lead to future damage, helping you avoid costly surprises. Our team respects your time, your home, and your budget — ensuring clean work, clear communication, and dependable results.`,
        image: '/images/services/default.jpg',
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Leak Detection & Repair',
                'Clogged Drain Clearing',
                'Toilet & Faucet Repairs',
                'Pipe Replacement & Rerouting',
                'Water Pressure Fixes',
                'Shower & Bathtub Repairs',
                'Garbage Disposal Repairs',
                'Water Line Leak Repair',
                'Emergency Plumbing Services',
                'Preventive Maintenance Checks'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Fast Response Times',
                description: 'We’re ready to tackle urgent issues and restore your plumbing fast.'
            },
            {
                title: 'Experienced Technicians',
                description: 'Our team has handled everything from minor drips to major water line repairs.'
            },
            {
                title: 'Clean & Courteous Service',
                description: 'We leave your space cleaner than we found it — always respectful and tidy.'
            },
            {
                title: 'Transparent Pricing',
                description: 'No surprise fees — just clear estimates and honest service.'
            },
            {
                title: 'Long-Lasting Fixes',
                description: 'We address root causes, not just symptoms, to ensure reliable performance.'
            },
            {
                title: 'Available for Emergencies',
                description: 'Plumbing issue can’t wait? We offer urgent repair services when you need them most.'
            }
        ],
        faqs: [
            {
                question: "Do you offer emergency plumbing repair?",
                answer: "Yes, we provide emergency services for urgent plumbing issues including leaks and clogs."
            },
            {
                question: "What causes low water pressure?",
                answer: "It could be due to pipe blockages, valve issues, or leaks. We’ll inspect and fix the source."
            },
            {
                question: "Can you repair old plumbing systems?",
                answer: "Absolutely — we work with both modern and older systems, offering repairs or replacements as needed."
            },
            {
                question: "Is it better to repair or replace a leaking pipe?",
                answer: "It depends on the damage. We’ll assess and recommend the most cost-effective, long-term solution."
            },
            {
                question: "Do you guarantee your plumbing repairs?",
                answer: "Yes, all our repairs come with a satisfaction guarantee for peace of mind."
            }
        ],
        images: ['/images/services/plumbing.jpg', '/images/services/plumbing2.jpg']
    },



};


/* ------------------------
   PROJECTS START 
------------------------ */

export const projectsData = {
    "emergency-repair": {
        label: "Emergency Repair",
        title: "24/7 Emergency Repair for Residential Water Damage",
        description: "Rapid response and expert repair after a pipe burst caused major interior damage in a residential home.",
        image: "/images/projects/default.jpg",
        location: "Private Residence, Sanford, FL",
        duration: "Completed in 48 hours",
        materials: [
            "Moisture-resistant drywall",
            "Dehumidifiers and air movers",
            "Leak-seal plumbing components",
            "Anti-microbial treatments",
            "Paint and surface primers",
            "Insulation batts",
            "Moisture meters",
            "Protective sheeting",
            "Water extraction vacuums",
            "Emergency lighting setup"
        ],
        content: `
    A sudden pipe burst caused significant flooding in the lower level of this residence. Within hours, our emergency response team was on-site to assess and stabilize the situation.
    
    We began with full water extraction and dehumidification to prevent mold growth. Damaged drywall and insulation were removed and replaced using moisture-resistant materials. Plumbing repairs were completed quickly to stop the leak, and surfaces were treated to eliminate microbial growth.
    
    The project was completed within 48 hours, restoring functionality and safety for the homeowner. Our client praised the rapid response, transparent communication, and thorough work during a high-stress event.
    
    This project showcases our commitment to fast, effective emergency services when they matter most.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "commercial-maintenance": {
        label: "Commercial Maintenance",
        title: "Full-Service Commercial Property Maintenance",
        description: "A comprehensive maintenance solution tailored for a commercial facility to ensure safety, aesthetics, and functionality year-round.",
        image: "/images/projects/default.jpg",
        location: "Retail Plaza, Kissimmee, FL",
        duration: "Ongoing weekly service",
        materials: [
            "Commercial-grade HVAC filters",
            "High-efficiency lighting components",
            "Industrial cleaning supplies",
            "Touch-up paint and patching materials",
            "Basic plumbing fixtures & tools",
            "Electrical panel servicing tools",
            "Pressure washing equipment",
            "Caulking and sealants",
            "Safety signage and PPE",
            "Maintenance scheduling software"
        ],
        content: `
    This ongoing commercial maintenance project involves routine and preventive services for a multi-unit retail center. Our client needed a reliable partner to handle interior and exterior upkeep without disrupting daily business.
    
    We developed a custom plan that includes weekly inspections, HVAC filter changes, plumbing and lighting repairs, and seasonal touch-ups. Exterior services like pressure washing, graffiti removal, and sidewalk maintenance keep the storefronts looking professional.
    
    Our on-call emergency service ensures that urgent issues are handled promptly. The maintenance program has extended the lifespan of building systems and improved tenant satisfaction.
    
    The client benefits from streamlined operations, improved safety compliance, and a consistent, polished appearance for all retail units.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "interior-painting": {
        label: "Interior Painting",
        title: "Fresh, Modern Interior Painting for Residential Remodel",
        description: "Complete interior repaint with high-durability, low-VOC paints to refresh living spaces and enhance home aesthetics.",
        image: "/images/projects/default.jpg",
        location: "Single-Family Home, Tampa, FL",
        duration: "Completed in 4 days",
        materials: [
            "Low-VOC acrylic latex paint",
            "Primer-sealer for wall prep",
            "Painter’s tape and drop cloths",
            "Sandpaper and patching compound",
            "High-quality brushes and rollers",
            "Matte, eggshell, and satin finishes",
            "Caulking for trim and corners",
            "Ceiling paint (flat white)",
            "Trim and door enamel",
            "Color consultation swatches"
        ],
        content: `
    The homeowners wanted a brighter, more modern look throughout their residence. We started with a full color consultation to match tones with furniture and flooring.
    
    Surface prep included patching imperfections, sanding, and applying a primer-sealer for better adhesion. Walls were painted with durable, low-VOC paint in eggshell finish for easy cleaning.
    
    Ceilings received a fresh coat of flat white, while trim and doors were finished in a satin enamel for contrast. Accent walls added depth in the living and bedroom areas.
    
    The project transformed the space, making it feel larger, fresher, and more cohesive while improving indoor air quality with eco-friendly products.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "plumbing-overhaul": {
        label: "Plumbing Overhaul",
        title: "Whole-Home Plumbing Overhaul with Modern Fixtures",
        description: "Replaced outdated galvanized plumbing with modern PEX systems, improving water pressure, efficiency, and long-term reliability.",
        image: "/images/projects/default.jpg",
        location: "Two-Story Home, Kissimmee, FL",
        duration: "Completed in 7 days",
        materials: [
            "PEX-A piping and fittings",
            "Brass shut-off valves",
            "PVC for drain and waste lines",
            "Pressure-regulating valve",
            "Water hammer arrestors",
            "High-efficiency fixtures",
            "New kitchen and bathroom faucets",
            "Ball valves for main shut-off",
            "Insulated pipe sleeves",
            "Access panels for future maintenance"
        ],
        content: `
    This two-story home suffered from persistent low water pressure, leaks, and rusty water due to aging galvanized pipes. We performed a full plumbing overhaul using modern PEX piping.
    
    The job involved removing old supply lines, upgrading drain systems to PVC, and installing a new main shut-off valve with improved pressure control. New shut-off valves were placed at each fixture point for easy future servicing.
    
    We also installed high-efficiency fixtures and insulated all accessible lines to enhance energy efficiency. Strategic access panels were added for future maintenance ease.
    
    The result was a leak-free, code-compliant plumbing system delivering clean water and strong pressure to every tap.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "electrical-upgrade": {
        label: "Electrical Upgrade",
        title: "Full Electrical System Upgrade for Safety & Efficiency",
        description: "Rewired and upgraded the electrical system to meet modern safety standards, increase load capacity, and support smart home features.",
        image: "/images/projects/default.jpg",
        location: "60s-Era Home, Winter Park, FL",
        duration: "Completed in 6 days",
        materials: [
            "New electrical panel (200 AMP)",
            "Romex and THHN copper wiring",
            "GFCI and AFCI outlets",
            "Grounding rods and bonding wire",
            "Circuit breakers & surge protection",
            "Smart switches and dimmers",
            "Smoke and carbon monoxide detectors",
            "Recessed lighting fixtures",
            "Conduit and junction boxes",
            "Code-compliant labeling and testing"
        ],
        content: `
    This home underwent a comprehensive electrical upgrade to address outdated wiring and prepare the property for increased power usage, including EV charging and smart appliances.
    
    We replaced the old fuse-based panel with a modern 200 AMP breaker system. All circuits were re-evaluated and rewired with proper load balancing, and new GFCI and AFCI outlets were installed for safety.
    
    The upgrade included smart lighting controls, enhanced surge protection, and improved grounding to meet current code. Lighting throughout the home was replaced with energy-efficient recessed LEDs.
    
    This project not only enhanced the home’s safety but also boosted its readiness for future technologies.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "ac-installation": {
        label: "AC Installation",
        title: "Efficient Central AC Installation for Year-Round Comfort",
        description: "Installed a modern, energy-efficient air conditioning system to ensure reliable cooling and improved indoor air quality.",
        image: "/images/projects/default.jpg",
        location: "Single-Family Home, Kissimmee, FL",
        duration: "Completed in 3 days",
        materials: [
            "14 SEER central AC unit",
            "Smart thermostat system",
            "Insulated ductwork",
            "UV air purifier",
            "Condensation drain piping",
            "Outdoor condenser pad",
            "High-efficiency air filters",
            "Copper refrigerant lines",
            "Circuit breaker panel upgrades",
            "Mounting brackets & vibration pads"
        ],
        content: `
    This project involved the full installation of a new central air conditioning system for a residential client looking to improve their home’s comfort and energy efficiency.
    
    We removed the outdated unit and evaluated the home’s layout for proper duct and unit placement. A new 14 SEER-rated unit was selected for energy savings, and smart thermostat integration gave the client better control of indoor temperatures.
    
    To enhance air quality, we installed a UV air purifier and upgraded filtration. All ductwork was sealed and insulated to prevent leaks and improve performance. The system was fully tested and fine-tuned for optimal airflow and cooling.
    
    Now, the homeowner enjoys quiet, consistent cooling and cleaner air — ready for the Florida heat.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "bathroom-repair": {
        label: "Bathroom Repair",
        title: "Complete Bathroom Repair for Functionality & Comfort",
        description: "A full bathroom refresh tackling leaks, worn-out surfaces, and outdated fixtures to restore a clean, modern feel.",
        image: "/images/projects/default.jpg",
        location: "Apartment Unit, Orlando, FL",
        duration: "Completed in 10 days",
        materials: [
            "Moisture-resistant drywall",
            "Ceramic tile flooring",
            "New vanity and sink combo",
            "Low-flow toilet",
            "Modern chrome fixtures",
            "Waterproof grout & sealant",
            "LED mirror lighting",
            "Exhaust fan upgrade",
            "P-trap & plumbing replacements",
            "Shower valve & head set"
        ],
        content: `
    This bathroom repair project focused on resolving persistent plumbing issues and giving the space a modern update. The client needed quick, high-quality repairs without a full remodel.
    
    We began by replacing damaged drywall and removing outdated tile. The plumbing system was upgraded to fix leaks and improve water flow. A new low-flow toilet, vanity, and fixtures were installed to boost efficiency and style.
    
    Moisture-resistant materials were used throughout to prevent future issues, including ceramic flooring and waterproof grout. We added a backlit LED mirror and exhaust fan for improved lighting and ventilation.
    
    The project wrapped up with a clean, updated look and zero lingering issues — restoring both comfort and functionality for daily use.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },
    "kitchen-renovation": {
        label: "Kitchen Renovation",
        title: "Contemporary Kitchen Renovation for Function & Style",
        description: "A complete kitchen transformation featuring modern design, optimized layout, and high-end finishes for a stylish cooking space.",
        image: "/images/projects/default.jpg",
        location: "Residential Home, Orlando, FL",
        duration: "Completed in 3 weeks",
        materials: [
            "Quartz countertops",
            "Custom soft-close cabinetry",
            "Subway tile backsplash",
            "Energy-efficient appliances",
            "Matte black fixtures",
            "LED recessed lighting",
            "Luxury vinyl plank flooring",
            "Fresh drywall & paint",
            "Updated plumbing lines",
            "New electrical circuits & outlets"
        ],
        content: `
    This kitchen renovation focused on blending aesthetics with practicality, delivering a fresh space for daily cooking and entertaining. The original layout was cramped and outdated, so we reconfigured the space to improve workflow and openness.
    
    Our team started with full demolition, rerouting plumbing and electrical to fit the new design. Custom cabinetry was installed to maximize storage, paired with elegant quartz countertops and a crisp white subway tile backsplash for contrast. Matte black fixtures added a modern edge.
    
    To enhance durability, we installed waterproof luxury vinyl plank flooring and sealed all surfaces for easy cleaning. LED recessed lighting brightened up the workspace while maintaining energy efficiency.
    
    The result is a sleek, functional kitchen that aligns with today’s lifestyle needs and adds long-term value to the home.
      `,
        images: [
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg",
            "/projects/default.jpg"
        ]
    },


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
        role: "Homeowner | Window Replacement",
        feedback: "Total Care Windows replaced all the old drafty windows in our home with energy-efficient ones. The difference in comfort and savings is incredible!",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Rachel Green",
        role: "Property Manager",
        feedback: "They handled window upgrades across multiple rental units. Professional, reliable, and always on schedule. Tenants are thrilled with the results.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Carlos Rivera",
        role: "Business Owner | Office Building",
        feedback: "Our office windows were outdated and inefficient. Their team installed new glass panels quickly with minimal disruption. The building looks brand new.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Lisa Turner",
        role: "Interior Designer",
        feedback: "We’ve collaborated on several renovation projects where they provided sleek, modern window solutions. Their precision and quality always impress my clients.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Mark Johnson",
        role: "Hotel Manager",
        feedback: "They replaced and sealed dozens of windows in our hotel. Guests immediately noticed the quieter, more comfortable rooms.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Emily Chen",
        role: "Homeowner | Bay Window",
        feedback: "We had them install a custom bay window in our living room. It completely transformed the space — beautiful craftsmanship!",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "David Kim",
        role: "Real Estate Developer",
        feedback: "They’ve handled window installations across several of our properties. Always on time, to spec, and with excellent finishing work.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Sophia Allen",
        role: "Restaurant Owner",
        feedback: "Our restaurant needed new storefront windows. The installation was quick, clean, and has boosted our curb appeal tremendously.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Nathan Scott",
        role: "Construction Project Manager",
        feedback: "They managed large-scale window installs for a new commercial build. Smooth coordination, great communication, and top-quality results.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Olivia Perez",
        role: "Retail Store Owner",
        feedback: "We needed cracked glass replaced fast. Their team was responsive, efficient, and had our storefront looking perfect the same day.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Jason Brooks",
        role: "Warehouse Operator",
        feedback: "They upgraded our warehouse windows with durable, insulated glass. Huge improvement in lighting and energy efficiency.",
        image: "/images/testimonials/default.jpg"
    },
    {
        name: "Mia Thompson",
        role: "Home Renovator | Sunroom",
        feedback: "They installed floor-to-ceiling windows in our new sunroom. The workmanship and attention to detail are outstanding.",
        image: "/images/testimonials/default.jpg"
    }
];
