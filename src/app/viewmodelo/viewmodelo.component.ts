import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  alumno = new Alumno(1, 'Miguel', 'Ferral');
  constructor() { }

  ngOnInit() {
  }

}
