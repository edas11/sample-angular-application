import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { HotelsService } from '../services/hotels.service';
import { IconsMappingService } from '../services/icons-mapping.service';
import { Hotel } from '../data classes/hotel';
import { opacityAnimation } from '../opacity-animation';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
  animations: [ opacityAnimation ]
})
export class HotelDetailsComponent implements OnInit {

  hotel: Hotel;

  constructor(private route: ActivatedRoute, private hotelService: HotelsService, 
    public icons: IconsMappingService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return this.hotelService.getHotel(params.get('hotelName') as string);
      }
      )
    ).subscribe( (hotel: Hotel) => {
      this.hotel = hotel;
    });
  }

}
