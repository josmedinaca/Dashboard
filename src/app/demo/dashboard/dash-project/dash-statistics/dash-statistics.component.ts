import { Component, OnInit } from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';

@Component({
  selector: 'app-dash-statistics',
  templateUrl: './dash-statistics.component.html',
  styleUrls: ['./dash-statistics.component.scss']
})
export class DashStatisticsComponent implements OnInit {
  public taskDashStatistics: any;

  constructor() {
    this.taskDashStatistics = TaskDashStatistics.chartData;
  }

  ngOnInit() {
  }

}
