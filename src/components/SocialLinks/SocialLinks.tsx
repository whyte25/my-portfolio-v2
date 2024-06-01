import { siteConfig } from "@/constant/site";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { getSocialLinks } from "../../../sanity/sanity-utils";

export const SocialLinks = async () => {
  const socialLinks = await getSocialLinks();

  return (
    <div className="fixed top-[50%] -translate-y-[50%] right-5 z-[999]">
      <div className="flex items-center justify-center md:bg-none  custom-gradient  p-2">
        <div className="flex flex-col gap-10 ">
          <a
            href={socialLinks[0]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-in-out duration-500 md:hover:-translate-y-2"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={socialLinks[1]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-in-out duration-500 md:hover:-translate-y-2"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={socialLinks[2]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-in-out duration-500 md:hover:-translate-y-2"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href={socialLinks[3]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all ease-in-out duration-500 md:hover:-translate-y-2"
          >
            <FiInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
