"use client";

import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { bestSellerCoffee } from "@/constants";

type CoffeeCardProps = {
  idx: number;
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
};

export default function CoffeeCard({
  id,
  title,
  description,
  rating,
  price,
  idx,
  image,
}: CoffeeCardProps) {
  const [addCoffeeToCart, seAddCoffeeToCart] = useState<null>(null);

  useEffect(() => {
    if (window) {
      const cart = localStorage.getItem("cart") || [];
    }
  }, []);

  const handleAddToCart = (id: number) => {
    const getCoffee = bestSellerCoffee.find((coffee) => coffee.id === id);
    console.log(getCoffee);
  };

  return (
    // !TODO: add tag and add click event and redirect and show its details
    // !TODO: add global state zustand or Context API

    <div
      className="max-h-96 border shadow-sm hover:shadow-lg"
      data-aos="fade-left"
      data-aos-duration={200 * (idx + 1)}
    >
      <div className="h-40 w-full overflow-hidden border-b border-border py-2">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative space-y-1 p-5 pb-14">
        <div>
          <StarRating rating={rating} />
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>

        <p>Price: ₱{price}</p>

        <Button
          className="absolute bottom-2 right-2 flex items-center justify-center gap-x-2"
          onClick={() => handleAddToCart(id)}
        >
          <ShoppingCart /> add to cart
        </Button>
      </div>
    </div>
  );
}
