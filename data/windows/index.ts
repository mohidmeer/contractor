import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */
export const static_assets = '/windows'
export const siteUrl = 'https://totalcareserviceswindows.com/';
export const siteName = 'Total Care Windows';
export const siteLogo = `${static_assets}/images/logo.png`;
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
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl,
    },
    hero: {
        title: 'Crystal Clear Window Solutions',
        description: 'From repairs to installations, we provide reliable, energy-efficient window services with professional care.',
        backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
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
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'services',
    },
}
export const projectsPage = {
    seo: {
        title: 'Completed Window Projects',
        description: 'See our latest window work — expertly installed, energy-efficient, and aesthetically pleasing.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'projects',
    },
}
export const aboutPage = {
    seo: {
        title: 'About Total Care Windows',
        description: 'Get to know our expert team specializing in high-quality window services for all property types.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'about',
    },
    content: 'Total Care Windows is dedicated to delivering precise, clean, and high-performing window services. Whether you’re upgrading your view or improving insulation, we’re here to help with top-tier materials and workmanship.',
}
export const contactPage = {
    seo: {
        title: 'Contact Total Care Windows',
        description: 'Reach out for professional window repairs, installations, and consultations tailored to your needs.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
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
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'blogs',
    },
}
export const serviceAreaPage = {
    seo: {
        title: 'Window Services Near You',
        description: 'Providing expert window solutions to neighborhoods and businesses in your area.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
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
    image1_url: `${static_assets}/images/services/strom_windows.jpg`,
    image2_url: `${static_assets}/images/services/window_screen.jpg`,
    image3_url: `${static_assets}/images/services/window_cleaning_commercial.jpg`,
    image4_url: `${static_assets}/images/services/window_tint.jpg`,
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
            { label: 'Window Installation', href: '/services/window-installation', hasChildrens: false },
            { label: 'Glass Replacement', href: '/services/glass-replacement', hasChildrens: false },
            { label: 'Window Sealing & Caulking', href: '/services/window-sealing', hasChildrens: false },
            { label: 'Window Tinting & Films', href: '/services/window-tinting', hasChildrens: false },
            { label: 'Maintenance & Repair', href: '/services/maintenance-repair', hasChildrens: false },
            { label: 'Residential Window Cleaning', href: '/services/residential-cleaning', hasChildrens: false },
            { label: 'Commercial Window Cleaning', href: '/services/commercial-cleaning', hasChildrens: false },
            { label: 'Screen Repair & Replacement', href: '/services/screen-repair', hasChildrens: false },
            { label: 'Storm Window Installation', href: '/services/storm-windows', hasChildrens: false },
            { label: 'Skylight Cleaning & Care', href: '/services/skylight-cleaning', hasChildrens: false },
            { label: 'Solar Panel Cleaning', href: '/services/solar-cleaning', hasChildrens: false },
        ],
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        hasChildrens: true,
        children: [
            { label: 'Window Tinting & Films', href: '/projects/window-tinting', hasChildrens: false },
            { label: 'Window Sealing & Caulking', href: '/projects/window-sealing', hasChildrens: false },
            { label: 'Glass Replacement', href: '/projects/glass-replacement', hasChildrens: false },
            { label: 'Window Installation', href: '/projects/window-installation', hasChildrens: false },
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
'window-installation': {
    label: 'Window Installation',
    title: 'Professional Window Installation Services',
    description: 'Expert residential and commercial window installation for improved comfort, energy efficiency, and curb appeal.',
    content: `Upgrade your home or business with precision window installation services. Our skilled team installs a wide range of window styles — from classic single-hung and double-hung to sliding, casement, bay, and specialty windows. Proper installation not only enhances appearance but also improves energy efficiency, insulation, and overall comfort. We work with high-quality materials and proven techniques to ensure durability and long-lasting performance.`,
    image: `${static_assets}/images/services/window_installation.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Residential Window Installation',
            'Commercial Window Installation',
            'Energy-Efficient Window Upgrades',
            'Custom Window Fitting & Design',
            'Bay, Bow & Picture Window Installations',
            'Sliding & Casement Windows',
            'Double-Glazed & Triple-Glazed Options',
            'Soundproof & Insulated Glass Options'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Energy Savings', description: 'Reduce heating and cooling costs with modern, efficient windows.' },
        { title: 'Enhanced Aesthetics', description: 'Boost curb appeal with stylish, custom-fitted windows.' },
        { title: 'Durability', description: 'We use high-quality materials for long-lasting performance.' },
        { title: 'Professional Installation', description: 'Our experts ensure perfect fit and finish every time.' },
        { title: 'Value Increase', description: 'Improve property value with upgraded windows.' }
    ],
    faqs: [
        { question: 'How long does window installation take?', answer: 'Most standard installations take 1–2 days depending on window type and project size.' },
        { question: 'Do you install custom-sized windows?', answer: 'Yes, we provide custom measurements and fittings to ensure a perfect match.' },
        { question: 'Can you replace windows during winter?', answer: 'Absolutely — we use efficient processes to minimize exposure and heat loss.' },
        { question: 'Do you handle disposal of old windows?', answer: 'Yes, we remove and dispose of old materials as part of our service.' }
    ],
},
'glass-replacement': {
    label: 'Glass Replacement',
    title: 'Expert Glass Replacement Services',
    description: 'Restore clarity and safety with professional glass replacement for cracked, broken, or foggy windows.',
    content: `Damaged or outdated glass doesn’t just affect your view — it impacts insulation, safety, and curb appeal. Our professional glass replacement service restores your windows with high-quality panes designed for durability and energy efficiency. From small cracks to full replacements, we work quickly and carefully to make your windows look brand-new.`,
    image: `${static_assets}/images/services/glass_replacement.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Cracked or Broken Glass Replacement',
            'Double-Pane & Triple-Pane Replacement',
            'Foggy Glass Repair & Replacement',
            'Tempered & Safety Glass Installation',
            'Custom-Cut Glass Panels',
            'Energy-Efficient Glass Upgrades',
            'UV-Protective Glass Options'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Clear Visibility', description: 'Enjoy spotless, crystal-clear glass in every window.' },
        { title: 'Energy Efficiency', description: 'Upgrade to insulated glass for better thermal control.' },
        { title: 'Safety & Security', description: 'Replace broken panes with durable, shatter-resistant options.' },
        { title: 'Quick Turnaround', description: 'Fast service to restore your property’s safety and appearance.' },
        { title: 'Custom Fit', description: 'Glass is measured and cut to fit perfectly in your frames.' }
    ],
    faqs: [
        { question: 'Can you replace just the glass without the entire window?', answer: 'Yes, if the frame is intact, we can replace just the glass panel.' },
        { question: 'What causes foggy windows?', answer: 'Moisture trapped between panes due to seal failure — which we can replace with new insulated glass.' },
        { question: 'Do you offer same-day service for broken glass?', answer: 'In many cases, yes. Emergency glass replacement is available.' },
        { question: 'Can you upgrade my current glass to energy-efficient options?', answer: 'Absolutely — we provide low-E and insulated glass replacements.' }
    ],
    
},
'window-sealing': {
    label: 'Window Sealing & Caulking',
    title: 'Window Sealing and Caulking Services',
    description: 'Prevent drafts, leaks, and energy loss with professional window sealing and caulking solutions.',
    content: `Proper sealing and caulking are essential for keeping your home or business energy-efficient and comfortable. Over time, old seals crack, shrink, or wear away, causing drafts, water leaks, and higher utility bills. Our experts provide professional sealing services to restore tight, weather-resistant barriers around your windows for long-term performance and savings.`,
    image: `${static_assets}/images/services/sealing.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Exterior Window Caulking',
            'Interior Sealing & Draft Prevention',
            'Weather-Stripping Replacement',
            'Leak Detection & Repair',
            'Thermal Insulation Sealing',
            'Stormproof & Waterproof Caulking'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Lower Energy Bills', description: 'Reduce heating and cooling costs with effective sealing.' },
        { title: 'Improved Comfort', description: 'Stop drafts and maintain consistent indoor temperatures.' },
        { title: 'Water Protection', description: 'Prevent leaks and potential water damage around frames.' },
        { title: 'Long-Term Durability', description: 'Extend window lifespan with proper sealing maintenance.' },
        { title: 'Professional Finish', description: 'Clean, seamless application improves window appearance.' }
    ],
    faqs: [
        { question: 'How often should windows be resealed?', answer: 'Typically every 5–10 years, depending on climate and material wear.' },
        { question: 'Can sealing fix condensation issues?', answer: 'It can reduce drafts, but failed glass seals may require glass replacement.' },
        { question: 'Do you use weather-resistant caulking?', answer: 'Yes, we only use premium, long-lasting sealing products.' },
        { question: 'Will sealing make my windows more soundproof?', answer: 'Yes, better seals can reduce outside noise levels significantly.' }
    ],
    
},
'window-tinting': {
    label: 'Window Tinting & Films',
    title: 'Professional Window Tinting and Film Installation',
    description: 'Enhance privacy, reduce glare, and improve energy efficiency with expert window tinting solutions.',
    content: `Our window tinting services provide both style and function for residential and commercial properties. High-quality window films reduce heat, block harmful UV rays, and protect interiors from fading — all while adding a sleek, modern look. Choose from decorative, reflective, or privacy films to match your needs and preferences.`,
    image: `${static_assets}/images/services/window_tint.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Residential Window Tinting',
            'Commercial Window Films',
            'UV & Heat Reduction Films',
            'Privacy & Frosted Glass Films',
            'Decorative & Custom Films',
            'Security & Shatter-Resistant Films',
            'Glare Reduction for Offices & Homes'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Energy Savings', description: 'Lower cooling costs by reducing heat transfer.' },
        { title: 'UV Protection', description: 'Block up to 99% of harmful UV rays.' },
        { title: 'Enhanced Privacy', description: 'Enjoy more privacy without sacrificing natural light.' },
        { title: 'Improved Comfort', description: 'Reduce glare and maintain balanced indoor temperatures.' },
        { title: 'Stylish Appearance', description: 'Add a modern touch with decorative film options.' }
    ],
    faqs: [
        { question: 'How long does window tinting last?', answer: 'With professional installation, films can last 10–15 years depending on conditions.' },
        { question: 'Will tinting make my home too dark?', answer: 'No, we offer a range of shades that balance natural light and privacy.' },
        { question: 'Can tint be applied to existing windows?', answer: 'Yes, films can be installed on most glass types.' },
        { question: 'Does tinting help with fading furniture?', answer: 'Absolutely — by blocking UV rays, it protects floors, fabrics, and artwork.' }
    ],

},
'maintenance-repair': {
    label: 'Maintenance & Repair',
    title: 'Comprehensive Window Maintenance and Repair',
    description: 'Keep your windows in top condition with expert maintenance and fast, reliable repairs.',
    content: `Windows play a vital role in energy efficiency, comfort, and security. Over time, they can develop issues like sticking, leaks, drafts, or broken components. Our professional maintenance and repair services keep your windows functioning properly, extend their lifespan, and prevent costly replacements. From minor fixes to full refurbishments, we’ve got you covered.`,
    image: `${static_assets}/images/services/window_repair.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Window Hinge & Lock Repairs',
            'Track & Roller Maintenance',
            'Broken Seal Repairs',
            'Weather-Stripping Replacement',
            'Draft & Leak Fixes',
            'Glass Resealing & Adjustments',
            'Hardware Replacement'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Cost Savings', description: 'Prevent expensive replacements with timely repairs.' },
        { title: 'Energy Efficiency', description: 'Fix drafts and seal leaks to cut utility costs.' },
        { title: 'Extended Lifespan', description: 'Proper maintenance adds years to your windows.’' },
        { title: 'Professional Care', description: 'Expert technicians handle all types of repairs.' },
        { title: 'Peace of Mind', description: 'Reliable service ensures your windows work smoothly.' }
    ],
    faqs: [
        { question: 'Do you repair all types of windows?', answer: 'Yes, we service sliding, casement, bay, and more.' },
        { question: 'Can maintenance improve insulation?', answer: 'Absolutely — sealing and repairs prevent energy loss.' },
        { question: 'Do you replace broken parts?', answer: 'Yes, we source high-quality replacement parts for all brands.' },
        { question: 'How often should I schedule window maintenance?', answer: 'Annually is recommended for optimal performance.' }
    ],
 
},
'residential-cleaning': {
    label: 'Residential Window Cleaning',
    title: 'Residential Window Cleaning Services',
    description: 'Enjoy spotless, streak-free windows with our professional home window cleaning service.',
    content: `Brighten your home with crystal-clear windows inside and out. Our residential window cleaning service includes glass, frames, tracks, and screens to ensure your windows look their absolute best. Whether for regular upkeep, seasonal cleaning, or special occasions, we deliver sparkling results with safe, eco-friendly products.`,
    image: `${static_assets}/images/services/window_cleaning.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Interior & Exterior Window Cleaning',
            'Screen Cleaning & Dust Removal',
            'Frame, Sill & Track Cleaning',
            'Skylight & Specialty Window Cleaning',
            'Hard Water Stain Removal',
            'Eco-Friendly Cleaning Options'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Crystal-Clear Results', description: 'We leave windows spotless and streak-free.' },
        { title: 'Eco-Friendly Methods', description: 'Safe, green cleaning solutions protect your home.' },
        { title: 'Full Detailing', description: 'We clean glass, frames, screens, and sills.' },
        { title: 'Time-Saving', description: 'Save hours of work with our efficient team.' },
        { title: 'Curb Appeal', description: 'Enhance your home’s appearance instantly.' }
    ],
    faqs: [
        { question: 'Do you clean hard-to-reach windows?', answer: 'Yes, we have professional equipment for high or awkward windows.' },
        { question: 'How often should I schedule window cleaning?', answer: 'Most homeowners choose seasonal or biannual cleanings.' },
        { question: 'Is your cleaning solution safe for pets?', answer: 'Absolutely — we use eco-friendly, non-toxic products.' },
        { question: 'Do you clean skylights too?', answer: 'Yes, skylights are included as part of our service options.' }
    ],
  
},
'commercial-cleaning': {
    label: 'Commercial Window Cleaning',
    title: 'Commercial Window Cleaning Services',
    description: 'Professional window cleaning for offices, retail stores, and commercial properties of all sizes.',
    content: `Keep your business looking sharp with professional commercial window cleaning. We service office buildings, storefronts, schools, and high-traffic facilities, providing clean, streak-free glass that boosts your property’s appearance. Our flexible scheduling minimizes disruptions so your operations continue smoothly.`,
    image: `${static_assets}/images/services/window_cleaning_commercial.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Storefront Window Cleaning',
            'Office Building Window Cleaning',
            'Scheduled Maintenance Plans',
            'Interior & Exterior Commercial Windows',
            'Post-Construction Cleaning',
            'Environmentally Safe Cleaning Options'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Professional Image', description: 'Clean windows project a polished, trustworthy look.' },
        { title: 'Custom Scheduling', description: 'Flexible appointments fit your business hours.' },
        { title: 'Safety First', description: 'Trained staff follow OSHA safety standards.' },
        { title: 'Consistent Results', description: 'We provide regular cleaning contracts for reliability.' },
        { title: 'Scalable Service', description: 'We handle everything from small shops to high-rise offices.' }
    ],
    faqs: [
        { question: 'Do you work outside business hours?', answer: 'Yes, we offer flexible scheduling, including early mornings and weekends.' },
        { question: 'Do you offer service contracts?', answer: 'Yes, we provide regular service agreements for ongoing cleaning.' },
        { question: 'Are you insured for commercial properties?', answer: 'Absolutely — we are fully licensed and insured.' },
        { question: 'Do you handle post-renovation cleaning?', answer: 'Yes, we specialize in removing dust and debris from new builds or remodels.' }
    ],
   
},
'screen-repair': {
    label: 'Screen Repair & Replacement',
    title: 'Window Screen Repair and Replacement Services',
    description: 'Fix torn or damaged window screens with professional repair and replacement solutions.',
    content: `Window screens keep insects out while letting fresh air in — but over time, they can tear, warp, or loosen. Our screen repair and replacement services restore your windows with durable, properly fitted screens that enhance airflow and comfort. We offer a variety of mesh options including pet-resistant, solar, and fine-mesh screens.`,
    image: `${static_assets}/images/services/window_screen.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Screen Mesh Replacement',
            'Frame Repair & Straightening',
            'Custom-Sized Screen Fabrication',
            'Pet-Resistant Screens',
            'Solar & UV-Blocking Screens',
            'Sliding Door Screen Repairs',
            'Insect & Fine-Mesh Screens'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Custom Fit', description: 'Screens are tailored to fit your exact window size.' },
        { title: 'Durable Options', description: 'Choose from pet-proof, solar, or heavy-duty mesh.' },
        { title: 'Enhanced Comfort', description: 'Keep bugs out while enjoying fresh air.' },
        { title: 'Quick Service', description: 'Most screen repairs and replacements are done same day.' },
        { title: 'Affordable Fixes', description: 'Cost-effective service to restore window function.' }
    ],
    faqs: [
        { question: 'Can you repair sliding door screens?', answer: 'Yes, we repair and replace patio and sliding door screens.' },
        { question: 'Do you offer pet-resistant screens?', answer: 'Yes, we provide heavy-duty mesh designed for pets.' },
        { question: 'Can I get a custom screen for odd-sized windows?', answer: 'Absolutely — we build custom frames and mesh to size.' },
        { question: 'How long does screen replacement take?', answer: 'Most jobs are completed in a single visit.' }
    ],
   
},
'storm-windows': {
    label: 'Storm Window Installation',
    title: 'Storm Window Installation Services',
    description: 'Protect your home from harsh weather with durable, energy-efficient storm window installations.',
    content: `Storm windows provide an extra layer of protection against wind, rain, snow, and extreme temperatures. Our installation services ensure your property is secure, insulated, and energy-efficient year-round. Whether you need interior or exterior storm windows, we customize installations to match your home’s design and provide lasting weather protection.`,
    image: `${static_assets}/images/services/strom_windows.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Interior Storm Window Installation',
            'Exterior Storm Window Installation',
            'Custom-Fit Storm Windows',
            'Energy-Efficient Glass Options',
            'Temporary & Removable Storm Panels',
            'Soundproofing & Insulation Upgrades'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Weather Protection', description: 'Safeguard your home from storms and harsh elements.' },
        { title: 'Energy Efficiency', description: 'Extra insulation lowers heating and cooling costs.' },
        { title: 'Noise Reduction', description: 'Storm windows block outside noise for a quieter home.' },
        { title: 'Custom Fit', description: 'Tailored installations for any window size or style.' },
        { title: 'Year-Round Comfort', description: 'Maintain consistent indoor temperatures and comfort.' }
    ],
    faqs: [
        { question: 'Do storm windows improve energy efficiency?', answer: 'Yes, they provide insulation and reduce heat transfer.' },
        { question: 'Are storm windows permanent?', answer: 'They can be permanent or removable depending on your preference.' },
        { question: 'Do they reduce outside noise?', answer: 'Yes, they add an extra sound barrier.' },
        { question: 'Can storm windows be customized?', answer: 'Yes, we provide custom-fit options to match your existing windows.' }
    ],

},
'skylight-cleaning': {
    label: 'Skylight Cleaning & Care',
    title: 'Professional Skylight Cleaning Services',
    description: 'Keep your skylights crystal-clear and leak-free with expert skylight cleaning and maintenance.',
    content: `Skylights brighten your space with natural light but are prone to dirt buildup, water stains, and leaks. Our skylight cleaning and care services ensure spotless glass and watertight seals for both residential and commercial skylights. We use specialized equipment to safely reach and clean skylights, restoring their clarity and efficiency.`,
    image: `${static_assets}/images/services/skylight_cleaning.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Interior & Exterior Skylight Cleaning',
            'Hard Water Stain Removal',
            'Leak Inspection & Seal Repairs',
            'Acrylic & Glass Skylight Care',
            'Dome, Flat & Custom Skylight Cleaning'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Improved Light', description: 'Maximize natural sunlight with streak-free skylights.' },
        { title: 'Leak Prevention', description: 'Regular maintenance prevents water damage.' },
        { title: 'Safe Cleaning', description: 'We use specialized tools for hard-to-reach skylights.' },
        { title: 'Glass & Acrylic Care', description: 'We handle all skylight types with proper techniques.' },
        { title: 'Enhanced Aesthetics', description: 'Spotless skylights brighten your interiors.' }
    ],
    faqs: [
        { question: 'How often should skylights be cleaned?', answer: 'We recommend cleaning at least twice a year for best results.' },
        { question: 'Do you repair skylight leaks?', answer: 'Yes, we inspect and reseal skylights to stop leaks.' },
        { question: 'Can you clean acrylic skylights?', answer: 'Absolutely — we use safe products designed for acrylic surfaces.' },
        { question: 'Is skylight cleaning safe?', answer: 'Yes, we use professional safety equipment to reach and clean skylights securely.' }
    ],

},
'solar-cleaning': {
    label: 'Solar Panel Cleaning',
    title: 'Professional Solar Panel Cleaning Services',
    description: 'Maximize energy efficiency and extend the lifespan of your solar panels with expert cleaning services.',
    content: `Dirt, dust, pollen, bird droppings, and pollution can significantly reduce the efficiency of your solar panels. Our solar panel cleaning service ensures your panels operate at peak performance by safely removing buildup without damaging the delicate surfaces. We use eco-friendly, non-abrasive cleaning methods designed specifically for solar technology, helping you get the most out of your renewable energy investment.`,
    image: `${static_assets}/images/services/solar_cleaning.jpg`,
    typeOfSolutions: {
        headings: 'Solutions we offer',
        types: [
            'Residential Solar Panel Cleaning',
            'Commercial Solar Array Cleaning',
            'Ground-Mounted Panel Cleaning',
            'Rooftop Solar Panel Cleaning',
            'Eco-Friendly & Water-Safe Methods',
            'Performance Efficiency Inspections'
        ]
    },
    benefitsOFChoosing: [
        { title: 'Higher Efficiency', description: 'Clean panels absorb more sunlight for maximum output.' },
        { title: 'Extended Lifespan', description: 'Reduce wear and damage caused by dirt buildup.' },
        { title: 'Eco-Friendly Methods', description: 'Non-abrasive, water-safe cleaning solutions protect your panels.' },
        { title: 'Safety Guaranteed', description: 'We use professional equipment to clean hard-to-reach rooftop panels safely.' },
        { title: 'Cost Savings', description: 'Increased efficiency means lower energy bills and faster ROI.' }
    ],
    faqs: [
        { question: 'How often should solar panels be cleaned?', answer: 'We recommend every 6–12 months depending on local dust, pollen, and weather conditions.' },
        { question: 'Do dirty panels really lose efficiency?', answer: 'Yes — buildup can reduce energy production by 20–30%.' },
        { question: 'Is cleaning safe for the panels?', answer: 'Absolutely. We use gentle, manufacturer-approved cleaning methods.' },
        { question: 'Can you clean commercial solar farms?', answer: 'Yes, we service both residential and large-scale commercial installations.' }
    ],
    
}};
/* ------------------------
   PROJECTS START 
------------------------ */
export const projectsData = {
"window-installation": {
    label: "Window Installation",
    title: "Energy-Efficient Window Installation for Suburban Home",
    description: "Complete replacement and installation of modern, insulated windows to improve energy savings and curb appeal.",
    image: "/images/projects/default.jpg",
    location: "Residential Property, Orlando, FL",
    duration: "Completed in 3 days",
    materials: [
        "Double-pane insulated windows",
        "Low-E glass panels",
        "Vinyl window frames",
        "Expansion foam insulation",
        "Exterior trim and flashing",
        "Sealant and weatherstripping",
        "Mounting hardware",
        "Protective sheeting",
        "Measuring tools and levels",
        "Interior finishing caulk"
    ],
    content: `
This suburban home required a full upgrade from outdated single-pane windows to modern, energy-efficient alternatives. The homeowners wanted better insulation, reduced noise, and improved curb appeal.

Our team carefully measured and removed the old frames before installing custom-fitted, double-pane low-E windows. Each frame was sealed with professional-grade weatherstripping and insulation foam to ensure airtight performance.

The final result not only lowered the homeowner's energy bills but also transformed the exterior appearance of the property. This project highlights our ability to combine function with design for long-lasting results.
    `,
},
"glass-replacement": {
    label: "Glass Replacement",
    title: "Custom Glass Replacement for Office Storefront",
    description: "High-strength tempered glass replacement for a retail storefront damaged by impact.",
    image: "/images/projects/default.jpg",
    location: "Retail Storefront, Miami, FL",
    duration: "Completed in 1 day",
    materials: [
        "Tempered safety glass",
        "Custom aluminum frame sections",
        "Heavy-duty mounting brackets",
        "Sealant and weatherproof caulking",
        "Protective film application",
        "Glass suction tools",
        "Cutting and measuring tools",
        "Scaffolding and lifts",
        "Glass edge polishers",
        "Protective safety gear"
    ],
    content: `
A retail store experienced a sudden impact that left their front glass cracked and unsafe for customers. Immediate replacement was required to restore safety and maintain business operations.

Our technicians quickly fabricated a custom-fitted tempered glass panel to match the storefront’s dimensions. Using advanced suction and lift equipment, the damaged panel was safely removed and replaced within hours.

The upgraded tempered glass provided enhanced strength, improved safety, and a sleek modern appearance, giving the storefront a fresh look and renewed confidence for the business owner.
    `,
},
"window-sealing": {
    label: "Window Sealing & Caulking",
    title: "Weatherproof Window Sealing for Coastal Property",
    description: "Comprehensive resealing and caulking of windows to stop water intrusion and drafts in a coastal home.",
    image: "/images/projects/default.jpg",
    location: "Beachfront Home, Clearwater, FL",
    duration: "Completed in 2 days",
    materials: [
        "Premium exterior-grade caulk",
        "Weatherstripping materials",
        "Foam insulation",
        "Scrapers and sealant removers",
        "Moisture barriers",
        "Sealant guns and applicators",
        "Protective masking tape",
        "Ladders and safety harnesses",
        "Cleaning solvents",
        "Heat-resistant glazing tape"
    ],
    content: `
A beachfront home was experiencing persistent water leaks and drafts around its aging window frames. Exposure to salt air and humidity had caused the original sealants to crack and deteriorate.

Our crew began by removing old caulking and weatherstripping, preparing each frame for resealing. We applied a high-performance, weather-resistant caulk and installed fresh insulation materials to improve thermal efficiency.

The completed project not only eliminated leaks but also enhanced energy efficiency and comfort, protecting the home against future coastal weather conditions.
    `,
},
"window-tinting": {
    label: "Window Tinting & Films",
    title: "UV-Protective Window Tinting for Modern Office",
    description: "Installation of premium solar-control window films to reduce glare, protect interiors, and improve workplace comfort.",
    image: "/images/projects/default.jpg",
    location: "Corporate Office, Tampa, FL",
    duration: "Completed in 2 days",
    materials: [
        "UV-blocking window films",
        "Privacy and glare-reduction films",
        "Application squeegees",
        "Glass cleaning solutions",
        "Protective safety blades",
        "Measuring and cutting tools",
        "Adhesion promoters",
        "Edge sealing solutions",
        "Protective floor coverings",
        "Lint-free cloths"
    ],
    content: `
A modern office building was facing issues with excessive glare, uneven indoor temperatures, and fading of interior furnishings caused by prolonged sun exposure. The management wanted a solution that would improve comfort while maintaining a sleek professional look.

Our team recommended and installed high-performance UV-protective window films across multiple floors. Each window was carefully cleaned and prepped before the precision application of the films, ensuring a flawless, bubble-free finish.

The project resulted in significantly reduced glare, better climate control, and improved employee comfort. The films also added a layer of privacy and long-term protection for the office’s furniture and décor, while maintaining a modern, professional appearance.
    `,
}
};

export const projectsImageGallery = [
    `${static_assets}/images/projects/replacement.jpg`,
    `${static_assets}/images/projects/windows_tint.jpg`,
    `${static_assets}/images/services/sealing.jpg`,
    `${static_assets}/images/services/window_repair.jpg`,
    `${static_assets}/images/services/glass_replacement.jpg`,
    `${static_assets}/images/services/strom_windows.jpg`,
    `${static_assets}/images/services/window_screen.jpg`,
    `${static_assets}/images/services/window_cleaning_commercial.jpg`,
    `${static_assets}/images/services/window_tint.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */
export const testimonialsData = [
    {
        name: "John Davis",
        role: "Homeowner | Window Replacement",
        feedback: "Total Care Windows replaced all the old drafty windows in our home with energy-efficient ones. The difference in comfort and savings is incredible!",
    },
    {
        name: "Rachel Green",
        role: "Property Manager",
        feedback: "They handled window upgrades across multiple rental units. Professional, reliable, and always on schedule. Tenants are thrilled with the results.",
    },
    {
        name: "Carlos Rivera",
        role: "Business Owner | Office Building",
        feedback: "Our office windows were outdated and inefficient. Their team installed new glass panels quickly with minimal disruption. The building looks brand new.",
    },
    {
        name: "Lisa Turner",
        role: "Interior Designer",
        feedback: "We’ve collaborated on several renovation projects where they provided sleek, modern window solutions. Their precision and quality always impress my clients.",
    },
    {
        name: "Mark Johnson",
        role: "Hotel Manager",
        feedback: "They replaced and sealed dozens of windows in our hotel. Guests immediately noticed the quieter, more comfortable rooms.",
    },
    {
        name: "Emily Chen",
        role: "Homeowner | Bay Window",
        feedback: "We had them install a custom bay window in our living room. It completely transformed the space — beautiful craftsmanship!",
    },
    {
        name: "David Kim",
        role: "Real Estate Developer",
        feedback: "They’ve handled window installations across several of our properties. Always on time, to spec, and with excellent finishing work.",
    },
    {
        name: "Sophia Allen",
        role: "Restaurant Owner",
        feedback: "Our restaurant needed new storefront windows. The installation was quick, clean, and has boosted our curb appeal tremendously.",
    },
    {
        name: "Nathan Scott",
        role: "Construction Project Manager",
        feedback: "They managed large-scale window installs for a new commercial build. Smooth coordination, great communication, and top-quality results.",
    },
    {
        name: "Olivia Perez",
        role: "Retail Store Owner",
        feedback: "We needed cracked glass replaced fast. Their team was responsive, efficient, and had our storefront looking perfect the same day.",
    },
    {
        name: "Jason Brooks",
        role: "Warehouse Operator",
        feedback: "They upgraded our warehouse windows with durable, insulated glass. Huge improvement in lighting and energy efficiency.",
    },
    {
        name: "Mia Thompson",
        role: "Home Renovator | Sunroom",
        feedback: "They installed floor-to-ceiling windows in our new sunroom. The workmanship and attention to detail are outstanding.",
    }
];
