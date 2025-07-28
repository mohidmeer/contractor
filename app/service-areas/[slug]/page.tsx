import GetToKnow from '@/app/_components/GetToKnow';
import Process from '@/app/_components/Process';
import Projects from '@/app/_components/Projects';
import Testimonials from '@/app/_components/Testimonials';
import AreaOfServices from '@/components/AreaOfServices';
import FAQs from '@/components/Faqs';
import Header from '@/components/Header';
import Services from '@/components/Services';
import WhyUS from '@/components/WhyUS';
import { serviceAreasData } from '@/data/constants';
import React from 'react';

export async function generateStaticParams() {
  return serviceAreasData.map(area => ({
    city: area.href.split('/').pop(),
  }));
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
        title={`Roofing Services in ${cityData.name}`}
      />


      {/* Components */}
      <GetToKnow/>
      <Services/>
      <Process />
      <WhyUS />
      <FAQs />
      <Projects/>
      <Testimonials/>
      <AreaOfServices />
    </main>
  );
}