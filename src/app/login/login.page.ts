import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

import { ActivatedRoute } from '@angular/router';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  public id:number = 0;
  public email: string = '';
  public senha: string = '';
  loading: boolean = false;

  constructor(
    public requisicao_service:RequisicaoService,
   
    private activated_router:ActivatedRoute,
 
    public ls:LocalstorageService
  ) {
   
  this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.requisicao_service.get({
                controller:'logar',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.email = _dados.email;
                  this.senha = _dados.senha;
                }
              );
            }
          }
      }
    )
   }
 
 
  autenticar(){
 
    const fd = new FormData();
    fd.append('controller','logar');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('senha',this.senha);
    fd.append('email',this.email);
   
 
    this.requisicao_service.post(fd)
    .subscribe(
      (_res:any) => {
        this.ls.set('is_autenticado',true);
        this.ls.set('user_id',_res.user_id);
        location.href = '/home';
      }
    );
  }
 
  ngOnInit() {
  }
 
 

 

  login() {
    // Verifica se o e-mail e a senha estão preenchidos
    if (this.email === '' || this.senha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Simula o início do processo de login
    this.loading = true;

    // Simula um atraso para o login (substitua por lógica real de autenticação)
    setTimeout(() => {
      this.loading = false;
      // Aqui você pode redirecionar o usuário ou exibir uma mensagem de sucesso
      alert('Login realizado com sucesso!');
    }, 2000);
  }
}

