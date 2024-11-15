import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDropdownComponent } from './cart-dropdown.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CartService } from '../../services/cart.service';
import { ProductDetailedService } from '../../../product/services/product-detailed.service';
import { provideHttpClient } from '@angular/common/http';

describe('CartDropdownComponent', () => {
  let component: CartDropdownComponent;
  let fixture: ComponentFixture<CartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDropdownComponent],
      providers: [
        CartService,
        ProductDetailedService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
