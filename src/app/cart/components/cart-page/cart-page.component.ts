import { Component, inject, effect } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { KlarnaPaymentsComponent } from '../klarna-payments/klarna-payments.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [KlarnaPaymentsComponent, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
  readonly cartService = inject(CartService);

  constructor() {
    effect(() => {
      if (this.cartService.paymentCompleteSubject()) {
        this.showPaymentDetails = false;
        this.cartService.resetPaymentComplete();
      }
    });
  }

  get cartItemsArray() {
    return this.cartService.cartItems().slice();
  }
  totalAmount = this.cartService.totalAmount;

  showPaymentDetails = false;

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
