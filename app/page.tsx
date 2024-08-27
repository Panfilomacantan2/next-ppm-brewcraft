"use client";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Home from "@/components/Home";
import NewArrivals from "@/components/NewArrivals";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Home />
      <NewArrivals />
      <Features />
      <Blog />
      <Contact />
    </>
  );
}
