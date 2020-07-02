import { Component, OnInit ,ViewChild} from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
import {
	ApexChart,
	ApexAxisChartSeries,
	ChartComponent,
	ApexDataLabels,
	ApexPlotOptions,
	ApexYAxis,
	ApexLegend
  } from 'ng-apexcharts';
  import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
declare const L: any;
declare const geo: any;
declare const statesData: any;
declare const pyramidBuilder: any;var mymap;
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
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent implements OnInit {
	@ViewChild("chart") chart: ChartComponent;
	public chartOptions: Partial<ChartOptions>;
  public taskDashStatistics: any;
  public solidGaugeWidgetChart: any;
  constructor(public apexEvent?: ApexChartService) {
	this.chartOptions = {
		series: [
		  {
			name: "brindados",
			data: [210, 549, 142, 427, 793, 281, 206, 671, 367, 163, 92]
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
    this.taskDashStatistics = TaskDashStatistics.chartData;
    this.solidGaugeWidgetChart = SolidGaugeWidgetChart.chartData; }
//




  ngOnInit() {
    this.mypyramid();
    var map = L.map('map').setView([4.627958, -74.095583], 11);

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

	$(window).on("resize", function () { $("#map").height($(window).height()/1.3); map.invalidateSize(); }).trigger("resize");


  }

 
  mypyramid(){
    var exampleData = [{ age: '0-9', male: 670, female: 394 }, { age: '10-19', male: 343, female: 293 }, { age: '20-29', male: 68, female: 51 }, { age: '30-39', male: 41, female: 58 }, { age: '40-49', male: 19, female: 37 }, {age: '50-59', male: 12, female: 17 }];
    var options = {
      height: 300,
      width: 400,
      style: {
        leftBarColor: "#229922",
        rightBarColor: "#992222"
      }
    }
    pyramidBuilder(exampleData, '#pyramid', options);
  }


 }
