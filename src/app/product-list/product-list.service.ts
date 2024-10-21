import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../../shared/models/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private readonly apiUrls = {
    men: 'https://api.escuelajs.co/api/v1/products/?categoryId=1',
    women: 'https://api.escuelajs.co/api/v1/products/?categoryId=1',
    kids: 'https://api.escuelajs.co/api/v1/products/?categoryId=4',
    brands: 'https://api.escuelajs.co/api/v1/products/?categoryId=3',
    accessories: 'https://api.escuelajs.co/api/v1/products/?categoryId=5',
    interior: 'https://api.escuelajs.co/api/v1/products/?categoryId=3',
    electronics: 'https://api.escuelajs.co/api/v1/products/?categoryId=2',
    entertainment: 'https://api.escuelajs.co/api/v1/products/?categoryId=5',
  };

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<ProductList[]> {
    const apiUrl = this.apiUrls[category as keyof typeof this.apiUrls];
    return this.http.get<ProductList[]>(apiUrl);
  }
}
