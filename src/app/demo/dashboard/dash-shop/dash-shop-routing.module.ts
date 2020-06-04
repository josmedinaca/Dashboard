import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashShopComponent} from './dash-shop.component';


const routes: Routes = [
  {
    path: '',
    component: DashShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashShopRoutingModule { }
