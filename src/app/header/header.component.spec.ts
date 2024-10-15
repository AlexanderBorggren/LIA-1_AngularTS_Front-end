import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// Tyvärr kan jag inte generera kod för att pusha till ett fjärrrepo direkt i en testfil.
// Detta är en Angular-komponenttestfil och är inte avsedd för versionshantering.

// För att pusha kod till ditt fjärrrepo, använd följande Git-kommandon i terminalen:

// 1. Lägg till ändrade filer:
//    git add .

// 2. Skapa en commit:
//    git commit -m "Beskrivning av dina ändringar"

// 3. Pusha till fjärrepo:
//    git push origin <branch-namn>

// Ersätt <branch-namn> med namnet på din aktuella gren, t.ex. "main" eller "master".
