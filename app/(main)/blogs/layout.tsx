import { blogPage, siteUrl } from "@/data"

export const metadata = {
  title: blogPage.seo.title,
  description: blogPage.seo.description,
  alternates: {
    canonical: blogPage.seo.canonical,
  },
  openGraph: {
    title: blogPage.seo.title,
    description: blogPage.seo.description,
    url: blogPage.seo.canonical,
    images: [siteUrl+blogPage.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: blogPage.seo.title,
    description: blogPage.seo.description,
    images: [siteUrl+blogPage.seo.ogImage],
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