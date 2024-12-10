import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CartDropdownComponent } from '../../cart/components/cart-dropdown/cart-dropdown.component';
import { CartService } from '../../cart/services/cart.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-userbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
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
  private readonly cartService = inject(CartService);
  private readonly destroyRef = inject(DestroyRef);

  readonly isOpen = signal(false);
  readonly selectedType = signal('');
  readonly userButtons = [
    { icon: 'account_circle', type: 'profile', route: '/profile' },
    { icon: 'favorite', type: 'favorite', route: '/favorite' },
    { icon: 'shopping_cart', type: 'cart', route: '/checkout' },
  ];

  constructor(private router: Router) {
    toObservable(this.cartService.cartOpen)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isOpen) => {
        this.isOpen.set(isOpen);
        this.selectedType.set('cart');
      });
  }
  cartItemCount = this.cartService.cartItemsCount;

  toggleDropdown(type: string) {
    this.isOpen.set(this.selectedType() !== type || !this.isOpen());
    this.selectedType.set(type);
  }

  keepDropdownOpen() {
    this.isOpen.set(true);
  }

  closeDropdown() {
    this.isOpen.set(false);
    this.cartService.cartOpen.set(false);
  }

  routeToPage(route: string) {
    this.router.navigate([route]);
  }
}
