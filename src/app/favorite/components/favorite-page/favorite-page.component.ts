import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritePageComponent {}
