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

export function SideBar() {
  const pathname = usePathname();
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
            const isActive = pathname === link.url;
            return (
              <div className="flex gap-x-2" key={link.url}>
                <Link
                  className={cn(
                    "flex max-w-fit text-[18px] text-foreground/80 transition-colors hover:text-foreground/100",
                    {
                      "text-foreground/100": isActive,
                    },
                  )}
                  href={link.url}
                >
                  <SheetClose className="border-0 focus:border-0 focus:outline-0 active:border-0 active:outline-0">
                    {link.name}
                  </SheetClose>
                </Link>
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
