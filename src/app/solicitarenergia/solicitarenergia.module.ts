import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarenergiaPageRoutingModule } from './solicitarenergia-routing.module';

import { SolicitarenergiaPage } from './solicitarenergia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarenergiaPageRoutingModule
  ],
  declarations: [SolicitarenergiaPage]
})
export class SolicitarenergiaPageModule {}
