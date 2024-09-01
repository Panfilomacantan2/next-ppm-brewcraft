import React from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { coffeeProducts } from "@/constants";
import CoffeeCard from "./CoffeeCard";
import AutoFitLayout from "./AutoFitLayout";

export default function NewArrivals() {
  return (
    <Section id="explore-now">
      <SectionHeading className="mt-10 text-3xl font-bold lg:text-5xl">
        Explore Our Coffee
      </SectionHeading>
      <SectionHeading className="my-8 text-base text-foreground/90 lg:my-4">
        Experience the rich aromas and bold flavors that awaken your senses with
        every sip.
      </SectionHeading>

      <AutoFitLayout>
        {coffeeProducts.map((coffee, index) => (
          <CoffeeCard key={coffee.id} {...coffee} idx={index} />
        ))}
      </AutoFitLayout>
    </Section>
  );
}
