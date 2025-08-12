import { contactPage,siteUrl } from "@/data"

export const metadata = {
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  alternates: {
    canonical: contactPage.seo.canonical,
  },
  openGraph: {
    title: contactPage.seo.title,
    description: contactPage.seo.description,
    url: contactPage.seo.canonical,
    images: [siteUrl+contactPage.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: contactPage.seo.title,
    description: contactPage.seo.description,
    images: [siteUrl+contactPage.seo.ogImage],
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