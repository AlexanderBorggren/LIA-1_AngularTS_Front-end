import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailedComponent } from './product-detailed.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('ProductDetailedComponent', () => {
  let component: ProductDetailedComponent;
  let fixture: ComponentFixture<ProductDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailedComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({})),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
