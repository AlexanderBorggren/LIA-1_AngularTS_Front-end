import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

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
    { name: 'Dam', route: '/women' },
    { name: 'Herr', route: '/men' },
    { name: 'Barn', route: '/kids' },
    { name: 'Varumärken', route: '/brands' },
    { name: 'Accessoarer', route: '/accessories' },
    { name: 'Inredning', route: '/interior' },
    { name: 'Elektronik', route: '/electronics' },
    { name: 'Underhållning', route: '/entertainment' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
