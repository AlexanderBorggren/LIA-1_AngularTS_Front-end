import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductCardService } from '../../product-services/product-card.service';
import { switchMap, map } from 'rxjs';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ProductCardService],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productCardService = inject(ProductCardService);

  products = this.route.paramMap.pipe(
    map((params) => params.get('category')),
    switchMap((category) => this.productCardService.getProductsByCategory(category || '')),
  );
}
