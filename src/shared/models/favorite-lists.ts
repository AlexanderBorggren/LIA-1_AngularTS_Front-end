import { FavoriteItem } from './favorite-item';

export interface FavoriteLists {
  id: number;
  title: string;
  items: FavoriteItem[];
}
