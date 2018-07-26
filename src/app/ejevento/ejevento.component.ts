import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejevento',
  templateUrl: './ejevento.component.html',
  styleUrls: ['./ejevento.component.css']
})
export class EjeventoComponent implements OnInit {
  texto = 'Originalmente el texto se carga asi.';
  constructor() { }
  modTexto() {
    this.texto = 'Al pulsar el botón el texto se muestra así.';
  }
  ngOnInit() {
  }

}
