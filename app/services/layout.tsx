import {  servicesPage, siteUrl } from "@/data"

export const metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
  alternates: {
    canonical: servicesPage.seo.canonical,
  },
  openGraph: {
    title: servicesPage.seo.title,
    description: servicesPage.seo.description,
    url: servicesPage.seo.canonical,
    images: [siteUrl+servicesPage.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: servicesPage.seo.title,
    description: servicesPage.seo.description,
    images: [siteUrl+servicesPage.seo.ogImage],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}