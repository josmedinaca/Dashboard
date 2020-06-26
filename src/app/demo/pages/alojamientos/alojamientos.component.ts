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
    var map = L.map('container').setView([4.627958, -74.095583], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="http://bienestar.bogota.unal.edu.co/gestion.php">UNAL</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);
  
  
    // control that shows state info on hover
    var info = L.control();
  
    info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };
  
    info.update = function (props) {
      this._div.innerHTML = '<style> .info {    padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif;     background: white;  background: rgba(255, 255, 255, 0.8); box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);border-radius: 5px;} </style>'
      +'<h4>Informacion de PACS</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' +'Estudiantes hombres: <b>'+ props.hombres + '</b><br />' + 'Estudiantes mujeres: <b>'+props.mujeres +'</b><br />' + 'Total estudiantes:  <b>'+props.total +'</b><br />' + 'Tiendas: <b>'+props.tiendas +'</b><br />'
        : 'Ubique su cursor en una localidad');
    };
  
    info.addTo(map);
  
  
    // get color depending on population density value
    function getColor(d) {
      return d > 350 ? '#800026' :
          d > 250  ? '#BD0026' :
          d > 150  ? '#E31A1C' :
          d > 100  ? '#FC4E2A' :
          d > 50   ? '#FD8D3C' :
          d > 25   ? '#FEB24C' :
          d > 10   ? '#FED976' :
                '#FFEDA0';
    }
  
    function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.total)
      };
    }
  
    function highlightFeature(e) {
      var layer = e.target;
  
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });
  
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
  
      info.update(layer.feature.properties);
    }
  
    var geojson;
  
    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }
  
    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }
  
    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }
  
    geojson = L.geoJson(statesData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  
    map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">Bienestar Census Form</a>');
  
    $(window).on("resize", function () { $("#container").height($(window).height()/1.3); map.invalidateSize(); }).trigger("resize");
  
  
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
    }
    
    ];
    
    
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('chxa', {
    
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
