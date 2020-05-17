import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BomlPage } from './boml.page';

const routes: Routes = [
  {
    path: '',
    component: BomlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BomlPageRoutingModule {}
