import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashStatisticsRoutingModule } from './dash-statistics-routing.module';
import { DashStatisticsComponent } from './dash-statistics.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashStatisticsComponent],
  imports: [
    CommonModule,
    DashStatisticsRoutingModule,
    SharedModule,
    NgbProgressbarModule
  ]
})
export class DashStatisticsModule { }
