"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/Cart";
import { Button } from "./ui/button";
import Image from "next/image";
import TooltipButton from "./ToolTip";

export function CartSheet() {
  const {
    cart,
    removeFromCart,
    handleDecrementQuantity,
    handleIncrementQuantity,
  } = useCartStore((state) => state);

  console.log(cart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCart size={24} className="cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-medium leading-none text-white">
              {cart.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <Link
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
            href="/"
          >
            {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
            <span className="text-lg">Shopping Cart</span>
          </Link>
        </SheetHeader>

        {cart.length > 0 ? (
          <div>
            <div className="scrollbar mt-6 flex h-[calc(85vh-100px)] flex-col space-y-4 overflow-y-scroll">
              {cart.map((item, idx) => (
                <div
                  className="flex flex-col items-center justify-between gap-x-2 border-b p-4 lg:gap-x-4"
                  key={item.id}
                >
                  <div className="flex w-full items-center gap-x-2 lg:gap-x-4">
                    <div className="flex w-full gap-x-2">
                      {/* Image of the product */}
                      <Image
                        src={item.image}
                        alt={item.brand}
                        className="h-12 w-12 rounded-sm object-cover md:h-16 md:w-16"
                        width={100}
                        height={100}
                      />

                      {/* Product details */}
                      <div>
                        <h3 className="text-md font-medium">{item.brand}</h3>
                        <p className="text-sm text-foreground/80">
                          ₱{item.price}
                        </p>
                      </div>
                    </div>

                    {/* Delete button */}
                    <TooltipButton
                      buttonText={<Trash2 />}
                      toolTip="Remove"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-x-2">
                    <Button
                      size="icon"
                      onClick={() => handleDecrementQuantity(item.id)}
                      // @ts-ignore
                      disabled={item?.quantity < 1}
                    >
                      -
                    </Button>

                    <span className="text-md font-medium">{item.quantity}</span>
                    <Button
                      size="icon"
                      onClick={() => handleIncrementQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {/* Total Price */}
            <div className="mt-2">
              <p className="text-lg font-bold">
                Total: ₱
                {cart.reduce(
                  // @ts-ignore

                  (acc, curr) => acc + curr.price * curr?.quantity,
                  0,
                )}
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-2 flex justify-between">
              <Button variant="outline">Continue Shopping</Button>
              <Button> Proceed to Payment</Button>
            </div>
          </div>
        ) : (
          <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <Image
              src="/assets/images/empty-cart.png"
              alt="Cart empty"
              width={150}
              height={150}
            />
            <h1 className="text-lg text-foreground/90">Your cart is empty!</h1>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
