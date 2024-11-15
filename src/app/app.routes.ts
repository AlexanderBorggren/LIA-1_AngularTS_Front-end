import { Routes } from '@angular/router';
import { profileRoutes } from './profile/profile.routes';
import { homeRoutes } from './home/home.routes';
import { favoriteRoutes } from './favorite/favorite.routes';
import { cartRoutes } from './cart/cart.routes';
import { productRoutes } from './product/product.routes';
import { searchRoutes } from './search/search.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...profileRoutes,
  ...favoriteRoutes,
  ...cartRoutes,
  ...productRoutes,
  ...searchRoutes,
];
