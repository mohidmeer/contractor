import Header from "@/components/Header";
import { servicesPage } from "@/data";
import JsonLd from "@/components/JsonLd";
import FAQs from "@/components/Faqs";
import AreaOfServices from "@/components/AreaOfServices";
import Projects from "@/app/_components/Projects";
import Process from "@/app/_components/Process";
import { getJsonLdDataServices } from "@/actions/catalogJsonLd";
import ServicesListSection from "@/components/ServicesListSection";

const page = async () => {
  const jsonLdData = await getJsonLdDataServices();

  return (
    <main className="flex flex-col">
      <Header
        cta={true}
        desc={servicesPage.seo.description}
        title={servicesPage.seo.title}
      />

      <ServicesListSection
        title="Our Services"
        heading="What we deliver"
        description={servicesPage.seo.description}
        tone="tint"
        ctaLabel="View service"
        titleField="label"
      />

      <Projects />
      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
};

export default page;
