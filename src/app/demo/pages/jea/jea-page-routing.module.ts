import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JeaPageComponent} from './jea.component';

const routes: Routes = [
  {
    path: '',
    component: JeaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeaPageRoutingModule { }
