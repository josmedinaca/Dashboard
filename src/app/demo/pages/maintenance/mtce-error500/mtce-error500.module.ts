import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtceError500RoutingModule } from './mtce-error500-routing.module';
import { MtceError500Component } from './mtce-error500.component';


@NgModule({
  declarations: [MtceError500Component],
  imports: [
    CommonModule,
    MtceError500RoutingModule
  ]
})
export class MtceError500Module { }
