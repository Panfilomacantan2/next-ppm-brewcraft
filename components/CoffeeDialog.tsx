import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Coffee, CoffeeCardProps } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";
import { Badge } from "@/components/ui/badge";

type DialogCardProps = {
  triggerComponent: React.ReactNode;
  selectedCoffee: Coffee;
};

export default function DialogCard({
  selectedCoffee,
  triggerComponent,
}: DialogCardProps) {
  const {
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
  } = selectedCoffee;

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent className="min-h-96 w-[95%] rounded-md sm:max-w-[60%]">
        <div className="relative flex flex-col gap-5 lg:flex-row">
          <div className="w-full bg-white rounded-sm">
            <div className="relative mx-auto h-48 w-48 flex-shrink-0 bg-white lg:h-72 lg:w-72">
              <Image
                src={image}
                alt={brand}
                width={200}
                height={150}
                className="h-full w-full rounded object-cover object-center p-3"
              />
            </div>
          </div>

          <div className="flex min-h-64 flex-col">
            <DialogHeader>
              <DialogTitle className="text-left text-3xl font-medium">
                {brand}
              </DialogTitle>
              <DialogDescription className="text-left text-base text-foreground/80">
                {overview}
              </DialogDescription>
              {/* <StarRating rating={rating} /> */}
            </DialogHeader>

            <p className="text-lg"> ₱{price}</p>

            <DialogFooter className="absolute bottom-4 right-4 flex flex-row gap-2">
              <Button type="submit" variant="secondary">
                <Heart /> Whishlist
              </Button>
              <Button
                type="submit"
                className="bg-yellow-600 text-white hover:bg-yellow-600/80"
              >
                <ShoppingCart /> Buy now
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
