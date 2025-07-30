import { pages } from "@/data/constants"

export const metadata = {
    title: pages.service_area.seo.title,
    description: pages.service_area.seo.description,
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