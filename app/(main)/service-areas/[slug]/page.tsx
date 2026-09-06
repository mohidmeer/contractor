import GetToKnow from "@/app/_components/GetToKnow";
import Process from "@/app/_components/Process";
import Projects from "@/app/_components/Projects";
import Testimonials from "@/app/_components/Testimonials";
import AreaOfServices from "@/components/AreaOfServices";
import FAQs from "@/components/Faqs";
import Header from "@/components/Header";
import Services from "@/components/Services";
import WhyUS from "@/components/WhyUS";
import { getSiteContent } from "@/lib/siteContent/server";
import { toMediaUrl } from "@/lib/media";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { serviceAreasData } = await getSiteContent();
  return serviceAreasData.map((area) => ({
    slug: area.href.split("/").pop(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { serviceAreasData, siteName, siteUrl } = await getSiteContent();
  const cityData = serviceAreasData.find(
    (area) => area.href.split("/").pop() === slug
  );
  if (!cityData) return {};

  const canonical = `${siteUrl}service-areas/${slug}`;
  const image = toMediaUrl(cityData.image);
  const ogAbsolute = image.startsWith("http")
    ? image
    : siteUrl.replace(/\/+$/, "") + image;

  return {
    title: `${cityData.title} | ${siteName}`,
    description: cityData.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: cityData.title,
      description: cityData.description,
      url: canonical,
      images: [ogAbsolute],
    },
    twitter: {
      card: "summary_large_image",
      title: cityData.title,
      description: cityData.description,
      images: [ogAbsolute],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { getToKnow, serviceAreasData } = await getSiteContent();

  const cityData = serviceAreasData.find(
    (area) => area.href.split("/").pop() === slug
  );

  if (!cityData) {
    return <div className="p-10 text-center text-red-500">Not Found</div>;
  }

  return (
    <main className="flex flex-col">
      <Header cta={true} desc={cityData.description} title={cityData.title} />
      <GetToKnow description={cityData.content || getToKnow.description} />
      <Services />
      <Process />
      <Projects />
      <WhyUS />
      <Testimonials />
      <FAQs />
      <AreaOfServices />
    </main>
  );
}
