import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    LeafletModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SamplePageModule { }
