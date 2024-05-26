import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { StackTypes } from "../../../types";

export const StackItem = ({
  item,
  index = 0,
}: {
  item: StackTypes;
  index?: number;
}) => {
  const delay = index > 1 ? 500 + (index - 1) * 500 : 0;
  return (
    <div
      //   data-aos="slide-up"
      //   data-aos-delay={delay}
      className="flex justify-center items-center py-1.5  gap-2 hover:bg-[rgb(255,255,255,0.2)]  transition duration-300 bg-[rgb(255,255,255,0.15)] w-36 2xsm:w-[165px]  sm:w-44  md:w-44  h-fit rounded-full"
    >
      <img
        src={urlForImage(item?.imageurl?.asset)}
        alt=" "
        className="w-7 h-7 rounded-full object-cover"
      />
      <p className="">{item?.name}</p>
    </div>
  );
};
