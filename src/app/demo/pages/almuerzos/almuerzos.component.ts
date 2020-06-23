import { Component, OnInit , ViewChild} from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {MemoryUseDashServer2} from './chart/memory-use-dash-server2';
import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
@Component({
  selector: 'app-almuerzos-page',
  templateUrl: './almuerzos-page.component.html',
  styleUrls: ['./almuerzos.component.scss'],
})
export class AlmuerzosPageComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
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
  this.chartOptions = {
    series: [41, 5, 26, 16,4,17,27],
    chart: {
      height: 370,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 40,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: true
          }
        }
      }
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5","#0077B5","#0077B5","#0077B5"],
    labels: ["PAES - Indigena", "PAES - Municipio", "PAES - Afro", "PEAMA - Amazonía", "PEAMA - Caribe", "PEAMA - Orinoquia", "PEAMA - Tumaco"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: -10,
      offsetY: -5,
      labels: {
        useSeriesColors: true
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: -10
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  };}
//




  ngOnInit(){}

 



 }
