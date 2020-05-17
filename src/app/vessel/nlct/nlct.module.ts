import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NlctPageRoutingModule } from './nlct-routing.module';

import { NlctPage } from './nlct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NlctPageRoutingModule
  ],
  declarations: [NlctPage]
})
export class NlctPageModule {}
