import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HotelsService } from '../services/hotels.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationFormGuardService implements CanActivate {

  constructor(private hotels: HotelsService, private router: Router) { }

  // Allows to proceed only if it finds room
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roomId = route.params['roomId'];
    if (this.hotels.getHotelWithRoom(roomId)) {
      return true;
    } else {
      this.router.navigate(['hotels']);
      return false;
    }
  }
}
