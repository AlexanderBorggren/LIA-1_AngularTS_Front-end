import { ChangeDetectionStrategy, Component, inject, effect } from '@angular/core';
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
  isOpen = false;
  selectedType = '';

  toggleDropdown(type: string) {
    this.isOpen = this.selectedType !== type || !this.isOpen;
    this.selectedType = type;
  }

  keepDropdownOpen() {
    this.isOpen = true;
  }

  closeDropdown() {
    this.isOpen = false;
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
          this.cartService.resetCartUpdated();
        }
      },
      { allowSignalWrites: true },
    );
  }
}
