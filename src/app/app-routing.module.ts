import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './components/timeline/timeline.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes  = [
  { path: '', component: TimelineComponent },
  { path: 'add-new-event', component: AddNewEventComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
