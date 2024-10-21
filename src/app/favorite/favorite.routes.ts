import { Routes } from '@angular/router';

export const favoriteRoutes: Routes = [
  {
    path: 'favorite',
    loadComponent: () => import('./favorite.component').then((m) => m.FavoriteComponent),
  },
];
