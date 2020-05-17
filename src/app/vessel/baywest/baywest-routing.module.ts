import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaywestPage } from './baywest.page';

const routes: Routes = [
  {
    path: '',
    component: BaywestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaywestPageRoutingModule {}
