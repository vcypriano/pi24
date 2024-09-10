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
  public usuarios:Array<any> = [];
  ngOnInit() {
    this. listar();
  }

  async listar(){


      
      const loading = await this.loadingCtrl.create({
        message: 'carregando ...'
      })
    loading.present();

    this.requisicao_service.get({
    controller:'usuario-listar'
    })
    .subscribe(
    (_res:any) => {  
      loading.dismiss(); 
    this.usuarios =_res;
    }
    );
  }  

}
