import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ProductCardService } from '../../../product/services/product-card.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  readonly productCardService = inject(ProductCardService);
  readonly route = inject(ActivatedRoute);

  products = this.route.paramMap.pipe(
    map((params) => params.get('query')),
    switchMap((query) => this.productCardService.getProductsByQuery(query || '')),
  );
}
