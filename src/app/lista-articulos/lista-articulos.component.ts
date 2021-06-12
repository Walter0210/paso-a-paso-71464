import { Component, OnInit, VERSION} from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'Lista de Articulos'; //le pongo asi para acostumbrarme a tipar los datos.
  constructor() {}
  
  versionAngular() :string {
    return VERSION.full;
  }

  articulos: any[] = [
       {
           imagen: '/assets/art01.jpg',
           id: 2,
           descripcion: 'Articulo X',
           codigo: 'xsd-143',
           cantidad: 139,
           precio: 1221.40,
           puntaje: 4
       },
       {
           id: 5,
           descripcion: 'Articulo Y',
           codigo: 'dlg-912',
           cantidad: 336,
           precio: 400.99,
           puntaje: 3
       }       
   ];

  ngOnInit() {}
}
