import { Component, OnInit , ViewChild} from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {MemoryUseDashServer2} from './chart/memory-use-dash-server2';
import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';

@Component({
  selector: 'app-almuerzos-page',
  templateUrl: './almuerzos-page.component.html',
  styleUrls: ['./almuerzos.component.scss'],
})
export class AlmuerzosPageComponent implements OnInit {

  public chartDB: any;
  public visitorGenderDashAnalytics: any;
	public memoryUseDashServer: any;
	public memoryUseDashServer2: any;
  public taskDashStatistics: any;
  public solidGaugeWidgetChart: any;
  constructor() {
    this.visitorGenderDashAnalytics = VisitorGenderDashAnalytics.chartData;
    this.taskDashStatistics = TaskDashStatistics.chartData;
	this.solidGaugeWidgetChart = SolidGaugeWidgetChart.chartData;
  this.memoryUseDashServer = MemoryUseDashServer.chartData; 
  this.memoryUseDashServer2 = MemoryUseDashServer2.chartData;
  this.chartDB = ChartDB;
}
//




  ngOnInit(){}

 



 }
