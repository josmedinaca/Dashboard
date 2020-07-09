import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { EconomicoPageRoutingModule } from './economico-page-routing.module';
import { EconomicoPageComponent } from './economico.component';
import {SharedModule} from '../../../theme/shared/shared.module';
@NgModule({
  declarations: [EconomicoPageComponent],
  imports: [
    CommonModule,
    EconomicoPageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgApexchartsModule
  ]
})
export class EconomicoPageModule { }
