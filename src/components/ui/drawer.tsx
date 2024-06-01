import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface DrawerProps {
  side?: "left" | "right" | "top" | "bottom";
  width?: number;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  closeDrawer: () => void;
  isDrawerOpen: boolean;
  hideIcon?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  side = "right",
  className,
  overlayClassName,
  closeDrawer,
  isDrawerOpen,
  hideIcon,
  children,
}) => {
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }

    return () => {
      document.body.classList.remove("drawer-open");
    };
  }, [isDrawerOpen]);

  const sheetVariants = cva(
    `fixed z-[99999] gap-4 bg-white w-full  md:w-[400px]  dark:text-white p-6 shadow-lg transition ease-in-out duration-500`,
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: `inset-y-0 left-0 h-full w-3/4  ${
            isDrawerOpen ? "translate-x-0 " : "-translate-x-full"
          } w-full  sm:max-w-sm`,
          right: `inset-y-0 right-0 h-full w-3/4   ${
            isDrawerOpen ? "translate-x-0 " : "translate-x-full"
          } w-full sm:max-w-sm`,
        },
      },
      defaultVariants: {
        side: "right",
      },
    }
  );

  return (
    <>
      <div className={cn(sheetVariants({ side }), className)}>
        <Button
          className={`self-end ${hideIcon ? "hidden" : "block"}`}
          variant={"ghost"}
          size={"icon"}
        >
          <X onClick={closeDrawer} />
        </Button>
        {children}
      </div>
      <div
        onClick={closeDrawer}
        className={twMerge(
          `fixed inset-0 z-[999] overflow-auto  cursor-pointer    top-0 bg-black/20 w-full h-full   animate-fadeIn ${
            isDrawerOpen ? "block" : "hidden"
          } `,
          overlayClassName
        )}
      ></div>
    </>
  );
};

export default Drawer;
