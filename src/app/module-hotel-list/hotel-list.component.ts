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

}
