"use client";

import ModeToggle from "./ModeToggle";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { SideBar } from "./SideBar";
import { CartSheet } from "./CartSheet";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [hashActive, setHashActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    if (hash) {
      console.log(hash);
      const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setHashActive(hash); // Store the full hash including '#'
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hashActive) {
      const element = document.querySelector(hashActive);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hashActive]);

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
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4 md:px-12">
      <Link href="/#home" className="text-foreground text-yellow-500 flex justify-center items-center gap-2">
        <ShoppingBag size={18} />BrewCraft
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
      <div className="flex items-center justify-center gap-x-6">
        <ModeToggle />

        <CartSheet />

        <SideBar />
      </div>
    </header>
  );
}
