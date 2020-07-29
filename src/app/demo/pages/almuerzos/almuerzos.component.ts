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
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {MemoryUseDashServer2} from './chart/memory-use-dash-server2';
import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';

declare const Highcharts: any;
declare const sunburst: any;
declare const am4core:any ;
declare const am4charts : any;
declare const am4themes_animated : any;

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
    series: [
      {
        name: "entregados",
        data: [379, 778, 284, 881, 1320, 292, 388, 2722, 933, 108, 340]
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
  this.mypyramid2();
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
    
  }, 
  
  /* PEAMA */
  {
    id: '2.1',
    parent: '1.1',
    name: 'Amazonia',
    value: 18
  }, 
  
  {
    id: '2.5',
    parent: '1.1',
    name: 'Tumaco',
    value: 28
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
    value: 51
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
      height: '78%'
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
mypyramid2(){


  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var mainContainer = am4core.create("pyramid2", am4core.Container);
  mainContainer.width = am4core.percent(100);
  mainContainer.height = am4core.percent(100);
  mainContainer.layout = "horizontal";
  
  var usData = [
    {
      "PBM": "0 a 5",
      "male": 10175713,
      "female": 9736305
    },
    {
      "PBM": "6 a 9",
      "male": 10470147,
      "female": 10031835
    },
    {
      "PBM": "10 a 14",
      "male": 10561873,
      "female": 10117913
    },
    {
      "PBM": "15 a 19",
      "male": 6447043,
      "female": 6142996
    },
    {
      "PBM": "20 a 24",
      "male": 9349745,
      "female": 8874664
    },
    {
      "PBM": "25 a 30",
      "male": 6722248,
      "female": 6422017
    },
    {
      "PBM": "30 a 34",
      "male": 10625791,
      "female": 10557848
    },
    {
      "PBM": "35 a 39",
      "male": 9899569,
      "female": 9956213
    },
    {
      "PBM": "40 a 44",
      "male": 10330986,
      "female": 10465142
    },
    {
      "PBM": "45 a 49",
      "male": 10571984,
      "female": 10798384
    },
    {
      "PBM": "50 a 54",
      "male": 11051409,
      "female": 11474081
    },
    {
      "PBM": "55 a 59",
      "male": 10173646,
      "female": 10828301
    },
    {
      "PBM": "60 a 64",
      "male": 8824852,
      "female": 9590829
    },
    {
      "PBM": "65 a 69",
      "male": 6876271,
      "female": 7671175
    },
    {
      "PBM": "70 a 74",
      "male": 4867513,
      "female": 5720208
    },
    {
      "PBM": "75 a 79",
      "male": 3416432,
      "female": 4313697
    },
    {
      "PBM": "80 a 84",
      "male": 2378691,
      "female": 3432738
    },
    {
      "PBM": "85+",
      "male": 2000771,
      "female": 3937981
    }
  ];
  
  var maleChart = mainContainer.createChild(am4charts.XYChart);
  maleChart.paddingRight = 0;
  maleChart.data = JSON.parse(JSON.stringify(usData));
  
  // Create axes
  var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
  maleCategoryAxis.dataFields.category = "PBM";
  maleCategoryAxis.renderer.grid.template.location = 0;
  //maleCategoryAxis.renderer.inversed = true;
  maleCategoryAxis.renderer.minGridDistance = 15;
  
  var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
  maleValueAxis.renderer.inversed = true;
  maleValueAxis.min = 0;
  maleValueAxis.max = 10;
  maleValueAxis.strictMinMax = true;
  
  maleValueAxis.numberFormatter = new am4core.NumberFormatter();
  maleValueAxis.numberFormatter.numberFormat = "#.#'%'";
  
  // Create series
  var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
  maleSeries.dataFields.valueX = "male";
  maleSeries.dataFields.valueXShow = "percent";
  maleSeries.calculatePercent = true;
  maleSeries.dataFields.categoryY = "PBM";
  maleSeries.interpolationDuration = 1000;
  maleSeries.columns.template.tooltipText = "Males, PBM {categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
  //maleSeries.sequencedInterpolation = true;
  
  
  var femaleChart = mainContainer.createChild(am4charts.XYChart);
  femaleChart.paddingLeft = 0;
  femaleChart.data = JSON.parse(JSON.stringify(usData));
  
  // Create axes
  var femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
  femaleCategoryAxis.renderer.opposite = true;
  femaleCategoryAxis.dataFields.category = "PBM";
  femaleCategoryAxis.renderer.grid.template.location = 0;
  femaleCategoryAxis.renderer.minGridDistance = 15;
  
  var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
  femaleValueAxis.min = 0;
  femaleValueAxis.max = 10;
  femaleValueAxis.strictMinMax = true;
  femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
  femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
  femaleValueAxis.renderer.minLabelPosition = 0.01;
  
  // Create series
  var femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
  femaleSeries.dataFields.valueX = "female";
  femaleSeries.dataFields.valueXShow = "percent";
  femaleSeries.calculatePercent = true;
  femaleSeries.fill = femaleChart.colors.getIndex(4);
  femaleSeries.stroke = femaleSeries.fill;
  //femaleSeries.sequencedInterpolation = true;
  femaleSeries.columns.template.tooltipText = "Females, PBM{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
  femaleSeries.dataFields.categoryY = "PBM";
  femaleSeries.interpolationDuration = 1000;
  
  
  
  
  
  
  
  
  
  
  
    }


 }
