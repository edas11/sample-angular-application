import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { HotelsService } from '../services/hotels.service';
import { CitiesService } from '../services/cities.service';
import { Observable } from 'rxjs';
import { Hotel } from '../data classes/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels$: Observable<Hotel[]>;

  ngOnInit() {
    this.hotels$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.hotelService.getHotelsByCity(this.citiesService.getCity(params.get('cityName')))
      )
    );
  }

  constructor(private route: ActivatedRoute, private hotelService: HotelsService,
    private citiesService: CitiesService) {}

  getMinRoomPrice(hotel: Hotel): Number {
    let minPrice: Number = Number.MAX_SAFE_INTEGER;
    hotel.rooms.forEach( (room) => {
      if (room.price < minPrice) { minPrice = room.price; }
    });
    return minPrice;
  }

  getMaxNotMinRoomPrice(hotel: Hotel): Number {
    const minPrice = this.getMinRoomPrice(hotel);

    let maxPrice: Number = Number.MIN_SAFE_INTEGER;
    hotel.rooms.forEach( (room) => {
      if (room.price > maxPrice) { maxPrice = room.price; }
    });

    if (maxPrice === minPrice) {
      return null;
    } else {
      return maxPrice;
    }
  }

}
