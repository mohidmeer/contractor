import { SiteContentSchema, type SiteContent } from "./schema";
import { iconKeyFromComponent } from "./icons";

type SeoLike = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
};

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function asBool(value: unknown, fallback = false): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function asSeo(value: unknown, fallbackCanonical = ""): SiteContent["landingPage"]["seo"] {
  const seo = (value && typeof value === "object" ? value : {}) as SeoLike;
  return {
    title: asString(seo.title),
    description: asString(seo.description),
    ogImage: asString(seo.ogImage),
    canonical: asString(seo.canonical, fallbackCanonical),
  };
}

/**
 * Build a validated SiteContent document from a brand `data/{brand}/index.ts` module export.
 * Converts react-icons components to string keys.
 */
export function siteContentFromStaticModule(
  mod: Record<string, unknown>
): SiteContent {
  const siteUrl = asString(mod.siteUrl);
  const static_assets = asString(mod.static_assets);
  const justCallRaw = (mod.justCall ?? {}) as Record<string, unknown>;
  const contactRaw = (mod.contactInfo ?? {}) as Record<string, unknown>;
  const phoneRaw = (contactRaw.phone ?? {}) as Record<string, unknown>;
  const socialRaw = (mod.socialLinks ?? {}) as Record<string, unknown>;
  const landingRaw = (mod.landingPage ?? {}) as Record<string, unknown>;
  const servicesHeading = (landingRaw.services ?? {}) as Record<string, unknown>;
  const projectsHeading = (landingRaw.projects ?? {}) as Record<string, unknown>;
  const hero2Raw = (mod.hero2 ?? {}) as Record<string, unknown>;
  const aboutRaw = (mod.aboutPage ?? {}) as Record<string, unknown>;
  const contactPageRaw = (mod.contactPage ?? {}) as Record<string, unknown>;
  const contactFormRaw = (contactPageRaw.form ?? {}) as Record<string, unknown>;
  const getToKnowRaw = (mod.getToKnow ?? {}) as Record<string, unknown>;
  const processRaw = (mod.ourProcessData ?? {}) as Record<string, unknown>;
  const footerRaw = (mod.FooterData ?? {}) as Record<string, unknown>;

  const payload: SiteContent = {
    static_assets,
    siteUrl,
    siteName: asString(mod.siteName),
    siteLogo: asString(mod.siteLogo),
    googleAnalyticId: asString(mod.googleAnalyticId),
    googleTagManagerId: asString(mod.googleTagManagerId),
    bussinessType: Array.isArray(mod.bussinessType)
      ? mod.bussinessType.map((x) => asString(x)).filter(Boolean)
      : [],

    justCall: {
      enabled: asBool(justCallRaw.enabled),
      uhash: asString(justCallRaw.uhash),
    },

    contactInfo: {
      phone: {
        text: asString(phoneRaw.text),
        href: asString(phoneRaw.href),
        number: asString(phoneRaw.number),
      },
      address: asString(contactRaw.address),
      mapEmbedUrl: asString(contactRaw.mapEmbedUrl),
      email: asString(contactRaw.email),
      workingHours: asString(contactRaw.workingHours),
    },

    socialLinks: {
      facebook: asString(socialRaw.facebook),
      instagram: asString(socialRaw.instagram),
      twitter: asString(socialRaw.twitter),
    },

    licenses: Array.isArray(mod.licenses)
      ? mod.licenses.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            number: asString(row.number),
            label: asString(row.label),
          };
        })
      : [],

    landingPage: {
      seo: asSeo(landingRaw.seo, siteUrl),
      services: { heading: asString(servicesHeading.heading, "Services") },
      projects: { heading: asString(projectsHeading.heading, "Projects") },
    },

    heroBarData: Array.isArray(mod.heroBarData)
      ? mod.heroBarData.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            icon: iconKeyFromComponent(row.icon),
            label: asString(row.label),
          };
        })
      : [],

    hero2: {
      slides: Array.isArray(hero2Raw.slides)
        ? hero2Raw.slides.map((item) => {
            const row = (item ?? {}) as Record<string, unknown>;
            return {
              tagline: asString(row.tagline),
              title: asString(row.title),
              description: asString(row.description),
              backgroundImage: asString(row.backgroundImage),
            };
          })
        : [],
    },

    servicesPage: {
      seo: asSeo(
        (mod.servicesPage as Record<string, unknown> | undefined)?.seo,
        siteUrl + "services"
      ),
    },
    projectsPage: {
      seo: asSeo(
        (mod.projectsPage as Record<string, unknown> | undefined)?.seo,
        siteUrl + "projects"
      ),
    },
    aboutPage: {
      seo: asSeo(aboutRaw.seo, siteUrl + "about"),
      content: asString(aboutRaw.content),
    },
    contactPage: {
      seo: asSeo(contactPageRaw.seo, siteUrl + "contact"),
      form: {
        heading: asString(contactFormRaw.heading, "Request a Quote"),
        messagePlaceholder: asString(contactFormRaw.messagePlaceholder),
      },
    },
    blogPage: {
      seo: asSeo(
        (mod.blogPage as Record<string, unknown> | undefined)?.seo,
        siteUrl + "blogs"
      ),
    },
    serviceAreaPage: {
      seo: asSeo(
        (mod.serviceAreaPage as Record<string, unknown> | undefined)?.seo,
        siteUrl + "service-areas"
      ),
    },

    getToKnow: {
      title: asString(getToKnowRaw.title),
      heading: asString(getToKnowRaw.heading),
      description: asString(getToKnowRaw.description),
      keyPoints: Array.isArray(getToKnowRaw.keyPoints)
        ? getToKnowRaw.keyPoints.map((item) => {
            const row = (item ?? {}) as Record<string, unknown>;
            return {
              title: asString(row.title),
              desc: asString(row.desc),
            };
          })
        : [],
      image1_url: asString(getToKnowRaw.image1_url),
      image2_url: asString(getToKnowRaw.image2_url),
      image3_url: asString(getToKnowRaw.image3_url),
      image4_url: asString(getToKnowRaw.image4_url),
    },

    faqs: Array.isArray(mod.faqs)
      ? mod.faqs.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            question: asString(row.question),
            answer: asString(row.answer),
          };
        })
      : [],

    ourProcessData: {
      heading: asString(processRaw.heading, "Our Process"),
      description: asString(processRaw.description),
      list: Array.isArray(processRaw.list)
        ? processRaw.list.map((item) => {
            const row = (item ?? {}) as Record<string, unknown>;
            return {
              title: asString(row.title),
              description: asString(row.description),
              icon: iconKeyFromComponent(row.icon),
            };
          })
        : [],
    },

    WhyUSData: Array.isArray(mod.WhyUSData)
      ? mod.WhyUSData.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            title: asString(row.title),
            description: asString(row.description),
            icon: iconKeyFromComponent(row.icon),
          };
        })
      : [],

    accomplishmentData: Array.isArray(mod.accomplishmentData)
      ? mod.accomplishmentData.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            title: asString(row.title),
            number: typeof row.number === "number" ? row.number : Number(row.number) || 0,
          };
        })
      : [],

    FooterData: {
      tagline: asString(footerRaw.tagline),
    },

    serviceAreasData: Array.isArray(mod.serviceAreasData)
      ? mod.serviceAreasData.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            name: asString(row.name),
            href: asString(row.href),
            title: asString(row.title),
            description: asString(row.description),
            content: asString(row.content),
            image: asString(row.image),
          };
        })
      : [],

    testimonialsData: Array.isArray(mod.testimonialsData)
      ? mod.testimonialsData.map((item) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            name: asString(row.name),
            role: asString(row.role),
            feedback: asString(row.feedback),
          };
        })
      : [],

    enable_estimates: asBool(mod.enable_estimates, true),
  };

  return SiteContentSchema.parse(payload);
}
