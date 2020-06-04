import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashTaskManagerRoutingModule } from './dash-task-manager-routing.module';
import { DashTaskManagerComponent } from './dash-task-manager.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashTaskManagerComponent],
  imports: [
    CommonModule,
    DashTaskManagerRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class DashTaskManagerModule { }
