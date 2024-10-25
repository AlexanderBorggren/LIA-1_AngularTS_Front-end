import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailed } from '../../../shared/models/product-detailed';
import { ProductAPI } from '../../../shared/enums/product-api';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailedService {
  getEnumValues() {
    return Object.values(ProductAPI);
  }

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<ProductDetailed> {
    return this.http.get<ProductDetailed>(ProductAPI.GET_PRODUCT_BY_ID + id);
  }
}
