import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {}
