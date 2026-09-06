import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const { aboutPage, siteUrl } = await getSiteContent();
  const ogImage = toMediaUrl(aboutPage.seo.ogImage);
  const ogAbsolute = ogImage.startsWith("http")
    ? ogImage
    : siteUrl.replace(/\/+$/, "") + ogImage;

  return {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
    alternates: {
      canonical: aboutPage.seo.canonical,
    },
    openGraph: {
      title: aboutPage.seo.title,
      description: aboutPage.seo.description,
      url: aboutPage.seo.canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: aboutPage.seo.title,
      description: aboutPage.seo.description,
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
