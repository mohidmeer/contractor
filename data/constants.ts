import { ContactInfo, FAQ, NavItem, Social } from "@/types";

export const LandingPageData = {

  hero: {
    title: 'Expert Roofing Services You Can Trust',
    description: 'From minor leak repairs to complete roof replacements, our experienced team ensures top-quality craftsmanship, durable materials, and reliable service every step of the way.',
    backgroundImage: '/images/hero_bg_1.jpg',
    ctaText: 'Request a Free Quote',
    ctaLink: '/contact',
  },

  getToKnow: {
    title: 'GET TO KNOW',
    heading: 'Roofing with Integrity, Craftsmanship, and Care',
    description: 'Total Care Roofing is a locally rooted company providing dependable roofing solutions across Florida. We focus on quality craftsmanship, clear communication, and treating every home with genuine care.',
    keyPoints: [
      {
        title: 'Licensed & Insured',
        desc: 'We follow all Florida regulations to ensure your project is secure and compliant.'
      },
      {
        title: 'Premium Materials',
        desc: 'We use top-quality shingles and roofing systems for durability and performance.'
      },
      {
        title: 'Clean & Efficient',
        desc: 'Our team works quickly and leaves your property spotless after every job.'
      }
    ],
    image1_url: '/images/after_img_1.jpg',
    image2_url: '/images/after_img_1.jpg',
    image3_url: '/images/after_img_1.jpg',

  }

}

export const faqs: FAQ[] = [
  {
    question: 'How do I know if I need a new roof?',
    answer: 'Signs include frequent leaks, missing shingles, or visible sagging. We offer free inspections to help you decide.',
  },
  {
    question: 'Are your roofing services insured?',
    answer: 'Yes, we are fully licensed and insured for all residential and commercial roofing work.',
  },
  {
    question: 'Do you offer emergency repairs?',
    answer:
      'Absolutely — we provide 24/7 emergency roof repair for storm damage or major leaks.',
  },
];

export const contactInfo: ContactInfo = {
  phone: {
    text: '(800) 555-000',
    href: 'tel:+8005557663',
  },
  email: 'support@totalcareservicesroofing.com',
  address: '456 Shingle Street, Tampa, FL 33602',
  mapEmbedUrl: 'https://maps.google.com/maps?q=300%20SW%201st%20Avenue%2C%20Ste%20155%2C%20Fort%20Lauderdale%2C%20FL%2033301&t=m&z=17&output=embed&iwloc=near',
  workingHours: 'Mon–Sat: 8:00 AM – 6:00 PM',
};

export const navItems: NavItem[] = [
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
      { label: 'Roof Installation', href: '/services/roof-installation', hasChildrens: false },
      { label: 'Roof Repair', href: '/services/roof-repair', hasChildrens: false },
      { label: 'Gutter Services', href: '/services/gutters', hasChildrens: false },
      { label: 'Roof Inspection', href: '/services/roof-inspection', hasChildrens: false },
      { label: 'Emergency Roof Repair', href: '/services/emergency-roof-repair', hasChildrens: false },
      { label: 'Flat Roofing', href: '/services/flat-roofing', hasChildrens: false },
      { label: 'Metal Roofing', href: '/services/metal-roofing', hasChildrens: false },
      { label: 'Shingle Replacement', href: '/services/shingle-replacement', hasChildrens: false },
      { label: 'Skylight Installation', href: '/services/skylight-installation', hasChildrens: false },
      { label: 'Roof Ventilation', href: '/services/roof-ventilation', hasChildrens: false }
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    external: false,
    hasChildrens: true,
    children: [
      { label: 'Lakeview Villas Roofing', href: '/projects/lakeview-villas-roofing', hasChildrens: false },
      { label: 'Downtown Mall Renovation', href: '/projects/downtown-mall-renovation', hasChildrens: false },
      { label: 'Coastal Homes Upgrade', href: '/projects/coastal-homes-upgrade', hasChildrens: false },
      { label: 'Heritage Museum Restoration', href: '/projects/heritage-museum-restoration', hasChildrens: false },
      { label: 'Sunset Condos Retrofit', href: '/projects/sunset-condos-retrofit', hasChildrens: false },
      { label: 'Ocean Breeze Resort', href: '/projects/ocean-breeze-resort', hasChildrens: false },
      { label: 'Greenwood Retirement Community', href: '/projects/greenwood-retirement-community', hasChildrens: false },
      { label: 'Palmetto Business Center', href: '/projects/palmetto-business-center', hasChildrens: false },
      { label: 'Coral Gables Luxury Homes', href: '/projects/coral-gables-luxury-homes', hasChildrens: false },
      { label: 'Seaside Shopping Plaza', href: '/projects/seaside-shopping-plaza', hasChildrens: false },
    ],
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

export const FooterData = {
  tagline: 'Protecting Florida Homes with Craftsmanship, Care, and Coastal Strength.'
};





export const socialLinks: Social = {
  facebook: 'https://www.facebook.com/TotalCareRoofing',
  instagram: 'https://www.instagram.com/TotalCareRoofing',
  twitter: 'https://twitter.com/TotalCareRoof',
}
