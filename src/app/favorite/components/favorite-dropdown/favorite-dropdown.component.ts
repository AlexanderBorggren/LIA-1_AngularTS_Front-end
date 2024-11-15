import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favorite-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './favorite-dropdown.component.html',
  styleUrl: './favorite-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteDropdownComponent {}
