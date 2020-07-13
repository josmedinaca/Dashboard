import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { TransportePageRoutingModule } from './transporte-page-routing.module';
import { TransportePageComponent } from './transporte.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [TransportePageComponent],
  imports: [
    CommonModule,
    TransportePageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    LeafletModule
  ]
})
export class TransportePageModule { }
