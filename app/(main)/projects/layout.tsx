import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const { projectsPage, siteUrl } = await getSiteContent();
  const ogImage = toMediaUrl(projectsPage.seo.ogImage);
  const ogAbsolute = ogImage.startsWith("http")
    ? ogImage
    : siteUrl.replace(/\/+$/, "") + ogImage;

  return {
    title: projectsPage.seo.title,
    description: projectsPage.seo.description,
    alternates: {
      canonical: projectsPage.seo.canonical,
    },
    openGraph: {
      title: projectsPage.seo.title,
      description: projectsPage.seo.description,
      url: projectsPage.seo.canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: projectsPage.seo.title,
      description: projectsPage.seo.description,
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
