import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronLeft } from "react-icons/bi";
import { Path } from "../../../types";
import Drawer from "../ui/drawer";

interface ShowNavProp {
  showNav: boolean;
  handleShowNav: () => void;
  activeLink: Path["path"];
  onUpdateActiveLink: (path: Path["path"]) => void;
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
