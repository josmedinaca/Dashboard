import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashStatisticsComponent} from './dash-statistics.component';


const routes: Routes = [
  {
    path: '',
    component: DashStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashStatisticsRoutingModule { }
