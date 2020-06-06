import { Component, OnInit } from '@angular/core';
import {TaskDashStatistics} from './chart/task-dash-statistics';
import {SolidGaugeWidgetChart} from './chart/solid-gauge-widget-chart';
declare const geo: any;
declare const d3: any;
declare const topojson: any;
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
    this.name();
  }

 name() {
	var width = 400,
	height = 550;

 var rotate = [-74.2, 4.3, 0];
 var projection = d3.geo.mercator()
	.rotate([74.2, -4.3, 0.0])
	.scale(30000)
	.translate([width / 2, height / 2]);

 var path = d3.geo.path()
	.projection(projection);

 var color = d3.scale.category10();


 var svg = d3.select('.mapsvg')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

 d3.json('https://gist.githubusercontent.com/jupaneira/a02af9ac03957aed15939ef72bfecfd2/raw/a75ede89adabff65c739268fb8d61137169b5691/bta_localidades.json', function(error, mapData) {
	let localidades = topojson.feature(mapData, mapData.objects.bta_localidades).features,
		neighbors = topojson.neighbors(mapData.objects.bta_localidades.geometries);

	// tslint:disable-next-line: indent
	svg.append('g')
		// tslint:disable-next-line: indent
		.attr('class', 'localidades')
		.selectAll('path')
		.data(localidades)
		.enter().append('path')
		.attr('d', path)
		.style('fill', function(d, i) {
			return color(d.color = d3.max(neighbors[i], function(n) {
				return localidades[n].color;
			}) + 1 | 0);
		})
		.on('mouseover', function(d) {
			d3.select(this).style('fill-opacity', 1);
		})
		.on('mouseout', function(d) {
			d3.select(this).style('fill-opacity', 0.80);
		})
		.append('title')
		.text(function(d) {
			return d.properties.NOMBRE;
		});

	svg.append('path')
		.datum(topojson.mesh(mapData, mapData.objects.bta_localidades, function(a, b) {
			return a.properties.NOMBRE != b.properties.NOMBRE;
		}))
		.attr('class', 'localidad-boundary')
		.attr('d', path);
});
d3.select('.mapsvg').style("height", height + "px");
//  d3.select(self.frameElement).style('height', height + 'px');
// 	const canvas = d3.select('body').append('statesvg').attr('width', 760).attr('height', 700);
// 	d3.json('https://raw.githubusercontent.com/josmedinaca/josmedinaca.github.io/master/poligonos-localidades.geojson', function(data) {
// 		const group = canvas.selectAll('g').data(data.features).enter().append('g');

// 		const projection = d3.geo.mercator().scale(7000);
// 		const path = d3.geo.path().projection(projection);
// 		const areas = group.append('path').attr('d', path).attr('class', 'area').attr('fill', 'steelblue');
// 	});

   }

// //   tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
// // 		return '<h4>' + n + '</h4><table>' +
// // 			'<tr><td>Lows</td><td>' + (d.low) + '</td></tr>' +
// // 			'<tr><td>Average</td><td>' + (d.avg) + '</td></tr>' +
// // 			'<tr><td>High</td><td>' + (d.high) + '</td></tr>' +
// // 			'</table>';
// // 	}

 }
