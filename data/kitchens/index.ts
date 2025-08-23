import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

/* ------------------------
   CONSTANTS 
------------------------ */

export const static_assets = '/kitchens'
export const siteUrl = 'https://totalcareserviceskitchens.com/';
export const siteName = 'Total Care Kitchens';
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

    email: 'support@totalcareserviceskitchens.com',
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
        title: 'Total Care Kitchens',
        description: 'Expert kitchen renovation and installation services. From sleek upgrades to complete transformations — we bring beauty, function, and lasting value to your home.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl,
    },
    hero: {
        title: 'Transform Your Kitchen with Total Care',
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
        description: 'Take a look at our completed kitchen remodels — stylish, practical, and built to inspire.',
        ogImage: `${static_assets}/images/services/kitchen_reno.jpg`,
        canonical: siteUrl + 'projects',
    },
}

export const aboutPage = {
    seo: {
        title: 'About Total Care Kitchens',
        description: 'Learn about Total Care Kitchens and how we create stunning, stress-free kitchen renovations with expert craftsmanship.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'about',
    },
    content: 'Total Care Kitchens is your go-to team for expert kitchen renovations. From concept to completion, we deliver custom designs, premium finishes, and seamless service to elevate your home’s heart.',
}

export const contactPage = {
    seo: {
        title: 'Contact Total Care Kitchens',
        description: 'Ready to upgrade your kitchen? Contact Total Care Kitchens to start planning your perfect space.',
        ogImage: `${static_assets}/images/hero_bg_1.jpg`,
        canonical: siteUrl + 'contact',
    },
    form: {
        heading: 'Get In Touch',
        messagePlaceholder: "Tell us about your kitchen goals — we’re ready to make them a reality.",
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
        'Total Care Kitchens is your trusted partner for transforming kitchens into stunning, functional spaces. We combine expert craftsmanship, modern design, and respectful service to deliver kitchens you’ll love.',
    keyPoints: [
        {
            title: 'Expert Kitchen Renovators',
            desc: 'Our team brings experience in cabinetry, countertops, plumbing, and finishes — ensuring sleek, professional results.',
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
        answer: "Absolutely. We take on projects of all sizes — from quick updates to full-scale renovations."
    },
    {
        question: "How long does a typical kitchen renovation take?",
        answer: "It depends on the scope, but most projects are completed within 2–4 weeks."
    },
    {
        question: "Do you work on both residential and commercial kitchens?",
        answer: "Yes, we service both homes and commercial properties such as offices, cafés, and more."
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
            description: "We inspect everything together, make sure you’re happy, and leave your new kitchen spotless.",
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
        description: "You’ll stay informed at every step with clear updates and responsive support.",
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
        content: "Total Care Kitchens transforms Miami kitchens with sleek designs, functional storage, and premium materials for lasting value.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Orlando",
        href: "/orlando",
        title: "Kitchen Renovation Services in Orlando, FL",
        description: "Orlando's trusted kitchen renovation experts. Elegant designs, expert craftsmanship, and on-time delivery.",
        content: "In Orlando, Total Care Kitchens delivers stylish kitchen upgrades with attention to space optimization, lighting, and durable finishes.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Tampa",
        href: "/tampa",
        title: "Kitchen Renovation Services in Tampa, FL",
        description: "Tailored kitchen makeovers in Tampa, FL. From luxury islands to smart storage — we’ve got you covered.",
        content: "We help Tampa homeowners upgrade kitchens with creative layouts, quality cabinetry, and finishes that suit your lifestyle.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Jacksonville",
        href: "/jacksonville",
        title: "Kitchen Renovation Services in Jacksonville, FL",
        description: "Elegant and functional kitchen renovations in Jacksonville, FL. Expertly crafted with your needs in mind.",
        content: "Total Care Kitchens brings modern kitchen transformations to Jacksonville with seamless planning and top-tier execution.",
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
        content: "From compact kitchens to open-concept spaces, Total Care Kitchens serves St. Petersburg with innovation and reliability.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Cape Coral",
        href: "/cape-coral",
        title: "Kitchen Renovation Services in Cape Coral, FL",
        description: "Cape Coral’s go-to for kitchen makeovers. Clean lines, bold styles, and practical designs.",
        content: "We create kitchens that suit Cape Coral living — bright, functional, and crafted with lasting quality in mind.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    },
    {
        name: "Hialeah",
        href: "/hialeah",
        title: "Kitchen Renovation Services in Hialeah, FL",
        description: "Affordable kitchen upgrades in Hialeah, FL. Designed for comfort, priced for value.",
        content: "Total Care Kitchens helps Hialeah homeowners modernize their kitchens with smart planning and dependable execution.",
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
        content: "Naples clients trust Total Care Kitchens for bespoke kitchens with sophisticated style and thoughtful design.",
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
        description: "Lakeland’s trusted team for kitchen remodels. On-time, on-budget, on-trend.",
        content: "Total Care Kitchens delivers high-impact kitchen upgrades in Lakeland with precision and flair.",
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
        description: "Bradenton’s go-to for stunning kitchen transformations. Designed to impress.",
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
        content: "Boca Raton clients choose Total Care Kitchens for luxurious kitchens that blend timeless appeal with smart functionality.",
        image: `${static_assets}/images/hero_bg_1.jpg`
    }
];



/* ------------------------
   SERVICES START
------------------------ */
export const servicesData = {
    'full-kitchen-renovation': {
        label: 'Full Kitchen Renovation',
        title: 'Complete Kitchen Renovation Services by Total Care Kitchens',
        description: 'Revamp your entire kitchen with our end-to-end renovation services. From planning to installation, we create modern, efficient, and beautiful kitchen spaces.',
        content: `A full kitchen renovation is the key to elevating your home’s value and your cooking experience. At Total Care Kitchens, we turn outdated kitchens into inspiring spaces that blend style and practicality. It all starts with an in-depth consultation to understand your needs, preferences, and budget. Our expert team then handles everything—from designing layouts and selecting finishes to managing demolition, cabinetry, countertops, plumbing, lighting, and appliances. Every element is managed with precision and care. Whether you’re after a sleek contemporary kitchen or a warm traditional design, we bring your dream kitchen to life with minimal disruption and maximum quality.`,
        image: `${static_assets}/images/services/kitchen_reno.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Custom Kitchen Design',
                'Cabinet Installation & Refacing',
                'Countertop Fabrication & Installation',
                'Plumbing Upgrades & Sink Installation',
                'Electrical & Lighting Enhancements',
                'Tile Flooring & Backsplash Installation',
                'Appliance Setup & Integration',
                'Pantry Construction & Storage Solutions',
                'Smart Kitchen Features',
                'Painting & Finishing Touches'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Comprehensive Service',
                description: 'From design to installation, we handle every detail of your renovation project.'
            },
            {
                title: 'Tailored Design',
                description: 'We craft custom kitchen layouts that align with your lifestyle and cooking needs.'
            },
            {
                title: 'Premium Materials',
                description: 'Only top-grade materials and finishes are used to ensure lasting beauty and functionality.'
            },
            {
                title: 'Skilled Professionals',
                description: 'Our experienced team guarantees expert craftsmanship and precise execution.'
            },
            {
                title: 'Time-Conscious Delivery',
                description: 'We deliver projects on schedule, minimizing disruption to your daily life.'
            },
            {
                title: 'Transparent Quotes',
                description: 'Clear pricing, no surprises — you’ll know exactly what to expect.'
            }
        ],
        faqs: [
            {
                question: "How long does a full kitchen renovation take?",
                answer: "Most full renovations take between 4-6 weeks, depending on the scope and material availability."
            },
            {
                question: "Do you help with kitchen layout and design?",
                answer: "Yes, our team works closely with you to plan a layout that suits your style and functional needs."
            },
            {
                question: "Can I use my kitchen during the renovation?",
                answer: "There may be limited access during critical phases, but we work to minimize downtime."
            },
            {
                question: "What’s included in a full kitchen renovation?",
                answer: "Everything from demolition, design, cabinets, countertops, plumbing, lighting, to appliance installation."
            },
            {
                question: "Are your services licensed and insured?",
                answer: "Yes, Total Care Kitchens is fully licensed and insured for your peace of mind."
            }
        ],
    },
    'cabinet-refacing-installation': {
        label: 'Cabinet Refacing & Installation',
        title: 'kitchen Cabinet Refacing & Installation',
        description: 'Refresh your kitchen with stylish new cabinets or reface existing ones for a cost-effective upgrade. We offer expert installation and premium materials.',
        content: `Upgrading your kitchen cabinetry can dramatically enhance both the appearance and storage functionality of your space. At Total Care kitchens, we specialize in professional cabinet refacing and new installations that reflect your style and optimize your kitchen layout. Refacing gives your existing cabinets a fresh, modern look by replacing doors, drawer fronts, and hardware — a budget-friendly option that doesn’t sacrifice quality. Alternatively, we can install brand-new custom cabinetry built to fit your needs. With a wide range of finishes, colors, and styles, we ensure your cabinetry matches your kitchen’s aesthetic and stands the test of time.`,
        image: `${static_assets}/images/services/kitchen_cabinet.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Cabinet Door & Drawer Front Replacement',
                'Hardware Upgrade (Handles, Knobs, Hinges)',
                'Custom Vanity Cabinet Installation',
                'Built-in Storage Cabinetry',
                'Floating Cabinets for Modern Aesthetics',
                'Moisture-Resistant Material Options',
                'Cabinet Lighting Integration',
                'Soft-Close Drawer & Door Systems',
                'Color & Finish Matching',
                'Full Cabinet Design & Fabrication'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Cost-Effective Makeover',
                description: 'Refacing provides a fresh new look without the expense of full cabinet replacement.'
            },
            {
                title: 'Custom Installations',
                description: 'We offer tailored cabinet solutions that fit your kitchen’s size and layout perfectly.'
            },
            {
                title: 'High-Quality Materials',
                description: 'Our cabinets are made from durable, water-resistant materials designed for kitchen environments.'
            },
            {
                title: 'Efficient Turnaround',
                description: 'Most cabinet refacing projects are completed quickly, minimizing disruption.'
            },
            {
                title: 'Design Assistance',
                description: 'Our team helps you choose styles, colors, and finishes that elevate your kitchen’s look.'
            },
            {
                title: 'Skilled Craftsmanship',
                description: 'Our installers ensure precise fitting and finish for long-lasting beauty and function.'
            }
        ],
        faqs: [
            {
                question: "Is cabinet refacing better than replacing?",
                answer: "Refacing is a more affordable and faster option if your existing cabinet boxes are in good condition."
            },
            {
                question: "How long does cabinet refacing take?",
                answer: "Most refacing jobs are completed within 2–3 days, depending on the kitchen size."
            },
            {
                question: "Do you offer custom cabinet installation?",
                answer: "Yes, we design and install custom cabinetry tailored to your space and storage needs."
            },
            {
                question: "What materials do you use for cabinets?",
                answer: "We use moisture-resistant wood, MDF, and laminate options suitable for kitchen conditions."
            },
            {
                question: "Can I choose cabinet colors and finishes?",
                answer: "Absolutely — we offer a wide range of colors, textures, and finishes to match your kitchen style."
            }
        ],
    },
    'countertops-surfaces': {
        label: 'Countertops & Surfaces',
        title: 'Premium kitchen Countertops & Surfaces',
        description: 'Upgrade your kitchen with stunning countertops and surface materials that combine durability, elegance, and easy maintenance.',
        content: `Your kitchen surfaces set the tone for the entire space — combining form and function in one cohesive design. We provide expert installation of high-quality countertops and surfaces tailored to suit your style and practical needs. Choose from quartz, granite, marble, solid surface, or engineered stone options, each offering unique textures, durability, and aesthetic appeal. Whether you're modernizing a vanity top or refreshing an entire surface layout, our team ensures seamless installation with a flawless finish.`,
        image: `${static_assets}/images/services/counter_top.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Custom Vanity Countertop Installation',
                'Quartz, Granite, and Marble Options',
                'Solid Surface and Engineered Stone',
                'Integrated Sink and Countertop Designs',
                'Heat and Moisture Resistant Materials',
                'Color and Pattern Matching',
                'Edge Profile Customization',
                'Surface Sealing and Protection',
                'Backsplash Installation',
                'Professional Measuring and Fitting'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Elegant Material Selection',
                description: 'Choose from a curated range of premium surfaces to enhance your kitchen’s look.'
            },
            {
                title: 'Expert Craftsmanship',
                description: 'We deliver seamless cuts, edges, and finishes for a high-end, professional appearance.'
            },
            {
                title: 'Durability & Functionality',
                description: 'Our surfaces are built to withstand heat, moisture, and everyday use with minimal maintenance.'
            },
            {
                title: 'Custom Fit & Finish',
                description: 'Every surface is measured and fabricated precisely to your kitchen’s layout.'
            },
            {
                title: 'Fast & Clean Installation',
                description: 'We minimize downtime with efficient installations that leave your space spotless.'
            },
            {
                title: 'Design Coordination',
                description: 'We help match surfaces with cabinetry, tiles, and fixtures for a cohesive finish.'
            }
        ],
        faqs: [
            {
                question: "Which surface material is best for kitchen countertops?",
                answer: "Quartz is popular for its durability and low maintenance, but granite and solid surface options are also excellent."
            },
            {
                question: "Can you install a countertop with an integrated sink?",
                answer: "Yes, we offer integrated sink solutions for a sleek and easy-to-clean surface."
            },
            {
                question: "Do you provide backsplash options too?",
                answer: "Absolutely — we can install matching or complementary backsplashes to complete the look."
            },
            {
                question: "How long does surface installation take?",
                answer: "Most installations are completed within 1–2 days, depending on scope and material availability."
            },
            {
                question: "Are the surfaces sealed for protection?",
                answer: "Yes, we seal natural stone and recommend maintenance tips to extend surface longevity."
            }
        ],
        images: [`${static_assets}/images/services/counter_top.jpg`]
    }, 
    'kitchen-tiling-backsplash': {
        label: 'Kitchen Tiling & Backsplash',
        title: 'Expert Kitchen Tiling & Backsplash Installation',
        description: 'Enhance the visual appeal and functionality of your kitchen with expertly installed tiles and backsplashes tailored to your style.',
        content: `At Total Care kitchens, we extend our craftsmanship beyond kitchens to deliver exceptional kitchen tiling and backsplash services. Whether you're looking for a sleek modern subway tile or a bold patterned mosaic, our team brings precision and creativity to every project. We help you select the ideal materials and patterns to complement your kitchen's design, and we ensure each tile is installed with meticulous attention to detail. A professionally installed backsplash not only elevates your kitchen’s aesthetics but also protects your walls from spills and splatters — combining beauty with practicality.`,
        image: `${static_assets}/images/services/kitchen_tiling.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Backsplash Tile Installation',
                'Wall & Floor Tiling for Kitchens',
                'Custom Mosaic Designs',
                'Subway, Hexagon, and Geometric Tiles',
                'Grouting and Sealing Services',
                'Heat & Moisture Resistant Tiles',
                'Under-Cabinet Backsplash Tiling',
                'Tile Repair and Replacement',
                'Material Guidance (Ceramic, Porcelain, Glass)',
                'Design Consultation and Layout Planning'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Customized Designs',
                description: 'From minimalist to bold, we help create a tiling scheme that fits your vision.'
            },
            {
                title: 'Expert Installation',
                description: 'Our team ensures perfect alignment, spacing, and finishing on every tile.'
            },
            {
                title: 'Durability & Easy Maintenance',
                description: 'We use high-quality tiles and grout that resist stains, moisture, and wear.'
            },
            {
                title: 'Fast Turnaround',
                description: 'We deliver timely service without compromising on craftsmanship.'
            },
            {
                title: 'Enhanced Protection',
                description: 'Backsplashes shield your walls from cooking messes, extending the life of your kitchen.'
            },
            {
                title: 'Material Selection Help',
                description: 'Not sure what to choose? We guide you through textures, colors, and finishes.'
            }
        ],
        faqs: [
            {
                question: "Which tiles are best for kitchen backsplashes?",
                answer: "Ceramic, porcelain, and glass tiles are top choices for their durability and wide style range."
            },
            {
                question: "Can you replace my old backsplash?",
                answer: "Yes, we offer removal and full replacement services with minimal mess or disruption."
            },
            {
                question: "Do you provide custom patterns or layouts?",
                answer: "Absolutely. We can install mosaics, herringbone, chevron, and other custom layouts."
            },
            {
                question: "How long does installation take?",
                answer: "Most backsplash installations are completed in 1–2 days, depending on complexity."
            },
            {
                question: "Is the grout sealed after tiling?",
                answer: "Yes, we seal grout lines to prevent staining and ensure long-lasting results."
            }
        ],
    },
    'kitchen-plumbing': {
        label: 'Plumbing & Sink Install',
        title: 'Professional Kitchen Plumbing & Sink Installation Services',
        description: 'Ensure flawless water flow and efficient drainage with expert kitchen plumbing and sink installation tailored to your kitchen layout.',
        content: `Total Care kitchens brings the same trusted expertise in plumbing to your kitchen renovations. Whether you’re replacing an old sink or reconfiguring your entire kitchen layout, our licensed professionals handle every detail with precision. We install and connect sinks, faucets, garbage disposals, and dishwashers while ensuring your plumbing system is leak-free and compliant with local codes. From basic hook-ups to complete re-routing of water lines, we prioritize functionality, cleanliness, and longevity in every installation.`,
        image: `${static_assets}/images/services/sink_installation.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Sink & Faucet Installation',
                'Garbage Disposal Connection',
                'Dishwasher Hook-up',
                'Water Line Rerouting',
                'Leak Detection & Repair',
                'Drainage System Optimization',
                'Trap and Vent Installations',
                'Shut-off Valve Installations',
                'Hot & Cold Water Line Setup',
                'Code-Compliant Plumbing Work'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Licensed Plumbing Professionals',
                description: 'Our team ensures all installations meet the highest safety and code standards.'
            },
            {
                title: 'Comprehensive Installations',
                description: 'We handle every fixture and connection so you don’t have to worry about a thing.'
            },
            {
                title: 'Durable Materials & Parts',
                description: 'We use high-quality pipes, connectors, and valves to avoid future issues.'
            },
            {
                title: 'Seamless Sink Upgrades',
                description: 'Whether you’re adding a farmhouse sink or upgrading to stainless steel, we’ve got it covered.'
            },
            {
                title: 'Fast Service with Minimal Disruption',
                description: 'We work around your schedule and ensure your kitchen is back in action quickly.'
            },
            {
                title: 'Transparent Pricing',
                description: 'Upfront quotes with no hidden charges. Just honest service and great results.'
            }
        ],
        faqs: [
            {
                question: "Do I need to move plumbing lines for a new sink?",
                answer: "Only if the sink’s position is changing. We can assess and reroute as needed for the new layout."
            },
            {
                question: "Can you install sinks into existing countertops?",
                answer: "Yes, we fit new sinks into current countertops, provided the space and cutout are compatible."
            },
            {
                question: "Are all installations up to code?",
                answer: "Absolutely. We adhere strictly to plumbing codes for safety and compliance."
            },
            {
                question: "Do you offer warranty on plumbing work?",
                answer: "Yes, our plumbing installations come with a workmanship warranty for added peace of mind."
            },
            {
                question: "Can you install touchless faucets or smart sinks?",
                answer: "We sure can. We’re experienced with modern plumbing fixtures and smart kitchen upgrades."
            }
        ],
    },
    'lighting-appliances': {
        label: 'Lighting & Appliances',
        title: 'Kitchen Lighting and Appliance Installation Services',
        description: 'Illuminate your kitchen and streamline your cooking experience with expert lighting design and appliance setup services.',
        content: `At Total Care kitchens, we understand that a well-lit, well-equipped kitchen is the heart of every home. That’s why we offer professional lighting and appliance installation services tailored to both style and function. Whether you’re upgrading to energy-efficient LED fixtures or installing built-in ovens, range hoods, or smart fridges, our team ensures safe and seamless integration. We also help design optimal lighting layouts—from task lighting under cabinets to ambient ceiling lights—so your kitchen not only works better, it looks amazing too.`,
        image: `${static_assets}/images/services/kitchen_lights.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Overhead & Ambient Lighting Setup',
                'Under-Cabinet Task Lighting',
                'Pendant Light Installation',
                'LED Strip & Accent Lighting',
                'Recessed Lighting Design',
                'Built-In Appliance Installations',
                'Cooktop & Oven Hook-ups',
                'Range Hood Venting & Wiring',
                'Refrigerator and Dishwasher Installation',
                'Smart Appliance Integration'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Safe & Certified Installations',
                description: 'All electrical and appliance installations are performed by licensed professionals to meet safety standards.'
            },
            {
                title: 'Energy-Efficient Lighting Solutions',
                description: 'Upgrade to LED and smart lighting systems to reduce energy consumption and enhance ambiance.'
            },
            {
                title: 'Complete Appliance Setup',
                description: 'From unpacking to full hookup, we handle every step so your kitchen is ready to use immediately.'
            },
            {
                title: 'Custom Lighting Design',
                description: 'We design lighting plans that balance beauty with functionality in every corner of your kitchen.'
            },
            {
                title: 'Modern & Smart Upgrades',
                description: 'Install the latest kitchen tech with confidence—touchscreen ovens, app-connected fridges, and more.'
            },
            {
                title: 'Minimal Disruption',
                description: 'Our installations are quick, clean, and scheduled to minimize interference with your daily routine.'
            }
        ],
        faqs: [
            {
                question: "Can I add under-cabinet lighting to my existing setup?",
                answer: "Yes, we can retrofit LED task lighting without extensive modifications."
            },
            {
                question: "Do you install appliances I’ve purchased myself?",
                answer: "Absolutely. We’re happy to install appliances from any retailer, as long as they meet installation requirements."
            },
            {
                question: "Can you help with smart kitchen setup?",
                answer: "Yes, we install and configure smart lighting, appliances, and voice-controlled systems."
            },
            {
                question: "Are lighting designs included in your service?",
                answer: "Yes, we provide custom lighting layouts as part of the service to enhance both function and style."
            },
            {
                question: "What if my kitchen needs new wiring for lighting or appliances?",
                answer: "No problem—our licensed electricians can safely upgrade your wiring to support modern kitchen demands."
            }
        ],
        images: []
    },
    'custom-pantries': {
        label: 'Custom Pantries',
        title: 'Tailored Kitchen Pantry Design & Installation Services',
        description: 'Maximize storage and organization with custom-built pantries designed to suit your kitchen layout and lifestyle.',
        content: `Total Care kitchens offers personalized pantry solutions that bring order and elegance to your kitchen. Whether you need a walk-in pantry, pull-out shelves, or built-in cabinetry, our team designs and installs efficient storage systems tailored to your needs. We combine high-quality materials with clever design to create functional, clutter-free spaces. From dry goods to cookware, everything will have its place — all while matching your kitchen's style and flow.`,
        image: `${static_assets}/images/services/pantry.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Walk-In Pantry Construction',
                'Built-In Cabinet Pantries',
                'Pull-Out Shelving Systems',
                'Corner Pantry Units',
                'Adjustable Shelf Installations',
                'Custom Drawer and Basket Inserts',
                'Integrated Lighting in Pantry Spaces',
                'Pantry Door Upgrades & Design',
                'Appliance Storage Compartments',
                'Custom Labeling & Organization Solutions'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Tailored Designs for Any Space',
                description: 'We create pantry solutions that perfectly fit your kitchen layout and lifestyle needs.'
            },
            {
                title: 'Optimized Storage Capacity',
                description: 'Make the most of every inch with smart shelving and organization systems.'
            },
            {
                title: 'Stylish & Seamless Integration',
                description: 'Our custom pantries match your kitchen’s design, maintaining a unified aesthetic.'
            },
            {
                title: 'Easy Access & Visibility',
                description: 'No more digging through clutter—our designs make everything easy to find and reach.'
            },
            {
                title: 'High-Quality Materials',
                description: 'We use durable, easy-to-clean materials to ensure long-lasting performance and hygiene.'
            },
            {
                title: 'Fast & Professional Installation',
                description: 'Our team installs your pantry efficiently with minimal disruption to your home.'
            }
        ],
        faqs: [
            {
                question: "Can you design a pantry for small kitchens?",
                answer: "Yes, we specialize in space-saving pantry solutions for kitchens of all sizes."
            },
            {
                question: "Do you offer walk-in pantry installations?",
                answer: "Absolutely. We can build walk-in pantries that are both beautiful and highly functional."
            },
            {
                question: "Will my pantry match my existing kitchen design?",
                answer: "Yes, we match finishes, hardware, and styling to ensure a cohesive look."
            },
            {
                question: "What materials do you use for pantry shelving?",
                answer: "We offer a range including wood, laminate, and wire — all durable and customizable to your needs."
            },
            {
                question: "Do you provide organization accessories?",
                answer: "Yes, we can include pull-outs, dividers, baskets, and even custom labeling for a fully organized setup."
            }
        ],
        images: []
    }
    ,
    'smart-kitchens': {
        label: 'Smart Kitchen Solutions',
        title: 'Innovative Smart Kitchen Upgrades for Modern Living',
        description: 'Upgrade your kitchen with cutting-edge technology that enhances convenience, efficiency, and style.',
        content: `At Total Care kitchens, we bring your kitchen into the future with smart technology that makes daily life easier and more enjoyable. From voice-controlled lighting and smart faucets to connected appliances and motion-sensing features, we design and install intelligent systems tailored to your needs. Our team helps you select the right tech solutions and ensures seamless integration with your existing kitchen design. With our smart kitchen services, your space becomes more functional, energy-efficient, and tailored to the pace of your life.`,
        image: `${static_assets}/images/services/smart_kitchen.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Smart Lighting Systems',
                'Voice-Activated Controls',
                'Wi-Fi Enabled Ovens & Refrigerators',
                'Motion Sensor Faucets & Dispensers',
                'Automated Blinds & Ventilation',
                'Touchless Trash & Recycling Systems',
                'Smart Home Hub Integration',
                'Connected Cooking & Recipe Displays',
                'Remote Temperature Monitoring',
                'Custom App-Controlled Appliances'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Tech That Simplifies Life',
                description: 'Control your kitchen environment with voice commands, apps, and automation for ultimate ease.'
            },
            {
                title: 'Energy-Efficient Features',
                description: 'Smart devices help you reduce power and water usage without sacrificing performance.'
            },
            {
                title: 'Seamless Integration',
                description: 'We ensure smart upgrades complement your existing kitchen layout and decor.'
            },
            {
                title: 'Hands-Free Convenience',
                description: 'Touchless faucets and appliances keep your kitchen cleaner and more hygienic.'
            },
            {
                title: 'Custom-Fitted Solutions',
                description: 'We tailor every installation to match your preferences, lifestyle, and usage patterns.'
            },
            {
                title: 'Future-Ready Upgrades',
                description: 'Stay ahead with scalable technology that adapts as your smart home grows.'
            }
        ],
        faqs: [
            {
                question: "Can smart kitchen devices work with Alexa or Google Assistant?",
                answer: "Yes, most of our systems integrate with popular smart home assistants for seamless control."
            },
            {
                question: "Do I need new appliances for a smart kitchen?",
                answer: "Not always — we can upgrade specific components or add smart adapters to compatible existing units."
            },
            {
                question: "Will smart features increase my energy bill?",
                answer: "On the contrary, many smart devices help reduce energy and water usage, lowering long-term costs."
            },
            {
                question: "Is the tech difficult to use?",
                answer: "We set everything up and provide easy-to-use interfaces, plus training so you’re fully comfortable."
            },
            {
                question: "Can I choose specific features, or is it a full package?",
                answer: "Our solutions are fully customizable. You can pick only the smart features that suit your lifestyle."
            }
        ],
        images: []
    },
    'eco-kitchen': {
        label: 'Eco-Friendly Kitchens',
        title: 'Sustainable Kitchen Renovations for a Greener Home',
        description: 'Design a stylish kitchen that’s kind to the planet with our eco-conscious materials and energy-saving solutions.',
        content: `At Total Care kitchens, we believe that luxury and sustainability can go hand in hand. Our eco-friendly kitchen renovations focus on reducing environmental impact without compromising on function or design. We use responsibly sourced materials, install energy-efficient appliances, and incorporate water-saving features. From bamboo cabinetry to LED lighting and low-VOC finishes, every detail is chosen to support a greener future. Whether you want a fully sustainable kitchen or a few green upgrades, we’ll help you build a space that’s better for you and the planet.`,
        image: `${static_assets}/images/services/eco_kitchen.jpg`,
        typeOfSolutions: {
            headings: 'Solutions we offer',
            types: [
                'Sustainable Cabinetry & Materials',
                'Energy-Efficient Appliances',
                'Water-Saving Faucets & Fixtures',
                'Recycled & Reclaimed Surfaces',
                'LED & Natural Lighting Integration',
                'Low-VOC Paints & Finishes',
                'Composting & Waste Separation Systems',
                'Eco-Friendly Flooring Options',
                'Smart Power Usage Controls',
                'Green Design Consultations'
            ]
        },
        benefitsOFChoosing: [
            {
                title: 'Lower Environmental Impact',
                description: 'Reduce your carbon footprint with sustainable materials and energy-saving solutions.'
            },
            {
                title: 'Healthier Indoor Air Quality',
                description: 'Use low-toxicity products that create a cleaner, safer living space for your family.'
            },
            {
                title: 'Reduced Utility Costs',
                description: 'Energy-efficient systems help you save money over time on electricity and water bills.'
            },
            {
                title: 'Durable & Renewable Materials',
                description: 'We select materials that are long-lasting and responsibly harvested or recycled.'
            },
            {
                title: 'Waste Reduction Practices',
                description: 'We follow eco-friendly disposal and recycling during demolition and installation.'
            },
            {
                title: 'Eco-Conscious Expertise',
                description: 'Our team stays informed on green building trends to deliver truly sustainable solutions.'
            }
        ],
        faqs: [
            {
                question: "Is an eco-friendly kitchen more expensive?",
                answer: "Some green options may have a higher upfront cost, but they often lead to long-term savings on energy and maintenance."
            },
            {
                question: "Do I have to replace all my appliances?",
                answer: "Not necessarily — we’ll assess your current setup and suggest replacements only where they make the most impact."
            },
            {
                question: "What qualifies as an eco-friendly material?",
                answer: "Materials that are recycled, rapidly renewable, locally sourced, or produced with minimal environmental impact."
            },
            {
                question: "Can eco-kitchens still look modern and stylish?",
                answer: "Absolutely. Sustainability and aesthetics go hand-in-hand in our custom designs."
            },
            {
                question: "Will you help me choose the right green upgrades?",
                answer: "Yes! We provide guidance tailored to your budget, lifestyle, and environmental goals."
            }
        ],
        images: []
    }



};



/* ------------------------
   PROJECTS START 
------------------------ */

export const projectsData = {
    "modern-open-kitchen": {
        label: "Modern Open Kitchen",
        title: "Contemporary Open Concept Kitchen Remodel",
        description: "A sleek and functional open-concept kitchen designed for seamless entertaining and everyday living, blending modern aesthetics with smart utility.",
        image: `${static_assets}/images/projects/open_kitchen.jpg`,
        location: "Urban Apartment, Orlando, FL",
        duration: "Completed in 5 weeks",
        materials: [
            "Quartz waterfall island countertop",
            "Matte white and wood-grain cabinetry",
            "Integrated energy-efficient appliances",
            "Subway tile backsplash",
            "Recessed ceiling and under-cabinet lighting",
            "Engineered hardwood flooring",
            "Touchless faucet system",
            "Open shelving accents",
            "Minimalist pendant lighting",
            "Pull-out pantry system"
        ],
        content: `
  This kitchen renovation was all about transforming a closed-off layout into a modern, open-concept space that flows effortlessly into the living and dining areas. The homeowners wanted a clean, bright aesthetic that didn’t sacrifice function — and that’s exactly what we delivered.
  
  At Total Care kitchens, we opened up the layout by removing partition walls and expanding the kitchen footprint. A large quartz waterfall island became the centerpiece, offering a gathering space with built-in storage and seating. The cabinetry combined matte white fronts with warm wood tones to balance the modern with the inviting. Integrated appliances kept the lines sleek, while a classic subway tile backsplash added timeless appeal.
  
  Smart features like a touchless faucet, soft-close drawers, and efficient LED lighting elevated convenience. With strategic lighting, space-saving storage, and a minimalist vibe, this open kitchen is now the heart of the home — perfect for hosting or simply enjoying daily meals in style.
  `,
    },
    "farmhouse-kitchen": {
        label: "Farmhouse Style Kitchen",
        title: "Charming Farmhouse Kitchen Renovation",
        description: "A warm, rustic kitchen remodel featuring classic farmhouse elements, natural materials, and cozy charm for a timeless cooking space.",
        image: `${static_assets}/images/projects/farm_house_kitchen.jpg`,
        location: "Countryside Home, Winter Garden, FL",
        duration: "Completed in 6 weeks",
        materials: [
            "Butcher block countertops",
            "Shaker-style cabinetry in soft white",
            "Farmhouse apron-front sink",
            "Bronze and wrought iron fixtures",
            "Open reclaimed wood shelving",
            "Natural stone backsplash",
            "Vintage-style pendant lights",
            "Hand-scraped hardwood flooring",
            "Built-in plate racks and pantry cabinetry",
            "Barn-style sliding door"
        ],
        content: `
  This renovation brought farmhouse charm to life in a cozy countryside home. The homeowners envisioned a warm and welcoming kitchen that honored traditional design while integrating modern conveniences — and Total Care kitchens delivered just that.
  
  We used soft white shaker cabinets to create a bright foundation, paired with butcher block counters for that warm, earthy feel. A standout feature is the apron-front farmhouse sink, framed by a large window that fills the space with natural light. Bronze fixtures and wrought iron hardware added rustic contrast.
  
  Open shelving made from reclaimed wood offers both storage and character, while hand-scraped hardwood flooring and vintage lighting brought in texture and warmth. The barn-style door to the pantry completed the aesthetic. This kitchen now blends country charm with practical design — a space built for gathering, cooking, and making memories.
  `,
    },
    "compact-condo-kitchen": {
        label: "Compact Condo Kitchen",
        title: "Stylish Compact Condo Kitchen Remodel",
        description: "A space-efficient kitchen transformation tailored for condo living, combining smart storage solutions, sleek finishes, and modern appliances.",
        image: `${static_assets}/images/projects/condo_kitchen.jpg`,
        location: "Downtown Condo, Orlando, FL",
        duration: "Completed in 3 weeks",
        materials: [
            "High-gloss flat-panel cabinets",
            "Quartz countertops",
            "Pull-out pantry system",
            "Compact stainless steel appliances",
            "Glass tile backsplash",
            "Under-cabinet LED lighting",
            "Slim-profile range hood",
            "Soft-close drawers",
            "Integrated microwave drawer",
            "Floating shelves"
        ],
        content: `
  This compact condo kitchen project focused on maximizing function and style in a limited footprint. The client, a busy professional living in downtown Orlando, needed a modern, low-maintenance kitchen that didn’t sacrifice aesthetics for space.
  
  Total Care kitchens delivered a clean, efficient layout with high-gloss cabinets that reflect light and visually expand the space. Quartz countertops were chosen for their durability and sleek appearance. We integrated a full set of compact stainless steel appliances, including a drawer-style microwave and a space-saving range hood.
  
  Storage was key in this design. A pull-out pantry, soft-close drawers, and floating shelves offered ample organization options without cluttering the room. Glass tile backsplash and under-cabinet lighting added a touch of sophistication while maintaining a bright, airy vibe. The result is a smart, functional kitchen that feels open and contemporary despite its smaller size.
  `,
    },
    "luxury-chef-kitchen": {
        label: "Luxury Chef Kitchen",
        title: "High-End Chef's Kitchen Remodel",
        description: "A gourmet kitchen transformation featuring premium appliances, custom cabinetry, and professional-grade finishes designed for passionate home chefs.",
        image: `${static_assets}/images/projects/chef_kitchen.jpg`,
        location: "Estate Home, Windermere, FL",
        duration: "Completed in 6 weeks",
        materials: [
            "Custom walnut cabinetry",
            "Marble countertops and backsplash",
            "48\" commercial gas range",
            "Double wall ovens",
            "Built-in refrigerator and wine cooler",
            "Oversized kitchen island with prep sink",
            "Pot filler faucet",
            "Designer pendant lighting",
            "Walk-in pantry with custom shelving",
            "Integrated smart kitchen controls"
        ],
        content: `
  This luxury chef kitchen was designed for a culinary enthusiast looking to blend elegance with top-tier functionality. Located in a high-end Windermere estate, the space was completely reimagined to support serious cooking while offering the sophistication expected in a luxury home.
  
  Total Care kitchens collaborated closely with the homeowner to craft a gourmet kitchen equipped with premium features. A 48" commercial gas range, double wall ovens, and built-in refrigeration units were seamlessly integrated into custom walnut cabinetry. The centerpiece is a massive marble-topped island that includes a prep sink and ample seating for casual dining and entertaining.
  
  Smart kitchen controls allow for convenient appliance management, lighting adjustment, and temperature monitoring. A dedicated walk-in pantry was added, complete with built-in organization for easy access to ingredients and tools. This transformation successfully delivers a luxurious culinary workspace tailored for hosting, entertaining, and everyday inspiration.
  `,
    },
    "minimalist-kitchen": {
        label: "Minimalist Kitchen Upgrade",
        title: "Streamlined Minimalist Kitchen Remodel",
        description: "A clutter-free kitchen makeover with sleek cabinetry, neutral tones, and integrated appliances to embrace the beauty of simplicity and function.",
        image: `${static_assets}/images/projects/minimal.jpg`,
        location: "Urban Apartment, Orlando, FL",
        duration: "Completed in 3 weeks",
        materials: [
            "Flat-panel matte white cabinets",
            "Quartz countertops with waterfall edge",
            "Handle-less cabinet systems",
            "Built-in induction cooktop and oven",
            "Integrated refrigerator and dishwasher",
            "Large format tile backsplash",
            "Minimalist pendant lighting",
            "Soft-close drawer mechanisms",
            "Open shelving with LED under-lighting",
            "Touchless faucet"
        ],
        content: `
  This minimalist kitchen upgrade focused on creating a serene, clutter-free environment that enhances both beauty and practicality. Designed for an urban apartment in Orlando, the project emphasized clean lines, neutral palettes, and maximum space efficiency.
  
  Total Care kitchens implemented flat-panel cabinetry with a sleek matte finish, eliminating handles for a smooth, unbroken aesthetic. Quartz countertops with waterfall edges added sophistication, while integrated appliances maintained the streamlined look. A large-format tile backsplash in subtle tones completed the backdrop, enhancing the overall sense of calm.
  
  The design incorporated intelligent storage with soft-close drawers and hidden compartments, as well as open shelving for select display pieces. LED under-lighting and touchless fixtures added modern convenience to this effortlessly elegant space.
  `,
    },
    "industrial-kitchen": {
        label: "Industrial Style Kitchen",
        title: "Bold Industrial Kitchen Transformation",
        description: "A raw and edgy kitchen design featuring exposed elements, metal finishes, and rugged textures to achieve a stylish industrial aesthetic.",
        image: `${static_assets}/images/projects/industrial.jpg`,
        location: "Converted Loft, Tampa, FL",
        duration: "Completed in 4 weeks",
        materials: [
            "Exposed brick backsplash",
            "Concrete-look quartz countertops",
            "Open metal shelving",
            "Matte black lower cabinets",
            "Stainless steel appliances",
            "Industrial pendant lighting",
            "Reclaimed wood accents",
            "Iron pipe pot racks",
            "Rustic wood flooring",
            "Brushed metal bar stools"
        ],
        content: `
  This industrial kitchen project was designed for a converted loft in Tampa, FL, embracing the raw beauty of unfinished materials and bold textures. The homeowners wanted a space that balanced utility and modern design with a strong industrial vibe.
  
  Total Care kitchens executed the vision by incorporating a mix of exposed brick, reclaimed wood, and metal elements. The layout included matte black cabinetry for contrast, paired with concrete-look quartz countertops that added durability and grit. Open shelving in black steel provided both functionality and urban charm.
  
  Stainless steel appliances and industrial lighting fixtures brought sleek contrast to the rough textures, while the wood flooring introduced warmth. Iron piping was creatively used for hanging storage, reinforcing the loft-style aesthetic. The end result is a visually striking kitchen that combines modern convenience with industrial flair.
  `,
    },
    "family-kitchen": {
        label: "Family-Friendly Kitchen",
        title: "Warm and Functional Family Kitchen Makeover",
        description: "A spacious, welcoming kitchen designed to accommodate the needs of a growing family—blending style, safety, and smart organization.",
        image: `${static_assets}/images/projects/family.jpg`,
        location: "Single-Family Home, Winter Garden, FL",
        duration: "Completed in 5 weeks",
        materials: [
            "Soft-close cabinetry",
            "Quartz countertops with rounded edges",
            "Durable vinyl plank flooring",
            "Large central island with seating",
            "Built-in pantry storage",
            "Energy-efficient appliances",
            "Child-safe drawer locks",
            "Adjustable task lighting",
            "Subway tile backsplash",
            "Warm white and natural wood tones"
        ],
        content: `
  Designed for a busy family in Winter Garden, this kitchen makeover by Total Care kitchens prioritized function, safety, and a warm, inviting atmosphere. The layout was optimized for meal prep, school lunches, and family dinners—all in one flexible space.
  
  We installed soft-close cabinetry and quartz countertops with rounded edges to prevent accidents. A large island became the hub of activity, offering seating, storage, and prep space. Vinyl plank flooring was chosen for its durability and easy maintenance—perfect for spills and high traffic.
  
  The kitchen features built-in pantry cabinets and smart drawer organizers to keep everything tidy and accessible. Lighting was upgraded to include task-focused fixtures, making homework, cooking, and entertaining easier. The palette—warm whites, natural wood, and gentle contrasts—makes the space feel homey and timeless. This transformation proves that style and family functionality can go hand in hand.
  `,
    },
    "coastal-kitchen": {
        label: "Coastal Kitchen Remodel",
        title: "Bright and Breezy Coastal Kitchen Transformation",
        description: "A serene kitchen remodel inspired by coastal living, featuring ocean hues, natural textures, and airy design elements for a relaxed and inviting space.",
        image: `${static_assets}/images/projects/costal.jpg`,
        location: "Beachside Condo, Clearwater, FL",
        duration: "Completed in 4 weeks",
        materials: [
            "White shaker cabinets",
            "Sea glass tile backsplash",
            "Light oak hardwood flooring",
            "Quartz countertops in misty blue",
            "Brushed nickel fixtures",
            "Rattan pendant lighting",
            "Open shelving with driftwood accents",
            "Integrated under-cabinet lighting",
            "Coastal-inspired hardware",
            "Soft blue and sand-tone color palette"
        ],
        content: `
  This coastal kitchen remodel, completed in a sunny Clearwater condo, brings the charm and tranquility of the ocean indoors. Total Care kitchens crafted a space that reflects laid-back beach living with refined functionality.
  
  The cabinetry was upgraded to classic white shaker style, paired with soft misty blue quartz countertops that mimic the calming hues of the sea. A sea glass tile backsplash adds a pop of texture and color, complemented by brushed nickel fixtures and rattan pendant lights that bring warmth and casual elegance.
  
  Light oak hardwood flooring ties the look together, while driftwood-accented open shelving offers both display space and a coastal vibe. Integrated under-cabinet lighting ensures the kitchen remains bright and welcoming day or night. The overall palette blends soft blues, whites, and sandy neutrals—evoking a beachy, timeless charm. This transformation created a refreshing space perfect for casual meals, entertaining, or simply enjoying a morning coffee by the shore.
  `,
    },

};

export const projectsImageGallery = [
  `${static_assets}/images/projects/chef_kitchen.jpg`,
  `${static_assets}/images/projects/condo_kitchen.jpg`,
  `${static_assets}/images/projects/costal.jpg`,
  `${static_assets}/images/projects/family.jpg`,
  `${static_assets}/images/projects/farm_house_kitchen.jpg`,
  `${static_assets}/images/projects/industrial.jpg`,
  `${static_assets}/images/projects/minimal.jpg`,
  `${static_assets}/images/projects/open_kitchen.jpg`,
];
/* ------------------------
   TESTIMONAILS START
------------------------ */

export const testimonialsData = [

    {
        "name": "John Davis",
        "role": "Homeowner | Kitchen Remodel",
        "feedback": "Total Care Kitchens completely transformed our outdated kitchen into a modern, functional space we love spending time in. The process was seamless and stress-free!",
    },

    {
        "name": "Rachel Green",
        "role": "Property Manager",
        "feedback": "They handled kitchen upgrades across several rental units. Reliable, responsive, and the new kitchens have added tremendous value to our properties.",
    },

    {
        "name": "Carlos Rivera",
        "role": "Restaurant Owner",
        "feedback": "Our commercial kitchen needed a serious upgrade. Total Care Kitchens delivered a sleek, efficient layout that boosted both workflow and aesthetics.",
    },

    {
        "name": "Lisa Turner",
        "role": "Interior Designer",
        "feedback": "They flawlessly integrated custom kitchen cabinetry and countertops into our design projects. Their craftsmanship elevates every space we collaborate on.",
    },

    {
        "name": "Mark Johnson",
        "role": "Hotel Manager",
        "feedback": "They renovated several of our suites’ kitchenettes with zero disruption to guests. Fast, clean, and professional from start to finish.",
    },

    {
        "name": "Emily Chen",
        "role": "Homeowner | Full Remodel",
        "feedback": "Our old kitchen was cramped and dated. Total Care Kitchens opened up the space beautifully — it now feels like the heart of our home.",
    },

    {
        "name": "David Kim",
        "role": "Real Estate Developer",
        "feedback": "They’ve remodeled kitchens across multiple properties for us. Always on time, on budget, and with finishes that wow potential buyers.",
    },

    {
        "name": "Sophia Allen",
        "role": "Café Owner",
        "feedback": "The kitchen renovation they did for our café completely changed how we operate. More efficient, stylish, and customers love the new vibe.",
    },

    {
        "name": "Nathan Scott",
        "role": "Construction Project Manager",
        "feedback": "Their team coordinated perfectly with our build schedule. The kitchens they installed in our high-rise development look incredible and function flawlessly.",
    },

    {
        "name": "Olivia Perez",
        "role": "Retail Store Owner | Kitchenette",
        "feedback": "We needed a small staff kitchen refresh. Total Care Kitchens delivered smart storage solutions and a polished finish that exceeded expectations.",
    },

    {
        "name": "Jason Brooks",
        "role": "Commercial Building Owner",
        "feedback": "They upgraded the communal kitchen areas in our offices with energy-efficient appliances and modern design. Our tenants couldn’t be happier.",
    },

    {
        "name": "Mia Thompson",
        "role": "Home Renovator | Kitchen",
        "feedback": "Their attention to detail with cabinetry and countertops was exactly what I needed for my renovation project. Highly recommend their team!",
    }

];

