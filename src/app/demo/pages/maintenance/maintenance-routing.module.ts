import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'offline-ui',
        loadChildren: () => import('./mainten-offline-ui/mainten-offline-ui.module').then(module => module.MaintenOfflineUiModule)
      },
      {
        path: 'error-403',
        loadChildren: () => import('./mtce-error403/mtce-error403.module').then(module => module.MtceError403Module)
      },
      {
        path: 'error-404',
        loadChildren: () => import('./mtce-error404/mtce-error404.module').then(module => module.MtceError404Module)
      },
      {
        path: 'error-405',
        loadChildren: () => import('./mtce-error405/mtce-error405.module').then(module => module.MtceError405Module)
      },
      {
        path: 'error-500',
        loadChildren: () => import('./mtce-error500/mtce-error500.module').then(module => module.MtceError500Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
