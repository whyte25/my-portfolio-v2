"use client";
import { useEffect, useState } from "react";
import { BiMenu, BiSolidContact } from "react-icons/bi";
import Resume from "/my-resume.pdf";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "./Logo";

function NavBar() {
  const [activeLink, setActiveLink] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(pathname);

  const onUpdateActiveLink = (path: string) => {
    const currentRoute = pathname === path ? true : false;
    setActiveLink(currentRoute);
  };

  return (
    <nav
      className={`${scrolled ? "py-5  bg-black z-[999] transition-all duration-500 " : " bg-transparent !bg-none py-7 "} fixed ease-in-out w-full `}
    >
      <div className=" flex justify-between items-center gap-5 px-5 2xsm:px-10 lg:px-16 2xl:px-16  2xl:max-w-7xl 2xl:mx-auto">
        <Logo />
        <BiMenu onClick={handleShowNav} className=" md:hidden" size={25} />

        <div className="relative hidden md:flex items-center  gap-5 font-medium text-sm ">
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
            className="px-3 py-1.5 border-white border resume "
          >
            <span>My Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
