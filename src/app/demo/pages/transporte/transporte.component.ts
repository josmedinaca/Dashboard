import { Component, OnInit , ViewChild} from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {MemoryUseDashServer2} from './chart/memory-use-dash-server2';
import { VisitorGenderDashAnalytics } from './chart/visitor-gender-dash-analytics';
import { ChartDB } from '../../dashboard/dash-server/chart/chart-data';


declare const L: any;
declare const geo: any;
declare const statesData: any;
declare const Highcharts: any;
declare const sunburst: any;
declare const am4core:any ;
declare const am4charts : any;
declare const am4themes_animated : any;
@Component({
  selector: 'app-transporte-page',
  templateUrl: './transporte-page.component.html',
  styleUrls: ['./transporte.component.scss'],
})
export class TransportePageComponent implements OnInit {

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




  ngOnInit(){this.sunburst();
    this.mypyramid2();
    var mymap = L.map('containerxfd2a').setView([4.633694, -74.082380], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);
  
    var greenIcon = L.icon({
      iconUrl: 'assets/images/icon/hospital.png',
      //shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  
      iconSize:     [60, 60], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [44, 59], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-8, -60] // point from which the popup should open relative to the iconAnchor
  });

    L.marker([4.647325, -74.097445],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>Hospital de la policía</b>").openPopup();
  
      
      L.marker([4.593474, -74.088544],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>Hospital de la Misericordia</b>").openPopup();

      
      L.marker([4.688818, -74.051938],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>CIFEL</b>").openPopup();

      
      L.marker([4.591416, -74.089112],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>CENTRO DERMATOLÓGICO FEDERICO LLERAS ACOSTA</b>").openPopup();
    var popup = L.popup();
  
    $(window).on("resize", function () { $("#containerxfd2a").height($(window).height()/1.16); mymap.invalidateSize(); }).trigger("resize");
  
  
  }
  sunburst(){
    var data = [{
      id: '0.0',
      parent: '',
      name: 'Subaccesos'
    }, {
      id: '1.1',
      parent: '0.0',
      name: 'POSGRADO',
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
    
    /* POSGRADO */
    {
      id: '2.1',
      parent: '1.1',
      name: 'Regular de posgrado',
      value: 61
    },
  
    
    
    
    /***********/
    
    /* PAES */
     
    {
      id: '2.7',
      parent: '1.3',
      name: 'Poblacion Afro',
      value: 1
    }, 
    /***********/
    
    /* Asia */
    
    /***********/
    
    /* Pregrado */
    {
      id: '2.15',
      parent: '1.4',
      name: 'Regular pregrado',
      value: 4
    }
    
    ];
    
    
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('chxadwsx', {
    
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
    
    var mainContainer = am4core.create("pyramid4", am4core.Container);
    mainContainer.width = am4core.percent(100);
    mainContainer.height = am4core.percent(100);
    mainContainer.layout = "horizontal";
    
    var usData = [
   
      {
        "PBM": "10 a 19",
        "male": 2,
        "female": 7
      },
      {
        "PBM": "20 a 29",
        "male": 3,
        "female": 2
      },
      {
        "PBM": "30 a 39",
        "male": 4,
        "female": 1
      },
      {
        "PBM": "40 a 49",
        "male": 2,
        "female": 3
      },
      {
        "PBM": "50 a 59",
        "male": 2,
        "female": 5
      },
      {
        "PBM": "60+",
        "male": 21,
        "female": 14
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
    maleSeries.columns.template.tooltipText = "Hombres, PBM {categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
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
    femaleSeries.columns.template.tooltipText = "Mujeres, PBM{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
    femaleSeries.dataFields.categoryY = "PBM";
    femaleSeries.interpolationDuration = 1000;
    
    
    
    
    
    
    
    
    
    
    
      }


 }
