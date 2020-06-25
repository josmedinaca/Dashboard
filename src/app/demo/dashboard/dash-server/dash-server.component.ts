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
          name: "brindados",
          data: [197, 459, 157, 494, 734, 228, 234, 1106, 466, 95, 138]
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
      color: '#B5DDF4'
    }, {
      id: '1.3',
      parent: '0.0',
      name: 'PAES',
      color:'#F1B6B6'
    }, {
      id: '1.4',
      parent: '0.0',
      name: 'PREGRADO',
      color:'#CDF1B6',
      
    }, {
      id: '1.5',
      parent: '0.0',
      name: 'INTERNACIONAL',
      color:'#EDF1B6',
    },
    
    /* PEAMA */
    {
      id: '2.1',
      parent: '1.1',
      name: 'Amazonia',
      value: 604957438
    }, 
    
    {
      id: '2.5',
      parent: '1.1',
      name: 'Tumaco',
      value: 190886311
    },
    
    {
      id: '2.3',
      parent: '1.1',
      name: 'Caribe',
      value: 197553151
    },
    
    {
      id: '2.2',
      parent: '1.1',
      name: 'Bogota',
      value: 181339988
    },
    
    {
      id: '2.4',
      parent: '1.1',
      name: 'Orinoquia',
      value : 181339988
    },
    
    
    
    /***********/
    
    /* PAES */
    {
      id: '2.9',
      parent: '1.3',
      name: 'Indigena',
      value: 209288278
    }
    ,
    
    {
      id: '2.8',
      parent: '1.3',
      name: 'Municipio',
      value: 324459463
    },
    
    {
      id: '2.7',
      parent: '1.3',
      name: 'Poblacion Afro',
      value: 129163276
    },
    
    {
      id: '2.6',
      parent: '1.3',
      name: 'Mejor Bachiller',
      value: 111484636
    },
    
    {
      id: '2.71',
      parent: '1.3',
      name: 'Victimas',
      value: 111484636
    }, 
    /***********/
    
    /* Asia */
    
    /***********/
    
    /* Pregrado */
    {
      id: '2.15',
      parent: '1.4',
      name: 'Regular pregrado',
      value: 143989754
    },
    /***********/
    
    /* INTERNACIONAL */
    {
      id: '2.19',
      parent: '1.5',
      name: 'Intercambio internacional',
      value: 124450561
    }
    
    ];
    
    
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('ch', {
    
      chart: {
        height: '65%'
      },
    
      title: {
        text: 'Niveles de subacceso'
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
        pointFormat: 'Existen <b>{point.value}</b> <b> estudiantes</b> '
      }
    });
  }
 
  }

  
