import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CartDropdownComponent } from '../../../cart/components/cart-dropdown/cart-dropdown.component';
import { FavoriteDropdownComponent } from '../../../favorite/components/list-dropdown/favorite-dropdown.component';
import { ProfileDropdownComponent } from '../../../profile/components/profile-dropdown/profile-dropdown.component';
import { UserbarComponent } from '../userbar.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    UserbarComponent,
    CommonModule,
    CartDropdownComponent,
    ProfileDropdownComponent,
    FavoriteDropdownComponent,
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  readonly isOpen = input.required<boolean>();
  readonly selectedType = input.required<string>();
}
