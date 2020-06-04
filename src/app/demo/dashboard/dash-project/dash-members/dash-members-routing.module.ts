import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashMembersComponent} from './dash-members.component';


const routes: Routes = [
  {
    path: '',
    component: DashMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashMembersRoutingModule { }
