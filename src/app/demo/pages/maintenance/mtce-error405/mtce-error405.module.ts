import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtceError405RoutingModule } from './mtce-error405-routing.module';
import { MtceError405Component } from './mtce-error405.component';


@NgModule({
  declarations: [MtceError405Component],
  imports: [
    CommonModule,
    MtceError405RoutingModule
  ]
})
export class MtceError405Module { }
