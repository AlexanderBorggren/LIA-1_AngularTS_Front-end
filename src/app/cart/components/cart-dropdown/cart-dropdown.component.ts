import {
  Component,
  inject,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  effect,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-dropdown',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDropdownComponent {
  readonly cartService = inject(CartService);

  get cartItemsArray() {
    return this.cartService.cartItems().slice();
  }

  constructor() {
    effect(() => {
      const currentLength = this.cartItemsArray.length;
      if (currentLength > this.previousLength) {
        this.scrollToBottom();
      }
      this.previousLength = currentLength;
    });
  }

  totalAmount = this.cartService.totalAmount;

  private previousLength = 0;

  @ViewChild('cartItemsContainer') private cartItemsContainer!: ElementRef;

  private scrollToBottom() {
    setTimeout(() => {
      const container = this.cartItemsContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    });
  }

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
