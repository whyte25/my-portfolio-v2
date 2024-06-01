import ProjectsComponent from "@/components/projects/ProjectsComponent";
import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className=" projects pt-20 pb-48 ">
      <div className="w-5/6 sm:w-[90%] mx-auto">
        <ProjectsComponent projects={projects} />
      </div>
    </div>
  );
}
