import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchbarComponent, NavbarComponent, ContentComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
