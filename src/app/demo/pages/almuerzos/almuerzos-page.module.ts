import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { AlmuerzosPageRoutingModule } from './almuerzos-page-routing.module';
import { AlmuerzosPageComponent } from './almuerzos.component';
import {SharedModule} from '../../../theme/shared/shared.module';
@NgModule({
  declarations: [AlmuerzosPageComponent],
  imports: [
    CommonModule,
    AlmuerzosPageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgApexchartsModule
  ]
})
export class AlmuerzosPageModule { }
