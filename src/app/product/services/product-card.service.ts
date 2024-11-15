import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../../../shared/models/product-card';
import { ProductAPI } from '../../../shared/enums/product-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  private readonly http = inject(HttpClient);

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

  getEnumValues() {
    return Object.values(ProductAPI);
  }

  getProductsByCategory(category: string): Observable<ProductCard[]> {
    const apiUrl = this.apiUrls[category as keyof typeof this.apiUrls];
    return this.http.get<ProductCard[]>(apiUrl);
  }
  getProductsByQuery(query: string): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(ProductAPI.ALL_PRODUCTS).pipe(
      map((items) =>
        items.filter((item) => {
          const searchQuery = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery)
          );
        }),
      ),
    );
  }
}
