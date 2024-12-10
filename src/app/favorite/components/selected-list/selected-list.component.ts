import { Component, Input, inject } from '@angular/core';
import { FavoriteLists } from '../../../../shared/models/favorite-lists';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../services/favorite.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-selected-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-list.component.html',
  styleUrl: './selected-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedListComponent {
  @Input({ required: true }) list!: FavoriteLists;

  readonly selectedList = inject(FavoriteService).getSelectedListItems(this.list.id);
}
