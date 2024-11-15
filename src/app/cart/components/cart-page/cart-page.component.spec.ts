import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../../services/cart.service';
import { ProductDetailedService } from '../../../product/services/product-detailed.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPageComponent],
      providers: [
        CartService,
        ProductDetailedService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
