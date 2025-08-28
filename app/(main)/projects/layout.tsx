import { projectsPage, siteUrl } from "@/data"

export const metadata = {
  title: projectsPage.seo.title,
  description: projectsPage.seo.description,
  alternates: {
    canonical: projectsPage.seo.canonical,
  },
  openGraph: {
    title: projectsPage.seo.title,
    description: projectsPage.seo.description,
    url: projectsPage.seo.canonical,
    images: [siteUrl+projectsPage.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectsPage.seo.title,
    description: projectsPage.seo.description,
    images: [siteUrl+projectsPage.seo.ogImage],
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