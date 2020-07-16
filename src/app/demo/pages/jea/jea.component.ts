import { Component, OnInit , ViewChild} from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend
} from 'ng-apexcharts';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';

import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';

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
  selector: 'app-jea-page',
  templateUrl: './jea-page.component.html',
  styleUrls: ['./jea.component.scss'],
})
export class JeaPageComponent implements OnInit {
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
  this.chartDB = ChartDB;

  this.chartOptions = {
    series: [
      {
        name: "brindados",
        data: [156, 382, 95, 320, 487, 235, 166, 716, 358, 84, 111]
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
}
//




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
    name: 'POSGRADO',
    color:'#008ffb',
    
  }, 
  
  /* PEAMA */
  {
    id: '2.1',
    parent: '1.1',
    name: 'Amazonia',
    value: 179
  }, 
  
  {
    id: '2.5',
    parent: '1.1',
    name: 'Tumaco',
    value: 191
  },
  
  {
    id: '2.3',
    parent: '1.1',
    name: 'Caribe',
    value: 61
  },
  
  {
    id: '2.2',
    parent: '1.1',
    name: 'Bogota',
    value: 16
  },
  
  {
    id: '2.4',
    parent: '1.1',
    name: 'Orinoquia',
    value : 392
  },
  
  
  
  /***********/
  
  /* PAES */
  {
    id: '2.9',
    parent: '1.3',
    name: 'Indigena',
    value: 194
  }
  ,
  
  {
    id: '2.8',
    parent: '1.3',
    name: 'Municipio',
    value: 77
  },
  
  {
    id: '2.7',
    parent: '1.3',
    name: 'Poblacion Afro',
    value: 140
  },
  
  {
    id: '2.6',
    parent: '1.3',
    name: 'Mejor Bachiller',
    value: 13
  },
  
  {
    id: '2.71',
    parent: '1.3',
    name: 'Victimas',
    value: 56
  }, 
  /***********/
  
  /* Asia */
  
  /***********/
  
  /* Pregrado */
  {
    id: '2.15',
    parent: '1.4',
    name: 'Regular pregrado',
    value: 1764
  },

  {
    id: '2.15',
    parent: '1.5',
    name: 'Regular posgrado',
    value: 27
  }
  
  ];
  
  
  // Splice in transparent for the center circle
  Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  
  
  Highcharts.chart('chx', {
  
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
