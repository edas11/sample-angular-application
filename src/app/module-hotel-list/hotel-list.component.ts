import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { HotelsService } from '../services/hotels.service';
import { CitiesService } from '../services/cities.service';
import { Observable } from 'rxjs';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import { opacityAnimation } from '../opacity-animation';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  animations: [ opacityAnimation ]
})
export class HotelListComponent implements OnInit {

  hotels$: Observable<Hotel[]>;

  // Gets data
  ngOnInit() {
    this.hotels$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.hotelService.getHotelsByCity(this.citiesService.getCity(params.get('cityName')))
      )
    );
  }

  constructor(private route: ActivatedRoute, private hotelService: HotelsService,
    private citiesService: CitiesService) {}

  getMinPriceRoom(hotel: Hotel): Room | null {
    if (hotel.rooms.length > 0) {
      let minPriceRoom: Room = hotel.rooms[0];
      hotel.rooms.forEach( (room) => {
        if (room.isCheaperThan(minPriceRoom)) { minPriceRoom = room; }
      });
      return minPriceRoom;
    } else {
      return null;
    }
  }

}
