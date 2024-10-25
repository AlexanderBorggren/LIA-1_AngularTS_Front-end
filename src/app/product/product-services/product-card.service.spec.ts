import { TestBed } from '@angular/core/testing';
import { ProductCardService } from './product-card.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('ProductListService', () => {
  let service: ProductCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCardService, provideHttpClient(withFetch())],
    });
    service = TestBed.inject(ProductCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
