"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export function SideBar() {
  const pathname = usePathname();

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
  }, [Router.asPath]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer lg:hidden">
          <Menu size={28} />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <Link
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
            href="/"
          >
            {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
            <span className="text-lg">BrewCraft</span>
          </Link>
        </SheetHeader>

        <nav className="mt-6 flex flex-col space-y-4">
          {navLinks.map((link, idx) => {
            return (
              <ul className="flex gap-x-2" key={link.url}>
                <li key={idx}>
                  <a
                    href={link.url}
                    className={cn("text-base font-normal text-foreground", {
                      "font-medium text-yellow-400": hashActive === link.url,
                    })}
                    onClick={() => setHashActive(link.url)}
                  >
                    <SheetClose className="border-0 focus:border-0 focus:outline-0 active:border-0 active:outline-0">
                      {link.name}
                    </SheetClose>
                  </a>
                </li>
              </ul>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
