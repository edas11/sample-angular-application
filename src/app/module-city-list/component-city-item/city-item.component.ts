import { Component, OnInit, Input } from '@angular/core';
import { CityQueryResult } from '../../city-query-result';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {
  @Input() city: CityQueryResult;

  constructor() { }

  ngOnInit() {
  }

}
