import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlataformaPageRoutingModule } from './plataforma-routing.module';

import { PlataformaPage } from './plataforma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlataformaPageRoutingModule
  ],
  declarations: [PlataformaPage]
})
export class PlataformaPageModule {}
