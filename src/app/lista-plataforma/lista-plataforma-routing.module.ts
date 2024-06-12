import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPlataformaPage } from './lista-plataforma.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPlataformaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPlataformaPageRoutingModule {}
