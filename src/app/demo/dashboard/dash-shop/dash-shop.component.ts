import { Component, OnInit } from '@angular/core';
import {ActivityDashShop} from './chart/activity-dash-shop';

@Component({
  selector: 'app-dash-shop',
  templateUrl: './dash-shop.component.html',
  styleUrls: ['./dash-shop.component.scss']
})
export class DashShopComponent implements OnInit {
  public activityDashShop: any;

  constructor() {
    this.activityDashShop = ActivityDashShop.chartData;
  }

  ngOnInit() {
  }

}
