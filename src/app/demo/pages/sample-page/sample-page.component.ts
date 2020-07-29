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
			name: "entregados",
			data: [235, 598, 158, 464, 870, 307, 229, 745, 400, 192, 101]
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
    this.mypyramid2();
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
    +'<h5>Estudiantes beneficiarios por localidad</h5>' +  (props ?
			'<b>' + props.name + '</b><br />'  + 'Total estudiantes beneficarios:  <b>'+props.total +'</b><br />' + 'Tiendas: <b>'+props.tiendas +'</b><br />'+ 'PACS: <b>'+props.PACS+'</b><br />'
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

 


  mypyramid2(){


    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var mainContainer = am4core.create("pyramid", am4core.Container);
    mainContainer.width = am4core.percent(100);
    mainContainer.height = am4core.percent(100);
    mainContainer.layout = "horizontal";
    
    var usData = [
      {
        "PBM": "0 a 5",
        "male": 275,
        "female": 171
      },
      {
        "PBM": "6 a 9",
        "male": 466,
        "female": 276
      },
      {
        "PBM": "10 a 14",
        "male": 323,
        "female": 257
      },
      {
        "PBM": "15 a 19",
        "male": 158,
        "female": 168
      },
      {
        "PBM": "20 a 24",
        "male": 69,
        "female": 61
      },
      {
        "PBM": "25 a 30",
        "male": 39,
        "female": 43
      },
      {
        "PBM": "30 a 34",
        "male": 31,
        "female": 37
      },
      {
        "PBM": "35 a 39",
        "male": 21,
        "female": 37
      },
      {
        "PBM": "40 a 44",
        "male": 11,
        "female": 32
      },
      {
        "PBM": "45 a 49",
        "male": 12,
        "female": 15
      },
      {
        "PBM": "50 a 54",
        "male": 10,
        "female": 14
      },
      {
        "PBM": "55 a 59",
        "male": 8,
        "female": 10
      },
      {
        "PBM": "60 a 64",
        "male": 7,
        "female": 6
      },
      {
        "PBM": "65 a 69",
        "male": 4,
        "female": 5
      },
      {
        "PBM": "70 a 74",
        "male": 1,
        "female": 9
      },
      {
        "PBM": "75 a 79",
        "male": 0,
        "female": 2
      },
      {
        "PBM": "80 a 84",
        "male": 1,
        "female": 2
      },
      {
        "PBM": "85+",
        "male": 7,
        "female": 10
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
    maleCategoryAxis.renderer.minGridDistance = 20;
    
    var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
    maleValueAxis.renderer.inversed = true;
    maleValueAxis.min = 0;
    maleValueAxis.max = 40;
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
    femaleCategoryAxis.renderer.minGridDistance = 20;
    
    var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
    femaleValueAxis.min = 0;
    femaleValueAxis.max = 40;
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
