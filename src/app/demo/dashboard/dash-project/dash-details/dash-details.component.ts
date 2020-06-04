import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-details',
  templateUrl: './dash-details.component.html',
  styleUrls: ['./dash-details.component.scss']
})
export class DashDetailsComponent implements OnInit {
  public accordionIndex: number;
  constructor() {
    this.accordionIndex = 1;
  }

  ngOnInit() {
  }

}
