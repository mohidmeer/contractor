import { serviceAreaPage } from "@/data"
export const metadata = {
    title: serviceAreaPage.seo.title,
    description: serviceAreaPage.seo.description,
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