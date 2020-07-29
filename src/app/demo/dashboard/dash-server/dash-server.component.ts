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
import { Component, OnInit } from '@angular/core';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {ProcessesDashServer} from './chart/processes-dash-server';
import {LatencyDashServer} from './chart/latency-dash-server';
import {CpuUseDashServer} from './chart/cpu-use-dash-server';
import {CpuProductivityDashServer} from './chart/cpu-productivity-dash-server';
import {VisitorGenderDashAnalytics} from './chart/visitor-gender-dash-analytics';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {ChartDB} from './chart/chart-data';

declare const Highcharts: any;
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
          name: "entregados",
          data: [659, 1463, 463, 1456, 2334, 650, 686, 3757, 1509, 316, 492]
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
          [ "Agrarias"],
          ["Economicas"],
          [ "Humanas"],
          [ "Derecho y CP"],
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
    this.sunburst();
    
  }
  sunburst(){
    var data = [{
      id: '0.0',
      parent: '',
      name: 'Subaccesos'
    }, {
      id: '1.1',
      parent: '0.0',
      name: 'PEAMA',
      color: '#775DD0'
    }, {
      id: '1.3',
      parent: '0.0',
      name: 'PAES',
      color:'#FF4560'
    }, {
      id: '1.4',
      parent: '0.0',
      name: 'PREGRADO',
      color:'#00E396',
      
    }, {
      id: '1.5',
      parent: '0.0',
      name: 'INTERNACIONAL',
      color:'#EDF1B6',
    },
    {
      id: '1.6',
      parent: '0.0',
      name: 'POSGRADO',
      color: '#FEB019'
     },
    
    /* PEAMA */
    {
      id: '2.1',
      parent: '1.1',
      name: 'Amazonia',
      value: 141
    }, 
    
    {
      id: '2.5',
      parent: '1.1',
      name: 'Tumaco',
      value: 140
    },
    
    {
      id: '2.3',
      parent: '1.1',
      name: 'Caribe',
      value: 29
    },
    
    {
      id: '2.2',
      parent: '1.1',
      name: 'Bogota',
      value: 8
    },
    
    {
      id: '2.4',
      parent: '1.1',
      name: 'Orinoquia',
      value : 187
    },
    
    
    
    /***********/
    
    /* PAES */
    {
      id: '2.9',
      parent: '1.3',
      name: 'Indigena',
      value: 272
    }
    ,
    
    {
      id: '2.8',
      parent: '1.3',
      name: 'Municipio',
      value: 50
    },
    
    {
      id: '2.7',
      parent: '1.3',
      name: 'Poblacion Afro',
      value: 112
    },
    
    {
      id: '2.6',
      parent: '1.3',
      name: 'Mejor Bachiller',
      value: 40
    },
    
    {
      id: '2.71',
      parent: '1.3',
      name: 'Victimas',
      value: 43
    }, 
    /***********/
    
    /* Asia */
    
    /***********/
    
    /* Pregrado */
    {
      id: '2.15',
      parent: '1.4',
      name: 'Regular pregrado',
      value: 2066
    },
    /***********/
    
    /* INTERNACIONAL */
    {
      id: '2.19',
      parent: '1.5',
      name: 'Intercambio internacional',
      value: 4
    },
    {
      id: '2.16',
      parent: '1.6',
      name: 'Regular posgrado',
      value: 61
    }
    
    ];
    
    
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('ch', {
    
      chart: {
        height: '65%'
      },
    
      title: {
        text: 'Numero de estudiantes beneficiarios por subacceso'
      },
      series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: 16
          },
          rotationMode: 'circular'
        },
        levels: [{
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            filter: {
              property: 'outerArcLength',
              operator: '>',
              value: 64
            }
          }
        }, {
          level: 2,
          colorByPoint: true
        },
        {
          level: 3,
          colorVariation: {
            key: 'brightness',
            to: -0.5
          }
        
        }]
    
      }],
      tooltip: {
        headerFormat: "",
        pointFormat: '<b>{point.name}</b> tiene <b> {point.value}</b> <b> estudiantes</b> '
      }
    });
  }
 
  }

  
