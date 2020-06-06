import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashServerRoutingModule } from './dash-server-routing.module';
import { DashServerComponent } from './dash-server.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {KnobModule} from '@xmlking/ngx-knob';


@NgModule({
  declarations: [DashServerComponent],
  imports: [
    CommonModule,
    DashServerRoutingModule,
    SharedModule,
    KnobModule
  ]
})
export class DashServerModule { }
