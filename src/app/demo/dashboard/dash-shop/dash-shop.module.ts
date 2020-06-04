import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashShopRoutingModule } from './dash-shop-routing.module';
import { DashShopComponent } from './dash-shop.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [DashShopComponent],
  imports: [
    CommonModule,
    DashShopRoutingModule,
    SharedModule
  ]
})
export class DashShopModule { }
