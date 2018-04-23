import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AboutRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
