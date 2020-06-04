import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MtceError500Component} from './mtce-error500.component';


const routes: Routes = [
  {
    path: '',
    component: MtceError500Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtceError500RoutingModule { }
