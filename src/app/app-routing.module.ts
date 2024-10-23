import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'tipo-gerador-energia',
    loadChildren: () => import('./tipo-gerador-energia/tipo-gerador-energia.module').then( m => m.TipoGeradorEnergiaPageModule)
  },
  {
    path: 'lista-plataforma',
    loadChildren: () => import('./lista-plataforma/lista-plataforma.module').then( m => m.ListaPlataformaPageModule)
  },
  {
    path: 'esqueci-minha-senha',
    loadChildren: () => import('./esqueci-minha-senha/esqueci-minha-senha.module').then( m => m.EsqueciMinhaSenhaPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'grafico-exemplo',
    loadChildren: () => import('./grafico-exemplo/grafico-exemplo.module').then( m => m.GraficoExemploPageModule)
  },
  {
    path: 'card-exemplo',
    loadChildren: () => import('./card-exemplo/card-exemplo.module').then( m => m.CardExemploPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  
  {
    path: 'ganhos',
    loadChildren: () => import('./ganhos/ganhos.module').then( m => m.GanhosPageModule)
  },
  {
    path: 'mapa-geral',
    loadChildren: () => import('./mapa-geral/mapa-geral.module').then( m => m.MapaGeralPageModule)
  },
  {
    path: 'solicitarenergia',
    loadChildren: () => import('./solicitarenergia/solicitarenergia.module').then( m => m.SolicitarenergiaPageModule)
  },
  {
    path: 'plataforma',
    loadChildren: () => import('./plataforma/plataforma.module').then( m => m.PlataformaPageModule)
  },
  {
    path: 'plataforma/:id',
    loadChildren: () => import('./plataforma/plataforma.module').then( m => m.PlataformaPageModule)
  },   {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'termosdeuso',
    loadChildren: () => import('./termosdeuso/termosdeuso.module').then( m => m.TermosdeusoPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
