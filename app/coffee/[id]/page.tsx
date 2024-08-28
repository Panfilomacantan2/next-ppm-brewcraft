"use client";

import Section from "@/components/Section";
import { coffeeProducts } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type paramsProps = {
  params: {
    id: string;
  };
};

export default function CoffeeDetails({ params }: paramsProps) {
  const [coffeeDetails, setCoffeeDetails] = useState<any>([]);

  useEffect(() => {
    const coffee = coffeeProducts.find(
      (coffee) => coffee.id === parseInt(params.id),
    );

    if (!coffee) return;

    setCoffeeDetails(coffee);
  }, [params.id]);

  return (
    <Section>
      <h1>Page {params.id}</h1>
      {coffeeDetails && (
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={coffeeDetails.image}
              alt={coffeeDetails.name}
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2>{coffeeDetails.name}</h2>
            <p>{coffeeDetails.description}</p>
            <p>{coffeeDetails.price}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
