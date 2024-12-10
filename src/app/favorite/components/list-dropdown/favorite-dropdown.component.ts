import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { SelectedListComponent } from '../selected-list/selected-list.component';

@Component({
  selector: 'app-favorite-dropdown',
  standalone: true,
  imports: [CommonModule, SelectedListComponent],
  templateUrl: './favorite-dropdown.component.html',
  styleUrl: './favorite-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteDropdownComponent {
  readonly favoriteService = inject(FavoriteService);

  readonly selectedListId = signal<number | null>(null);

  openList(id: number) {
    this.selectedListId.set(this.selectedListId() === id ? null : id);
  }

  favoriteLists = this.favoriteService.getFavoriteLists;

  addNewList(value: string, inputHTML: HTMLInputElement) {
    if (value.trim()) {
      this.favoriteService.createFavoriteList(value.trim());
      inputHTML.value = '';
    }
  }
}
