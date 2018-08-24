import { Component, OnInit } from '@angular/core';
import { CitiesDataSourceService } from '../cities-data-source.service';
import { City } from './city';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private citiesDataSource: CitiesDataSourceService) { }

  ngOnInit() {
    this.cities = this.citiesDataSource.getCities();
  }

}
