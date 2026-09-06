import type { Metadata } from "next";
import { getSiteContent } from "@/lib/siteContent/server";

export async function generateMetadata(): Promise<Metadata> {
  const { serviceAreaPage } = await getSiteContent();
  return {
    title: serviceAreaPage.seo.title,
    description: serviceAreaPage.seo.description,
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
