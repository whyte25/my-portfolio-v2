import About from "@/components/AboutMe";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="pt-20 pb-48 about">
      <About />
    </div>
  );
}
