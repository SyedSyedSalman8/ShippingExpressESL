import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingPage } from './tracking.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingPageRoutingModule {}
