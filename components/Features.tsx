import React from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { bestSellerCoffee } from "@/constants";
import AutoFitLayout from "./AutoFitLayout";
import CoffeeCard from "./CoffeeCard";

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading className="mt-10 text-3xl font-bold lg:text-5xl">
        Best Selling Coffee
      </SectionHeading>
      <SectionHeading className="mt-5 text-lg text-foreground/90">
        Discover the irresistible favorites that our coffee lovers can't get
        enough of.
      </SectionHeading>

      <AutoFitLayout>
        {bestSellerCoffee.map((coffee, index) => (
          <CoffeeCard key={coffee.id} {...coffee} idx={index} />
        ))}
      </AutoFitLayout>
    </Section>
  );
}
