import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashServerComponent} from './dash-server.component';


const routes: Routes = [
  {
    path: '',
    component: DashServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashServerRoutingModule { }
