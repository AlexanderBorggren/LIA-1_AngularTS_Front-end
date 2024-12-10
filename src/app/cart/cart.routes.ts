import { Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutCompleteComponent } from './components/checkout-complete/checkout-complete.component';

export const cartRoutes: Routes = [
  { path: 'checkout', component: CartPageComponent },
  { path: 'checkout-complete', component: CheckoutCompleteComponent },
];
