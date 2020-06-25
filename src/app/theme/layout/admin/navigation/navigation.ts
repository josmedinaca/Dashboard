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
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'dashboard-home',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/home',
        classes: 'nav-item',
        icon: 'feather icon-activity'
      }, 
      {
        id: 'sample-page',
        title: 'PACS',
        type: 'item',
        url: '/pacs',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'almuerzos-page',
        title: 'Almuerzos CRU',
        type: 'item',
        url: '/almuerzos',
        classes: 'nav-item',
        icon: 'feather icon-gitlab'
      },
      
      {
        id: 'alojamientos-page',
        title: 'Alojamientos',
        type: 'item',
        url: '/alojamientos',
        classes: 'nav-item',
        icon: 'feather icon-grid'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
