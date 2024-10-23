import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.page.html',
  styleUrls: ['./plataforma.page.scss'],
})
export class PlataformaPage implements OnInit {
  public id:number = 0;

  public descricao:string = '';
  constructor(
    public requisicao_service:RequisicaoService,

    private activated_router:ActivatedRoute
  ) {
this.activated_router.params
.subscribe(
  (params:any) => {
    this.id = params.id == undefined ? 0 : params.id;
    if (this.id != 0){
    this.requisicao_service.get({
      controller:'plataforma-get',
      id:this.id
    })
    .subscribe(
      (_dados:any) => {
        this.descricao  =_dados.descricao;
      }
    );
    }
  }
);
   }

  ngOnInit() {
  }

  salvar(){
    const fd = new FormData();
    fd.append('controller','plataforma');
    fd.append('id',String(this.id));
    fd.append('op','salvar');
    fd.append('descricao',this.descricao);

    this.requisicao_service.post(fd)
    .subscribe();

  }

}
