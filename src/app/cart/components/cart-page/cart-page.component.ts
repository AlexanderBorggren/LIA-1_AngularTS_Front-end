import { Component, inject, effect } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PaymentDetailsComponent } from '../../payment-details/payment-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [PaymentDetailsComponent, CommonModule],
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
