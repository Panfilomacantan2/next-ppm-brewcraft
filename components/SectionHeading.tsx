import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

export default function SectionHeading({
  className,
  children,
}: SectionHeadingProps) {
  return <h1 className={cn("text-center text-lg", className)}>{children}</h1>;
}
