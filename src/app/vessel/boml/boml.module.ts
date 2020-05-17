import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BomlPageRoutingModule } from './boml-routing.module';

import { BomlPage } from './boml.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BomlPageRoutingModule
  ],
  declarations: [BomlPage]
})
export class BomlPageModule {}
