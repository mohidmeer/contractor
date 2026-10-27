const static_assets = "/roofing";

const img = {
  installation: `${static_assets}/images/services/roofers-installation.jpg`,
  metal: `${static_assets}/images/services/metal.jpg`,
  metal2: `${static_assets}/images/services/metal2.jpg`,
  flat: `${static_assets}/images/services/flat.jpg`,
  gutters: `${static_assets}/images/services/gutters.jpg`,
  replacement: `${static_assets}/images/services/replacement.jpg`,
  replacement2: `${static_assets}/images/services/replacement2.jpg`,
  skylight: `${static_assets}/images/services/skylight.jpg`,
  skylight2: `${static_assets}/images/services/skylight2.jpg`,
  skylight3: `${static_assets}/images/services/skylight3.jpg`,
  inspection: `${static_assets}/images/services/inspection.jpg`,
  repair: `${static_assets}/images/services/roof-repair.jpg`,
  emergency: `${static_assets}/images/services/emergency.jpg`,
  ventilation: `${static_assets}/images/services/ventilation.jpg`,
};

type ServiceData = {
  label: string;
  title: string;
  description: string;
  content: string[];
  image: string;
  categorySlug: string;
  typeOfSolutions: { headings: string; types: string[] };
  benefitsOFChoosing: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  images: string[];
};

export const servicesData: Record<string, ServiceData> = {
  "roof-installation": {
    label: "Roof Installation",
    title: "Professional Roof Installation Services in Florida",
    description:
      "Our expert team provides top-quality roof installation services using durable materials to ensure long-lasting protection for your home or business.",
    content: [
      "When it comes to roof installation in Florida, choosing the right roofing contractor is critical. Our team specializes in installing high-quality roofing systems that can withstand Florida's harsh weather conditions, including heavy rain, strong winds, and extreme heat.",
      "We work with top-grade materials like asphalt shingles, metal roofing, tile, and flat roofing solutions to ensure durability and energy efficiency. From new home construction to replacing old roofs, we provide a seamless process, transparent pricing, and guaranteed workmanship.",
      "With our professional roof installation services, you can protect your home, improve curb appeal, and increase property value.",
    ],
    image: img.installation,
    categorySlug: "roof-systems",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Asphalt Shingles",
        "Metal Roofs",
        "Tile Roofs",
        "Flat & Low-Slope Roofs",
        "New Construction",
        "Full Re-Roofs",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Code-Compliant Installations",
        description:
          "Permits handled and installs meet or exceed Florida Building Code and manufacturer specs.",
      },
      {
        title: "Manufacturer-Certified Crew",
        description:
          "Installed by certified pros so you're eligible for extended manufacturer warranties.",
      },
      {
        title: "Weather-Ready Systems",
        description:
          "Assemblies engineered for high wind uplift and heavy rain common across Florida.",
      },
      {
        title: "Energy-Smart Options",
        description:
          "Cool roofs, proper ventilation, and underlayments to cut attic heat and AC load.",
      },
      {
        title: "Clean, On-Schedule Projects",
        description:
          "Tight timelines, daily cleanup, magnetic nail sweep, and respectful crews.",
      },
      {
        title: "Transparent, Fixed Pricing",
        description:
          "Clear proposals with no surprises — scope, materials, and timelines spelled out.",
      },
      {
        title: "Post-Install Quality Check",
        description:
          "Final walkthrough with photos and warranty registration handled for you.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical roof installation take?",
        answer:
          "Most residential installations are completed within 1–3 days, depending on roof size, tear-off, and weather.",
      },
      {
        question: "Do you pull permits for a new roof?",
        answer:
          "Yes. We handle permitting and install to Florida Building Code and the manufacturer's specifications.",
      },
      {
        question: "Which roofing materials can you install?",
        answer:
          "Asphalt shingles, metal, tile, and flat or low-slope systems, selected for your home, HOA, and wind exposure.",
      },
      {
        question: "Is the installation covered by a warranty?",
        answer:
          "Yes. Installations include a workmanship warranty, and certified installs can qualify for extended manufacturer coverage.",
      },
    ],
    images: [img.metal, img.installation],
  },

  "roof-repair": {
    label: "Roof Repair",
    title: "Reliable Roof Repair Solutions in Florida",
    description:
      "We specialize in repairing all types of roof damage, from leaks to broken shingles, restoring the integrity of your roof quickly and effectively.",
    content: [
      "Our roof repair services in Florida are designed to handle any type of roofing damage, whether it's caused by storms, hurricanes, or everyday wear and tear.",
      "We quickly identify leaks, damaged shingles, and structural issues to prevent further damage to your home. Timely repairs can save you from costly replacements, so our team responds promptly and uses high-quality materials to restore your roof's strength.",
      "Whether it's a small repair or an extensive fix, we ensure your roof remains weatherproof, energy-efficient, and ready to handle Florida's unpredictable climate.",
    ],
    image: img.repair,
    categorySlug: "repairs-restoration",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Leak Repair",
        "Shingle & Tile Repair",
        "Flashing Rebuilds",
        "Storm Damage",
        "Valley & Penetration Repair",
        "Deck Repairs",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Fast Leak Stop",
        description:
          "Rapid diagnosis and same-day mitigation to prevent interior damage.",
      },
      {
        title: "Cost-Effective Fixes",
        description:
          "Targeted repairs extend roof life without the cost of full replacement.",
      },
      {
        title: "Storm Damage Specialists",
        description:
          "Shingle resets, flashing rebuilds, and membrane patches for wind and hail events.",
      },
      {
        title: "Upfront Findings",
        description:
          "Photo-documented issues and clear options before any work begins.",
      },
      {
        title: "Quality Materials, Matched",
        description:
          "Repairs blend with the existing roof — profile, color, and manufacturer.",
      },
      {
        title: "Workmanship Warranty",
        description: "Backed repairs with fair, written coverage.",
      },
      {
        title: "Preventive Maintenance Plans",
        description: "Optional tune-ups to reduce future leaks and surprises.",
      },
    ],
    faqs: [
      {
        question: "Can a repair avoid a full roof replacement?",
        answer:
          "Often yes, when the deck is sound and damage is localized. We'll tell you clearly when replacement is the better investment.",
      },
      {
        question: "How fast can you stop an active leak?",
        answer:
          "We prioritize active leaks and can often dry in the area the same day to protect interiors.",
      },
      {
        question: "Will the repair match my existing roof?",
        answer:
          "We match profile, color, and manufacturer as closely as available stock allows so the repair blends in.",
      },
      {
        question: "Do you repair both residential and commercial roofs?",
        answer:
          "Yes. We repair shingle, tile, metal, and flat or low-slope systems on homes and commercial buildings.",
      },
    ],
    images: [img.flat, img.repair],
  },

  gutters: {
    label: "Gutter Services",
    title: "Comprehensive Gutter Services in Florida",
    description:
      "Keep your roof drainage system efficient with our gutter installation, cleaning, and repair services to protect your property from water damage.",
    content: [
      "Our gutter services in Florida are designed to keep your property safe from water damage caused by heavy rain and storms. We provide professional gutter installation using durable materials that withstand Florida's harsh weather conditions.",
      "We also offer routine gutter cleaning to prevent blockages and overflow, as well as expert repairs for damaged or leaking gutters.",
      "A properly functioning gutter system protects your roof, fascia, foundation, and landscaping. Trust our team to deliver reliable solutions that maintain the safety and value of your home year-round.",
    ],
    image: img.gutters,
    categorySlug: "roof-accessories",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Seamless Gutters",
        "Gutter Repair",
        "Gutter Cleaning",
        "Downspouts",
        "Gutter Guards",
        "Fascia Tie-In",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Protects Foundation & Fascia",
        description:
          "Directs water away to prevent erosion, wood rot, and moisture at the foundation.",
      },
      {
        title: "Seamless Custom Fit",
        description:
          "On-site formed gutters with fewer joints and fewer leak points.",
      },
      {
        title: "Correct Pitch & Downspout Sizing",
        description:
          "Designed for Florida downpours to avoid overflow and pooling.",
      },
      {
        title: "Guards & Screens",
        description:
          "Leaf protection options to minimize clogs and cleaning frequency.",
      },
      {
        title: "Durable Finishes",
        description:
          "Aluminum and steel with baked-on coatings that resist salt air and UV.",
      },
      {
        title: "Clean Install, Clean Site",
        description:
          "Drainage tuned, splash blocks added, and debris hauled away.",
      },
      {
        title: "Integrated Roof Warranty Care",
        description: "Installed without voiding roof manufacturer warranties.",
      },
    ],
    faqs: [
      {
        question: "Do you install seamless gutters?",
        answer:
          "Yes. We form seamless gutters on site so there are fewer joints and fewer places for leaks to start.",
      },
      {
        question: "How often should gutters be cleaned in Florida?",
        answer:
          "Most homes benefit from cleaning at least twice a year, and more often if trees overhang the roof.",
      },
      {
        question: "Can gutter guards reduce maintenance?",
        answer:
          "Guards cut down debris, but they still need occasional inspection. We recommend a system that matches your tree cover.",
      },
      {
        question: "Will new gutters affect my roof warranty?",
        answer:
          "We fasten and flash gutters so the roof system stays intact and manufacturer warranties are not voided.",
      },
    ],
    images: [img.replacement, img.skylight],
  },

  "roof-inspection": {
    label: "Roof Inspection",
    title: "Detailed Roof Inspection Services in Florida",
    description:
      "Our thorough roof inspections identify issues early, helping you avoid costly repairs and extend the lifespan of your roofing system.",
    content: [
      "Our roof inspection services in Florida provide homeowners and businesses with a detailed assessment of their roofing system. Regular inspections help identify leaks, storm damage, and wear before they turn into expensive problems.",
      "Our inspectors check for missing shingles, water intrusion, ventilation issues, and structural concerns to ensure your roof remains in top condition.",
      "Whether you are preparing for hurricane season, buying or selling a property, or planning maintenance, a thorough inspection protects your investment and extends the life of the roof.",
    ],
    image: img.inspection,
    categorySlug: "inspections-maintenance",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Annual Maintenance Inspections",
        "Storm Damage Assessments",
        "Pre-Listing Inspections",
        "Insurance Documentation",
        "Attic & Ventilation Checks",
        "Buyer Due Diligence",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Early Problem Detection",
        description:
          "Catch small issues — loose flashing, nail pops, failing sealant — before they escalate.",
      },
      {
        title: "Comprehensive Reporting",
        description:
          "Photo-rich report with condition grades and prioritized actions.",
      },
      {
        title: "Insurance-Ready Documentation",
        description:
          "Evidence you can use for claims after storms or when selling.",
      },
      {
        title: "Ventilation & Moisture Check",
        description:
          "Attic assessment to spot heat buildup, mold risk, or inadequate airflow.",
      },
      {
        title: "Maintenance Roadmap",
        description: "Clear next steps, timelines, and budget ranges.",
      },
      {
        title: "Buyer/Seller Confidence",
        description:
          "Pre-listing or due-diligence inspections that speed up closings.",
      },
      {
        title: "Code & Safety Review",
        description: "Notes on compliance and rooftop safety items.",
      },
    ],
    faqs: [
      {
        question: "Are roof inspections free?",
        answer:
          "Yes. We provide free inspections and estimates for roofing work across Florida.",
      },
      {
        question: "What does the inspection report include?",
        answer:
          "Photos, condition notes, and a prioritized list of repairs so you know what is urgent and what can wait.",
      },
      {
        question: "Can an inspection support an insurance claim?",
        answer:
          "Yes. We document storm damage with photos and findings you can share with your carrier.",
      },
      {
        question: "How often should a Florida roof be inspected?",
        answer:
          "At least once a year, and again after a major storm, so small defects don't become interior leaks.",
      },
    ],
    images: [img.inspection, img.installation, img.repair],
  },

  "emergency-roof-repair": {
    label: "Emergency Roof Repair",
    title: "24/7 Emergency Roof Repair Services in Florida",
    description:
      "We offer fast, reliable emergency roof repair to protect your property during storms or unexpected damage.",
    content: [
      "When severe storms or unexpected damage strike, you need a roofing team you can count on. Our emergency roof repair services in Florida are available to protect your home or business from further harm.",
      "Whether you're dealing with leaks, missing shingles, or storm-related structural issues, we respond quickly to restore your roof's integrity.",
      "Florida's unpredictable weather makes immediate action critical. Our team uses quality materials for lasting repairs so you can minimize damage, avoid a rushed full replacement, and keep the property safe.",
    ],
    image: img.emergency,
    categorySlug: "storm-emergency",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Emergency Tarping",
        "Active Leak Dry-In",
        "Storm Damage Repair",
        "Missing Shingle Replacement",
        "Temporary Weatherproofing",
        "Insurance Photo Documentation",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Rapid Response",
        description: "On-call teams to secure your property when a roof is open to weather.",
      },
      {
        title: "Immediate Tarping & Dry-In",
        description: "Stop active leaks fast to protect interiors and contents.",
      },
      {
        title: "Storm-Grade Repairs",
        description: "Temporary fixes that transition cleanly into permanent solutions.",
      },
      {
        title: "Insurance Coordination Help",
        description:
          "Photos, notes, and estimates you can use when filing a claim.",
      },
      {
        title: "Safety-First Operations",
        description:
          "Proper fall protection and checks for electrical or structural hazards.",
      },
      {
        title: "Debris & Water Mitigation",
        description: "Remove hazards and limit water intrusion while the roof is open.",
      },
      {
        title: "Clear, Upfront Pricing",
        description: "Emergency scope and pricing explained before work begins.",
      },
    ],
    faqs: [
      {
        question: "What counts as a roofing emergency?",
        answer:
          "Active leaks, missing sections of roof, storm openings, or any condition letting water into the building.",
      },
      {
        question: "Do you tarp roofs after a storm?",
        answer:
          "Yes. We dry in and tarp openings so interiors stay protected until a permanent repair can be scheduled.",
      },
      {
        question: "Can you help document storm damage?",
        answer:
          "Yes. We photograph damage and provide a written scope you can share with your insurance company.",
      },
      {
        question: "Will an emergency repair become the permanent fix?",
        answer:
          "Sometimes a localized repair is permanent. If the roof needs replacement, the dry-in holds until that work is scheduled.",
      },
    ],
    images: [img.emergency, img.repair],
  },

  "flat-roofing": {
    label: "Flat Roofing",
    title: "Specialized Flat Roofing Services in Florida",
    description:
      "We provide installation, maintenance, and repair for flat roofing systems, ensuring proper sealing and durability for your structure.",
    content: [
      "Flat roofing is a popular choice for many commercial and residential buildings in Florida, and our team specializes in installing and maintaining these systems.",
      "We install flat and low-slope roofs with premium membranes designed to resist ponding and withstand Florida's heavy rains and high humidity. Maintenance and repair keep the system leak-free and energy-efficient.",
      "From waterproof membranes to proper drainage detailing, we provide solutions that extend the life of your flat roof and keep the property protected year-round.",
    ],
    image: img.flat,
    categorySlug: "commercial",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "TPO Membranes",
        "PVC Membranes",
        "EPDM / Rubber Roofs",
        "Modified Bitumen",
        "Coatings & Restoration",
        "Drainage & Tapered Insulation",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Ponding Prevention",
        description:
          "Tapered insulation and proper drains to move water off the roof.",
      },
      {
        title: "High-Performance Membranes",
        description:
          "TPO, PVC, and EPDM options with sealed seams for durability.",
      },
      {
        title: "Cool Roof Efficiency",
        description:
          "Reflective surfaces that reduce heat gain and energy costs.",
      },
      {
        title: "Low-Odor Install Options",
        description:
          "Adhered and mechanically fastened systems for occupied buildings.",
      },
      {
        title: "Long Commercial Warranties",
        description:
          "Manufacturer coverage when the system and install qualify.",
      },
      {
        title: "Equipment Coordination",
        description:
          "Curbs and penetrations flashed correctly around HVAC and other rooftop equipment.",
      },
      {
        title: "Minimal Downtime",
        description: "Phased work plans to keep your operation running.",
      },
    ],
    faqs: [
      {
        question: "Which flat roof membrane is best in Florida?",
        answer:
          "TPO, PVC, and EPDM all perform well when detailed correctly. We recommend a system based on traffic, chemicals, and budget.",
      },
      {
        question: "Can you repair a flat roof without replacing it?",
        answer:
          "Yes, when the membrane and deck are still sound. We patch seams, flashings, and localized failures, or restore with a coating when appropriate.",
      },
      {
        question: "How do you handle standing water?",
        answer:
          "We correct drains, add crickets or tapered insulation, and repair low spots so water leaves the roof instead of ponding.",
      },
      {
        question: "Will the building need to close during the work?",
        answer:
          "Usually not. We phase commercial flat roof projects so tenants and operations can stay open.",
      },
    ],
    images: [img.flat, img.repair],
  },

  "metal-roofing": {
    label: "Metal Roofing",
    title: "Durable Metal Roofing Solutions in Florida",
    description:
      "Our metal roofing services deliver strength, energy efficiency, and modern aesthetics for residential and commercial properties.",
    content: [
      "Metal roofing is one of the most durable and energy-efficient roofing options for Florida homes and businesses. Our team provides professional metal roof installation and replacement that improves both protection and appearance.",
      "Metal roofs resist hurricanes, heavy rain, and extreme heat, which makes them a strong fit for Florida's climate. Reflective finishes can also help reduce cooling costs.",
      "We offer a range of profiles and colors to match the property, so you get a long-lasting roof that still looks right for the building.",
    ],
    image: img.metal,
    categorySlug: "roof-systems",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Standing Seam",
        "Exposed-Fastener Panels",
        "Metal over Shingles",
        "Commercial Metal Roofs",
        "Coastal / Salt-Air Systems",
        "Color-Matched Finishes",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Hurricane-Ready Strength",
        description: "High wind-rated panels and secure fastening systems.",
      },
      {
        title: "Energy Savings",
        description:
          "Reflective finishes and proper underlayment reduce cooling loads.",
      },
      {
        title: "Decades of Service Life",
        description:
          "Metal roofs often outlast shingles with lower day-to-day maintenance.",
      },
      {
        title: "Modern Curb Appeal",
        description:
          "Standing seam and textured profiles in a range of colors.",
      },
      {
        title: "Fire & Impact Resistance",
        description: "Non-combustible panels that stand up to wind-borne debris.",
      },
      {
        title: "Quiet, Comfortable Interiors",
        description: "Underlayments and decking that dampen rain noise.",
      },
      {
        title: "Sustainable Choice",
        description:
          "Often made with recycled content and recyclable at the end of its life.",
      },
    ],
    faqs: [
      {
        question: "Are metal roofs noisy in the rain?",
        answer:
          "A properly installed metal roof over solid decking and underlayment is much quieter than an open porch roof. Most homeowners notice little difference from shingles.",
      },
      {
        question: "Can metal be installed over an existing shingle roof?",
        answer:
          "Sometimes, if the deck is sound and code allows it. We'll inspect first and recommend tear-off when the deck or layers won't support a retrofit.",
      },
      {
        question: "How well do metal roofs handle salt air?",
        answer:
          "We specify finishes and fasteners suited to coastal exposure so the system resists corrosion.",
      },
      {
        question: "How long does a metal roof last in Florida?",
        answer:
          "A quality metal roof commonly lasts several decades with routine inspections, far longer than a typical shingle roof.",
      },
    ],
    images: [img.metal, img.metal2],
  },

  "shingle-replacement": {
    label: "Shingle Replacement",
    title: "Expert Shingle Replacement Services in Florida",
    description:
      "We replace damaged or aging shingles to maintain your roof's protection and curb appeal with high-quality materials.",
    content: [
      "Shingle roofs are common in Florida, but harsh sunlight, heavy rain, and strong winds can cause shingles to crack, curl, or blow off. Our shingle replacement services keep the roof weather-resistant and visually consistent.",
      "We use premium shingles designed for Florida's climate, whether you need a partial repair or a full re-roof.",
      "Precise installation boosts protection and curb appeal while extending the life of the roofing system.",
    ],
    image: img.replacement,
    categorySlug: "residential",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Architectural Shingles",
        "Impact-Resistant Shingles",
        "Partial Replacement",
        "Full Tear-Off & Re-Roof",
        "Ridge & Starter Systems",
        "Underlayment Upgrades",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Seamless Color Matching",
        description:
          "Profiles and colors selected to blend with your existing roof or HOA rules.",
      },
      {
        title: "Wind-Rated Shingles",
        description:
          "High-performance shingles with enhanced seal strips for Florida winds.",
      },
      {
        title: "Leak-Stopping Underlayments",
        description:
          "Premium waterproof underlayment and flashing at valleys and penetrations.",
      },
      {
        title: "Ventilation Upgrades",
        description:
          "Ridge and soffit improvements that extend shingle life and improve comfort.",
      },
      {
        title: "Fast, Tidy Turnaround",
        description:
          "Tear-off, replacement, and full cleanup — usually within a few days.",
      },
      {
        title: "Manufacturer Backed",
        description:
          "Eligibility for extended system warranties with certified installs.",
      },
      {
        title: "Responsible Disposal",
        description: "Old shingles hauled away and recycled where facilities allow.",
      },
    ],
    faqs: [
      {
        question: "Should I replace a few shingles or the whole roof?",
        answer:
          "Localized wind damage can often be repaired. Widespread granule loss, curling, or repeated leaks usually means a full replacement is the better value.",
      },
      {
        question: "Do you match existing shingle color?",
        answer:
          "We match manufacturer, profile, and color as closely as current product lines allow, including HOA requirements.",
      },
      {
        question: "How long does shingle replacement take?",
        answer:
          "Most homes are completed in 1–3 days, including tear-off, dry-in, and cleanup.",
      },
      {
        question: "Will you upgrade underlayment during replacement?",
        answer:
          "Yes. We install synthetic underlayment and water barrier at valleys, eaves, and penetrations as part of a proper system.",
      },
    ],
    images: [img.replacement, img.replacement2, img.metal2],
  },

  "skylight-installation": {
    label: "Skylight Installation",
    title: "Professional Skylight Installation Services in Florida",
    description:
      "Add natural light and style to your space with our expert skylight installation, ensuring proper sealing and energy efficiency.",
    content: [
      "Skylights bring natural light into living spaces and can reduce the need for artificial lighting. Our team installs them with factory flashing and proper sealing so Florida rain stays outside.",
      "We offer fixed and vented options sized and placed for the room, the roof structure, and the way you use the space.",
      "A correctly flashed skylight adds daylight and comfort without becoming a leak point.",
    ],
    image: img.skylight,
    categorySlug: "roof-accessories",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Fixed Skylights",
        "Vented Skylights",
        "Curb-Mounted Units",
        "Leak Repair & Re-Flashing",
        "Replacement of Failed Units",
        "Sun Tunnels",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Brighter, Healthier Spaces",
        description:
          "Daylighting reduces reliance on artificial lighting during the day.",
      },
      {
        title: "Leak-Proof Flashing Systems",
        description:
          "Factory flashing kits and curb details that stand up to heavy rain.",
      },
      {
        title: "Energy-Efficient Glazing",
        description: "Low-E glass options that cut heat gain and UV.",
      },
      {
        title: "Custom Placement",
        description:
          "Positioned for the room, roof slope, and structure — not just wherever a hole fits.",
      },
      {
        title: "Vented & Smart Options",
        description:
          "Manual or electric venting, shades, and rain sensors are available.",
      },
      {
        title: "Clean Interior Finishes",
        description: "Shafts, trim, and paint finished to match the room.",
      },
      {
        title: "Warranty & Compliance",
        description:
          "Products and installs that meet code and carry manufacturer warranties.",
      },
    ],
    faqs: [
      {
        question: "Do skylights leak in Florida rain?",
        answer:
          "A skylight leaks when flashing or the curb fails. We use manufacturer flashing kits and seal the opening so water sheds off the roof, not into it.",
      },
      {
        question: "Can you replace an old leaking skylight?",
        answer:
          "Yes. We remove the failed unit, repair the deck if needed, and install a new flashed skylight.",
      },
      {
        question: "Fixed or vented — which should I choose?",
        answer:
          "Fixed units maximize light. Vented units add airflow and are useful in bathrooms and kitchens. We'll recommend based on the room.",
      },
      {
        question: "Will a skylight make the room hotter?",
        answer:
          "Low-E glazing and proper placement limit heat gain. We specify glass suited to Florida sun exposure.",
      },
    ],
    images: [img.skylight, img.skylight2, img.skylight3],
  },

  "roof-ventilation": {
    label: "Roof Ventilation",
    title: "Efficient Roof Ventilation Services in Florida",
    description:
      "Improve your attic airflow and extend your roof's lifespan with our professional roof ventilation solutions.",
    content: [
      "Proper roof ventilation is essential in Florida to prevent heat buildup, moisture problems, and premature roof aging. Balanced attic airflow helps regulate indoor temperatures and reduce cooling costs.",
      "By moving trapped heat and humidity out of the attic, ventilation protects the deck from moisture damage and helps shingles last longer.",
      "Our team designs intake and exhaust that work together in Florida's hot, humid climate so the roof system performs the way it was intended.",
    ],
    image: img.ventilation,
    categorySlug: "roof-accessories",
    typeOfSolutions: {
      headings: "Solutions we offer",
      types: [
        "Ridge Vents",
        "Soffit Intake",
        "Off-Ridge Vents",
        "Attic Baffles",
        "Static Exhaust Vents",
        "Ventilation Balancing",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Cooler Attic Temperatures",
        description:
          "Balanced intake and exhaust lower heat buildup and ease the load on air conditioning.",
      },
      {
        title: "Extended Roof Lifespan",
        description:
          "Proper airflow reduces shingle aging and stress on the underlayment.",
      },
      {
        title: "Moisture Control",
        description:
          "Helps remove humidity that can damage decking and insulation.",
      },
      {
        title: "Right-Sized System Design",
        description:
          "Intake and exhaust calculated for your roof, not a one-size vent added at random.",
      },
      {
        title: "Quiet, Low-Profile Hardware",
        description: "Vents that perform without dominating the roofline.",
      },
      {
        title: "Sealed to Stay Leak-Free",
        description:
          "Flashing and fasteners installed to withstand severe weather.",
      },
      {
        title: "Energy Savings",
        description:
          "A cooler attic reduces cooling costs in Florida's heat.",
      },
    ],
    faqs: [
      {
        question: "Why does attic ventilation matter in Florida?",
        answer:
          "Heat and humidity build up fast. Balanced ventilation protects the deck, helps shingles last, and can lower cooling demand.",
      },
      {
        question: "Is a ridge vent enough by itself?",
        answer:
          "No. Exhaust needs matching intake, usually at the soffits. We balance both so air actually moves.",
      },
      {
        question: "Can you add ventilation during a re-roof?",
        answer:
          "Yes. A replacement is the best time to correct blocked soffits, add baffles, and install a proper ridge vent.",
      },
      {
        question: "Will new vents leak?",
        answer:
          "Vents leak when they are poorly flashed. We install and seal them as part of the roof system so water stays out.",
      },
    ],
    images: [img.ventilation, img.flat],
  },
};
