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
    this.cities = [
      new City('Vilnius', '2 hotels in total', 'assets/flags/lt-flag.png', 'assets/cities/Vilnius.jpg'),
      new City('London', '3 hotels in total', 'assets/flags/gb-flag.png', 'assets/cities/London.jpg'),
      new City('Paris', '3 hotels in total', 'assets/flags/fr-flag.png', 'assets/cities/Paris.jpg'),
      new City('Berlin', '2 hotels in total', 'assets/flags/de-flag.png', 'assets/cities/Berlin.jpg')
    ];
    this.cities = this.citiesDataSource.getCities();
  }

}
