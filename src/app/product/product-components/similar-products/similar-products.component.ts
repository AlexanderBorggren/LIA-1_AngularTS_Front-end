import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-similar-products',
  standalone: true,
  imports: [],
  templateUrl: './similar-products.component.html',
  styleUrl: './similar-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimilarProductsComponent {}
