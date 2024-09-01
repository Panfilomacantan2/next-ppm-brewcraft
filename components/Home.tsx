import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-background px-3 lg:px-10"
    >
      {/* <div className="absolute left-0 top-0 z-40 w-full h-40 bg-gradient-to-b from-gray-200/80 to-transparent dark:from-black" /> */}

      <div className="flex flex-col lg:flex-row">
        <div
          className="mt-32 flex flex-col items-center justify-center lg:mt-0"
          data-aos="fade-right"
        >
          <h1 className="max-w-[640px] text-4xl font-bold text-foreground/95 sm:text-5xl md:text-6xl">
            Awaken Your Senses. Discover Coffee&apos;s True Essence.
          </h1>
          <p className="my-5 max-w-[640px] text-foreground/80 md:text-lg">
            Experience Flavor, One Perfect Cup at a Time. Elevate Your Coffee
            Moments with Rich Aromas and Bold Tastes.
          </p>

          <div className="space-x-4 self-start">
            <a
              href="#contact"
              className="inline-block rounded-md border border-border px-6 py-3 text-lg font-medium"
            >
              Contact Us
            </a>
            <a
              href="#new-arrivals"
              className="inline-block rounded-md bg-yellow-600 px-6 py-3 text-lg font-medium text-white hover:bg-yellow-600/90"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div
          className="mt-20 h-full w-full lg:h-[520px] lg:w-[520px]"
          data-aos="fade-left"
        >
          <Image
            src="/assets/images/hero_img.png"
            alt="Hero"
            className="h-full w-full object-cover object-center"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
