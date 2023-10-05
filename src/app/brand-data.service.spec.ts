import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrandDataService } from './brand-data.service';

describe('BrandDataService', () => {
  let service: BrandDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BrandDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
