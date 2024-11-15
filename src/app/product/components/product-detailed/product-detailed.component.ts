import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductDetailed } from '../../../../shared/models/product-detailed';
import { CartService } from '../../../cart/services/cart.service';
import { ProductDetailedService } from '../../services/product-detailed.service';
import { SimilarProductsComponent } from '../similar-products/similar-products.component';

@Component({
  selector: 'app-product-detailed',
  standalone: true,
  imports: [CommonModule, RouterModule, SimilarProductsComponent],
  templateUrl: './product-detailed.component.html',
  styleUrl: './product-detailed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailedComponent {
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);
  private readonly productDetailedService = inject(ProductDetailedService);
  private readonly cartService = inject(CartService);

  productDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) =>
      this.productDetailedService.getProductById(+id!).pipe(
        map((product) => ({
          product,
          stars: this.getStars(product.rating.rate),
        })),
      ),
    ),
  );

  addToCart(product: ProductDetailed): void {
    this.cartService.addItem(product, 1);
  }

  getStars(rating: number): number[] {
    rating = Math.round(rating * 2) / 2;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(1);
      } else if (rating > i - 1 && rating < i) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    return stars;
  }

  goBack(): void {
    this.location.back();
  }
}
