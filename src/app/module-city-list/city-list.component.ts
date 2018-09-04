import { Component, OnInit } from '@angular/core';
import { CitiesQueryService } from '../services/cities-query.service';
import { CityQueryResult } from '../data classes/city-query-result';
import { opacityAnimation } from '../opacity-animation';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
  animations: [ opacityAnimation ]
})
export class CityListComponent implements OnInit {

  citiesResult: CityQueryResult[];

  constructor(private citiesQueryService: CitiesQueryService) { }

  // Sets data
  ngOnInit() {
    this.citiesResult = this.citiesQueryService.queryCities();
  }

}
