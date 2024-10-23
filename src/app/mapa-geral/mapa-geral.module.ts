import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaGeralPageRoutingModule } from './mapa-geral-routing.module';

import { MapaGeralPage } from './mapa-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaGeralPageRoutingModule,
    
  ],
  declarations: [MapaGeralPage]
})
export class MapaGeralPageModule {}
