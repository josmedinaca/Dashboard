import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [

    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [



    ]
  },
  {
    id: 'ui-element',
    title: 'UI Element',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
    ]
  },
  {
    id: 'table',
    title: 'Table',
    type: 'group',
    icon: 'feather icon-list',
    children: [


    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
        {
        id: 'sample-page',
        title: 'Dashboard',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Otros datos',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Otros datos',
        type: 'collapse',
        icon: 'feather icon-pie-chart',
        children: [
          {
            id: 'apex',
            title: 'Transporte',
            type: 'item',
            url: '/charts/apex'
          },
          {
            id: 'chart-js',
            title: 'Alojamiento',
            type: 'item',
            url: '/charts/chart-js'
          },
          {
            id: 'high-chart',
            title: 'Datos-extra1',
            type: 'item',
            url: '/charts/high-chart'
          },
          {
            id: 'peity',
            title: 'Datos-extra2',
            type: 'item',
            url: '/charts/peity'
          }
        ]
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
