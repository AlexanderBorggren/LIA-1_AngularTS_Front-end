import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchbarComponent, NavbarComponent, ContentComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
