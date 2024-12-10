import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-favorite-item',
  standalone: true,
  imports: [],
  templateUrl: './add-favorite-item.component.html',
  styleUrl: './add-favorite-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFavoriteItemComponent {
  readonly favoriteService = inject(FavoriteService);

  chooseFavoriteList(listId: number) {
    this.favoriteService.chooseFavoriteList(listId);
  }

  addFavoriteItem(productId: number) {
    this.favoriteService.addFavoriteItem(productId);
  }
}
