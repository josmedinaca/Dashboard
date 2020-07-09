import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EconomicoPageComponent} from './economico.component';

const routes: Routes = [
  {
    path: '',
    component: EconomicoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicoPageRoutingModule { }
