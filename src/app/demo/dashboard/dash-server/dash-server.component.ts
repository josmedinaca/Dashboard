import { Component, OnInit } from '@angular/core';
import {MemoryUseDashServer} from './chart/memory-use-dash-server';
import {ProcessesDashServer} from './chart/processes-dash-server';
import {LatencyDashServer} from './chart/latency-dash-server';
import {CpuUseDashServer} from './chart/cpu-use-dash-server';
import {CpuProductivityDashServer} from './chart/cpu-productivity-dash-server';
import {VisitorGenderDashAnalytics} from './chart/visitor-gender-dash-analytics';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {ChartDB} from './chart/chart-data';
@Component({
  selector: 'app-dash-server',
  templateUrl: './dash-server.component.html',
  styleUrls: ['./dash-server.component.scss']
})
export class DashServerComponent implements OnInit {
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
  constructor(public apexEvent: ApexChartService) {
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
  }

}
