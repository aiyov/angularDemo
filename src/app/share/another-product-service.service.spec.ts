import { TestBed, inject } from '@angular/core/testing';

import { AnotherProductServiceService } from './another-product-service.service';

describe('AnotherProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherProductServiceService]
    });
  });

  it('should be created', inject([AnotherProductServiceService], (service: AnotherProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});
