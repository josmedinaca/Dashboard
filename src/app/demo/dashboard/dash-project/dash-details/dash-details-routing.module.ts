import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashDetailsComponent} from './dash-details.component';


const routes: Routes = [
  {
    path: '',
    component: DashDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDetailsRoutingModule { }
