import { ChangeDetectionStrategy, Component, inject, effect, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartDropdownComponent } from '../../cart/components/cart-dropdown/cart-dropdown.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-userbar',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterOutlet,
    CommonModule,
    CartDropdownComponent,
    DropdownComponent,
  ],
  templateUrl: './userbar.component.html',
  styleUrl: './userbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserbarComponent {
  readonly isOpen = signal(false);
  readonly selectedType = signal('');

  toggleDropdown(type: string) {
    this.isOpen.set(this.selectedType() !== type || !this.isOpen());
    this.selectedType.set(type);
  }

  keepDropdownOpen() {
    this.isOpen.set(true);
  }

  closeDropdown() {
    this.isOpen.set(false);
  }

  routeToPage() {
    //this.router.navigate([route]);
  }

  userButtons = [
    { icon: 'account_circle', type: 'profile', route: '/profile' },
    { icon: 'favorite', type: 'favorite', route: '/favorite' },
    { icon: 'shopping_cart', type: 'cart', route: '/cart' },
  ];

  readonly cartService = inject(CartService);

  constructor() {
    effect(
      () => {
        const isUpdated = this.cartService.cartUpdated();
        console.log('cartUpdated state:', isUpdated);

        if (isUpdated && !this.isOpen) {
          this.toggleDropdown('cart');
          console.log('cart dropdown opened');
          //this.cartService.resetCartUpdated();
        }
      },
      { allowSignalWrites: true },
    );
  }
}
