import { ProductDetailed } from '../models/product-detailed';

export interface CartItem extends ProductDetailed {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
