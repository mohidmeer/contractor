import { pages, siteUrl } from "@/data/constants"

export const metadata = {
  title: pages.blog.seo.title,
  description: pages.blog.seo.description,
  alternates: {
    canonical: pages.blog.seo.canonical,
  },
  openGraph: {
    title: pages.blog.seo.title,
    description: pages.blog.seo.description,
    url: pages.blog.seo.canonical,
    images: [siteUrl+pages.blog.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pages.blog.seo.title,
    description: pages.blog.seo.description,
    images: [siteUrl+pages.blog.seo.ogImage],
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