import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form_avisosComponent',
  templateUrl: './form_avisos.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class FormDatosAvisosComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Inicio';
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    console.log('Entro a ngOnIt');
    this.titulo = 'Pagina FormDatosAvisosComponent';
  }

}
