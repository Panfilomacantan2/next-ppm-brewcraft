"use client";

import Section from "@/components/Section";
import { combinedCoffee } from "@/constants";
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
    const coffee = combinedCoffee.find(
      (coffee) => coffee.id === parseInt(params.id),
    );

    if (!coffee) return;

    setCoffeeDetails(coffee);
    // @ts-ignore
  }, []);

  return (
    <Section>
      <h1 className="text-xl">{coffeeDetails.brand}</h1>
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
            <p>{coffeeDetails.name}</p>
            <p>{coffeeDetails.price}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
