import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const { servicesPage, siteUrl } = await getSiteContent();
  const ogImage = toMediaUrl(servicesPage.seo.ogImage);
  const ogAbsolute = ogImage.startsWith("http")
    ? ogImage
    : siteUrl.replace(/\/+$/, "") + ogImage;

  return {
    title: servicesPage.seo.title,
    description: servicesPage.seo.description,
    alternates: {
      canonical: servicesPage.seo.canonical,
    },
    openGraph: {
      title: servicesPage.seo.title,
      description: servicesPage.seo.description,
      url: servicesPage.seo.canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: servicesPage.seo.title,
      description: servicesPage.seo.description,
      images: [ogAbsolute],
    },
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
