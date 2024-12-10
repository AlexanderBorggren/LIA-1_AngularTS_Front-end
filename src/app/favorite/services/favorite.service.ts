import { computed, Injectable, signal, inject } from '@angular/core';
import { FavoriteLists } from '../../../shared/models/favorite-lists';
import { FavoriteItem } from '../../../shared/models/favorite-item';
import { ProductDetailedService } from '../../product/services/product-detailed.service';
import { map, take } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  readonly productService = inject(ProductDetailedService);
  private favoriteLists = signal<FavoriteLists[]>([]);

  readonly getFavoriteLists = computed(() => this.favoriteLists());
  readonly favoriteListsTitle = computed(() => this.favoriteLists().map((list) => list.title));

  createFavoriteList(name: string) {
    this.favoriteLists.update((currentLists) => {
      return [
        ...currentLists,
        {
          id: currentLists.length + 1,
          title: name,
          items: [],
        },
      ];
    });
  }

  addFavoriteItem(itemId: number) {
    this.productService
      .getProductById(itemId)
      .pipe(
        map(
          (product) =>
            ({
              id: itemId,
              title: product.title,
              image: product.image,
              route: `/product/${itemId}`,
            }) as FavoriteItem,
        ),
        take(1),
      )
      .subscribe((favoriteItem) => {
        this.favoriteLists.update((lists) => {
          const updatedLists = [...lists];
          updatedLists[0].items.push(favoriteItem);
          return updatedLists;
        });
      });
  }

  getSelectedListItems(listId: number) {
    return from(this.getFavoriteLists()).pipe(
      map((lists) => (lists.id === listId ? lists.items : [])),
    );
  }

  chooseFavoriteList(listId: number) {
    this.favoriteLists.update((lists) => {
      return lists.map((list) => ({
        ...list,
        selected: list.id === listId,
      }));
    });
  }
}
