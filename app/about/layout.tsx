import { pages } from "@/data/constants"

export const metadata = {
    title: pages.about.seo.title,
    description: pages.about.seo.description,
    alternates: {
      canonical: pages.about.seo.canonical,
    },
    openGraph: {
      title: pages.about.seo.title,
      description: pages.about.seo.description,
      url: pages.about.seo.canonical,
      images: [pages.about.seo.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: pages.about.seo.title,
      description: pages.about.seo.description,
      images: [pages.about.seo.ogImage],
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