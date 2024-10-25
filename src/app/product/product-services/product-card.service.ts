import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../../../shared/models/product-card';
import { ProductAPI } from '../../../shared/enums/product-api';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  getEnumValues() {
    return Object.values(ProductAPI);
  }
  private readonly apiUrls = {
    men: ProductAPI.ALL_MENS_CLOTHING,
    women: ProductAPI.ALL_WOMENS_CLOTHING,
    kids: ProductAPI.ALL_JEWELRY,
    brands: ProductAPI.ALL_MENS_CLOTHING,
    accessories: ProductAPI.ALL_JEWELRY,
    interior: ProductAPI.ALL_WOMENS_CLOTHING,
    electronics: ProductAPI.ALL_ELECTRONICS,
    entertainment: ProductAPI.ALL_JEWELRY,
  };

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<ProductCard[]> {
    const apiUrl = this.apiUrls[category as keyof typeof this.apiUrls];
    return this.http.get<ProductCard[]>(apiUrl);
  }
}
