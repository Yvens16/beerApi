import { TestBed } from '@angular/core/testing';

import { BeerServiceService } from './beer-service.service';

describe('BeerServiceService', () => {
  let service: BeerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
