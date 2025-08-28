import { aboutPage ,siteUrl } from "@/data"

export const metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  alternates: {
    canonical: aboutPage.seo.canonical,
  },
  openGraph: {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
    url: aboutPage.seo.canonical,
    images: [siteUrl+aboutPage.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
    images: [siteUrl+aboutPage.seo.ogImage],
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