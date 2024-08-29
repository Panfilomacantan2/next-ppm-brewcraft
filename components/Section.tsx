import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export default function Section({ className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn("container px-3 min-h-screen w-full py-28 overflow-x-hidden", className)}>
      {children}
    </section>
  );
}
