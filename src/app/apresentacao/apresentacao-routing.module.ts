import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApresentacaoPage } from './apresentacao.page';

const routes: Routes = [
  {
    path: '',
    component: ApresentacaoPage
  },  {
    path: 'etapa1',
    loadChildren: () => import('./etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'etapa2',
    loadChildren: () => import('./etapa2/etapa2.module').then( m => m.Etapa2PageModule)
  },
  {
    path: 'etapa3',
    loadChildren: () => import('./etapa3/etapa3.module').then( m => m.Etapa3PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApresentacaoPageRoutingModule {}
