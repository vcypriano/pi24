import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solicitarenergia',
  templateUrl: './solicitarenergia.page.html',
  styleUrls: ['./solicitarenergia.page.scss'],
})
export class SolicitarenergiaPage implements OnInit {

  public id: number = 0;

  public destinatario: string = '';
  public numero: string = '';
  public estado: string = '';
  public cidade: string = '';
  public rua: string = '';
  public bairro: string = '';
  public quantidade: string = '';


  // Campo para Tipo de Energia
  public tipoEnergia: string = '';

  public mensagemErro: string = '';

  constructor(
    public rs: RequisicaoService,
    private activated_router: ActivatedRoute,
    private router: Router
  ) {
    this.activated_router.params.subscribe((params: any) => {
      this.id = params.id;
      if (this.id != 0 && this.id != null) {
        this.rs
          .get({
            controller: 'solicitar-get',
            id: this.id,
          })
          .subscribe((_dados: any) => {
            this.destinatario = _dados.nome; // Substituí "nome" por "destinatario"
            this.numero = _dados.numero;
            this.estado = _dados.estado;
            this.quantidade = _dados.quantidade;
            this.cidade = _dados.cidade;
            this.rua = _dados.rua;
            this.bairro = _dados.bairro;
            this.tipoEnergia = _dados.tipoEnergia; // Novo campo adicionado
          });
      }
    });
  }

  ngOnInit() {}

  salvar() {
    // Validações
    if (
      !this.destinatario || // Substituí "nome" por "destinatario"
      !this.numero ||
      !this.estado ||
      !this.cidade ||
      !this.quantidade ||
      !this.bairro ||
      !this.rua ||
      !this.tipoEnergia // Verifica se o tipo de energia foi selecionado
    ) {
      this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.mensagemErro = ''; // Limpa a mensagem de erro se tudo estiver correto

    const fd = new FormData();
    fd.append('controller', 'solicitar');
    fd.append('op', 'salvar');
    fd.append('id', String(this.id));
    fd.append('destinatario', this.destinatario); // Substituí "nome" por "destinatario"
    fd.append('numero', this.numero);
    fd.append('estado', this.estado);
    fd.append('cidade', this.cidade);
    fd.append('rua', this.rua);
    fd.append('quantidade', this.quantidade);
    fd.append('bairro', this.bairro);
    fd.append('tipoEnergia', this.tipoEnergia); // Novo campo adicionado

    this.rs.post(fd).subscribe(() => {
      location.href = '/ganhos';
    });
  }

  go(rota: string) {
    window.location.href = rota;
  }
}
