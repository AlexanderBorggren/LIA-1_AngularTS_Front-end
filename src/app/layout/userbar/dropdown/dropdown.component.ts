import { Component, Input } from '@angular/core';
import { UserbarComponent } from '../userbar.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { CartDropdownComponent } from '../../../cart/components/cart-dropdown/cart-dropdown.component';
import { ProfileDropdownComponent } from '../../../profile/components/profile-dropdown/profile-dropdown.component';
import { FavoriteDropdownComponent } from '../../../favorite/components/favorite-dropdown/favorite-dropdown.component';

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
  @Input() isOpen!: boolean;
  @Input() selectedType!: string;
}
