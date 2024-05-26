import React, { useEffect, useState } from "react";
import { getStack } from "../../../sanity/sanity-utils";
import { urlForImage } from "../../../sanity/lib/image";
import { StackItem } from "./StackItem";

const Stack = async () => {
  const stack = await getStack();

  return (
    <div>
      <h3 className="text-xl my-3">My technology stack:</h3>
      <div className="lg:flex md:items-center w-full grid sm:grid-cols-3 grid-cols-2  lg:justify-start gap-3 lg:flex-wrap ">
        {stack.map((item, i) => (
          <StackItem key={item?._id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
