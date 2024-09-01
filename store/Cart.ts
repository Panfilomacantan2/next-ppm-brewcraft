import { coffeeProducts } from "@/constants";
import { Coffee } from "@/types";
import { create } from "zustand";

type cartState = {
  cart: Coffee[];
  selectedCoffee: Coffee | null;
  addToCart: (item: any) => void;
  removeFromCart: (itemId: number) => void;
  handleDecrementQuantity: (itemId: number) => void;
  handleIncrementQuantity: (itemId: number) => void;
  handleGetCoffee: (itemId: number) => void;
};

export const useCartStore = create<cartState>((set, get) => ({
  cart: [],
  selectedCoffee: null,

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

  handleGetCoffee: (itemId) => {
    const selectedCoffee = coffeeProducts.find(
      (coffee) => coffee.id === itemId,
    ) as any;
    set((state) => ({
      ...state, // Preserve other state properties
      selectedCoffee: selectedCoffee,
    }));
    return selectedCoffee; // Return the selected coffee
  },
}));
