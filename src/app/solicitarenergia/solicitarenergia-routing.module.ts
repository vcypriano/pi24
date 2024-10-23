import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarenergiaPage } from './solicitarenergia.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarenergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarenergiaPageRoutingModule {}
