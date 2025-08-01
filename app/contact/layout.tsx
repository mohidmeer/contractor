import { pages, siteUrl } from "@/data/constants"

export const metadata = {
  title: pages.contact.seo.title,
  description: pages.contact.seo.description,
  alternates: {
    canonical: pages.contact.seo.canonical,
  },
  openGraph: {
    title: pages.contact.seo.title,
    description: pages.contact.seo.description,
    url: pages.contact.seo.canonical,
    images: [siteUrl+pages.contact.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pages.contact.seo.title,
    description: pages.contact.seo.description,
    images: [siteUrl+pages.contact.seo.ogImage],
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