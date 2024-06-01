import { useState } from "react";

import { BiChevronLeft } from "react-icons/bi";
import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";
import Drawer from "../ui/drawer";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ShowNavProp {
  showNav: boolean;
  handleShowNav: () => void;
  activeLink: boolean;
  onUpdateActiveLink: (path: string) => void;
}

const Sidebar = ({
  handleShowNav,
  showNav,
  activeLink,
  onUpdateActiveLink,
}: ShowNavProp) => {
  const pathname = usePathname();

  return (
    <Drawer
      isDrawerOpen={showNav}
      closeDrawer={handleShowNav}
      side="left"
      hideIcon={true}
      className="bg-black   2xsm:max-w-sm"
    >
      <div className="absolute left-4 top-6 flex">
        <div
          className="relative rounded-md cursor-pointer flex items-center space-x-2 text-white"
          onClick={() => handleShowNav()}
        >
          <span className="sr-only">Close side bar</span>
          <BiChevronLeft />
          <p>Back</p>
        </div>
      </div>

      <div className="flex h-full mt-10 flex-col overflow-y-scroll bg-body text-white py-6 shadow-xl">
        <div className="px-4 sm:px-6"></div>

        <nav className="lg:hidden flex pb-5 items-start w-full relative flex-col space-y-10 text-xl font-normal">
          {pathname === "/" ? (
            <>
              <a
                href="#home"
                onClick={() => onUpdateActiveLink("/")}
                className={` relative  ${
                  activeLink
                    ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                    : "nav__link"
                } `}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => onUpdateActiveLink("about")}
                className={` relative ${
                  activeLink
                    ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                    : "nav__link"
                } `}
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => onUpdateActiveLink("projects")}
                className={` relative ${
                  activeLink
                    ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                    : "nav__link"
                } `}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => onUpdateActiveLink("contact")}
                className={` relative ${
                  activeLink
                    ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                    : "nav__link"
                } `}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link href="/">Home</Link>
              <Link href="about">About</Link>
              <Link href="projects">Projects</Link>
              <Link href="contact">Contact</Link>
            </>
          )}
          <a
            href={"/my-resume.pdf"}
            download="Fasogba Ifeoluwa - Resume"
            className="px-3 py-1.5  border-white border resume "
          >
            <span>My Resume</span>
          </a>
        </nav>
      </div>
    </Drawer>
  );
};

export default Sidebar;