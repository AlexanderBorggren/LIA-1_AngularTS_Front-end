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
  readonly cartItemsCount = computed(() =>
    this.cart().items.reduce((total, item) => total + item.quantity, 0),
  );
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
  }

  decreaseQuantity(productId: number) {
    if (this.cart().items.length !== 0) {
      this.cart.update((currentCart) => {
        const updatedItems = currentCart.items
          .map((item) => {
            if (item.id === productId) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return null;
            }
            return item;
          })
          .filter((item) => item !== null);

        const totalAmount = this.calculateTotalAmount(updatedItems);

        return {
          ...currentCart,
          items: updatedItems,
          totalAmount,
        };
      });
    }
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

  clearCart() {
    this.cart.set({ items: [], totalAmount: 0 });
  }

  completePayment() {
    this.paymentCompleteSubject.set(true);
    this.clearCart();
  }

  resetPaymentComplete() {
    this.paymentCompleteSubject.set(false);
  }
}
