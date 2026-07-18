import FAQs from "@/components/Faqs";
import Header from "@/components/Header";
import Title from "@/components/inputs/Title";
import WhyUS from "@/components/WhyUS";
import Services from "@/components/Services";
import { projectsPage } from "@/data";
import Process from "@/app/_components/Process";
import JsonLd from "@/components/JsonLd";
import AreaOfServices from "@/components/AreaOfServices";
import ProjectsMasonryGrid from "@/components/ProjectsMasonryGrid";
import type { ProjectView } from "@/actions/projects";

type ProjectsListingProps = {
  items: ProjectView[];
  jsonLdData: Record<string, unknown>;
};

export default function ProjectsListing({
  items,
  jsonLdData,
}: ProjectsListingProps) {
  return (
    <main className="flex flex-col">
      <Header cta desc="" title={projectsPage.seo.title} />

      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-3 max-w-2xl">
            <Title text="Our Projects" />
            <h2 className="text-heading">{projectsPage.seo.title}</h2>
            <p className="p1">{projectsPage.seo.description}</p>
          </div>

          <ProjectsMasonryGrid items={items} ctaLabel="Read more" />
        </div>
      </section>

      <WhyUS />
      <Services />
      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
