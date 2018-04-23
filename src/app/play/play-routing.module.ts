import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { PlayComponent } from './play.component';

const routes: Routes = Route.withShell([
  { path: 'play', component: PlayComponent, data: { title: extract('Play') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlayRoutingModule { }
