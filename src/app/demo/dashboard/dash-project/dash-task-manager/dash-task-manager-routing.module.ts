import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashTaskManagerComponent} from './dash-task-manager.component';


const routes: Routes = [
  {
    path: '',
    component: DashTaskManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashTaskManagerRoutingModule { }
