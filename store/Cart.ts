import { CoffeeCardProps } from "@/types";
import { create } from "zustand";

type cartState = {
  cart: CoffeeCardProps[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: number) => void;
  handleDecrementQuantity: (itemId: number) => void;
  handleIncrementQuantity: (itemId: number) => void;
};

export const useCartStore = create<cartState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
  handleDecrementQuantity: (itemId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        // @ts-ignore
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    })),
    handleIncrementQuantity: (itemId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        // @ts-ignore
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
}));
