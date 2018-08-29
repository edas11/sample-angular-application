import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-button',
  templateUrl: './w-button.component.html',
  styleUrls: ['./w-button.component.scss']
})
export class WButtonComponent implements OnInit {
  @Input() buttonText: string;
  
  constructor() { }

  ngOnInit() {
  }

}
