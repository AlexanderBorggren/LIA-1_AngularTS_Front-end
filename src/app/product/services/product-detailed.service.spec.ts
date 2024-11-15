import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductDetailedService } from './product-detailed.service';

describe('ProductDetailedService', () => {
  let service: ProductDetailedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailedService, provideHttpClient(withFetch())],
    });
    service = TestBed.inject(ProductDetailedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
