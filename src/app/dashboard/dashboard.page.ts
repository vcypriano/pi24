import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public dataPie: any;
  public dataBar: any;

  constructor() { }

  ngOnInit() {
    // Dados para o gráfico de Pizza (Pie)
    this.dataPie = {
      labels: ['Solar', 'Eólica', 'Hidrelétrica', 'Biomassa', 'Geotérmica'],
      datasets: [
        {
          data: [120, 80, 60, 40, 30], // Valores fictícios para a produção de energia
          backgroundColor: ['#ffc107', '#9c27b0', '#42a5f5', '#4caf50', '#ff5722'],
          hoverBackgroundColor: ['#ffca28', '#ba68c8', '#64b5f6', '#66bb6a', '#ff7043']
        }
      ]
    };

    // Dados para o gráfico de Barras (Bar)
    this.dataBar = {
      labels: ['Solar', 'Eólica', 'Hidrelétrica', 'Biomassa', 'Geotérmica'],
      datasets: [
        {
          label: 'Produção kW',
          backgroundColor: '#42a5f5',
          data: [120, 80, 60, 40, 30] // Os mesmos valores usados no gráfico de Pizza
        }
      ]
    };
  }

}
