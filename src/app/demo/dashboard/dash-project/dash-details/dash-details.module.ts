import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDetailsRoutingModule } from './dash-details-routing.module';
import { DashDetailsComponent } from './dash-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [DashDetailsComponent],
  imports: [
    CommonModule,
    DashDetailsRoutingModule,
    SharedModule
  ]
})
export class DashDetailsModule { }
