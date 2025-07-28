import { pages } from "@/data/constants"

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
      images: [pages.services.seo.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: pages.services.seo.title,
      description: pages.services.seo.description,
      images: [pages.services.seo.ogImage],
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