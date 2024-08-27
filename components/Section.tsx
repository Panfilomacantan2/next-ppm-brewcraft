import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export default function Section({ className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn("container min-h-screen py-28", className)}>
      {children}
    </section>
  );
}
