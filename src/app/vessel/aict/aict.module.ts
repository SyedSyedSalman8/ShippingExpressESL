import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AictPageRoutingModule } from './aict-routing.module';

import { AictPage } from './aict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AictPageRoutingModule
  ],
  declarations: [AictPage]
})
export class AictPageModule {}
