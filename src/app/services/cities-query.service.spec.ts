import { TestBed, inject } from '@angular/core/testing';

import { CitiesQueryService } from './cities-query.service';

describe('CitiesDataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesQueryService]
    });
  });

  it('should be created', inject([CitiesQueryService], (service: CitiesQueryService) => {
    expect(service).toBeTruthy();
  }));
});
