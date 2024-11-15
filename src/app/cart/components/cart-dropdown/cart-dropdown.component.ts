import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-dropdown',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDropdownComponent {
  readonly cartService = inject(CartService);

  get cartItemsArray() {
    return this.cartService.cartItems().slice();
  }
  totalAmount = this.cartService.totalAmount;

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
  }
  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }
  increaseQuantity(productId: number) {
    this.cartService.increaseQuantity(productId);
  }
}
