import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganhos',
  templateUrl: './ganhos.page.html',
  styleUrls: ['./ganhos.page.scss'],
})
export class GanhosPage implements OnInit {
  public solicitacoes: Array<any> = []; // Lista de solicitações
  public isModalOpen: boolean = false; // Controle do estado do modal
  public solicitarId: number | null = null; // ID da solicitação a ser cancelada

  constructor(
    public requisicao_service: RequisicaoService,
    public router: Router,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  editar(id: number) {
    this.router.navigateByUrl('/solicitar/' + id); // Rota para editar a solicitação
  }

  confirmarExclusao(id: number) {
    this.solicitarId = id; // Armazena o ID da solicitação a ser cancelada
    this.isModalOpen = true; // Abre o modal de confirmação
  }

  excluir(id: number) {
    this.requisicao_service.get({
      controller: 'solicitar-excluir', // Controlador para exclusão de solicitações
      id: id
    }).subscribe(
      (_res: any) => {
        this.listar(); // Atualiza a lista após exclusão
        this.fecharModal(); // Fecha o modal
      }
    );
  }

  fecharModal() {
    this.isModalOpen = false; // Fecha o modal
    this.solicitarId = null; // Limpa o ID armazenado
  }

  ngOnInit() {
    this.listar(); // Carrega as solicitações ao iniciar o componente
  }

  async listar() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando solicitações, aguarde.' // Mensagem de carregamento
    });
    loading.present();

    this.requisicao_service.get({
      controller: 'listarsolicitar' // Controlador para listar solicitações
    }).subscribe(
      (_res: any) => {
        loading.dismiss(); // Remove a mensagem de carregamento
        this.solicitacoes = _res; // Armazena as solicitações retornadas
      }
    );
  }

  go(rota:string) {
    window.location.href = rota; // Redireciona para a rota especificada
  }
}
