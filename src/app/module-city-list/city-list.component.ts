import { Component, OnInit } from '@angular/core';
import { CitiesQueryService } from '../services/cities-query.service';
import { CityQueryResult } from '../city-query-result';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  citiesResult: CityQueryResult[];

  constructor(private citiesQueryService: CitiesQueryService) { }

  ngOnInit() {
    this.citiesResult = this.citiesQueryService.queryCities();
  }

}
