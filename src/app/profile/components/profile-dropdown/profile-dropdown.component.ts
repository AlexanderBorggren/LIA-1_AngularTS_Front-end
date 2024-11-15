import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDropdownComponent {}
