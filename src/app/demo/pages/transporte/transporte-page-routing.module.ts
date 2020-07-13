import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransportePageComponent} from './transporte.component';

const routes: Routes = [
  {
    path: '',
    component: TransportePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportePageRoutingModule { }
