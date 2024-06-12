import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoGeradorEnergiaPageRoutingModule } from './tipo-gerador-energia-routing.module';

import { TipoGeradorEnergiaPage } from './tipo-gerador-energia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoGeradorEnergiaPageRoutingModule
  ],
  declarations: [TipoGeradorEnergiaPage]
})
export class TipoGeradorEnergiaPageModule {}
