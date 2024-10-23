import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaGeralPage } from './mapa-geral.page';

const routes: Routes = [
  {
    path: '',
    component: MapaGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaGeralPageRoutingModule {}
