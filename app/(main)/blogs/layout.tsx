import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const { blogPage, siteUrl } = await getSiteContent();
  const ogImage = toMediaUrl(blogPage.seo.ogImage);
  const ogAbsolute = ogImage.startsWith("http")
    ? ogImage
    : siteUrl.replace(/\/+$/, "") + ogImage;

  return {
    title: blogPage.seo.title,
    description: blogPage.seo.description,
    alternates: {
      canonical: blogPage.seo.canonical,
    },
    openGraph: {
      title: blogPage.seo.title,
      description: blogPage.seo.description,
      url: blogPage.seo.canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: blogPage.seo.title,
      description: blogPage.seo.description,
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
