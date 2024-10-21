import { TestBed } from '@angular/core/testing';
import { ProductListService } from './product-list.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('ProductListService', () => {
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService, provideHttpClient(withFetch())],
    });
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
