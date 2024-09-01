import DialogCard from "./CoffeeDialog";
import { CoffeeCardProps } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/Cart";
import StarRating from "./StarRating";

export default function CoffeeCard({
  id,
  title,
  description,
  rating,
  price,
  image,
  idx,
}: CoffeeCardProps) {
  const { addToCart, cart } = useCartStore((state) => state);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const isItemInCart = cart.some((item) => item.id === id);
    if (isItemInCart) return;

    addToCart({ id, title, description, rating, price, image, quantity: 1 });
  };

  return (
    <DialogCard
      id={id}
      title={title}
      description={description}
      rating={rating}
      price={price}
      image={image}
      triggerComponent={
        <div
          className="relative min-h-96 overflow-hidden rounded-sm border shadow-sm hover:shadow-lg"
          data-aos="fade-left"
          data-aos-duration={50 * (idx + 1)}
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
      }
    />
  );
}
