import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDropdownComponent {}
