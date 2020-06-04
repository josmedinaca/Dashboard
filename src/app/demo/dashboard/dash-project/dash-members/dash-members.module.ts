import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashMembersRoutingModule } from './dash-members-routing.module';
import { DashMembersComponent } from './dash-members.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [DashMembersComponent],
  imports: [
    CommonModule,
    DashMembersRoutingModule,
    SharedModule
  ]
})
export class DashMembersModule { }
