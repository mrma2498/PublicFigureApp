import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuriositiesPageRoutingModule } from './curiosities-routing.module';

import { CuriositiesPage } from './curiosities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuriositiesPageRoutingModule
  ],
  declarations: [CuriositiesPage]
})
export class CuriositiesPageModule {}
