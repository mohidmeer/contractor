import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage, siteUrl } = await getSiteContent();
  const ogImage = toMediaUrl(contactPage.seo.ogImage);
  const ogAbsolute = ogImage.startsWith("http")
    ? ogImage
    : siteUrl.replace(/\/+$/, "") + ogImage;

  return {
    title: contactPage.seo.title,
    description: contactPage.seo.description,
    alternates: {
      canonical: contactPage.seo.canonical,
    },
    openGraph: {
      title: contactPage.seo.title,
      description: contactPage.seo.description,
      url: contactPage.seo.canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: contactPage.seo.title,
      description: contactPage.seo.description,
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
