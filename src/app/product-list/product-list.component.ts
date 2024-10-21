import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from './product-list.service';
import { ProductList } from '../../shared/models/product-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductListService],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Observable<ProductList[]> = new Observable<ProductList[]>();

  constructor(
    private route: ActivatedRoute,
    private productListService: ProductListService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.fetchProducts(category);
      } else {
        this.fetchProducts('');
        console.log('No category selected');
      }
    });
  }

  fetchProducts(category: string): void {
    this.products = this.productListService.getProductsByCategory(category);
    this.cdr.detectChanges();
  }
}
