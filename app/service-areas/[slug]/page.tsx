import GetToKnow from '@/app/_components/GetToKnow';
import Process from '@/app/_components/Process';
import Projects from '@/app/_components/Projects';
import Testimonials from '@/app/_components/Testimonials';
import AreaOfServices from '@/components/AreaOfServices';
import FAQs from '@/components/Faqs';
import Header from '@/components/Header';
import Services from '@/components/Services';
import WhyUS from '@/components/WhyUS';
import { getToKnow, pages, serviceAreasData, siteName, siteUrl } from '@/sites/roofing/constants';
import React from 'react';

export async function generateStaticParams() {
  return serviceAreasData.map(area => ({
    city: area.href.split('/').pop(),
  }));
}


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const cityData = serviceAreasData.find(area => area.href.split('/').pop() === slug);
  if (!cityData) return {}

  const canonical = `${siteUrl}service-areas/${slug}`

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
      images: [cityData.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: cityData.title,
      description: cityData.description,
      images: [cityData.image],
    },
  }
}


export default async function Page({ params }) {
  const { slug } = params;

  const cityData = serviceAreasData.find(
    area => area.href.split('/').pop() === slug
  );

  if (!cityData) {
    return <div className="p-10 text-center text-red-500">Not Found</div>;
  }

  return (
    <main className="flex flex-col gap-20">
      <Header
        cta={true}
        desc={cityData.description}
        title={cityData.title}
      />
      <GetToKnow description={cityData.content || getToKnow.description} />
      <Services />
      <Process />
      <WhyUS />
      <FAQs />
      <Projects />
      <Testimonials />
      <AreaOfServices />
    </main>
  );
}