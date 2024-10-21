import { TestBed } from '@angular/core/testing';
import { UserbarComponent } from './userbar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UserbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserbarComponent],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({}) } }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UserbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
