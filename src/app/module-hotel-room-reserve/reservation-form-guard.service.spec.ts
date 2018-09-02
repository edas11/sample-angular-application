import { TestBed, inject } from '@angular/core/testing';

import { ReservationFormGuardService } from './reservation-form-guard.service';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

describe('ReservationFormGuardService', () => {
  const testData = {roomId: '1'};
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const routeSpy = jasmine.createSpyObj('ActivatedRouteSnapshot', ['test']);
  const stateSpy = jasmine.createSpyObj('RouterStateSnapshot', ['test']);
  routeSpy.params = testData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReservationFormGuardService, HotelsService, 
        {provide: Router, useValue: routerSpy}
      ]
    });
  });

  it('should be created', inject([ReservationFormGuardService], (service: ReservationFormGuardService) => {
    expect(service).toBeTruthy();
  }));

  it('should allow navigation to reservation form for rooms that exist and prevent otherwise',
      inject([ReservationFormGuardService], (service: ReservationFormGuardService) => {

      testData.roomId = '1';
      expect(service.canActivate(routeSpy, stateSpy)).toEqual(true);
      testData.roomId = '13';
      expect(service.canActivate(routeSpy, stateSpy)).toEqual(true);

      testData.roomId = '-1';
      expect(service.canActivate(routeSpy, stateSpy)).toEqual(false);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['hotels']);

      testData.roomId = '5.5';
      expect(service.canActivate(routeSpy, stateSpy)).toEqual(false);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['hotels']);

      testData.roomId = '9001';
      expect(service.canActivate(routeSpy, stateSpy)).toEqual(false);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['hotels']);
  }));
});
