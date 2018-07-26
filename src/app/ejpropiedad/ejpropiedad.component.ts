import { Component, OnInit } from '@angular/core';
import { text } from '../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-ejpropiedad',
  templateUrl: './ejpropiedad.component.html',
  styleUrls: ['./ejpropiedad.component.css']
})
export class EjpropiedadComponent implements OnInit {
  texto = 'Escribe tu nombre';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.texto = 'Por favor';
    }, 3000);
  }

}
