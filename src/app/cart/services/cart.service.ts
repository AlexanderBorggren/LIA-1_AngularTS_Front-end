import { computed, inject, Injectable, signal } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/cart';
import { ProductDetailed } from '../../../shared/models/product-detailed';
import { ProductDetailedService } from '../../product/services/product-detailed.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly productService = inject(ProductDetailedService);

  private cart = signal<ShoppingCart>({
    items: [],
    totalAmount: 0,
  });

  readonly cartOpen = signal(false);
  readonly paymentCompleteSubject = signal(false);

  readonly cartItems = computed(() => this.cart().items);
  readonly totalAmount = computed(() => this.cart().totalAmount);

  private calculateTotalAmount(items: ProductDetailed[]) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  addItem(product: ProductDetailed, quantity: 1) {
    this.cart.update((currentCart) => {
      const items = [...currentCart.items];
      const existingItem = items.find((i) => i.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
      return {
        ...currentCart,
        items,
        totalAmount: this.calculateTotalAmount(items),
      };
    });
    this.cartOpen.set(true);
  }

  removeItem(productId: number) {
    this.cart.update((currentCart) => {
      const updatedItems = currentCart.items.filter((item) => item.id !== productId);
      const totalAmount = this.calculateTotalAmount(updatedItems);

      return {
        ...currentCart,
        items: updatedItems,
        totalAmount,
      };
    });
    this.cartOpen.set(true);
  }

  decreaseQuantity(productId: number) {
    this.cart.update((currentCart) => {
      const updatedItems = currentCart.items.map((item) => {
        if (item.id === productId) {
          item.quantity -= 1;
        }
        return item;
      });

      const totalAmount = this.calculateTotalAmount(updatedItems);

      return {
        ...currentCart,
        items: updatedItems,
        totalAmount,
      };
    });
    this.cartOpen.set(true);
  }

  increaseQuantity(productId: number) {
    this.cart.update((currentCart) => {
      const updateditems = currentCart.items.map((item) => {
        if (item.id === productId) {
          item.quantity += 1;
        }
        return item;
      });

      const totalAmount = this.calculateTotalAmount(updateditems);

      return {
        ...currentCart,
        items: updateditems,
        totalAmount,
      };
    });
  }

  openCart() {
    this.cartOpen.set(true);
  }

  closeCart() {
    this.cartOpen.set(false);
  }

  completePayment() {
    this.paymentCompleteSubject.set(true);
  }

  resetPaymentComplete() {
    this.paymentCompleteSubject.set(false);
  }
}
