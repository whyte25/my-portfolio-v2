import { Contact } from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function page() {
  return (
    <div className=" projects h-screen flex items-center justify-center ">
      <p className="text-3xl md:text-5xl lg:text-7xl">Coming soon...</p>
    </div>
  );
}
