import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlmuerzosPageComponent} from './almuerzos.component';

const routes: Routes = [
  {
    path: '',
    component: AlmuerzosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmuerzosPageRoutingModule { }
