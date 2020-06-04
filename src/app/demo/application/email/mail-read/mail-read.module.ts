import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailReadRoutingModule } from './mail-read-routing.module';
import { MailReadComponent } from './mail-read.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [MailReadComponent],
  imports: [
    CommonModule,
    MailReadRoutingModule,
    SharedModule,
    NgbCollapseModule
  ]
})
export class MailReadModule { }
