import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from '../profile/profile.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { CartPageComponent } from '../cart/cart-components/cart-page/cart-page.component';
import { UserbarComponent } from './userbar/userbar.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SearchbarComponent,
    NavbarComponent,
    ContentComponent,
    ProfileComponent,
    FavoriteComponent,
    CartPageComponent,
    UserbarComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
