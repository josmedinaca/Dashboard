import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./dash-server/dash-server.module').then(module => module.DashServerModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(module => module.DashAnalyticsModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./dash-project/dash-project.module').then(module => module.DashProjectModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./dash-shop/dash-shop.module').then(module => module.DashShopModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
