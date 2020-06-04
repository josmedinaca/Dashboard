import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtceError403RoutingModule } from './mtce-error403-routing.module';
import { MtceError403Component } from './mtce-error403.component';


@NgModule({
  declarations: [MtceError403Component],
  imports: [
    CommonModule,
    MtceError403RoutingModule
  ]
})
export class MtceError403Module { }
