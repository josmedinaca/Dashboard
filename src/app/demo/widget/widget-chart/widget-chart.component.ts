import {Component, OnDestroy, OnInit} from '@angular/core';

declare var $: any;
import 'peity';

import {PowerCardChart1} from './chart/power-card-chart-1';
import {PowerCardChart2} from './chart/power-card-chart-2';
import {PowerCardChart3} from './chart/power-card-chart-3';
import {ServeWidgetChart} from './chart/serve-widget-chart';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {RevenueDailyWidgetChart} from './chart/revenue-daily-widget-chart';
import {RevenueMonthlyWidgetChart} from './chart/revenue-monthly-widget-chart';
import {NewUsersWidgetChart} from './chart/new-users-widget-chart';
import {PageViewsWidgetChart} from './chart/page-views-widget-chart';
import {TexDeductionWidgetChart} from './chart/tex-deduction-widget-chart';
import {OrderWidgetChart} from './chart/order-widget-chart';
import {RevenueGenerateWidgetChart} from './chart/revenue-generate-widget-chart';


@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent implements OnInit, OnDestroy {
  public powerCardChart1: any;
  public powerCardChart2: any;
  public powerCardChart3: any;
  public serveWidgetChart: any;
  public solidGaugeWidgetChart: any;
  public revenueDailyWidgetChart: any;
  public revenueMonthlyWidgetChart: any;
  public newUsersWidgetChart: any;
  public pageViewsWidgetChart: any;
  public texDeductionWidgetChart: any;
  public orderWidgetChart: any;
  public revenueGenerateWidgetChart: any;

  constructor() {
    this.powerCardChart1 = PowerCardChart1.chartData;
    this.powerCardChart2 = PowerCardChart2.chartData;
    this.powerCardChart3 = PowerCardChart3.chartData;
    this.serveWidgetChart = ServeWidgetChart.chartData;
    this.solidGaugeWidgetChart = SolidGaugeWidgetChart.chartData;
    this.revenueDailyWidgetChart = RevenueDailyWidgetChart.chartData;
    this.revenueMonthlyWidgetChart = RevenueMonthlyWidgetChart.chartData;
    this.newUsersWidgetChart = NewUsersWidgetChart.chartData;
    this.pageViewsWidgetChart = PageViewsWidgetChart.chartData;
    this.texDeductionWidgetChart = TexDeductionWidgetChart.chartData;
    this.orderWidgetChart = OrderWidgetChart.chartData;
    this.revenueGenerateWidgetChart = RevenueGenerateWidgetChart.chartData;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
