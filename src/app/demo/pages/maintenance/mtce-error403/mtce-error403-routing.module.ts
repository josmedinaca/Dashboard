import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MtceError403Component} from './mtce-error403.component';

const routes: Routes = [
  {
    path: '',
    component: MtceError403Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtceError403RoutingModule { }
