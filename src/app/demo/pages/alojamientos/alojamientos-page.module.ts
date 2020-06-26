import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { AlojamientosPageRoutingModule } from './alojamientos-page-routing.module';
import { AlojamientosPageComponent } from './alojamientos.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [AlojamientosPageComponent],
  imports: [
    CommonModule,
    AlojamientosPageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    LeafletModule
  ]
})
export class AlojamientosPageModule { }
