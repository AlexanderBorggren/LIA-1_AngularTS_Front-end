import { ProductDetailed } from '../models/product-detailed';

export interface CartItem extends Pick<ProductDetailed, 'id' | 'title' | 'price' | 'image'> {
  quantity: number;
  route: string;
}
