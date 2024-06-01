import React, { useEffect, useState } from "react";
import Stack from "./stack/Stack";
import Experience from "./Experience";
import ProjectsComponent from "./projects/ProjectsComponent";
import { usePathname } from "next/navigation";
import { urlForImage } from "../../sanity/lib/image";
import { getAbout, getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";

const About = async () => {
  const about = await getAbout();
  const projects = await getProjects();

  return (
    <div
      id="about"
      className="md:px-14 lg:px-[105px] px-5 4k:max-w-8xl  mx-auto pt-16 "
    >
      <div data-data-aos="slide-up" className="flex items-center gap-3">
        <div className="flex flex-col   gap-1">
          <div className="w-8 bg-white ml-2 h-[2px]" />
          <div className="w-8 bg-white h-[2px]" />
        </div>
        <h3 className="md:text-2xl text-base">About Me</h3>
        <div className="flex items-center">
          <div className="lg:w-80 md:w-40 w-32 bg-white ml-2 h-[2px]" />
          <div className="w-3 rounded-full border-2 border-white  h-3" />
        </div>
      </div>
      {about &&
        about?.map((item) => (
          <div key={item?._id} className="my-8">
            <div className="flex flex-col-reverse md:flex-row space-x-0 gap-10 items-center md:space-x-8">
              <p className="md:text-[18px] text-base md:leading-7 leading-normal md:w-5/6 w-full">
                {item?.description}
              </p>
              <Image
                src={urlForImage(item?.imageurl?.asset)}
                alt=""
                width={2000}
                height={2000}
                className="w-80 h-72 object-cover border-2 border-bg-white rounded-md"
              />
            </div>
          </div>
        ))}
      <Stack />
      <Experience />

      <ProjectsComponent projects={projects} />
    </div>
  );
};

export default About;
