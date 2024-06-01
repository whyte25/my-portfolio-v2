import { Contact } from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <div className=" projects pt-20 pb-44 ">
      <Contact />
    </div>
  );
}
