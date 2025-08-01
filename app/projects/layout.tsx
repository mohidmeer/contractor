import { pages, siteUrl } from "@/data/constants"

export const metadata = {
  title: pages.projects.seo.title,
  description: pages.projects.seo.description,
  alternates: {
    canonical: pages.projects.seo.canonical,
  },
  openGraph: {
    title: pages.projects.seo.title,
    description: pages.projects.seo.description,
    url: pages.projects.seo.canonical,
    images: [siteUrl+pages.projects.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pages.projects.seo.title,
    description: pages.projects.seo.description,
    images: [siteUrl+pages.projects.seo.ogImage],
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