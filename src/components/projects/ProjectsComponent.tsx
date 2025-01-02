"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Projects } from "../../../types";
import { ProjectCard } from "./ProjectCard";

const ProjectsComponent = ({ projects }: { projects: Projects[] }) => {
  const pathname = usePathname();
  const storyRef = useRef(null);

  const [projectsSlice] = useState(projects?.slice(0, 3));

  useEffect(() => {
    if (storyRef.current) {
      //@ts-ignore
      storyRef.current.classList.add("swap");
    }
  }, []);

  return (
    (pathname === "/" || pathname === "/projects") && (
      <div id="projects" className="lg:pt-20  4k:max-w-8xl mx-auto ">
        <div data-aos="slide-up" className="flex items-center  sm:gap-1  gap-3">
          <div className="flex flex-col   gap-1">
            <div className="w-8 bg-white ml-2 h-[2px]" />
            <div className="w-8 bg-white h-[2px]" />
            <span></span>
          </div>
          <h3 className="text-2xl md:text-xl">Projects</h3>
          <div className="flex items-center">
            <div className="lg:w-80 md:w-40 w-28 bg-white ml-2 h-[2px]" />
            <div className="w-3 rounded-full border-2 border-bg-white  h-3" />
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-5  md:gap-10">
          {pathname === "/"
            ? projectsSlice?.map((project) => (
                <ProjectCard key={project?._id} project={project} />
              ))
            : projects?.map((project) => (
                <ProjectCard key={project?._id} project={project} />
              ))}
          {pathname === "/" && (
            <Link
              href="projects"
              className=" mx-auto py-2 mt-5 md:mt-10 px-4 bg-[rgb(255,255,255,0.2)] rounded-md hover:text-white"
            >
              View More
            </Link>
          )}
        </div>
      </div>
    )
  );
};

export default ProjectsComponent;
