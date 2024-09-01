"use client";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/BestSeller";
import Home from "@/components/Home";
import NewArrivals from "@/components/Explore";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartStore } from "@/store/Cart";

export default function MainPage() {
  useEffect(() => {
    AOS.init({
      once: true,
    });

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
