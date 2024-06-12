import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPlataformaPageRoutingModule } from './lista-plataforma-routing.module';

import { ListaPlataformaPage } from './lista-plataforma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPlataformaPageRoutingModule
  ],
  declarations: [ListaPlataformaPage]
})
export class ListaPlataformaPageModule {}
