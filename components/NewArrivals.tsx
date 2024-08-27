import React from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function NewArrivals() {
  return (
    <Section id="new-arrivals">
      <SectionHeading className="font-bold text-3xl lg:text-5xl mt-10">Explore Our Coffee</SectionHeading>
      <SectionHeading className="font-medium">New Arrivals</SectionHeading>
    </Section>
  );
}
