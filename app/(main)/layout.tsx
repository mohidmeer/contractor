import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar2 from "@/components/NavBar2";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import FloatingActions from "@/components/FloatingActions";
import JustCallWidget from "@/components/JustCallWidget";
import { getDynamicNavItems } from "@/actions/nav";
import { SiteContentProvider } from "@/lib/siteContent";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteContent();
  const { landingPage, siteUrl } = site;
  const ogImage = toMediaUrl(landingPage.seo.ogImage);

  return {
    title: {
      default: landingPage.seo.title + " Florida",
      template: `%s | ${landingPage.seo.title}`,
    },
    icons: {
      icon: "/favicon.ico",
    },
    description: landingPage.seo.description,
    openGraph: {
      title: landingPage.seo.title,
      description: landingPage.seo.description,
      url: landingPage.seo.canonical,
      siteName: landingPage.seo.title,
      type: "website",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : siteUrl.replace(/\/+$/, "") + ogImage,
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
      card: "summary_large_image",
      title: landingPage.seo.title,
      description: landingPage.seo.description,
      images: [
        ogImage.startsWith("http")
          ? ogImage
          : siteUrl.replace(/\/+$/, "") + ogImage,
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navItems, site] = await Promise.all([
    getDynamicNavItems(),
    getSiteContent(),
  ]);

  const landingJsonLd = {
    "@context": "https://schema.org",
    "@type": site.bussinessType,
    "@id": `${site.landingPage.seo.canonical}#business`,
    name: site.landingPage.seo.title,
    description: site.landingPage.seo.description,
    url: site.landingPage.seo.canonical,
    image: toMediaUrl(site.landingPage.seo.ogImage),
    logo: toMediaUrl(site.siteLogo),
    sameAs: Object.values(site.socialLinks),
    telephone: site.contactInfo.phone.number,
    email: site.contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contactInfo.address,
    },
    areaServed: site.serviceAreasData.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
  };

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SiteContentProvider value={site}>
          {site.googleTagManagerId ? (
            <GoogleTagManager gtmId={site.googleTagManagerId} />
          ) : (
            site.googleAnalyticId && (
              <GoogleAnalytics gaId={site.googleAnalyticId} />
            )
          )}
          <NavBar2 items={navItems} />
          {children}
          <GoogleMap />
          <Footer items={navItems} />
          <JsonLd data={landingJsonLd} />
          <FloatingActions />
          {site.justCall?.enabled ? (
            <JustCallWidget uhash={site.justCall.uhash} />
          ) : null}
        </SiteContentProvider>
      </body>
    </html>
  );
}
