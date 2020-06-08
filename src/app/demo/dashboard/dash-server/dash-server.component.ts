import {ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend
} from 'ng-apexcharts';
import { Component, OnInit } from '@angular/core';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {ProcessesDashServer} from './chart/processes-dash-server';
import {LatencyDashServer} from './chart/latency-dash-server';
import {CpuUseDashServer} from './chart/cpu-use-dash-server';
import {CpuProductivityDashServer} from './chart/cpu-productivity-dash-server';
import {VisitorGenderDashAnalytics} from './chart/visitor-gender-dash-analytics';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {ChartDB} from './chart/chart-data';


declare const d3: any;
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
  selector: 'app-dash-server',
  templateUrl: './dash-server.component.html',
  styleUrls: ['./dash-server.component.scss']
})

export class DashServerComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public storageKnob: any;
  public bandwidthKnob: any;
  public clusterKnob: any;
  public chartDB: any;
  public memoryUseDashServer: any;
  public processesDashServer: any;
  public latencyDashServer: any;
  public cpuUseDashServer: any;
  public cpuProductivityDashServer: any;
  public visitorGenderDashAnalytics: any;
  constructor(public apexEvent?: ApexChartService) {


  
    this.chartOptions = {
      series: [
        {
          name: "brindados",
          data: [197, 459, 157, 494, 734, 228, 234, 1106, 466, 95, 138]
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
    this.chartDB = ChartDB;
    this.visitorGenderDashAnalytics = VisitorGenderDashAnalytics.chartData;
    this.storageKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#f95476',
      barCap: 50,
      displayInput: false
    };
    this.bandwidthKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#4886ff',
      barCap: 50,
      displayInput: false
    };
    this.clusterKnob = {
      readOnly: false,
      size: 70,
      trackWidth: 7,
      barWidth: 7,
      trackColor: '#eee',
      barColor: '#ffb74e',
      barCap: 50,
      displayInput: false
    };

    this.memoryUseDashServer = MemoryUseDashServer.chartData;
    this.processesDashServer = ProcessesDashServer.chartData;
    this.latencyDashServer = LatencyDashServer.chartData;
    this.cpuUseDashServer = CpuUseDashServer.chartData;
    this.cpuProductivityDashServer = CpuProductivityDashServer.chartData;

    
    
  }
  
  ngOnInit() {
    this.data();
  }
  data(){
    // set the dimensions and margins of the graph
var margin = {top: 0, right: 10, bottom: 10, left: 10},
width = 900 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// read json data
d3.json("https://raw.githubusercontent.com/josmedinaca/Dashboard/master/src/app/demo/dashboard/dash-server/data_dendrogram_full.json?token=AFIPRNQ437ISCCZFSFJ6R4K645XZK", function(data) {

// Give the data to this cluster layout:
var root = d3.hierarchy(data).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data

// Then d3.treemap computes the position of each element of the hierarchy
d3.treemap()
  .size([width, height])
  .paddingTop(28)
  .paddingRight(7)
  .paddingInner(3)      // Padding between each rectangle
  //.paddingOuter(6)
  //.padding(20)
  (root)
 
// prepare a color scale
var color = d3.scaleOrdinal()
  .domain(["PAES", "PEAMA", "PREGRADO","INTERCAMBIO INTERNACIONAL"])
  .range([ "#402D54", "#D18975", "#8FD175","#8FD100"])

// And a opacity scale
var opacity = d3.scaleLinear()
.domain([10, 30])
.range([.5,1])

// use this information to add rectangles:
svg
  .selectAll("rect")
  .data(root.leaves())
  .enter()
  .append("rect")
    .attr('x', function (d) { 
      if(d.data.name == 'Poblacion Afro'){
        return 211.99277883305575;
      }
      if(d.data.name == 'Municipio'){
        return 0;
      }
      return d.x0; })
    .attr('y', function (d) {
      if(d.data.name == 'Poblacion Afro'){
        return 56; 
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 280; 
      }
      if(d.data.name == 'Municipio'){
        return 338;
      }
      return d.y0; })
    .attr('width', function (d) {
      if(d.data.name == 'Poblacion Afro'){
        return 137.35350212826307; 
      }      if(d.data.name == 'Municipio'){
        return 208.99277883305575;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 137.35350212826307; 
      }

       return d.x1 - d.x0; 
      })
    .attr('height', function (d) {
      if(d.data.name == 'Indigena'){
        return (d.y1 - d.y0)/1.2;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 50;
      }

      if(d.data.name == 'Poblacion Afro'){
        return 219.86945255405737;
      }
      if(d.data.name == 'Municipio'){
        return 52;
      }
       return  d.y1 - d.y0; 
      })
    .style("stroke", "black")
    .style("fill", function(d){ return color(d.parent.data.name)} )
    .style("opacity", function(d){ return opacity(d.data.value)})

// and to add the text labels
svg
  .selectAll("text")
  .data(root.leaves())
  .enter()
  .append("text")
    .attr("x", function(d){
      if(d.data.name == 'Poblacion Afro'){
        return 216.99277883305575;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 216.99277883305575;
      }
      if(d.data.name == 'Municipio'){
        return 5;
      }
     return d.x0+5})    // +10 to adjust position (more right)
    .attr("y", function(d){
      if(d.data.name == 'Poblacion Afro'){
        return 76;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 300;
      }
      if(d.data.name == 'Municipio'){
        return 360;
      }
       return d.y0+20})    // +20 to adjust position (lower)
    .text(function(d){ return d.data.name })
    .attr("font-size", "14px")
    .attr("fill", "white")

// and to add the text labels
svg
  .selectAll("vals")
  .data(root.leaves())
  .enter()
  .append("text")
    .attr("x", function(d){ 
      if(d.data.name == 'Poblacion Afro'){
        return 216.99277883305575;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 216.99277883305575;
      }
      if(d.data.name == 'Municipio'){
        return 5;
      }
      return d.x0+5})    // +10 to adjust position (more right)
    .attr("y", function(d){
      if(d.data.name == 'Poblacion Afro'){
        return 90;
      }
      if(d.data.name == 'Municipio'){
        return 375;
      }
      if(d.data.name == 'Mejor Bachiller'){
        return 316;
      }
       return d.y0+35})    // +20 to adjust position (lower)
    .text(function(d){ return d.data.value*15 })
    .attr("font-size", "11px")
    .attr("fill", "white")

// Add title for the 3 groups
svg
  .selectAll("titles")
  .data(root.descendants().filter(function(d){return d.depth==1}))
  .enter()
  .append("text")
    .attr("x", function(d){ return d.x0})
    .attr("y", function(d){ return d.y0+21})
    .text(function(d){ return d.data.name })
    .attr("font-size", "19px")
    .attr("fill",  function(d){ return color(d.data.name)} )

// Add title for the 3 groups
svg
  .append("text")
    .attr("x", 0)
    .attr("y", 14)
    .text("Niveles de subacceso")
    .attr("font-size", "19px")
    .attr("fill",  "grey" )

})
  }
 
  }

  
