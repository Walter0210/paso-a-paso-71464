import { Component, OnInit, } from '@angular/core';
import { BuscadorService } from '../services/buscador.service';
import { ArchivoService } from '../services/archivo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { iDocumento } from '../Modelos/iDocumento'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  busqueda: string = ''
  resultado: boolean = false;
  listDoc: any = [];
  bodyDocClick: any;
  nombreDocClick: string = '';
  fileUrl: SafeResourceUrl = '';
  idDocClick: string = '';
  

  constructor(
    private buscador: BuscadorService,
    private archivo: ArchivoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  getSearch(): void {
    this.resultado = true;
    this.buscador.get(this.busqueda).subscribe((res) => { this.listDoc = res })
  }

  getTextoArchivo(idArchivo:number):void {
    this.archivo.getArchivo(idArchivo).subscribe((res) => { this.bodyDocClick = res; console.log(this.bodyDocClick) })
    
  }

  loadModal(nombreDoc:string, preview:string):void {
    this.nombreDocClick = nombreDoc;
    this.bodyDocClick = preview;
  }
}
