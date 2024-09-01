"use client";

import DialogCard from "./CoffeeDialog";
import { Coffee, CoffeeCardProps } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/Cart";
import StarRating from "./StarRating";
import { coffeeProducts } from "@/constants";

export default function CoffeeCard({
  id,
  name,
  brand,
  price,
  pros,
  cons,
  overview,
  keyIngredients,
  effectiveness,
  image,
  rating,
  idx,
}: Coffee & {
  idx: number;
}) {
  const { addToCart, cart, handleGetCoffee } = useCartStore(
    (state) => state,
  );

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const coffee = coffeeProducts.find(coffee => coffee.id === id)

    const isItemInCart = cart.find((item) => item.id === id);
    if (isItemInCart) return;

    addToCart({ ...coffee, quantity: 1 });
  };

  return (
    <DialogCard
      selectedCoffee={{
        id,
        name,
        brand,
        price,
        pros,
        cons,
        overview,
        keyIngredients,
        effectiveness,
        image,
        rating,
      }}
      triggerComponent={
        <div
          onClick={() => handleGetCoffee(id)}
          className="relative max-h-96 overflow-hidden rounded-sm border shadow-sm hover:shadow-lg cursor-pointer"
          data-aos="fade-left"
          data-aos-duration={50 * (idx + 1)}
        >
          <div className="h-40 w-full overflow-hidden border-b border-border bg-white py-2">
            <Image
              src={image}
              alt={brand}
              width={300}
              height={200}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="relative space-y-1 p-5 pb-16">
            <div>
              <StarRating rating={rating} />
            </div>
            <h1 className="text-lg font-bold">{brand}</h1>
            <p className="text-sm">{name}</p>
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
      }
    />
  );
}
