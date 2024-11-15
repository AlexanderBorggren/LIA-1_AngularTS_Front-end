import { Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailedComponent } from './components/product-detailed/product-detailed.component';

export const productRoutes: Routes = [
  { path: ':category', component: ProductCardComponent },
  { path: 'product/:id', component: ProductDetailedComponent },
];
