// import {  } from ;

import { aboutPage, bussinessType, contactInfo,  contactPage,  landingPage,  projectsData, projectsPage, serviceAreaPage, serviceAreasData, servicesData, servicesPage, siteLogo, siteUrl, socialLinks} from "./data";

export const BUSINESS_ID = `${landingPage.seo.canonical}#business`;

const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "300 SW 1st Avenue Ste 155",
  addressLocality: "Fort Lauderdale",
  addressRegion: "FL",
  postalCode: "33301",
  addressCountry: "US",
};

export const businessEntity = {
  "@type": bussinessType,
  "@id": BUSINESS_ID,
  name: landingPage.seo.title,
  description: landingPage.seo.description,
  url: landingPage.seo.canonical,
  image: siteUrl + landingPage.seo.ogImage,
  logo: siteLogo,
  sameAs: Object.values(socialLinks),
  address: businessAddress,
  telephone: contactInfo.phone.number,
  priceRange: "$$$",
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: serviceAreasData.map(city => ({
    "@type": "City",
    name: city.name
  })),
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Florida Roofing Contractor License",
      "identifier": "CCC1336268"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Florida General Contractor License",
      "identifier": "CGC1535671"
    }
  ]
};



/* ------------------------
   Landing Page
------------------------ */
export const JsonLdDataLanding = {
  "@context": "https://schema.org",
  ...businessEntity
};

/* ------------------------
   Services Page
------------------------ */
const services_has_part = Object.entries(servicesData).map(([key, service]) => ({
  "@type": "Service",
  name: service.title,
  description: service.description,
  url: `${servicesPage.seo.canonical}/${key}`,
  image: siteUrl + service.image,
  provider: { "@id": BUSINESS_ID }
}));

export const JsonLdDataServices = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: servicesPage.seo.title,
  description: servicesPage.seo.description,
  url: servicesPage.seo.canonical,
  image: siteUrl + servicesPage.seo.ogImage,
  provider: { "@id": BUSINESS_ID },
  hasPart: services_has_part
};

/* ------------------------
   Projects Page
------------------------ */
const projects_has_part = Object.entries(projectsData).map(([key, project]) => ({
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: `${projectsPage.seo.canonical}/${key}`,
  image: siteUrl + project.image,
  provider: { "@id": BUSINESS_ID }
}));

export const JsonLdDataProjects = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: projectsPage.seo.title,
  description: projectsPage.seo.description,
  url: projectsPage.seo.canonical,
  image: siteUrl + projectsPage.seo.ogImage,
  provider: { "@id": BUSINESS_ID },
  hasPart: projects_has_part
};

/* ------------------------
   Contact Page
------------------------ */
export const JsonLdDataContact = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contactPage.seo.title,
  url: contactPage.seo.canonical,
  description: contactPage.seo.description,
  mainEntity: {
    "@id": BUSINESS_ID,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone.number,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"]
    }
  }
};

/* ------------------------
   About Page
------------------------ */
export const JsonLdDataAbout = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: aboutPage.seo.title,
  url: aboutPage.seo.canonical,
  description: aboutPage.seo.description,
  mainEntity: { "@id": BUSINESS_ID }
};

/* ------------------------
   Service Area Page
------------------------ */
export const JsonLdDataServiceArea = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: serviceAreaPage.seo.title,
  url: serviceAreaPage.seo.canonical,
  description: serviceAreaPage.seo.description,
  mainEntity: { "@id": BUSINESS_ID}
};
