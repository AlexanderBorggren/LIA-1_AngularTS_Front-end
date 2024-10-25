import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Categories } from '../../../shared/enums/navbar-categories';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    console.log(this.categories);
  }

  categories = [
    { name: Categories.CATEGORY_WOMEN, route: '/women' },
    { name: Categories.CATEGORY_MEN, route: '/men' },
    { name: Categories.CATEGORY_KIDS, route: '/kids' },
    { name: Categories.CATEGORY_BRANDS, route: '/brands' },
    { name: Categories.CATEGORY_ENTERTAINMENT, route: '/accessories' },
    { name: Categories.CATEGORY_INTERIOR, route: '/interior' },
    { name: Categories.CATEGORY_ELECTRONICS, route: '/electronics' },
    { name: Categories.CATEGORY_ENTERTAINMENT, route: '/entertainment' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
