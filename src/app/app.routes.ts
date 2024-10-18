import { Routes } from '@angular/router';
import { profileRoutes } from './profile/profile.routes';
import { homeRoutes } from './home/home.routes';
import { favoriteRoutes } from './favorite/favorite.routes';
import { cartRoutes } from './cart/cart.routes';

export const routes: Routes = [...homeRoutes, ...profileRoutes, ...favoriteRoutes, ...cartRoutes];
