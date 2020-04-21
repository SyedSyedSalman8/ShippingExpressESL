import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueryPageRoutingModule } from './query-routing.module';

import { QueryPage } from './query.page';
import { AlertifyService } from '../api/alertify.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QueryPage],
  providers: [
    AlertifyService
 ]
})
export class QueryPageModule {}
