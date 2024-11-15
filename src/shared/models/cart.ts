import { ProductDetailed } from '../models/product-detailed';

export interface ShoppingCart {
  items: ProductDetailed[];
  totalAmount: number;
}
