import { Component, OnInit , ViewChild} from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {MemoryUseDashServer2} from './chart/memory-use-dash-server2';
import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';

declare const Highcharts: any;
declare const sunburst: any;
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
    
  }, 
  
  /* PEAMA */
  {
    id: '2.1',
    parent: '1.1',
    name: 'Amazonia',
    value: 16
  }, 
  
  {
    id: '2.5',
    parent: '1.1',
    name: 'Tumaco',
    value: 27
  },
  
  {
    id: '2.3',
    parent: '1.1',
    name: 'Caribe',
    value: 4
  },
  
  {
    id: '2.2',
    parent: '1.1',
    name: 'Bogota',
    value: 0
  },
  
  {
    id: '2.4',
    parent: '1.1',
    name: 'Orinoquia',
    value : 17
  },
  
  
  
  /***********/
  
  /* PAES */
  {
    id: '2.9',
    parent: '1.3',
    name: 'Indigena',
    value: 41
  }
  ,
  
  {
    id: '2.8',
    parent: '1.3',
    name: 'Municipio',
    value: 5
  },
  
  {
    id: '2.7',
    parent: '1.3',
    name: 'Poblacion Afro',
    value: 26
  },
  
  {
    id: '2.6',
    parent: '1.3',
    name: 'Mejor Bachiller',
    value: 0
  },
  
  {
    id: '2.71',
    parent: '1.3',
    name: 'Victimas',
    value: 2
  }, 
  /***********/
  
  /* Asia */
  
  /***********/
  
  /* Pregrado */
  {
    id: '2.15',
    parent: '1.4',
    name: 'Regular pregrado',
    value: 42
  }
  
  ];
  
  
  // Splice in transparent for the center circle
  Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  
  
  Highcharts.chart('chx', {
  
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
      pointFormat: '<b>{point.name}</b> tiene <b> {point.value}</b> <b> estudiantes</b> '
    }
  });
}
 



 }
