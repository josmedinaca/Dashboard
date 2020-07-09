import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { JeaPageRoutingModule } from './jea-page-routing.module';
import { JeaPageComponent } from './jea.component';
import {SharedModule} from '../../../theme/shared/shared.module';
@NgModule({
  declarations: [JeaPageComponent],
  imports: [
    CommonModule,
    JeaPageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgApexchartsModule
  ]
})
export class JeaPageModule { }
