import { getServices } from "@/actions/services";
import { getProjects } from "@/actions/projects";
import { BUSINESS_ID } from "@/jsonld";
import { toMediaUrl } from "@/lib/media";
import { getSiteContent } from "@/lib/siteContent/server";

export async function getJsonLdDataServices() {
  const [services, site] = await Promise.all([
    getServices(),
    getSiteContent(),
  ]);
  const { servicesPage, siteUrl } = site;
  const ogImage = toMediaUrl(servicesPage.seo.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: servicesPage.seo.title,
    description: servicesPage.seo.description,
    url: servicesPage.seo.canonical,
    image: ogImage.startsWith("http")
      ? ogImage
      : siteUrl.replace(/\/+$/, "") + ogImage,
    provider: { "@id": BUSINESS_ID },
    hasPart: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `${servicesPage.seo.canonical}/${service.slug}`,
      image: service.image ? toMediaUrl(service.image) : undefined,
      provider: { "@id": BUSINESS_ID },
    })),
  };
}

export async function getJsonLdDataProjects() {
  const [projects, site] = await Promise.all([
    getProjects(),
    getSiteContent(),
  ]);
  const { projectsPage, siteUrl } = site;
  const ogImage = toMediaUrl(projectsPage.seo.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: projectsPage.seo.title,
    description: projectsPage.seo.description,
    url: projectsPage.seo.canonical,
    image: ogImage.startsWith("http")
      ? ogImage
      : siteUrl.replace(/\/+$/, "") + ogImage,
    provider: { "@id": BUSINESS_ID },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: `${projectsPage.seo.canonical}/${project.slug}`,
      image: project.image ? toMediaUrl(project.image) : undefined,
      provider: { "@id": BUSINESS_ID },
    })),
  };
}
