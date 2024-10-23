import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-lista-plataforma',
  templateUrl: './lista-plataforma.page.html',
  styleUrls: ['./lista-plataforma.page.scss'],
})
export class ListaPlataformaPage implements OnInit {

public isShowDeleteDialog:boolean = false;
public alertButtons:Array<any> = [];
    
  constructor
  (public requisicao_service:RequisicaoService,
    public Router:Router,
    private loadingCtrl: LoadingController ) 
  { }
  public plataformas:Array<any> = [];
  ngOnInit() {
    this. listar();
  }

  async listar(){
      
      const loading = await this.loadingCtrl.create({
        message: 'carregando ...'
      })
    loading.present();

    this.requisicao_service.get({
    controller:'plataforma-listar'
    })
    .subscribe(
    (_res:any) => {  
      loading.dismiss(); 
      this.plataformas =_res;
    }
    );
  } 

  editar(id:number){
    this.Router.navigateByUrl('plataforma/' + id);
  }

  excluir(id:number){
    this.requisicao_service.get({
      controller:'plataforma-excluir',
      id:id
    })
    .subscribe( () => {
      this.listar();
    } );
  }

}
