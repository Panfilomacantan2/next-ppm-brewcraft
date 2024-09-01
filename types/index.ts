export type CoffeeCardProps = {
  idx: number;
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  quantity?: number | undefined;
};

export type Coffee = {
  quantity?: number;
  id: number;
  name: string;
  brand: string;
  shopLinks?: {
    lazada: string;
    shopee: string;
  };
  pros: string[];
  cons: string[];
  overview: string;
  keyIngredients: string[];
  effectiveness: string;
  image: string;
  rating: number;
  price: number;
} 
