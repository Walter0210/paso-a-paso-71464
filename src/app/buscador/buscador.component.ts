import { Component, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  expresionFiltro  = ''
  resultado: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getSearch():void {
    this.resultado = true;
  }
}
