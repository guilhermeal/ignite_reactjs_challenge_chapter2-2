export interface FoodTypes {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodProps {
  key: number;
  food: FoodTypes;
  handleDelete: (id: number) => void;
  handleEditFood: (food: FoodTypes) => void;
}

export interface ContainerProps {
  available: boolean;
}
