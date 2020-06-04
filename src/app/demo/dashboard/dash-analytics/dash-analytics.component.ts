import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';

declare var $: any;
import 'peity';
import {SessionDashAnalytics} from './chart/session-dash-analytics';
import {VisitorAgeDashAnalytics} from './chart/visitor-age-dash-analytics';
import {VisitorGenderDashAnalytics} from './chart/visitor-gender-dash-analytics';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public sessionDashAnalytics: any;
  public visitorAgeDashAnalytics: any;
  public visitorGenderDashAnalytics: any;

  public percent1: number;
  public options1: any;
  public percent2: number;
  public options2: any;
  public percent3: number;
  public options3: any;
  public percent4: number;
  public options4: any;
  public percent5: number;
  public options5: any;
  public percent6: number;
  public options6: any;

  constructor(public apexEvent: ApexChartService) {
    this.sessionDashAnalytics = SessionDashAnalytics.chartData;
    this.visitorAgeDashAnalytics = VisitorAgeDashAnalytics.chartData;
    this.visitorGenderDashAnalytics = VisitorGenderDashAnalytics.chartData;

    this.percent1 = 35;
    this.options1 = {
      easing: 'easeOutBounce',
      barColor : '#13dafe',
      lineWidth: 3,
      animate: 1000,
      lineCap: 'square',
      trackColor: '#e5e5e5'
    };

    this.percent2 = 35;
    this.options2 = {
      easing: 'easeOutBounce',
      barColor : '#00c292',
      lineWidth: 3,
      trackColor : false,
      lineCap : 'butt'
    };

    this.percent3 = 35;
    this.options3 = {
      easing: 'easeOutBounce',
      barColor : '#6164c1',
      lineWidth: 3,
      lineCap : 'square',
      trackColor : false
    };

    this.percent4 = 35;
    this.options4 = {
      easing: 'easeOutBounce',
      barColor : '#13dafe',
      lineWidth: 3,
      scaleColor: false
    };

    this.percent5 = 35;
    this.options5 = {
      easing: 'easeOutBounce',
      barColor : '#99d683',
      lineWidth: 3,
      scaleColor: false
    };

    this.percent6 = 35;
    this.options6 = {
      easing: 'easeOutBounce',
      barColor : '#6164c1',
      lineWidth: 3,
      scaleColor: false
    };
  }

  ngOnInit() {
  }

}
