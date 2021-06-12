;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListaArticulosComponent, ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
