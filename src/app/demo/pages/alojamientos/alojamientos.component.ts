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
  selector: 'app-alojamientos-page',
  templateUrl: './alojamientos-page.component.html',
  styleUrls: ['./alojamientos.component.scss'],
})
export class AlojamientosPageComponent implements OnInit {

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
    var mymap = L.map('container').setView([4.633694, -74.082380], 13);

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
      iconUrl: 'assets/images/house.png',
      //shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  
      iconSize:     [60, 60], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [44, 59], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-8, -60] // point from which the popup should open relative to the iconAnchor
  });

    L.marker([4.631557, -74.085065],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>CUPOS UNIVERSITARIOS ROCKEFELLER</b><br />Total estudiantes: 33").openPopup();
  
      
      L.marker([4.627131, -74.086893],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>CORPORACIÓN DE RESIDENCIAS UNIVERSITARIAS - CRU</b><br />Total estudiantes: 236").openPopup();

      

      L.marker([4.673301, -74.098931],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>HIJAS DEL CORAZON MISERICORDIOSO DE MARIA-OBRA SAN RAFAEL</b><br />Total estudiantes: 4").openPopup();

      
      L.marker([4.612189, -74.066226],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>CONGREGACION RELIGIOSAS DE MARIA INMACULADA</b><br />Total estudiantes: 20").openPopup();

      

      L.marker([4.643603, -74.065900],{icon: greenIcon}).addTo(mymap)
      .bindPopup("<b>SOLERIUM  - Edificio Studio 56</b><br />Total estudiantes: 20").openPopup();
    var popup = L.popup();
  
    $(window).on("resize", function () { $("#container").height($(window).height()/1.16); mymap.invalidateSize(); }).trigger("resize");
  
  
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
      value: 40
    }, 
    
    {
      id: '2.5',
      parent: '1.1',
      name: 'Tumaco',
      value: 52
    },
    
    {
      id: '2.3',
      parent: '1.1',
      name: 'Caribe',
      value: 2
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
      value : 34
    },
    
    
    
    /***********/
    
    /* PAES */
    {
      id: '2.9',
      parent: '1.3',
      name: 'Indigena',
      value: 56
    }
    ,
    
    {
      id: '2.8',
      parent: '1.3',
      name: 'Municipio',
      value: 9
    },
    
    {
      id: '2.7',
      parent: '1.3',
      name: 'Poblacion Afro',
      value: 33
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
      value: 4
    }, 
    /***********/
    
    /* Asia */
    
    /***********/
    
    /* Pregrado */
    {
      id: '2.15',
      parent: '1.4',
      name: 'Regular pregrado',
      value: 83
    }
    
    ];
    
    
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('chxa', {
    
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
    
    var mainContainer = am4core.create("pyramid3", am4core.Container);
    mainContainer.width = am4core.percent(100);
    mainContainer.height = am4core.percent(100);
    mainContainer.layout = "horizontal";
    
    var usData = [
      {
        "PBM": "0 a 5",
        "male": 143,
        "female": 118
      },
      {
        "PBM": "6 a 10",
        "male": 18,
        "female": 24
      },
      {
        "PBM": "11 a 15",
        "male": 2,
        "female": 5
      },
      {
        "PBM": "16+",
        "male": 0,
        "female": 3
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
    maleValueAxis.max = 20;
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
    femaleValueAxis.max = 20;
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
    femaleSeries.columns.template.tooltipText = "Mujeres, PBM {categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
    femaleSeries.dataFields.categoryY = "PBM";
    femaleSeries.interpolationDuration = 1000;
    
    
    
    
    
    
    
    
    
    
    
      }


 }
