import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch, FaStar, FaFlag, FaCheck, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/kitchens'
export const siteUrl = 'https://kitchens.berggc.com/';
export const siteName = 'Berg General Contractor Kitchens';
export const siteLogo = `${static_assets}/images/logo.png`;
export const googleAnalyticId = 'G-ZV55L3X98B';
export const bussinessType = ["LocalBusiness", "HomeAndConstructionBusiness"]


export const contactInfo = {
    phone: {
        text: '(561) 899-8926',
        href: 'tel:+15618998926',
        number: '+15618998926'
    },
    address: '300 SW 1st Avenue Ste 155, Fort Lauderdale, FL 33301',
    mapEmbedUrl: "https://maps.app.goo.gl/rDGBNQRu5YWHo6329",

    email: 'support@kitchens.berggc.com',
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
        title: 'Berg General Contractor Kitchens',
        description: 'Expert kitchen renovation and installation services. From sleek upgrades to complete transformations â€” we bring beauty, function, and lasting value to your home.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl,
    },
    hero: {
        title: 'Transform Your Kitchen with Berg General Contractor',
        description: 'We specialize in elegant, efficient, and high-quality kitchen renovations tailored to your lifestyle and space.',
        backgroundImage: `${static_assets}/images/hero_bg_1.jpg`,
        ctaText: 'Get a Free Quote',
        ctaLink: '/contact',
    },
    services: {
        heading: 'Our Kitchen Services',
    },
    projects: {
        heading: 'Recent Kitchen Renovations',
    },
}

export const heroBarData = [
    { icon: FaStar, label: '5.0 Kitchen Reviews' },
    { icon: FaFlag, label: '200+ Kitchen Remodels' },
    { icon: FaCheck, label: 'Free Design Estimates' },
    { icon: FaShieldAlt, label: 'Licensed & Insured' },
    { icon: FaMapMarkerAlt, label: 'Serving Florida Homes' },
    { icon: FaHome, label: 'Custom Cabinetry Pros' },
];

export const hero2 = {
    slides: [
        {
            tagline: 'Kitchen Renovation',
            title: 'Transform the Heart of Your Home',
            description: 'Complete kitchen renovations that balance beauty and function — designed around how you cook, gather, and live.',
            backgroundImage: `${static_assets}/images/services/kitchen_reno.jpg`,
        },
        {
            tagline: 'Custom Cabinetry',
            title: 'Cabinets Built for Style and Storage',
            description: 'Upgrade your kitchen with cabinetry that maximizes space, improves workflow, and delivers a polished finish.',
            backgroundImage: `${static_assets}/images/services/kitchen_cabinet.jpg`,
        },
        {
            tagline: 'Countertops',
            title: 'Surfaces That Elevate Every Detail',
            description: 'Premium countertop installs with clean edges and durable materials that stand up to daily kitchen life.',
            backgroundImage: `${static_assets}/images/services/counter_top.jpg`,
        },
        {
            tagline: 'Open Kitchen Design',
            title: 'Open Layouts Made for Entertaining',
            description: 'Modern open kitchens that connect cooking and living spaces with bright, inviting, family-friendly design.',
            backgroundImage: `${static_assets}/images/projects/open_kitchen.jpg`,
        },
    ],
}

export const servicesPage = {
    seo: {
        title: 'Kitchen Renovation Services',
        description: 'Explore our range of kitchen services including design, remodeling, cabinetry, countertops, and full kitchen makeovers.',
        ogImage: `${static_assets}/images/services/kitchen_reno.jpg`,
        canonical: siteUrl + 'services',
    },
}

export const projectsPage = {
    seo: {
        title: 'Kitchen Renovation Projects',
        description: 'Take a look at our completed kitchen remodels â€” stylish, practical, and built to inspire.',
        ogImage: `${static_assets}/images/services/kitchen_reno.jpg`,
        canonical: siteUrl + 'projects',
    },
}

export const aboutPage = {
    seo: {
        title: 'About Berg General Contractor Kitchens',
        description: 'Learn about Berg General Contractor Kitchens and how we create stunning, stress-free kitchen renovations with expert craftsmanship.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'about',
    },
    content: 'Berg General Contractor Kitchens is your go-to team for expert kitchen renovations. From concept to completion, we deliver custom designs, premium finishes, and seamless service to elevate your homeâ€™s heart.',
}

export const contactPage = {
    seo: {
        title: 'Contact Berg General Contractor Kitchens',
        description: 'Ready to upgrade your kitchen? Contact Berg General Contractor Kitchens to start planning your perfect space.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'contact',
    },
    form: {
        heading: 'Get In Touch',
        messagePlaceholder: "Tell us about your kitchen goals â€” weâ€™re ready to make them a reality.",
    },
}

export const blogPage = {
    seo: {
        title: 'Kitchen Design Tips & Renovation Ideas',
        description: 'Get inspired with expert tips on kitchen trends, layout advice, maintenance tips, and more.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'blogs',
    },
}

export const serviceAreaPage = {
    seo: {
        title: 'Kitchen Renovation Services Near You',
        description: 'Proudly serving homeowners across your region with innovative kitchen design and remodeling services.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'service-areas',
    }
}
/* ------------------------
   COMPONENTS 
------------------------ */
export const getToKnow = {
    title: 'GET TO KNOW',
    heading: 'Kitchen Renovations with Precision, Style, and Lasting Value',
    description:
        'Berg General Contractor Kitchens is your trusted partner for transforming kitchens into stunning, functional spaces. We combine expert craftsmanship, modern design, and respectful service to deliver kitchens youâ€™ll love.',
    keyPoints: [
        {
            title: 'Expert Kitchen Renovators',
            desc: 'Our team brings experience in cabinetry, countertops, plumbing, and finishes â€” ensuring sleek, professional results.',
        },
        {
            title: 'High-Quality Materials & Fixtures',
            desc: 'We source premium-grade cabinets, countertops, appliances, and hardware built for beauty and durability.',
        },
        {
            title: 'Clean, Hassle-Free Process',
            desc: 'We prioritize tidiness and efficiency, completing your renovation with minimal mess and maximum care.',
        },
    ],
    image1_url: `${static_assets}/images/projects/condo_kitchen.jpg`,
    image2_url: `${static_assets}/images/services/kitchen_lights.jpg`,
    image3_url: `${static_assets}/images/services/smart_kitchen.jpg`,
    image4_url: `${static_assets}/images/services/kitchen_reno.jpg`,
    
};

export const faqs = [
    {
        question: "Do you offer free kitchen renovation quotes?",
        answer: "Yes, we provide free consultations and estimates tailored to your kitchen needs and vision."
    },
    {
        question: "What kitchen services do you provide?",
        answer: "We handle full remodels, custom cabinetry, countertops, lighting, backsplash installation, and more."
    },
    {
        question: "Are your renovators licensed and insured?",
        answer: "Yes, our team is fully licensed, insured, and follows all local codes and industry best practices."
    },
    {
        question: "Can you handle small kitchen upgrades too?",
        answer: "Absolutely. We take on projects of all sizes â€” from quick updates to full-scale renovations."
    },
    {
        question: "How long does a typical kitchen renovation take?",
        answer: "It depends on the scope, but most projects are completed within 2â€“4 weeks."
    },
    {
        question: "Do you work on both residential and commercial kitchens?",
        answer: "Yes, we service both homes and commercial properties such as offices, cafÃ©s, and more."
    }
];

export const ourProcessData = {
    heading: 'Our Process',
    description: 'From the first sketch to the final screw, we make kitchen renovations smooth, efficient, and stress-free.',
    list: [
        {
            title: "Initial Consultation",
            description: "We discuss your kitchen goals, layout preferences, and budget to craft the ideal plan.",
            icon: FaComments
        },
        {
            title: "On-Site Assessment",
            description: "Our team evaluates your space, utilities, and design potential during an in-person visit.",
            icon: FaSearch
        },
        {
            title: "Custom Design & Proposal",
            description: "We present a personalized renovation plan with materials, timelines, and transparent pricing.",
            icon: FaFileAlt
        },
        {
            title: "Project Scheduling",
            description: "We coordinate a timeline that fits your schedule to minimize disruption.",
            icon: FaCalendarAlt
        },
        {
            title: "Kitchen Renovation",
            description: "From cabinetry to plumbing, our pros handle every detail with skill and care.",
            icon: FaHammer
        },
        {
            title: "Final Walkthrough & Handover",
            description: "We inspect everything together, make sure youâ€™re happy, and leave your new kitchen spotless.",
            icon: FaCheckCircle
        }
    ]
};

export const WhyUSData = [
    {
        title: "Certified Kitchen Experts",
        description: "Our team brings expertise in cabinetry, electrical, plumbing, and custom installations.",
        icon: FaUserTie
    },
    {
        title: "Built to Last",
        description: "We use high-quality materials and craftsmanship that stand up to daily kitchen use.",
        icon: FaTools
    },
    {
        title: "Communication is Key",
        description: "Youâ€™ll stay informed at every step with clear updates and responsive support.",
        icon: FaHandshake
    },
    {
        title: "No Hidden Costs",
        description: "We offer honest, upfront pricing with options to suit your budget.",
        icon: FaDollarSign
    },
    {
        title: "Tailored for You",
        description: "Every design decision is guided by your taste, lifestyle, and goals.",
        icon: FaSmile
    },
    {
        title: "Code-Compliant & Safe",
        description: "We follow all safety regulations and building codes for peace of mind.",
        icon: FaShieldAlt
    }
];

export const accomplishmentData = [
    { title: "Kitchens Renovated", number: 250 },
    { title: "Residential Projects", number: 400 },
    { title: "Skilled Craftsmen", number: 30 },
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
            { label: 'Full Kitchen Renovation', href: '/services/full-kitchen-renovation', hasChildrens: false },
            { label: 'Cabinet Refacing & Installation', href: '/services/cabinet-refacing-installation', hasChildrens: false },
            { label: 'Countertops & Surfaces', href: '/services/countertops-surfaces', hasChildrens: false },
            { label: 'Kitchen Tiling & Backsplash', href: '/services/kitchen-tiling-backsplash', hasChildrens: false },
            { label: 'Plumbing & Sink Install', href: '/services/kitchen-plumbing', hasChildrens: false },
            { label: 'Lighting & Appliances', href: '/services/lighting-appliances', hasChildrens: false },
            { label: 'Custom Pantries', href: '/services/custom-pantries', hasChildrens: false },
            { label: 'Smart Kitchen Solutions', href: '/services/smart-kitchens', hasChildrens: false },
            { label: 'Eco-Friendly Kitchens', href: '/services/eco-kitchen', hasChildrens: false },
        ]
    },
    {
        label: 'Projects',
        href: '/projects',
        external: false,
        hasChildrens: true,
        children: [
            { label: 'Modern Open Kitchen', href: '/projects/modern-open-kitchen', hasChildrens: false },
            { label: 'Farmhouse Style Kitchen', href: '/projects/farmhouse-kitchen', hasChildrens: false },
            { label: 'Compact Condo Kitchen', href: '/projects/compact-condo-kitchen', hasChildrens: false },
            { label: 'Luxury Chef Kitchen', href: '/projects/luxury-chef-kitchen', hasChildrens: false },
            { label: 'Minimalist Kitchen Upgrade', href: '/projects/minimalist-kitchen', hasChildrens: false },
            { label: 'Industrial Style Kitchen', href: '/projects/industrial-kitchen', hasChildrens: false },
            { label: 'Family-Friendly Kitchen', href: '/projects/family-kitchen', hasChildrens: false },
            { label: 'Coastal Kitchen Remodel', href: '/projects/coastal-kitchen', hasChildrens: false },
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
    tagline: 'Redefining Florida kitchens with elegant renovations, custom cabinetry, and expert craftsmanship.',
};


/* ------------------------
   AREAS OF SERVICES
------------------------ */

export const serviceAreasData = [
    {
        name: "Miami",
        href: "/miami",
        title: "Kitchen Renovation Services in Miami, FL",
        description: "Modern kitchen remodeling in Miami, FL. Custom cabinets, countertops, and efficient layouts.",
        content: "Berg General Contractor Kitchens transforms Miami kitchens with sleek designs, functional storage, and premium materials for lasting value.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Orlando",
        href: "/orlando",
        title: "Kitchen Renovation Services in Orlando, FL",
        description: "Orlando's trusted kitchen renovation experts. Elegant designs, expert craftsmanship, and on-time delivery.",
        content: "In Orlando, Berg General Contractor Kitchens delivers stylish kitchen upgrades with attention to space optimization, lighting, and durable finishes.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Tampa",
        href: "/tampa",
        title: "Kitchen Renovation Services in Tampa, FL",
        description: "Tailored kitchen makeovers in Tampa, FL. From luxury islands to smart storage â€” weâ€™ve got you covered.",
        content: "We help Tampa homeowners upgrade kitchens with creative layouts, quality cabinetry, and finishes that suit your lifestyle.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Jacksonville",
        href: "/jacksonville",
        title: "Kitchen Renovation Services in Jacksonville, FL",
        description: "Elegant and functional kitchen renovations in Jacksonville, FL. Expertly crafted with your needs in mind.",
        content: "Berg General Contractor Kitchens brings modern kitchen transformations to Jacksonville with seamless planning and top-tier execution.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Fort Lauderdale",
        href: "/fort-lauderdale",
        title: "Kitchen Renovation Services in Fort Lauderdale, FL",
        description: "Upscale kitchen remodeling in Fort Lauderdale, FL. Premium finishes, custom solutions.",
        content: "We design and build dream kitchens in Fort Lauderdale with luxury detailing, efficient workflows, and timeless aesthetics.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "St. Petersburg",
        href: "/st-petersburg",
        title: "Kitchen Renovation Services in St. Petersburg, FL",
        description: "Creative kitchen remodeling in St. Pete, FL. Designed for beauty, built for function.",
        content: "From compact kitchens to open-concept spaces, Berg General Contractor Kitchens serves St. Petersburg with innovation and reliability.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Cape Coral",
        href: "/cape-coral",
        title: "Kitchen Renovation Services in Cape Coral, FL",
        description: "Cape Coralâ€™s go-to for kitchen makeovers. Clean lines, bold styles, and practical designs.",
        content: "We create kitchens that suit Cape Coral living â€” bright, functional, and crafted with lasting quality in mind.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Hialeah",
        href: "/hialeah",
        title: "Kitchen Renovation Services in Hialeah, FL",
        description: "Affordable kitchen upgrades in Hialeah, FL. Designed for comfort, priced for value.",
        content: "Berg General Contractor Kitchens helps Hialeah homeowners modernize their kitchens with smart planning and dependable execution.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Gainesville",
        href: "/gainesville",
        title: "Kitchen Renovation Services in Gainesville, FL",
        description: "Full-service kitchen remodeling in Gainesville. Quality work, modern finishes.",
        content: "We revamp Gainesville kitchens with a focus on open layouts, storage efficiency, and elegant finishes.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Naples",
        href: "/naples",
        title: "Kitchen Renovation Services in Naples, FL",
        description: "Luxury kitchen remodeling in Naples, FL. Coastal elegance, top-tier materials.",
        content: "Naples clients trust Berg General Contractor Kitchens for bespoke kitchens with sophisticated style and thoughtful design.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Pensacola",
        href: "/pensacola",
        title: "Kitchen Renovation Services in Pensacola, FL",
        description: "Expert kitchen remodeling in Pensacola. Durable builds, efficient layouts, modern appeal.",
        content: "We upgrade Pensacola homes with kitchens that combine utility and style, built to suit your daily life.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "West Palm Beach",
        href: "/west-palm-beach",
        title: "Kitchen Renovation Services in West Palm Beach, FL",
        description: "Premium kitchen remodeling in West Palm Beach. Beauty meets functionality.",
        content: "Our team brings expert kitchen transformations to West Palm Beach with timeless elegance and modern technology.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Lakeland",
        href: "/lakeland",
        title: "Kitchen Renovation Services in Lakeland, FL",
        description: "Lakelandâ€™s trusted team for kitchen remodels. On-time, on-budget, on-trend.",
        content: "Berg General Contractor Kitchens delivers high-impact kitchen upgrades in Lakeland with precision and flair.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Ocala",
        href: "/ocala",
        title: "Kitchen Renovation Services in Ocala, FL",
        description: "Quality kitchen remodels in Ocala, FL. Function-forward and style-conscious designs.",
        content: "We serve Ocala homeowners with smart kitchen planning and high-end finishes for long-term satisfaction.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Bradenton",
        href: "/bradenton",
        title: "Kitchen Renovation Services in Bradenton, FL",
        description: "Bradentonâ€™s go-to for stunning kitchen transformations. Designed to impress.",
        content: "Our kitchen remodeling in Bradenton blends practicality and style with high attention to detail.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Fort Myers",
        href: "/fort-myers",
        title: "Kitchen Renovation Services in Fort Myers, FL",
        description: "Kitchen makeovers in Fort Myers, FL. Built around your lifestyle and aesthetic.",
        content: "We help Fort Myers homeowners create dream kitchens with clean lines, clever layouts, and premium materials.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Hollywood",
        href: "/hollywood",
        title: "Kitchen Renovation Services in Hollywood, FL",
        description: "Modern kitchen design and renovation in Hollywood, FL. Practical, polished, and personal.",
        content: "Hollywood homes shine with our expertly crafted kitchens, custom cabinetry, and elegant finishes.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Boca Raton",
        href: "/boca-raton",
        title: "Kitchen Renovation Services in Boca Raton, FL",
        description: "Upscale kitchen remodeling in Boca Raton, FL. Refined details, elevated design.",
        content: "Boca Raton clients choose Berg General Contractor Kitchens for luxurious kitchens that blend timeless appeal with smart functionality.",
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
        "role": "Homeowner | Kitchen Remodel",
        "feedback": "Berg General Contractor Kitchens completely transformed our outdated kitchen into a modern, functional space we love spending time in. The process was seamless and stress-free!",
    },

    {
        "name": "Rachel Green",
        "role": "Property Manager",
        "feedback": "They handled kitchen upgrades across several rental units. Reliable, responsive, and the new kitchens have added tremendous value to our properties.",
    },

    {
        "name": "Carlos Rivera",
        "role": "Restaurant Owner",
        "feedback": "Our commercial kitchen needed a serious upgrade. Berg General Contractor Kitchens delivered a sleek, efficient layout that boosted both workflow and aesthetics.",
    },

    {
        "name": "Lisa Turner",
        "role": "Interior Designer",
        "feedback": "They flawlessly integrated custom kitchen cabinetry and countertops into our design projects. Their craftsmanship elevates every space we collaborate on.",
    },

    {
        "name": "Mark Johnson",
        "role": "Hotel Manager",
        "feedback": "They renovated several of our suitesâ€™ kitchenettes with zero disruption to guests. Fast, clean, and professional from start to finish.",
    },

    {
        "name": "Emily Chen",
        "role": "Homeowner | Full Remodel",
        "feedback": "Our old kitchen was cramped and dated. Berg General Contractor Kitchens opened up the space beautifully â€” it now feels like the heart of our home.",
    },

    {
        "name": "David Kim",
        "role": "Real Estate Developer",
        "feedback": "Theyâ€™ve remodeled kitchens across multiple properties for us. Always on time, on budget, and with finishes that wow potential buyers.",
    },

    {
        "name": "Sophia Allen",
        "role": "CafÃ© Owner",
        "feedback": "The kitchen renovation they did for our cafÃ© completely changed how we operate. More efficient, stylish, and customers love the new vibe.",
    },

    {
        "name": "Nathan Scott",
        "role": "Construction Project Manager",
        "feedback": "Their team coordinated perfectly with our build schedule. The kitchens they installed in our high-rise development look incredible and function flawlessly.",
    },

    {
        "name": "Olivia Perez",
        "role": "Retail Store Owner | Kitchenette",
        "feedback": "We needed a small staff kitchen refresh. Berg General Contractor Kitchens delivered smart storage solutions and a polished finish that exceeded expectations.",
    },

    {
        "name": "Jason Brooks",
        "role": "Commercial Building Owner",
        "feedback": "They upgraded the communal kitchen areas in our offices with energy-efficient appliances and modern design. Our tenants couldnâ€™t be happier.",
    },

    {
        "name": "Mia Thompson",
        "role": "Home Renovator | Kitchen",
        "feedback": "Their attention to detail with cabinetry and countertops was exactly what I needed for my renovation project. Highly recommend their team!",
    }

];

