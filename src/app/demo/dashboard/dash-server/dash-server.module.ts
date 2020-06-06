import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashServerRoutingModule } from './dash-server-routing.module';
import { DashServerComponent } from './dash-server.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [DashServerComponent],
  imports: [
    CommonModule,
    DashServerRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class DashServerModule { }
