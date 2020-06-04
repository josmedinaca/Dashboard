import { Component, OnInit } from '@angular/core';
declare var $: any;
import 'peity';

@Component({
  selector: 'app-widget-data',
  templateUrl: './widget-data.component.html',
  styleUrls: ['./widget-data.component.scss']
})
export class WidgetDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('span.visitor').peity('line');
    });
  }

}
