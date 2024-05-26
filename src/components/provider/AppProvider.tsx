"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  return <>{children}</>;
};
