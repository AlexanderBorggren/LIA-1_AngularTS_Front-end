import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from '../profile/profile.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { CartComponent } from '../cart/cart.component';
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
    CartComponent,
    UserbarComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
