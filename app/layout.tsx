import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: {
    default: 'Total Care Services',
    template: '%s | Total Care Services',
  },
  description: 'Expert roofing and home services in Florida.',
  openGraph: {
    title: 'Total Care Services',
    description: 'Expert roofing and home services in Florida.',
    url: 'https://totalcareservicesroofing.com',
    siteName: 'Total Care Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Care Services',
    description: 'Expert roofing and home services in Florida.',
  },
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <header>
          <TopBar/>
          <NavBar/>
        </header>
        {children}
        <GoogleMap/>
        <Footer/>
      </body>
    </html>
  );
}
