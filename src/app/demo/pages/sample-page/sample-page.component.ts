import { Component, OnInit } from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';

declare const L: any;
declare const geo: any;
declare const statesData: any;
declare const pyramidBuilder: any;
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent implements OnInit {

  public taskDashStatistics: any;
  public solidGaugeWidgetChart: any;
  constructor() {
    this.taskDashStatistics = TaskDashStatistics.chartData;
    this.solidGaugeWidgetChart = SolidGaugeWidgetChart.chartData; }
//
  ngOnInit() {
    this.mypyramid();
    var map = L.map('map').setView([4.639833,  -74.087736], 11);

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

	map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');




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
