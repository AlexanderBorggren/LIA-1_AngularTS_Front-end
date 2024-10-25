import { Routes } from '@angular/router';

export const cartRoutes: Routes = [
  {
    path: 'cart',
    loadComponent: () =>
      import('../cart/cart-components/cart-page/cart-page.component').then(
        (m) => m.CartPageComponent,
      ),
  },
];
