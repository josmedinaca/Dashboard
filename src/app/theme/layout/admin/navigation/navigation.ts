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
        title: 'Resumen Apoyos AGFSE',
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
      },      {
        id: 'transporte-page',
        title: 'Transporte',
        type: 'item',
        url: '/transporte',
        classes: 'nav-item',
        icon: 'feather icon-clipboard'
      },
      
      // {
      //   id: 'economico-page',
      //   title: 'Transferencias monetarias',
      //   type: 'item',
      //   url: '/transferencias-monetarias',
      //   classes: 'nav-item',
      //   icon: 'feather icon-file-plus'
      // }
      // ,
      
      // {
      //   id: 'jea-page',
      //   title: 'Apoyos JeA',
      //   type: 'item',
      //   url: '/jea',
      //   classes: 'nav-item',
      //   icon: 'feather icon-file-plus'
      // },

      // {
      //   id: 'other',
      //   type: 'group',
      //   icon: 'feather icon-align-left',
      //   children: [
      //     {
      //       id: 'menu-level',
      //       title: 'Apoyos externos                             ‏‏‎  ‏‏‎  ‏‏‎     ',
      //       type: 'collapse',
      //       icon: 'feather icon-menu',
      //       children: [
      //         {
      //           id: 'economico-page',
      //           title: 'Transferencias monetarias',
      //           type: 'item',
      //           url: '/transferencias-monetarias',
      //           external: true
      //         },
      //         {
      //           id: 'jea-page',
      //           title: 'Apoyos JeA',
      //           type: 'item',
      //           url: '/jea',
      //           external: true
      //         }
      //       ]
      //     }
      //   ]
      // }

      {
        id: 'other',
        title: 'Apoyos externos',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          
          {
            id: 'jea-page',
            title: 'Jovenes en Accion',
            type: 'item',
            url: '/jea'
          },
          {
            id: 'economico-page',
            title: 'Transferencias Bienestar Nacional',
            type: 'item',
            url: '/transferencias-monetarias'
          }
        ]
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
