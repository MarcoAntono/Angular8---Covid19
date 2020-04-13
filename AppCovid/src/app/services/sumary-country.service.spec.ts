import { TestBed } from '@angular/core/testing';

import { SumaryCountryService } from './sumary-country.service';

describe('SumaryCountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumaryCountryService = TestBed.get(SumaryCountryService);
    expect(service).toBeTruthy();
  });
});
