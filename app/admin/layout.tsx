import { siteName } from "@/data"
import "@/app/globals.css";
export const metadata = {
  title: `Admin ${siteName}`,
  description: 'Mnage Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
