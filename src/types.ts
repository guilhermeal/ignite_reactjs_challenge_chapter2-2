import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import { string } from "yup";

export interface FoodTypes {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodTypes;
  handleDelete: (id: number) => void;
  handleEditFood: (food: FoodTypes) => void;
}
export interface HeaderProps {
  openModal: () => void;
}

export interface InputProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  placeholder?: string;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodTypes;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodTypes) => void;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodTypes) => void;
}
