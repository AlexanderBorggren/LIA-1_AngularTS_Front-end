import { ProductDetailed } from '../models/product-detailed';

export interface FavoriteItem extends Pick<ProductDetailed, 'id' | 'title' | 'image'> {
  route: string;
}
