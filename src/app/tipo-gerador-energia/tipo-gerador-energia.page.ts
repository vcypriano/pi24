import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
@Component({
  selector: 'app-tipo-gerador-energia',
  templateUrl: './tipo-gerador-energia.page.html',
  styleUrls: ['./tipo-gerador-energia.page.scss'],
})
export class TipoGeradorEnergiaPage implements OnInit {

  public descricao:string = '';

  constructor( 
  public rs:RequisicaoService
  ){ }
  ngOnInit() {
  }

salvar(){
  const fd = new FormData();
  fd . append ('controller','gerador de energia');
  fd . append ('opp','salvar');
  fd . append ('descricao',this.descricao);


  this.rs.post(fd)
  .subscribe();
}
}


