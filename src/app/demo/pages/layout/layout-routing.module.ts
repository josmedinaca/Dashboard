import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () => import('./theme-static/theme-static.module').then(module => module.ThemeStaticModule)
      },
      {
        path: 'fixed',
        loadChildren: () => import('./theme-fixed/theme-fixed.module').then(module => module.ThemeFixedModule)
      },
      {
        path: 'nav-fixed',
        loadChildren: () => import('./theme-nav-fixed/theme-nav-fixed.module').then(module => module.ThemeNavFixedModule)
      },
      {
        path: 'collapse-menu',
        loadChildren: () => import('./theme-collapse-menu/theme-collapse-menu.module').then(module => module.ThemeCollapseMenuModule)
      },
      {
        path: 'nav-dark',
        loadChildren: () => import('./theme-dark/theme-dark.module').then(module => module.ThemeDarkModule)
      },
      {
        path: 'horizontal',
        loadChildren: () => import('./theme-horizontal/theme-horizontal.module').then(module => module.ThemeHorizontalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
