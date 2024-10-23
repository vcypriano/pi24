import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosdeusoPageRoutingModule } from './termosdeuso-routing.module';

import { TermosdeusoPage } from './termosdeuso.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosdeusoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [TermosdeusoPage]
})
export class TermosdeusoPageModule {}
