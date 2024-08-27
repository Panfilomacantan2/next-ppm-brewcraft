import React from "react";
import Section from "./Section";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-background px-3 lg:px-10"
    >
      {/* <div className="absolute left-0 top-0 z-40 w-full h-40 bg-gradient-to-b from-gray-200/80 to-transparent dark:from-black" /> */}

      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
        <div className="mt-32 flex flex-col items-center justify-center lg:mt-0">
          <h1 className="text-4xl font-bold text-foreground/90 lg:text-6xl">
            Awaken Your Senses. Discover Coffee&apos;s True Essence.
          </h1>
          <p className="my-5 text-lg text-foreground/80">
            Experience Flavor, One Perfect Cup at a Time. Elevate Your Coffee
            Moments with Rich Aromas and Bold Tastes.
          </p>

          <div className="space-x-4 self-start">
            <a
              href="#features"
              className="inline-block rounded-md bg-yellow-600 px-6 py-3 text-lg font-medium text-white hover:bg-yellow-600/90"
            >
              Get Started
            </a>
            <a
              href="#new-arrivals"
              className="inline-block rounded-md border border-border px-6 py-3 text-lg font-medium"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="mt-20 h-full w-full lg:h-[620px] lg:w-[620px]">
          <Image
            src="/assets/images/hero_img.png"
            alt="Hero"
            className="h-full w-full object-cover"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
