"use client";

import React, { useState } from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { bestSellerCoffee } from "@/constants";
import { useCartStore } from "@/store/Cart";
import { CoffeeCardProps } from "@/types";
import Link from "next/link";

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

  const { addToCart, removeFromCart, cart } = useCartStore((state) => state);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const getCoffee = bestSellerCoffee.find((coffee) => coffee.id === id);

    // Check if the item with the same id already exists in the cart
    const isItemInCart = cart.some((item) => item.id === id);

    if (isItemInCart) return;

    addToCart({ ...getCoffee, quantity: 1 });
  };

  return (
    // !TODO: add tag and add click event and redirect and show its details
    // !TODO: add global state zustand or Context API
    <Link href={`/coffee/${id}`}>
      <div
        className="relative min-h-96 border shadow-sm hover:shadow-lg rounded-sm overflow-hidden"
        data-aos="fade-left"
        data-aos-duration={200 * (idx + 1)}
      >
        <div className="h-40 w-full overflow-hidden border-b border-border bg-white py-2">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative space-y-1 p-5 pb-16">
          <div>
            <StarRating rating={rating} />
          </div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>

        <div className="absolute bottom-4 flex w-full items-center justify-between px-5">
          <p>
            ₱<span className="text-lg font-bold">{price}</span>
          </p>
          <Button
            className="flex items-center justify-center gap-x-2"
            onClick={(e) => handleAddToCart(e, id)}
          >
            <ShoppingCart size={18} /> Add to cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
