import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userbar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './userbar.component.html',
  styleUrl: './userbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserbarComponent {
  userButtons = [
    { icon: 'account_circle', route: '/profile' },
    { icon: 'favorite', route: '/favorite' },
    { icon: 'shopping_cart', route: '/cart' },
  ];
}
