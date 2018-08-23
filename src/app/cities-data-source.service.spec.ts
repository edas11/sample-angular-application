import { TestBed, inject } from '@angular/core/testing';

import { CitiesDataSourceService } from './cities-data-source.service';

describe('CitiesDataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesDataSourceService]
    });
  });

  it('should be created', inject([CitiesDataSourceService], (service: CitiesDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
