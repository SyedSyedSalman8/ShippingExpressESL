import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PshaheenPageRoutingModule } from './pshaheen-routing.module';

import { PshaheenPage } from './pshaheen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PshaheenPageRoutingModule
  ],
  declarations: [PshaheenPage]
})
export class PshaheenPageModule {}
