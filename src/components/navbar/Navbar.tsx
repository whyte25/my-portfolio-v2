"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Path } from "../../../types";
import { Logo } from "../Logo";
import Sidebar from "./Sidebar";

function NavBar() {
  const [activeLink, setActiveLink] = useState<Path["path"]>("/");
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

  const onUpdateActiveLink = (path: Path["path"]) => {
    setActiveLink(path);
    setShowNav(false);
  };

  return (
    <>
      <nav
        className={`${scrolled ? "py-5  bg-black z-[999] transition-all duration-500 " : " bg-transparent !bg-none py-7 "} fixed ease-in-out w-full `}
      >
        <div className=" flex justify-between items-center gap-5 px-5 2xsm:px-10 lg:px-[105px]   4k:max-w-8xl 2xl:mx-auto">
          <Logo />
          <BiMenu onClick={handleShowNav} className=" md:hidden" size={25} />

          <div className="relative hidden md:flex items-center  gap-5 font-medium text-sm ">
            {pathname === "/" ? (
              <>
                <a
                  href="#home"
                  className={` relative  ${
                    activeLink === "#home"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={` relative ${
                    activeLink === "#about"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={` relative ${
                    activeLink === "#projects"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={` relative ${
                    activeLink === "#contact"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                >
                  Contact
                </a>
                <Link onClick={() => onUpdateActiveLink("/blog")} href="/blog">
                  blog
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={() => onUpdateActiveLink("/")}
                  className={` relative ${
                    activeLink === "/"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={` relative ${
                    activeLink === "/about"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                  onClick={() => onUpdateActiveLink("/about")}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  onClick={() => onUpdateActiveLink("/projects")}
                  className={` relative ${
                    activeLink === "/projects"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  onClick={() => onUpdateActiveLink("/contact")}
                  className={` relative ${
                    activeLink === "/contact"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  onClick={() => onUpdateActiveLink("/blog")}
                  className={` relative ${
                    activeLink === "/blog"
                      ? "before:absolute before:bottom-0 before:bg-white before:h-[1.5px] before:w-full capitalize"
                      : "nav__link"
                  } `}
                  href="/blog"
                >
                  blog
                </Link>
              </>
            )}
            <a
              href={"/ifeoluwa-resume.pdf"}
              target="_blank"
              className="px-3 py-1.5  border-white border resume "
            >
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </nav>
      <Sidebar
        handleShowNav={handleShowNav}
        showNav={showNav}
        onUpdateActiveLink={onUpdateActiveLink}
        activeLink={activeLink}
      />
    </>
  );
}

export default NavBar;
