const static_assets = "/costal";

const img = {
  commercial: `${static_assets}/images/services/commercial.jpg`,
  concrete: `${static_assets}/images/services/concrete.jpg`,
  driveway: `${static_assets}/images/services/driveway.jpg`,
  flooring: `${static_assets}/images/services/flooring.jpg`,
  foundation: `${static_assets}/images/services/foundation.jpg`,
  patio: `${static_assets}/images/services/patio.jpg`,
  retaining: `${static_assets}/images/services/retaining.jpg`,
  slab: `${static_assets}/images/services/slab.jpg`,
  stamped: `${static_assets}/images/services/stamped.jpg`,
  garage: `${static_assets}/images/projects/garage.jpg`,
  repair: `${static_assets}/images/projects/repair.jpg`,
  retainingWall: `${static_assets}/images/projects/retaining_wall.jpg`,
  outdoor: `${static_assets}/images/projects/outdoor.jpg`,
  stampedProject: `${static_assets}/images/projects/stamped_concrete.jpg`,
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
  "epoxy-injection": {
    label: "Epoxy Injection",
    title: "Epoxy Injection for Structural Concrete Crack Repair",
    description:
      "Pressure-inject low-viscosity epoxy into dormant cracks to restore structural bond and seal against moisture and chloride intrusion.",
    content: [
      "Pressure-injecting low-viscosity epoxy resin (typically 50–200 psi) into dormant cracks 0.002\"–0.5\" wide restores structural bond across the crack and seals it against moisture and chloride intrusion — essentially \"welding\" the crack back together.",
      "At Costal Concrete, epoxy injection is used on parking garages, high-rises, bridges, and industrial floors where non-moving structural cracks show no active corrosion. Work follows ACI 224.1R, ACI 503.7, ASTM C881, and ICRI 210.1R guidance for Florida commercial structures.",
      "Our crews begin with crack assessment, cleaning, and port installation, then inject resin in a controlled sequence so the material fills the full crack depth. Surface ports are removed and the face finished so the repair blends with the surrounding concrete.",
      "When specified correctly, epoxy injection returns load path continuity, slows chloride ingress, and helps owners avoid premature full-member replacement — a cost-effective first line of defense for dormant structural cracking in coastal Florida.",
    ],
    image: img.repair,
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
      {
        question: "How long does an epoxy injection repair last?",
        answer:
          "Properly injected epoxy creates a permanent structural bond. Longevity depends on stopping the original cause of cracking and keeping chlorides and moisture under control.",
      },
      {
        question: "Will the repair be visible on the finished surface?",
        answer:
          "Injection ports leave minor surface marks that we grind and finish. Most clients see a clean, serviceable appearance after completion.",
      },
    ],
    images: [img.repair, img.concrete, img.foundation],
  },

  "carbon-fiber-reinforcement": {
    label: "Carbon Fiber Reinforcement (CFRP/FRP)",
    title: "Carbon Fiber (CFRP/FRP) Concrete Strengthening",
    description:
      "Bond high-tensile carbon fiber fabric or plates with epoxy to add flexural strength without significant weight or section depth.",
    content: [
      "Bonding high-tensile-strength carbon fiber fabric or plates to a prepared concrete surface with epoxy resin adds tensile and flexural strength without significant weight or section depth.",
      "Costal Concrete applies CFRP/FRP for load-capacity upgrades, seismic retrofit, and deficient or under-designed members on parking garages, bridges, high-rises, and industrial floors — guided by ACI 440.2R and ACI 562.",
      "Surface preparation is critical: we profile the concrete, repair substrate defects, and install fabric or plates with engineered epoxy systems so the composite develops full design capacity.",
      "CFRP is often preferred when clearance is tight, dead load must stay low, or downtime must be minimized compared with conventional concrete or steel section enlargement.",
    ],
    image: img.commercial,
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
      {
        question: "Can CFRP be used outdoors in Florida?",
        answer:
          "Yes. Systems are selected and coated for UV and environmental exposure. We follow manufacturer and ACI guidance for coastal conditions.",
      },
      {
        question: "Does CFRP repair existing corrosion?",
        answer:
          "No. Active corrosion and delamination must be remediated first. CFRP strengthens sound or repaired members; it does not stop ongoing steel corrosion by itself.",
      },
      {
        question: "How is the strengthening designed?",
        answer:
          "A structural engineer sizes the FRP layout for the required moment and shear demand. We install to that design and provide documentation for closeout.",
      },
    ],
    images: [img.commercial, img.slab, img.garage],
  },

  "post-tension-cable-repair": {
    label: "Post-Tension Cable Repair",
    title: "Post-Tension (PT) Cable Repair for Elevated Slabs",
    description:
      "Locate, expose, splice or replace, and re-stress corroded or broken post-tensioned tendons in elevated concrete slabs.",
    content: [
      "Post-tension cable repair involves locating, exposing, de-tensioning, splicing or replacing, and re-stressing broken or corroded post-tensioned steel tendons embedded in elevated concrete slabs.",
      "This is a common failure point in older Florida parking garages. Costal Concrete performs PT repairs on parking garages, elevated slabs, and balconies following ICRI post-tensioned garage repair guidance.",
      "We coordinate access, traffic control, and temporary shoring when required, then restore tendon continuity and re-stress to design values before patching and protecting the repair zone.",
      "Early PT intervention prevents progressive strand failure, limits slab deflection, and protects adjacent bays from cascading distress in chloride-exposed elevated decks.",
    ],
    image: img.garage,
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
      {
        question: "How do you find broken or corroded tendons?",
        answer:
          "We use visual indicators, sounding, and specialized PT locating methods, then confirm condition once the strand is carefully exposed.",
      },
      {
        question: "Can the garage stay open during PT repair?",
        answer:
          "Often yes with phased closures. Safety and structural conditions dictate whether temporary shoring and lane restrictions are required.",
      },
      {
        question: "Is splicing always possible?",
        answer:
          "Many tendons can be spliced or coupled. Severely deteriorated runs may need partial or full replacement before re-stressing.",
      },
    ],
    images: [img.garage, img.commercial, img.slab],
  },

  "spalling-remediation": {
    label: "Spalling Remediation",
    title: "Concrete Spalling Remediation & Patch Repair",
    description:
      "Remove delaminated concrete cover caused by rebar corrosion and patch with compatible repair mortar to restore section and finish.",
    content: [
      "Spalling remediation removes deteriorated or delaminated concrete cover caused by expanding corrosion products around rebar, then patches with compatible repair mortar to restore surface finish and structural section.",
      "Costal Concrete performs sounding surveys and repairs on parking garages, balconies, bridges, and seawalls using ICRI Guideline No. 310.1R for surface prep and ACI 546R for repair practice.",
      "After removing unsound concrete, we clean and treat exposed reinforcement, then place repair mortar matched to the host concrete for bond, shrinkage, and durability in Florida’s humid, chloride-rich environment.",
      "Addressing spalls promptly stops accelerated cover loss, improves safety for vehicles and pedestrians, and reduces the cost of later structural interventions.",
    ],
    image: img.concrete,
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
      {
        question: "Is patching enough, or do we need to replace rebar?",
        answer:
          "If section loss on the bar is within repair limits, cleaning and coating may suffice. Severe loss requires rebar replacement as part of the repair.",
      },
      {
        question: "How do you find hidden delamination?",
        answer:
          "Chain dragging and hammer sounding reveal hollow areas that are not always visible. We mark and excavate to sound concrete before patching.",
      },
      {
        question: "Will patches match the existing surface?",
        answer:
          "We select repair materials and finishing methods for durable bond and a consistent appearance, then can overcoat when a uniform finish is required.",
      },
    ],
    images: [img.concrete, img.repair, img.garage],
  },

  "expansion-joint-repair": {
    label: "Expansion Joint Repair / Replacement",
    title: "Expansion Joint Repair & Replacement",
    description:
      "Repair or replace joint systems that accommodate movement between concrete sections and keep water off reinforcement below.",
    content: [
      "Expansion joint repair or replacement restores gland, header, and sealant systems that accommodate thermal and structural movement between concrete sections, preventing water from reaching reinforcement below.",
      "Applied on parking garages, bridges, and stadiums when glands tear, headers crack, or water staining appears below joints — following ICRI joint maintenance guidelines.",
      "Failed joints are one of the fastest paths for water and chlorides into decks and beams. We remove failed components, repair headers as needed, and install systems rated for the expected movement and traffic.",
      "A watertight joint system protects embedded steel, reduces staining and freeze-thaw damage, and extends the life of adjacent waterproofing and coatings.",
    ],
    image: img.garage,
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
    faqs: [
      {
        question: "How often should expansion joints be replaced?",
        answer:
          "Service life varies by system and traffic. Many commercial glands need renewal every 10–20 years, or sooner if leaks and tears appear.",
      },
      {
        question: "Can you repair just the sealant without replacing the joint?",
        answer:
          "Minor sealant issues may be localized. Torn glands, failed headers, or chronic leaks usually require full joint system replacement.",
      },
      {
        question: "Will joint work close the garage?",
        answer:
          "We phase lanes and bays so most facilities stay partially open. Full closures are only used when safety or access requires them.",
      },
      {
        question: "What causes joint headers to crack?",
        answer:
          "Impact loading, improper original detailing, and water infiltration that weakens the header concrete are common causes in Florida garages.",
      },
    ],
    images: [img.garage, img.commercial, img.slab],
  },

  "concrete-resurfacing-overlays": {
    label: "Concrete Resurfacing / Overlay Systems",
    title: "Concrete Resurfacing & Overlay Systems",
    description:
      "Apply polymer-modified, epoxy, or polyurea overlays to restore wearing surfaces and extend service life without full replacement.",
    content: [
      "Concrete resurfacing and overlay systems apply a new polymer-modified cementitious, epoxy, or polyurea overlay over existing sound concrete to restore the wearing surface, improve abrasion and chemical resistance, and extend service life without full replacement.",
      "Ideal for industrial floors, parking decks, and retail floors when surface wear or shallow spalling does not justify full-depth repair. Surface profiling follows ICRI 310.2R.",
      "We evaluate substrate soundness, moisture, and profile, then select an overlay system matched to traffic, chemical exposure, and downtime constraints.",
      "Overlays deliver a renewed wearing surface at a fraction of the cost and disruption of slab replacement — especially valuable for Florida commercial and industrial facilities that must stay in service.",
    ],
    image: img.flooring,
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
    faqs: [
      {
        question: "When is an overlay better than full replacement?",
        answer:
          "When the slab is structurally sound and distress is limited to the wearing surface or shallow cover, overlays restore performance without full-depth demolition.",
      },
      {
        question: "How thick are typical overlays?",
        answer:
          "Thickness depends on the system — from thin polymer coatings to cementitious overlays of several millimeters to inches. Design follows manufacturer and engineer requirements.",
      },
      {
        question: "How soon can traffic return?",
        answer:
          "Many polymer systems allow return to service within hours to a day. Cementitious overlays may need longer curing — we plan around your operations.",
      },
      {
        question: "Will the overlay stop future spalling?",
        answer:
          "Overlays protect sound substrates. Active corrosion and deep delamination must be repaired first, or distress can continue beneath the new surface.",
      },
    ],
    images: [img.flooring, img.stamped, img.patio],
  },

  "structural-crack-repair": {
    label: "Structural Crack Repair",
    title: "Structural Crack Repair — Routing, Sealing & Stitching",
    description:
      "Route and seal moving cracks with flexible sealant, or stitch larger structural cracks to restore tensile capacity.",
    content: [
      "Structural crack repair covers two related methods: routing widens an active or moving crack into a groove filled with flexible sealant (non-structural); stitching embeds metal staples or dowels across a crack to mechanically restore tensile capacity for larger structural cracks.",
      "Used on bridges, industrial floors, and retaining walls when cracks are unsuitable for rigid epoxy injection — per ACI 224.1R.",
      "We diagnose whether a crack is dormant or active, then choose routing/sealing, stitching, or a combination with waterproofing so movement and water are both managed correctly.",
      "Correct crack treatment protects reinforcement, preserves structural integrity, and prevents small defects from becoming costly full-depth repairs.",
    ],
    image: img.repair,
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
    faqs: [
      {
        question: "How do you know if a crack is structural?",
        answer:
          "Width, pattern, location, and whether the crack is growing or moving guide the assessment. An engineer may specify stitching or other structural methods.",
      },
      {
        question: "Why not always use epoxy?",
        answer:
          "Rigid epoxy can re-crack if the crack is still moving. Flexible sealants or stitching are better for active cracks.",
      },
      {
        question: "What is crack stitching?",
        answer:
          "Metal staples or dowels are embedded across the crack to restore tensile continuity while allowing a sealed, durable repair.",
      },
      {
        question: "Can sealed cracks still leak?",
        answer:
          "Proper routing and sealant selection create a watertight detail. Joint geometry and substrate prep are essential for long-term performance.",
      },
    ],
    images: [img.repair, img.retaining, img.concrete],
  },

  "waterproofing-coatings-membranes": {
    label: "Waterproofing Coatings & Membranes",
    title: "Waterproofing Coatings & Membrane Systems",
    description:
      "Fluid-applied or sheet membranes and elastomeric coatings that block water intrusion and protect embedded steel.",
    content: [
      "Waterproofing coatings and membrane systems include fluid-applied or sheet membranes and elastomeric coatings applied to decks, plazas, and below-grade concrete to block water intrusion and protect embedded steel from corrosion.",
      "Costal Concrete installs these systems on high-rises, parking decks, balconies, and plazas for leaks, ponding, and planter waterproofing failure — aligned with ACI 515 and ASTM waterproofing standards.",
      "Successful waterproofing starts with detailing: drains, transitions, penetrations, and flashings. We prepare the substrate, repair defects, and install systems suited to UV, traffic, and Florida weather.",
      "A continuous waterproof barrier is one of the most effective ways to slow chloride-driven corrosion and extend the service life of coastal concrete structures.",
    ],
    image: img.patio,
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
    faqs: [
      {
        question: "Fluid-applied vs sheet membrane — which is better?",
        answer:
          "Both can perform well. Fluid-applied systems excel at complex geometry; sheet membranes offer consistent thickness. We recommend based on substrate and detailing.",
      },
      {
        question: "Can waterproofing be installed over existing coatings?",
        answer:
          "Sometimes, if adhesion and compatibility are verified. Often failed systems must be removed to sound substrate for a durable bond.",
      },
      {
        question: "How long do deck membranes last in Florida?",
        answer:
          "With proper maintenance and traffic coatings where required, quality systems commonly deliver many years of service in coastal climates.",
      },
      {
        question: "Do you waterproof planters and plazas?",
        answer:
          "Yes. Planter and plaza waterproofing is a frequent failure point; we address drainage, root barriers, and membrane continuity at walls and drains.",
      },
    ],
    images: [img.patio, img.outdoor, img.commercial],
  },

  "cathodic-protection": {
    label: "Cathodic Protection",
    title: "Cathodic Protection for Reinforced Concrete",
    description:
      "Impressed-current or galvanic systems that stop or slow corrosion in chloride-contaminated concrete without removing all contaminated material.",
    content: [
      "Cathodic protection is an electrochemical corrosion-control system — impressed current or galvanic sacrificial anodes — that stops or slows ongoing corrosion of reinforcing steel in chloride-contaminated concrete without removing all contaminated concrete.",
      "Applied on parking garages, bridges, and marine/seawall structures when chloride content exceeds corrosion thresholds or spalling keeps recurring. References include NACE/AMPP SP0290 and ACI 222R.",
      "We work with corrosion specialists to evaluate chloride profiles, half-cell potentials, and anode layout, then install and commission systems that protect remaining steel.",
      "For heavily contaminated coastal structures, cathodic protection can dramatically reduce recurring patch cycles and preserve structural capacity long-term.",
    ],
    image: img.commercial,
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
    faqs: [
      {
        question: "Impressed current vs galvanic anodes?",
        answer:
          "Impressed current systems use an external power source for large structures. Galvanic anodes are often simpler for localized protection. Selection depends on size and chloride severity.",
      },
      {
        question: "Does CP replace concrete repair?",
        answer:
          "No. Unsound concrete and failed cover still need repair. CP protects steel so new repairs last and remaining sound areas stop corroding.",
      },
      {
        question: "Is monitoring required?",
        answer:
          "Impressed-current systems typically require ongoing monitoring. Galvanic systems are lower maintenance but should still be inspected periodically.",
      },
      {
        question: "Is cathodic protection common in Florida?",
        answer:
          "Yes — especially on parking structures and marine assets where chlorides are high and conventional patching alone keeps failing.",
      },
    ],
    images: [img.commercial, img.garage, img.concrete],
  },

  "shotcrete-gunite-repair": {
    label: "Shotcrete / Gunite Repair",
    title: "Shotcrete & Gunite Structural Repair",
    description:
      "Pneumatically apply high-velocity sprayed concrete for vertical and overhead repairs where formwork is impractical.",
    content: [
      "Shotcrete/gunite repair pneumatically applies high-velocity sprayed concrete or mortar for structural repairs on vertical or overhead surfaces, or where conventional formwork is impractical.",
      "Costal Concrete uses shotcrete on retaining walls, seawalls, tunnels, and industrial structures for large-area rehab — guided by ACI 506R.",
      "We prepare the substrate, install reinforcement as specified, and spray in controlled layers for proper consolidation, thickness, and finish — including overhead applications.",
      "Shotcrete delivers structural-quality concrete quickly on complex geometries, reducing formwork cost and accelerating coastal and industrial rehabilitation schedules.",
    ],
    image: img.retaining,
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
    faqs: [
      {
        question: "Wet-mix vs dry-mix shotcrete?",
        answer:
          "Both are used in repair. Selection depends on access, volume, and specification. We install to the project’s ACI 506 requirements.",
      },
      {
        question: "Can shotcrete be used overhead?",
        answer:
          "Yes. Proper nozzle technique, mix design, and layering allow durable overhead structural repairs without conventional formwork.",
      },
      {
        question: "How thick can shotcrete repairs be?",
        answer:
          "Thickness is built in layers to the engineered section. Deep repairs may include supplemental reinforcement and bonding agents.",
      },
      {
        question: "Is shotcrete suitable for seawalls?",
        answer:
          "Frequently. It is widely used for marine and retaining structures where large vertical areas need structural restoration.",
      },
    ],
    images: [img.retaining, img.retainingWall, img.concrete],
  },

  "polyurethane-injection": {
    label: "Polyurethane Injection",
    title: "Polyurethane Injection for Active Water Leaks",
    description:
      "Inject flexible polyurethane into active cracks or joints to stop water infiltration on damp substrates.",
    content: [
      "Polyurethane injection uses low-viscosity flexible polyurethane resin in active or moving cracks and joints. Unlike epoxy, it bonds to damp or wet substrates and remains flexible — suited to stopping water infiltration rather than restoring structural strength.",
      "Ideal for below-grade walls, foundations, and active leaking cracks that open and close. Related material standards include ASTM C881 Type I/II variants.",
      "We identify leak paths, install injection ports, and inject until resin travels through the crack network and seals the water source — often while water is still present.",
      "For Florida basements, pits, and below-grade commercial spaces, polyurethane injection is a fast, targeted way to stop active leaks without full excavation.",
    ],
    image: img.foundation,
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
      {
        question: "Can you inject while water is actively leaking?",
        answer:
          "Yes. Hydrophilic and hydrophobic polyurethane systems are designed to react with moisture and seal active leak paths.",
      },
      {
        question: "Is polyurethane a structural repair?",
        answer:
          "Generally no. It is a waterproofing/seal repair. Structural cracks that need load transfer typically require epoxy or stitching after the source is controlled.",
      },
      {
        question: "Will the leak come back?",
        answer:
          "Proper injection seals the path that was treated. New cracks or changed water tables can create new leaks, which is why we also assess drainage and joint details.",
      },
    ],
    images: [img.foundation, img.slab, img.repair],
  },

  "structural-strengthening-underpinning": {
    label: "Structural Strengthening & Underpinning",
    title: "Structural Strengthening & Underpinning",
    description:
      "FRP, steel plate bonding, jacketing, micropiles, and helical piers to increase capacity or correct settlement.",
    content: [
      "Structural strengthening and underpinning is an umbrella for methods — FRP, steel plate bonding, concrete jacketing, micropiles, and helical piers — that increase load capacity or arrest/correct foundation settlement.",
      "Used on high-rises, industrial buildings, and bridges for load-rating deficiencies, settlement, or code upgrade requirements under ACI 562 and ACI 437R.",
      "We coordinate with structural engineers to select the least-disruptive method that meets capacity and settlement criteria, then install with verified materials and load testing where required.",
      "Whether the goal is a load upgrade, settlement arrest, or code compliance after inspection, Costal Concrete delivers strengthening solutions built for Florida’s soils and coastal exposure.",
    ],
    image: img.foundation,
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
    faqs: [
      {
        question: "When is underpinning needed vs FRP strengthening?",
        answer:
          "Underpinning addresses foundation settlement and soil support. FRP and jacketing strengthen members above grade. Many projects need a combination.",
      },
      {
        question: "Do helical piers work in Florida soils?",
        answer:
          "Helical piers and micropiles are commonly used in Florida when designed for local soil conditions and verified with installation torque or load tests.",
      },
      {
        question: "Can occupied buildings be strengthened?",
        answer:
          "Yes. Many methods allow phased work with limited disruption. Access, vibration, and temporary supports are planned with the owner and engineer.",
      },
      {
        question: "Is this related to milestone inspection findings?",
        answer:
          "Often. Post-inspection repair programs frequently include strengthening, waterproofing, and concrete repair to satisfy engineer recommendations.",
      },
    ],
    images: [img.foundation, img.commercial, img.slab],
  },

  "rebar-replacement": {
    label: "Rebar Replacement / Reinforcement Repair",
    title: "Rebar Replacement & Reinforcement Repair",
    description:
      "Remove corroded reinforcing steel and install new rebar with proper splices as part of full-depth structural repair.",
    content: [
      "Rebar replacement and reinforcement repair removes corroded reinforcing steel and installs new rebar (with dowel or splice bars as needed) as part of full-depth structural concrete repair.",
      "Performed on parking garages, bridges, and balconies when section loss on reinforcement exceeds repair thresholds — per ACI 546R.",
      "We excavate to sound concrete, cut out failed bars, install new reinforcement with correct cover and splice lengths, then restore the section with compatible repair concrete or mortar.",
      "Replacing compromised steel restores designed capacity and prevents patch repairs from failing again when the underlying bar has lost too much section.",
    ],
    image: img.repair,
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
    faqs: [
      {
        question: "How much corrosion requires bar replacement?",
        answer:
          "Engineers typically set section-loss limits. Beyond those thresholds, cleaning alone is insufficient and new reinforcement is required.",
      },
      {
        question: "Do you use mechanical couplers or lap splices?",
        answer:
          "Both are options depending on bar size, congestion, and specification. We install per the structural repair documents.",
      },
      {
        question: "Is epoxy-coated or stainless rebar used?",
        answer:
          "When specified for coastal durability, we install coated or corrosion-resistant reinforcement as part of the repair design.",
      },
      {
        question: "How is cover restored after rebar replacement?",
        answer:
          "Repair concrete or mortar is placed to restore design cover and finish, with bonding and curing practices that protect the new steel.",
      },
    ],
    images: [img.repair, img.garage, img.concrete],
  },

  hydrodemolition: {
    label: "Hydrodemolition",
    title: "Hydrodemolition Concrete Removal",
    description:
      "High-pressure water jets selectively remove deteriorated concrete without micro-fracturing sound concrete or damaging rebar.",
    content: [
      "Hydrodemolition uses high-pressure water jets (10,000–20,000+ psi) to selectively remove deteriorated concrete without micro-fracturing sound concrete or damaging existing rebar.",
      "Used on bridge decks and large industrial floors for large-scale rehabilitation requiring precise removal, following FHWA/DOT hydrodemolition specifications.",
      "Compared with jackhammers, hydrodemolition reduces vibration damage, leaves a superior bonding profile, and preserves reusable reinforcement for faster, higher-quality rebuilds.",
      "Costal Concrete deploys hydrodemolition when projects demand selective demolition at scale — especially decks and slabs where durability of the subsequent overlay or repair is critical.",
    ],
    image: img.concrete,
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
    faqs: [
      {
        question: "Why choose hydrodemolition over chipping hammers?",
        answer:
          "It removes unsound concrete selectively, avoids micro-cracking sound concrete, and leaves clean rebar — improving bond for new concrete.",
      },
      {
        question: "Is water management an issue?",
        answer:
          "Yes. We plan containment, filtration, and disposal of slurry water to meet environmental and site requirements.",
      },
      {
        question: "Can hydrodemolition work around live traffic?",
        answer:
          "With proper phasing, shielding, and lane control, many bridge and garage projects proceed under staged traffic.",
      },
      {
        question: "What happens after removal?",
        answer:
          "Exposed steel is cleaned or replaced as needed, then new concrete, overlays, or waterproofing systems are installed on the prepared surface.",
      },
    ],
    images: [img.concrete, img.commercial, img.slab],
  },

  "joint-sealant-replacement": {
    label: "Joint Sealant Replacement",
    title: "Joint Sealant Replacement",
    description:
      "Remove failed sealant from control, construction, and expansion joints and install new sealant for a watertight envelope.",
    content: [
      "Joint sealant replacement removes aged, cracked, or debonded sealant from control, construction, and expansion joints and installs new sealant to maintain a watertight envelope.",
      "Applicable across all structure types when sealant fails through adhesive or cohesive cracking — referenced to ASTM C920.",
      "We saw or grind out failed material, clean joint faces, install backer rod where required, and tool new sealant for proper geometry and adhesion.",
      "Fresh sealant is low-cost insurance against water entry at joints — one of the most common paths for chloride and moisture into Florida concrete.",
    ],
    image: img.driveway,
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
    faqs: [
      {
        question: "How often should joint sealant be replaced?",
        answer:
          "UV, traffic, and movement shorten life. Many joints need renewal every 5–15 years; inspect annually for cracks and adhesion loss.",
      },
      {
        question: "Can new sealant be applied over old sealant?",
        answer:
          "No. Failed sealant must be fully removed so new material bonds to clean joint faces.",
      },
      {
        question: "What sealant types do you use?",
        answer:
          "Polyurethane, silicone, and other ASTM C920-compliant sealants selected for joint movement, substrate, and exposure.",
      },
      {
        question: "Is this the same as expansion joint replacement?",
        answer:
          "Sealant replacement addresses the flexible seal. Expansion joint systems may also include glands and headers that need broader repair.",
      },
    ],
    images: [img.driveway, img.slab, img.stampedProject],
  },

  "elastomeric-traffic-coating": {
    label: "Elastomeric / Traffic Coating Systems",
    title: "Elastomeric & Protective Traffic Coating Systems",
    description:
      "Flexible, UV- and chemical-resistant traffic-bearing membranes that waterproof and protect parking decks.",
    content: [
      "Elastomeric and protective traffic coating systems are flexible, UV- and chemical-resistant traffic-bearing membranes applied over parking decks. They combine waterproofing with wear resistance for vehicular and pedestrian traffic.",
      "Used on parking garages and elevated decks for waterproofing renewal and traffic-bearing surface wear, following ICRI and manufacturer systems (e.g., Sika, Tremco).",
      "Installation includes substrate repair, priming, membrane application, and wear-course aggregates where specified — with phased closures so garages can remain partially operational.",
      "A well-maintained traffic coating is one of the highest-ROI protections for Florida parking structures, shielding decks from water, chlorides, and abrasion.",
    ],
    image: img.garage,
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
    faqs: [
      {
        question: "How long do traffic coatings last?",
        answer:
          "With proper prep and maintenance, quality systems often last 10–20 years depending on traffic intensity and UV exposure.",
      },
      {
        question: "Can coatings be installed over existing membranes?",
        answer:
          "Sometimes as a recoat if adhesion testing passes. Failed or delaminated systems must be removed before a new installation.",
      },
      {
        question: "Will the garage need a full shutdown?",
        answer:
          "Usually not. We phase by levels or zones so owners keep partial parking capacity during the work.",
      },
      {
        question: "Do coatings fix structural cracks?",
        answer:
          "Coatings waterproof and protect. Structural cracks and spalls are repaired first so the membrane is applied over a sound deck.",
      },
    ],
    images: [img.garage, img.flooring, img.commercial],
  },
};
