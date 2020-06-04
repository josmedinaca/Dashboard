import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'statistics',
        loadChildren: () => import('./dash-statistics/dash-statistics.module').then(module => module.DashStatisticsModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./dash-details/dash-details.module').then(module => module.DashDetailsModule)
      },
      {
        path: 'task-manager',
        loadChildren: () => import('./dash-task-manager/dash-task-manager.module').then(module => module.DashTaskManagerModule)
      },
      {
        path: 'members',
        loadChildren: () => import('./dash-members/dash-members.module').then(module => module.DashMembersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashProjectRoutingModule { }
