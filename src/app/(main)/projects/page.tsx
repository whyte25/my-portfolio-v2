import ProjectsComponent from "@/components/projects/ProjectsComponent";
import { getProjects } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className=" projects pt-20 pb-48 md:px-14 lg:px-[105px] px-5 ">
      <div className=" mx-auto">
        <ProjectsComponent projects={projects} />
      </div>
    </div>
  );
}
