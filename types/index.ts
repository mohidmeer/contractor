// Hero Section
export type HeroSection = {
  title: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  location?: string;
  dateCompleted?: string;
  imageBefore?: string;
  imageAfter?: string;
  testimonialId?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  site: string;
  id: string;
  name: string;
  message: string;
  rating?: number;
  projectId?: string;
};

export type ContactInfo = {
  phone: {
    text: string;
    href: string;
  };
  email: string;
  address: string;
  mapEmbedUrl?: string;
  workingHours?: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  hasChildrens: boolean;
  children?: NavItem[];
};

export type Blog = {
  title: string;
  read_time: string;
  seo: {
    title: string;
    description: string;
  };
  image: string;
  content: {
    heading: string;
    paragraph: string | null;
    body: string | null;
    listItems: string[] | null;
    table: string[][] | null;
    quote: string | null;
  }[];
};


