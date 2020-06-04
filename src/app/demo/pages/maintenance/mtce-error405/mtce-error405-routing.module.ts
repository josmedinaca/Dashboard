import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MtceError405Component} from './mtce-error405.component';


const routes: Routes = [
  {
    path: '',
    component: MtceError405Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtceError405RoutingModule { }
