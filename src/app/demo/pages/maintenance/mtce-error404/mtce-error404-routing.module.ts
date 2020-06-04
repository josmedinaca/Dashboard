import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MtceError404Component} from './mtce-error404.component';


const routes: Routes = [
  {
    path: '',
    component: MtceError404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtceError404RoutingModule { }
