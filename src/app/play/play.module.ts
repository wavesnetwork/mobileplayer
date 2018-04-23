import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule,
    NgbModule
  ],
  declarations: [
      PlayComponent
	]
})
export class PlayModule { }
