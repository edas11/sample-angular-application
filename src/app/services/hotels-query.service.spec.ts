import { TestBed, inject } from '@angular/core/testing';

import { HotelsQueryService } from './hotels-query.service';

describe('HotelsQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsQueryService]
    });
  });

  it('should be created', inject([HotelsQueryService], (service: HotelsQueryService) => {
    expect(service).toBeTruthy();
  }));
});
