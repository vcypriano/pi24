import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router,
    public ls:LocalstorageService
    ) { }

  ngOnInit() {
    // Aqui você pode adicionar inicializações ou verificações necessárias para o logout
  }

  logout() {
    // Lógica para realizar o logout, por exemplo, limpar o token de autenticação
    console.log('Usuário deslogado com sucesso');

      this.ls.remove('is_autenticado');
      this.ls.remove('user_id');
        location.href = '/login';
  }

  cancel() {
    // Se o usuário cancelar, redireciona para a página principal ou anterior
    this.router.navigate(['/home']);
  }
}
