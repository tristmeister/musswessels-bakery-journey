
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'bread' | 'pastries' | 'cakes' | 'seasonal';
  allergens: string[];
  nutritionalInfo: {
    calories: number;
    allergens: string[];
  };
  availability: {
    inStock: boolean;
    nextBakeTime?: string;
  };
  customization?: {
    options: {
      size: string[];
      extras: string[];
    };
  };
  seasonal: boolean;
  bestBefore: string;
}
