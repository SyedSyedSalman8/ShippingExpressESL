import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VesselPageRoutingModule } from './vessel-routing.module';

import { VesselPage } from './vessel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VesselPageRoutingModule
  ],
  declarations: [VesselPage]
})
export class VesselPageModule {}
