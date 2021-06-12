import { Component, VERSION } from '@angular/core';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


}

