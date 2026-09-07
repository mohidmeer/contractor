import { z } from "zod";

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: z.string(),
  canonical: z.string(),
});

export const SiteContentSchema = z.object({
  static_assets: z.string(),
  siteUrl: z.string(),
  siteName: z.string(),
  siteLogo: z.string(),
  googleAnalyticId: z.string(),
  googleTagManagerId: z.string(),
  bussinessType: z.array(z.string()),

  justCall: z.object({
    enabled: z.boolean(),
    uhash: z.string(),
  }),

  contactInfo: z.object({
    phone: z.object({
      text: z.string(),
      href: z.string(),
      number: z.string(),
    }),
    address: z.string(),
    mapEmbedUrl: z.string(),
    email: z.string(),
    workingHours: z.string(),
  }),

  socialLinks: z.object({
    facebook: z.string(),
    instagram: z.string(),
    twitter: z.string(),
  }),

  licenses: z.array(
    z.object({
      number: z.string(),
      label: z.string(),
    })
  ),

  landingPage: z.object({
    seo: seoSchema,
    services: z.object({ heading: z.string() }),
    projects: z.object({ heading: z.string() }),
  }),

  heroBarData: z.array(
    z.object({
      icon: z.string(),
      label: z.string(),
    })
  ),

  hero2: z.object({
    slides: z.array(
      z.object({
        tagline: z.string(),
        title: z.string(),
        description: z.string(),
        backgroundImage: z.string(),
      })
    ),
  }),

  servicesPage: z.object({ seo: seoSchema }),
  projectsPage: z.object({ seo: seoSchema }),
  aboutPage: z.object({
    seo: seoSchema,
    content: z.string(),
  }),
  contactPage: z.object({
    seo: seoSchema,
    form: z.object({
      heading: z.string(),
      messagePlaceholder: z.string(),
    }),
  }),
  blogPage: z.object({ seo: seoSchema }),
  serviceAreaPage: z.object({ seo: seoSchema }),

  getToKnow: z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    keyPoints: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    ),
    image1_url: z.string(),
    image2_url: z.string(),
    image3_url: z.string(),
    image4_url: z.string(),
  }),

  faqs: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),

  ourProcessData: z.object({
    heading: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),

  WhyUSData: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),

  accomplishmentData: z.array(
    z.object({
      title: z.string(),
      number: z.number(),
    })
  ),

  FooterData: z.object({
    tagline: z.string(),
  }),

  serviceAreasData: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
      title: z.string(),
      description: z.string(),
      content: z.string(),
      image: z.string(),
    })
  ),

  testimonialsData: z.array(
    z.object({
      name: z.string(),
      role: z.string(),
      feedback: z.string(),
    })
  ),

  enable_estimates: z.boolean(),
});

export type SiteContent = z.infer<typeof SiteContentSchema>;

export const SITE_CONTENT_ID = 1;
