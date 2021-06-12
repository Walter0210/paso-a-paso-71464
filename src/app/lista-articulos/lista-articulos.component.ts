import { Component, OnInit, VERSION} from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'Lista de Articulos'; //le pongo asi para acostumbrarme a tipar los datos.
  mostrarImagen: boolean = false;
  constructor() {}
  
  versionAngular() :string {
    return VERSION.full;
  }

   mostrarEsconderImagen(): void{
       this.mostrarImagen = !this.mostrarImagen;
   }


  articulos: any[] = [
       {
           imagen: 'https://cdn.jsdelivr.net/gh/Walter0210/paso-a-paso-71464@master/src/assets/art01.jpg',
           id: 2,
           descripcion: 'Articulo X',
           codigo: 'xsd-143',
           cantidad: 139,
           precio: 1221.40,
           puntaje: 4
       },
       {
           imagen: '/assets/art02.jpg',
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
