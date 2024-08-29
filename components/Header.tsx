"use client";

import ModeToggle from "./ModeToggle";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SideBar } from "./SideBar";
import { CartSheet } from "./CartSheet";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [hashActive, setHashActive] = useState("#home");

  useEffect(() => {
    const hash = window.location.hash;
    console.log("Current hash:", hash);

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setHashActive(hash);
      }
    }
  }, [router.refresh]);

  useEffect(() => {
    // if the scroll up is greater than 50px then add background color to header
    const header = document.querySelector("header");
    const scrollUp = () => {
      if (document.documentElement.scrollTop > 20) {
        header?.classList.add("bg-background", "shadow-md");
      } else {
        header?.classList.remove("bg-background", "shadow-md");
      }
    };

    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4">
      <Link href="/#home" className="text-foreground">
        BrewCraft
      </Link>

      <nav>
        <ul className="space-x-5">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="hidden lg:inline-block">
                <a
                  href={link.url}
                  className={cn("text-base text-foreground", {
                    "font-medium text-yellow-400": hashActive === link.url,
                  })}
                  onClick={() => setHashActive(link.url)}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-x-4">
        <ModeToggle />

        <CartSheet />

        <SideBar />
      </div>
    </header>
  );
}
