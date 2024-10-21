import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

export const productListRoutes: Routes = [{ path: ':category', component: ProductListComponent }];

export const appRoutingProviders = [provideRouter(productListRoutes)];
