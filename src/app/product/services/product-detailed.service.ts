import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailed } from '../../../shared/models/product-detailed';
import { ProductAPI } from '../../../shared/enums/product-api';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailedService {
  readonly http = inject(HttpClient);

  getEnumValues() {
    return Object.values(ProductAPI);
  }

  getProductById(id: number): Observable<ProductDetailed> {
    return this.http.get<ProductDetailed>(ProductAPI.ALL_PRODUCTS + id);
  }
}
