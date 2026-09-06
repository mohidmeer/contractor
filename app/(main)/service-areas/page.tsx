import FAQs from "@/components/Faqs";
import Header from "@/components/Header";
import WhyUS from "@/components/WhyUS";
import Services from "@/components/Services";
import Projects from "@/app/_components/Projects";
import Process from "@/app/_components/Process";
import JsonLd from "@/components/JsonLd";
import { JsonLdDataServiceArea } from "@/jsonld";
import ServiceAreasListing from "./ServiceAreasListing";
import { getSiteContent } from "@/lib/siteContent/server";

const page = async () => {
  const { serviceAreaPage } = await getSiteContent();
  return (
    <main className="flex flex-col">
      <Header
        cta={true}
        desc={serviceAreaPage.seo.description}
        title={serviceAreaPage.seo.title}
      />
      <ServiceAreasListing />
      <Services />
      <Process />
      <Projects />
      <WhyUS />
      <FAQs />
      <JsonLd data={JsonLdDataServiceArea} />
    </main>
  );
};

export default page;
