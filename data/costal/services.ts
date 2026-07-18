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
  "epoxy-injection": {
    label: "Epoxy Injection",
    title: "Epoxy Injection for Structural Concrete Crack Repair",
    description:
      "Pressure-inject low-viscosity epoxy into dormant cracks to restore structural bond and seal against moisture and chloride intrusion.",
    content: [
      "Pressure-injecting low-viscosity epoxy resin (typically 50–200 psi) into dormant cracks 0.002\"–0.5\" wide restores structural bond across the crack and seals it against moisture and chloride intrusion — essentially \"welding\" the crack back together.",
      "At Costal Concrete, epoxy injection is used on parking garages, high-rises, bridges, and industrial floors where non-moving structural cracks show no active corrosion. Work follows ACI 224.1R, ACI 503.7, ASTM C881, and ICRI 210.1R guidance for Florida commercial structures.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: [
        "Parking garages",
        "High-rises",
        "Bridges",
        "Industrial floors",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Non-moving structural cracks with no active corrosion that need bond restoration and moisture sealing.",
      },
      {
        title: "Standards & references",
        description: "ACI 224.1R, ACI 503.7, ASTM C881, ICRI 210.1R",
      },
    ],
    faqs: [
      {
        question: "When is epoxy injection the right repair?",
        answer:
          "When cracks are dormant (not actively moving) and there is no ongoing corrosion that would reopen the repair.",
      },
      {
        question: "How wide of a crack can epoxy injection treat?",
        answer:
          "Typically cracks from about 0.002\" to 0.5\" wide, using low-viscosity resins injected under controlled pressure.",
      },
    ],
    images: [],
  },

  "carbon-fiber-reinforcement": {
    label: "Carbon Fiber Reinforcement (CFRP/FRP)",
    title: "Carbon Fiber (CFRP/FRP) Concrete Strengthening",
    description:
      "Bond high-tensile carbon fiber fabric or plates with epoxy to add flexural strength without significant weight or section depth.",
    content: [
      "Bonding high-tensile-strength carbon fiber fabric or plates to a prepared concrete surface with epoxy resin adds tensile and flexural strength without significant weight or section depth.",
      "Costal Concrete applies CFRP/FRP for load-capacity upgrades, seismic retrofit, and deficient or under-designed members on parking garages, bridges, high-rises, and industrial floors — guided by ACI 440.2R and ACI 562.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: [
        "Parking garages",
        "Bridges",
        "High-rises",
        "Industrial floors",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Load-capacity upgrades, seismic retrofit, or deficient/under-designed structural members.",
      },
      {
        title: "Standards & references",
        description: "ACI 440.2R, ACI 562",
      },
    ],
    faqs: [
      {
        question: "Why choose CFRP instead of adding concrete or steel?",
        answer:
          "CFRP adds high tensile capacity with minimal weight and almost no increase in member depth — ideal where clearance or dead load matters.",
      },
    ],
    images: [],
  },

  "post-tension-cable-repair": {
    label: "Post-Tension Cable Repair",
    title: "Post-Tension (PT) Cable Repair for Elevated Slabs",
    description:
      "Locate, expose, splice or replace, and re-stress corroded or broken post-tensioned tendons in elevated concrete slabs.",
    content: [
      "Post-tension cable repair involves locating, exposing, de-tensioning, splicing or replacing, and re-stressing broken or corroded post-tensioned steel tendons embedded in elevated concrete slabs.",
      "This is a common failure point in older Florida parking garages. Costal Concrete performs PT repairs on parking garages, elevated slabs, and balconies following ICRI post-tensioned garage repair guidance.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Parking garages", "Elevated slabs", "Balconies"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Corroded or severed PT strands — a frequent failure mode in older Florida garages.",
      },
      {
        title: "Standards & references",
        description: "ICRI Post-Tensioned Garage Repair guidance",
      },
    ],
    faqs: [
      {
        question: "Why are PT cables a Florida concern?",
        answer:
          "Coastal chloride exposure and aging mid-century garage stock accelerate tendon corrosion, making PT repair a high-frequency commercial need.",
      },
    ],
    images: [],
  },

  "spalling-remediation": {
    label: "Spalling Remediation",
    title: "Concrete Spalling Remediation & Patch Repair",
    description:
      "Remove delaminated concrete cover caused by rebar corrosion and patch with compatible repair mortar to restore section and finish.",
    content: [
      "Spalling remediation removes deteriorated or delaminated concrete cover caused by expanding corrosion products around rebar, then patches with compatible repair mortar to restore surface finish and structural section.",
      "Costal Concrete performs sounding surveys and repairs on parking garages, balconies, bridges, and seawalls using ICRI Guideline No. 310.1R for surface prep and ACI 546R for repair practice.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Parking garages", "Balconies", "Bridges", "Seawalls"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Visible cracking, rust staining, or hollow-sounding concrete on a sounding survey.",
      },
      {
        title: "Standards & references",
        description: "ICRI Guideline No. 310.1R, ACI 546R",
      },
    ],
    faqs: [
      {
        question: "What causes spalling in Florida?",
        answer:
          "Chloride-induced corrosion of reinforcing steel expands rust products that crack and push off the concrete cover — the dominant coastal failure mode.",
      },
    ],
    images: [],
  },

  "expansion-joint-repair": {
    label: "Expansion Joint Repair / Replacement",
    title: "Expansion Joint Repair & Replacement",
    description:
      "Repair or replace joint systems that accommodate movement between concrete sections and keep water off reinforcement below.",
    content: [
      "Expansion joint repair or replacement restores gland, header, and sealant systems that accommodate thermal and structural movement between concrete sections, preventing water from reaching reinforcement below.",
      "Applied on parking garages, bridges, and stadiums when glands tear, headers crack, or water staining appears below joints — following ICRI joint maintenance guidelines.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Parking garages", "Bridges", "Stadiums"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Gland tears, header cracking, or water staining below joints.",
      },
      {
        title: "Standards & references",
        description: "ICRI joint maintenance guidelines",
      },
    ],
    faqs: [],
    images: [],
  },

  "concrete-resurfacing-overlays": {
    label: "Concrete Resurfacing / Overlay Systems",
    title: "Concrete Resurfacing & Overlay Systems",
    description:
      "Apply polymer-modified, epoxy, or polyurea overlays to restore wearing surfaces and extend service life without full replacement.",
    content: [
      "Concrete resurfacing and overlay systems apply a new polymer-modified cementitious, epoxy, or polyurea overlay over existing sound concrete to restore the wearing surface, improve abrasion and chemical resistance, and extend service life without full replacement.",
      "Ideal for industrial floors, parking decks, and retail floors when surface wear or shallow spalling does not justify full-depth repair. Surface profiling follows ICRI 310.2R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Industrial floors", "Parking decks", "Retail floors"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Surface wear, spalling too shallow for full-depth repair, or aesthetic renewal.",
      },
      {
        title: "Standards & references",
        description: "ICRI 310.2R surface profiling",
      },
    ],
    faqs: [],
    images: [],
  },

  "structural-crack-repair": {
    label: "Structural Crack Repair",
    title: "Structural Crack Repair — Routing, Sealing & Stitching",
    description:
      "Route and seal moving cracks with flexible sealant, or stitch larger structural cracks to restore tensile capacity.",
    content: [
      "Structural crack repair covers two related methods: routing widens an active or moving crack into a groove filled with flexible sealant (non-structural); stitching embeds metal staples or dowels across a crack to mechanically restore tensile capacity for larger structural cracks.",
      "Used on bridges, industrial floors, and retaining walls when cracks are unsuitable for rigid epoxy injection — per ACI 224.1R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Bridges", "Industrial floors", "Retaining walls"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Active or moving cracks unsuitable for rigid epoxy injection.",
      },
      {
        title: "Standards & references",
        description: "ACI 224.1R",
      },
    ],
    faqs: [],
    images: [],
  },

  "waterproofing-coatings-membranes": {
    label: "Waterproofing Coatings & Membranes",
    title: "Waterproofing Coatings & Membrane Systems",
    description:
      "Fluid-applied or sheet membranes and elastomeric coatings that block water intrusion and protect embedded steel.",
    content: [
      "Waterproofing coatings and membrane systems include fluid-applied or sheet membranes and elastomeric coatings applied to decks, plazas, and below-grade concrete to block water intrusion and protect embedded steel from corrosion.",
      "Costal Concrete installs these systems on high-rises, parking decks, balconies, and plazas for leaks, ponding, and planter waterproofing failure — aligned with ACI 515 and ASTM waterproofing standards.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["High-rises", "Parking decks", "Balconies", "Plazas"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Leaks, ponding, or planter/plaza waterproofing failure.",
      },
      {
        title: "Standards & references",
        description: "ACI 515, ASTM waterproofing standards",
      },
    ],
    faqs: [],
    images: [],
  },

  "cathodic-protection": {
    label: "Cathodic Protection",
    title: "Cathodic Protection for Reinforced Concrete",
    description:
      "Impressed-current or galvanic systems that stop or slow corrosion in chloride-contaminated concrete without removing all contaminated material.",
    content: [
      "Cathodic protection is an electrochemical corrosion-control system — impressed current or galvanic sacrificial anodes — that stops or slows ongoing corrosion of reinforcing steel in chloride-contaminated concrete without removing all contaminated concrete.",
      "Applied on parking garages, bridges, and marine/seawall structures when chloride content exceeds corrosion thresholds or spalling keeps recurring. References include NACE/AMPP SP0290 and ACI 222R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: [
        "Parking garages",
        "Bridges",
        "Marine / seawall structures",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Chloride content above corrosion threshold or recurring spalling.",
      },
      {
        title: "Standards & references",
        description: "NACE/AMPP SP0290, ACI 222R",
      },
    ],
    faqs: [],
    images: [],
  },

  "shotcrete-gunite-repair": {
    label: "Shotcrete / Gunite Repair",
    title: "Shotcrete & Gunite Structural Repair",
    description:
      "Pneumatically apply high-velocity sprayed concrete for vertical and overhead repairs where formwork is impractical.",
    content: [
      "Shotcrete/gunite repair pneumatically applies high-velocity sprayed concrete or mortar for structural repairs on vertical or overhead surfaces, or where conventional formwork is impractical.",
      "Costal Concrete uses shotcrete on retaining walls, seawalls, tunnels, and industrial structures for large-area rehab — guided by ACI 506R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: [
        "Retaining walls",
        "Seawalls",
        "Tunnels",
        "Industrial structures",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Large-area vertical or overhead repairs and retaining wall rehab.",
      },
      {
        title: "Standards & references",
        description: "ACI 506R",
      },
    ],
    faqs: [],
    images: [],
  },

  "polyurethane-injection": {
    label: "Polyurethane Injection",
    title: "Polyurethane Injection for Active Water Leaks",
    description:
      "Inject flexible polyurethane into active cracks or joints to stop water infiltration on damp substrates.",
    content: [
      "Polyurethane injection uses low-viscosity flexible polyurethane resin in active or moving cracks and joints. Unlike epoxy, it bonds to damp or wet substrates and remains flexible — suited to stopping water infiltration rather than restoring structural strength.",
      "Ideal for below-grade walls, foundations, and active leaking cracks that open and close. Related material standards include ASTM C881 Type I/II variants.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: [
        "Below-grade walls",
        "Foundations",
        "Active leaking cracks",
      ],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Active water infiltration or leaking cracks that open and close.",
      },
      {
        title: "Standards & references",
        description: "ASTM C881 (Type I/II variants)",
      },
    ],
    faqs: [
      {
        question: "Epoxy vs polyurethane injection?",
        answer:
          "Epoxy restores structural bond in dry, dormant cracks. Polyurethane stops water in wet, moving cracks and stays flexible.",
      },
    ],
    images: [],
  },

  "structural-strengthening-underpinning": {
    label: "Structural Strengthening & Underpinning",
    title: "Structural Strengthening & Underpinning",
    description:
      "FRP, steel plate bonding, jacketing, micropiles, and helical piers to increase capacity or correct settlement.",
    content: [
      "Structural strengthening and underpinning is an umbrella for methods — FRP, steel plate bonding, concrete jacketing, micropiles, and helical piers — that increase load capacity or arrest/correct foundation settlement.",
      "Used on high-rises, industrial buildings, and bridges for load-rating deficiencies, settlement, or code upgrade requirements under ACI 562 and ACI 437R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["High-rises", "Industrial buildings", "Bridges"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Load rating deficiencies, settlement, or code upgrade requirements.",
      },
      {
        title: "Standards & references",
        description: "ACI 562, ACI 437R",
      },
    ],
    faqs: [],
    images: [],
  },

  "rebar-replacement": {
    label: "Rebar Replacement / Reinforcement Repair",
    title: "Rebar Replacement & Reinforcement Repair",
    description:
      "Remove corroded reinforcing steel and install new rebar with proper splices as part of full-depth structural repair.",
    content: [
      "Rebar replacement and reinforcement repair removes corroded reinforcing steel and installs new rebar (with dowel or splice bars as needed) as part of full-depth structural concrete repair.",
      "Performed on parking garages, bridges, and balconies when section loss on reinforcement exceeds repair thresholds — per ACI 546R.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Parking garages", "Bridges", "Balconies"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Section loss on reinforcement exceeding repair thresholds.",
      },
      {
        title: "Standards & references",
        description: "ACI 546R",
      },
    ],
    faqs: [],
    images: [],
  },

  hydrodemolition: {
    label: "Hydrodemolition",
    title: "Hydrodemolition Concrete Removal",
    description:
      "High-pressure water jets selectively remove deteriorated concrete without micro-fracturing sound concrete or damaging rebar.",
    content: [
      "Hydrodemolition uses high-pressure water jets (10,000–20,000+ psi) to selectively remove deteriorated concrete without micro-fracturing sound concrete or damaging existing rebar.",
      "Used on bridge decks and large industrial floors for large-scale rehabilitation requiring precise removal, following FHWA/DOT hydrodemolition specifications.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Bridge decks", "Large industrial floors"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Large-scale deck or slab rehabilitation requiring precise removal.",
      },
      {
        title: "Standards & references",
        description: "FHWA/DOT hydrodemolition specs",
      },
    ],
    faqs: [],
    images: [],
  },

  "joint-sealant-replacement": {
    label: "Joint Sealant Replacement",
    title: "Joint Sealant Replacement",
    description:
      "Remove failed sealant from control, construction, and expansion joints and install new sealant for a watertight envelope.",
    content: [
      "Joint sealant replacement removes aged, cracked, or debonded sealant from control, construction, and expansion joints and installs new sealant to maintain a watertight envelope.",
      "Applicable across all structure types when sealant fails through adhesive or cohesive cracking — referenced to ASTM C920.",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["All structure types"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description: "Sealant failure, adhesive or cohesive cracking.",
      },
      {
        title: "Standards & references",
        description: "ASTM C920",
      },
    ],
    faqs: [],
    images: [],
  },

  "elastomeric-traffic-coating": {
    label: "Elastomeric / Traffic Coating Systems",
    title: "Elastomeric & Protective Traffic Coating Systems",
    description:
      "Flexible, UV- and chemical-resistant traffic-bearing membranes that waterproof and protect parking decks.",
    content: [
      "Elastomeric and protective traffic coating systems are flexible, UV- and chemical-resistant traffic-bearing membranes applied over parking decks. They combine waterproofing with wear resistance for vehicular and pedestrian traffic.",
      "Used on parking garages and elevated decks for waterproofing renewal and traffic-bearing surface wear, following ICRI and manufacturer systems (e.g., Sika, Tremco).",
    ],
    image: "",
    categorySlug: "repair-methods",
    typeOfSolutions: {
      headings: "Typical structures",
      types: ["Parking garages", "Elevated parking decks"],
    },
    benefitsOFChoosing: [
      {
        title: "Triggered by",
        description:
          "Deck waterproofing renewal or traffic-bearing surface wear.",
      },
      {
        title: "Standards & references",
        description: "ICRI; manufacturer systems (e.g., Sika, Tremco)",
      },
    ],
    faqs: [],
    images: [],
  },
};
