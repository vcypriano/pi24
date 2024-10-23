import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutPageRoutingModule } from './logout-routing.module';

import { LogoutPage } from './logout.page';
import { MenuPageModule } from '../menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutPageRoutingModule,
    MenuPageModule
  ],
  declarations: [LogoutPage]
})
export class LogoutPageModule {}
