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
import { CoffeeCardProps } from "@/types";

type DialogCardProps = Omit<CoffeeCardProps, "idx"> & {
  triggerComponent: React.ReactNode;
};

export default function DialogCard({
  id,
  title,
  description,
  rating,
  price,
  image,
  triggerComponent,
}: DialogCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={image}
            alt={title}
            width={200}
            height={150}
            className="rounded"
          />
          <p className="text-lg">Price: ₱{price}</p>
          <p className="text-lg">Rating: {rating} stars</p>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
