import {ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend
} from 'ng-apexcharts';
import { Component, OnInit, } from '@angular/core';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {ProcessesDashServer} from './chart/processes-dash-server';
import {LatencyDashServer} from './chart/latency-dash-server';
import {CpuUseDashServer} from './chart/cpu-use-dash-server';
import {CpuProductivityDashServer} from './chart/cpu-productivity-dash-server';
import {VisitorGenderDashAnalytics} from './chart/visitor-gender-dash-analytics';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {ChartDB} from './chart/chart-data';
declare const sunburst: any;
type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string; 
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: 'app-dash-server',
  templateUrl: './dash-server.component.html',
  styleUrls: ['./dash-server.component.scss']
})

export class DashServerComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public storageKnob: any;
  public bandwidthKnob: any;
  public clusterKnob: any;
  public chartDB: any;
  public memoryUseDashServer: any;
  public processesDashServer: any;
  public latencyDashServer: any;
  public cpuUseDashServer: any;
  public cpuProductivityDashServer: any;
  public visitorGenderDashAnalytics: any;
  constructor(public apexEvent?: ApexChartService) {
    this.chartOptions = {
      series: [
        {
          name: "brindados",
          data: [21, 22, 10, 28, 16, 21, 13, 30, 16, 21, 13]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ["Artes"],
          [ "Ciencias"],
          [ "C. Agrarias"],
          ["C. Economicas"],
          [ "C. Humanas"],
          [ "C. Politicas"],
          [ "Enfermeria"],
          [ "Ingenieria"],
          [ "Medicina"],
          [ "M. Veterinaria y Z."],
          [ "Odontologia"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a"
            ],
            fontSize: "12px"
          }
        }
      }
    };
    this.chartDB = ChartDB;
    this.visitorGenderDashAnalytics = VisitorGenderDashAnalytics.chartData;
    this.storageKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#f95476',
      barCap: 50,
      displayInput: false
    };
    this.bandwidthKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#4886ff',
      barCap: 50,
      displayInput: false
    };
    this.clusterKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#ffb74e',
      barCap: 50,
      displayInput: false
    };

    this.memoryUseDashServer = MemoryUseDashServer.chartData;
    this.processesDashServer = ProcessesDashServer.chartData;
    this.latencyDashServer = LatencyDashServer.chartData;
    this.cpuUseDashServer = CpuUseDashServer.chartData;
    this.cpuProductivityDashServer = CpuProductivityDashServer.chartData;

    
    
  }
  
  ngOnInit() {
    this.sun()
  }
  data = {
    name: "root",
     children: [
     {
       name: "leafA",
        value: 3
      },
   {
     name: "nodeB",
     children: [
       {
         name: "leafBA",
         value: 5
       },
       {
         name: "leafBB",
         value: 1
       }
      ]}
     ]}
  sun(){
    sunburst.Sunburst().data(this.data)(document.getElementById('chart'));
  }

  

}
