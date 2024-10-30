import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public id:number = 0;
  public nome: string = '';
  public email: string = '';
  public telefone: string = '';
  public endereco: string = '';
  public cidade: string = '';
  public estado: string = '';
  public senha: string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router:ActivatedRoute
  ) {
    this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.requisicao_service.get({
                controller:'cadastrousuario-get',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  
                  this.nome  = _dados.nome;
                  this.email = _dados.email;
                  this.telefone = _dados.telefone;
                  this.endereco = _dados.endereco;
                  this.cidade = _dados.cidade;
                  this.estado = _dados.estado;
                  this.senha = _dados.senha;
                }
              );
            }
          }
      }
    );
   }

   go(rota:string){
    window.location.href = rota;
  }
  
  salvar() {
    //if (this.senha !== this.confirmarsenha) {
    //  console.error('As senhas não batem');
    //  return;
    //}

    const fd = new FormData();
    fd.append('controller', 'cadastrousuario');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('nome', this.nome); // Corrigido para this.nome
    fd.append('email', this.email);
    fd.append('telefone', this.telefone);
    fd.append('endereco', this.endereco);
    fd.append('cidade', this.cidade);
    fd.append('estado', this.estado); // Corrigido de 'estadp' para 'estado'
    fd.append('senha', this.senha)

    this.requisicao_service.post(fd)
    .subscribe(
      () => {
        //location.href = '/listar-usuario';
      }
    );
  }
  ngOnInit() {
  }
 
}

