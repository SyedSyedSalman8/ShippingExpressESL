import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VesselPage } from './vessel.page';

const routes: Routes = [
  {
    path: '',
    component: VesselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VesselPageRoutingModule {}
