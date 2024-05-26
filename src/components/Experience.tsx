import React, { useEffect, useState } from "react";
import { getExperience } from "../../sanity/sanity-utils";

const Experience = async () => {
  const experience = await getExperience();

  return (
    <div className="pt-10 pb-24">
      <h3 className="text-xl ">I have been able to create solutions for:</h3>
      <div className="flex flex-col mt-3 gap-10">
        {experience.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center  gap-3">
              <div className="flex flex-col   gap-1">
                <div className="w-8 bg-[rgb(255,255,255,0.40)] ml-2 h-[2px]" />
                <div className="w-8 bg-[rgb(255,255,255,0.40)] h-[2px]" />
                <span></span>
              </div>
              <h3 className="text-base text-[rgb(255,255,255,0.40)]">
                {item?.company}
              </h3>
            </div>
            <h3>{item?.position}</h3>
            <p className="text-sm text-[rgb(255,255,255,0.40)]">
              {item?.timeFrame}
            </p>
            <ol className="pl-0 md:pl-8">
              {item?.tasks.map((task, i) => (
                <li key={i} className="list-disc ml-4 mt-2 w-[80%]">
                  {task}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
