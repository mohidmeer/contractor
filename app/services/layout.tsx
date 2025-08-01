import { pages, siteUrl } from "@/data/constants"

export const metadata = {
  title: pages.services.seo.title,
  description: pages.services.seo.description,
  alternates: {
    canonical: pages.services.seo.canonical,
  },
  openGraph: {
    title: pages.services.seo.title,
    description: pages.services.seo.description,
    url: pages.services.seo.canonical,
    images: [siteUrl+pages.services.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pages.services.seo.title,
    description: pages.services.seo.description,
    images: [siteUrl+pages.landing.seo.ogImage],
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