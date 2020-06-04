import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtceError404RoutingModule } from './mtce-error404-routing.module';
import { MtceError404Component } from './mtce-error404.component';


@NgModule({
  declarations: [MtceError404Component],
  imports: [
    CommonModule,
    MtceError404RoutingModule
  ]
})
export class MtceError404Module { }
