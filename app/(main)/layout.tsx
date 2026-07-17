import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar2 from "@/components/NavBar2";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { googleAnalyticId, landingPage, siteUrl } from "@/data";
import JsonLd from "@/components/JsonLd";
import { JsonLdDataLanding } from "@/jsonld";
import { GoogleAnalytics } from '@next/third-parties/google'
import CallButton from "@/components/CallButton";
import { getDynamicNavItems } from "@/actions/nav";

export const metadata: Metadata = {
  title: {
    default: landingPage.seo.title + ' Florida',
    template: `%s | ${landingPage.seo.title}`,
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: landingPage.seo.description,
  openGraph: {
    title: landingPage.seo.title,
    description: landingPage.seo.description,
    url: landingPage.seo.canonical,
    siteName: landingPage.seo.title,
    type: 'website',
    images: [
      {
        url: siteUrl + landingPage.seo.ogImage,
        width: 1200,
        height: 630,
        alt: landingPage.seo.title,
      },
    ],
  },
  alternates: {
    canonical: landingPage.seo.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: landingPage.seo.title,
    description: landingPage.seo.description,
    images: [siteUrl + landingPage.seo.ogImage],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getDynamicNavItems();

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GoogleAnalytics gaId={googleAnalyticId} />
        <NavBar2 items={navItems} />
        {children}
        <GoogleMap />
        <Footer items={navItems} />
        <JsonLd data={JsonLdDataLanding} />
        <CallButton/>
      </body>
    </html>
  );
}

