import { Component, OnInit } from '@angular/core';
import {NextConfig} from '../../../../../../app-config';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  public isSearch: boolean;
  public nextConfig: any;

  constructor() {
    this.nextConfig = NextConfig.config;
  }

  ngOnInit() { }

}
