import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoGeradorEnergiaPage } from './tipo-gerador-energia.page';

const routes: Routes = [
  {
    path: '',
    component: TipoGeradorEnergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoGeradorEnergiaPageRoutingModule {}
