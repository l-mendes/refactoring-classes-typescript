export interface FoodInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type AddFood = Omit<FoodInterface, 'id' | 'available'>;