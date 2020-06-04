import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashProjectRoutingModule } from './dash-project-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashProjectRoutingModule,
    SharedModule
  ]
})
export class DashProjectModule { }
