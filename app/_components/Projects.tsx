import { landingPage } from "@/data";
import { getProjects } from "@/actions/projects";
import ProjectsCarousel from "./ProjectsCarousel";

type ProjectsProps = {
  limit?: number;
  showHeader?: boolean;
};

const Projects = async ({ limit, showHeader = true }: ProjectsProps) => {
  const items = await getProjects();

  return (
    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ProjectsCarousel
          items={items}
          limit={limit}
          showHeader={showHeader}
          heading={landingPage.projects.heading}
        />
      </div>
    </section>
  );
};

export default Projects;
