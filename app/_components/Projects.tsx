import Title from "@/components/inputs/Title";
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
    <section className="py-20">
      {showHeader && (
        <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
          <Title text={"Our Projects"} />
          <h2 className="text-heading">{landingPage.projects.heading}</h2>
        </div>
      )}
      <ProjectsCarousel items={items} limit={limit} />
    </section>
  );
};

export default Projects;
