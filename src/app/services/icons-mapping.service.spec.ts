import { TestBed, inject } from '@angular/core/testing';

import { IconsMappingService } from './icons-mapping.service';

describe('IconsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsMappingService]
    });
  });

  it('should be created', inject([IconsMappingService], (service: IconsMappingService) => {
    expect(service).toBeTruthy();
  }));

  it('should give icon classes by key if has that key and default icon classes if it doesnt have key',
   inject([IconsMappingService], (service: IconsMappingService) => {
    expect(service.getIconClassesByKey('Parking')).toEqual('fas fa-parking');
    expect(service.getIconClassesByKey('Hot tub')).toEqual('fas fa-hot-tub');
    expect(service.getIconClassesByKey('abcd')).toEqual('fas fa-circle');
  }));
});
