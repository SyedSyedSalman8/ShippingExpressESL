import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NlctPage } from './nlct.page';

const routes: Routes = [
  {
    path: '',
    component: NlctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NlctPageRoutingModule {}
