import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-rating',
  templateUrl: './w-rating.component.html',
  styleUrls: ['./w-rating.component.scss']
})
export class WRatingComponent implements OnInit {
  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

}
