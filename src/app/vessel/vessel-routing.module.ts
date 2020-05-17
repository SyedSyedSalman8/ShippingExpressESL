import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VesselPage } from './vessel.page';

const routes: Routes = [
  {
    path: '',
    component: VesselPage
  },
  {
    path: 'boml',
    loadChildren: () => import('./boml/boml.module').then( m => m.BomlPageModule)
  },
  {
    path: 'aict',
    loadChildren: () => import('./aict/aict.module').then( m => m.AictPageModule)
  },
  {
    path: 'pshaheen',
    loadChildren: () => import('./pshaheen/pshaheen.module').then( m => m.PshaheenPageModule)
  },
  {
    path: 'nlct',
    loadChildren: () => import('./nlct/nlct.module').then( m => m.NlctPageModule)
  },
  {
    path: 'baywest',
    loadChildren: () => import('./baywest/baywest.module').then( m => m.BaywestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VesselPageRoutingModule {}
