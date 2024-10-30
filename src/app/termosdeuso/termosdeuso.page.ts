import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termosdeuso',
  templateUrl: './termosdeuso.page.html',
  styleUrls: ['./termosdeuso.page.scss'],
})
export class TermosdeusoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  go(rota:string){
    window.location.href = rota;
  }

}
