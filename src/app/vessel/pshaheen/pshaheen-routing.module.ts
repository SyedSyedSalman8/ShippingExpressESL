import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PshaheenPage } from './pshaheen.page';

const routes: Routes = [
  {
    path: '',
    component: PshaheenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PshaheenPageRoutingModule {}
