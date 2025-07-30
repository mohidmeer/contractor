import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { JsonLdDataLanding, pages } from "@/sites/roofing/constants";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: pages.landing.seo.title,
    template: `%s | ${pages.landing.seo.title}`,
  },
  description: pages.landing.seo.description,
  openGraph: {
    title: pages.landing.seo.title,
    description: pages.landing.seo.description,
    url: pages.landing.seo.canonical,
    siteName: pages.landing.seo.title,
    type: 'website',
    images: [
      {
        url: pages.landing.seo.ogImage,
        width: 1200,
        height: 630,
        alt: pages.landing.seo.title,
      },
    ],
  },
  alternates: {
    canonical: pages.landing.seo.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: pages.landing.seo.title,
    description: pages.landing.seo.description,
    images: [pages.landing.seo.ogImage],
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
          <TopBar />
          <NavBar />
        </header>
        {children}
        <GoogleMap />
        <Footer />
        <JsonLd data={JsonLdDataLanding} />
      </body>
    </html>
  );
}
