import { getProjects } from "@/actions/projects";
import { getJsonLdDataProjects } from "@/actions/catalogJsonLd";
import ProjectsListing from "./ProjectsListing";

export default async function Page() {
  const items = await getProjects();
  const jsonLdData = await getJsonLdDataProjects();

  return <ProjectsListing items={items} jsonLdData={jsonLdData} />;
}
