import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {NextConfig} from '../../../../app-config';
import {Location} from '@angular/common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationComponent implements OnInit {
  public styleSelectorToggle: boolean; // open configuration menu
  public layoutType: string; // layout type
  public menuFixedLayout: any; // menu/navbar fixed flag
  public headerFixedLayout: any; // header fixed flag
  public headerBackgroundColor: string; // header background color
  public fullWidthLayout: boolean; // full-width layout

  public headerBackColor: string;

  public nextConfig: any;
  public isConfig: boolean;

  scroll = (): void => {
    if (this.headerFixedLayout === false) {
      (document.querySelector('#nav-ps-mintone') as HTMLElement).style.maxHeight = 'calc(100vh)';
      const el = document.querySelector('.pcoded-navbar.menupos-fixed') as HTMLElement;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 60) {
        el.style.position = 'fixed';
        el.style.transition = 'none';
        el.style.marginTop = '0';
      } else {
        el.style.position = 'absolute';
        el.style.marginTop = '60px';
      }
    } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
      document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
    }
  }

  constructor(private zone: NgZone, private location: Location) {
    this.nextConfig = NextConfig.config;
    this.setThemeLayout();
  }

  ngOnInit() {
    this.styleSelectorToggle = false;

    this.layoutType =  this.nextConfig.layoutType;
    this.setLayout(this.layoutType);

    

   

    this.menuFixedLayout = this.nextConfig.navFixedLayout;
    if (this.nextConfig.layout === 'vertical') {
      this.changeMenuFixedLayout(this.menuFixedLayout);
    }



    this.fullWidthLayout = this.nextConfig.fullWidthLayout;
    this.changeFullWidthLayout(this.fullWidthLayout);

  }

  setThemeLayout() {
    let currentURL = this.location.path();
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    if (currentURL.includes('?_ga=')) {
      currentURL = (currentURL.split('?_ga=', 1))[0];
    }

    switch (currentURL) {
      case baseHref + '/layout/static':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = true;
        break;
      case baseHref + '/layout/nav-fixed':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.navFixedLayout = true;
        this.nextConfig.headerFixedLayout = false;
        break;
      case baseHref + '/layout/collapse-menu':
        this.nextConfig.layout = 'vertical';
        this.nextConfig.collapseMenu = true;
        break;
      case baseHref + '/layout/horizontal':
        this.nextConfig.layout = 'horizontal';
        this.nextConfig.navFixedLayout = false;
        this.nextConfig.headerFixedLayout = true;
        break;
      case baseHref + '/layout/nav-dark':
        this.nextConfig.layoutType = 'menu-dark';
        break;
      default:
        break;
    }
  }

  setHeaderBackColor(color) {
    this.headerBackColor = color;
    (document.querySelector('body') as HTMLElement).style.background = color;
  }

  // change main layout
  setLayout(layout) {
    this.isConfig = true;
    document.querySelector('.pcoded-navbar').classList.remove('menu-light');
    document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
    document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
    document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
    document.querySelector('body').classList.remove('mintone-dark');

    this.layoutType = layout;
    if (layout === 'menu-light') {
      document.querySelector('.pcoded-navbar').classList.add(layout);
    }
    if (layout === 'reset') {
      this.reset();
    }
  }

  reset() {
    document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
    this.ngOnInit();
  }

  setMenuFixedLayout(e) {
    const flag = !!(e.target.checked);
    this.changeMenuFixedLayout(flag);
  }

  changeMenuFixedLayout(flag) {
    setTimeout(() => {
      if (flag) {
        document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
        document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-mintone') as HTMLElement).style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
        }
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
        if (this.nextConfig.layout === 'vertical') {
          (document.querySelector('#nav-ps-mintone') as HTMLElement).style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
        }
        if (this.nextConfig.layout === 'vertical') {
          window.removeEventListener('scroll', this.scroll, true);
        }

      }
    }, 100);
  }





  setFullWidthLayout(e) {
    const flag = !!(e.target.checked);
    this.changeFullWidthLayout(flag);
  }

  changeFullWidthLayout(flag) {
    this.fullWidthLayout = flag;
    this.nextConfig.fullWidthLayout = flag;
  }



}
