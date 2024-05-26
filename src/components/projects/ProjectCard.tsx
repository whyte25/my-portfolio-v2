import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { Projects } from "../../../types";
import Image from "next/image";
import { StackItem } from "../stack/StackItem";

export const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <div
      key={project?._id}
      className="flex flex-col md:flex-row even:flex-col md:even:flex-row-reverse gap-5 md:gap-10  mt-5 "
    >
      <div className="flex-1">
        <Image
          src={urlForImage(project?.imageurl?.asset)}
          alt=""
          width={2000}
          height={2000}
          className="md:w-full w-full rounded-lg md:h-[350px] h-[14rem] object-cover md:object-fill"
        />
      </div>
      <div className="flex flex-1  flex-col gap-3 ">
        <h3>{project?.name}</h3>
        <p>{project?.description}</p>
        <div className="lg:flex md:items-center w-full grid sm:grid-cols-3 grid-cols-2  lg:justify-start gap-3 lg:flex-wrap ">
          {project?.stacks?.map((item, i) => (
            //@ts-ignore
            <StackItem key={item?._key} item={item} index={i} />
          ))}
        </div>
        <div className="flex w-full gap-3">
          {project?.links?.map((link) => (
            <a
              className="flex  items-center hover:text-white"
              key={link?._key}
              href={link?.href}
              target="_black"
            >
              <p className="text-[14px] animate-pulse">{link?.website}</p>
              <img
                src={urlForImage(link?.imageurl?.asset)}
                alt=""
                className="w-fit h-4"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
