import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactoComponent',
  templateUrl: './contacto.component.html',
  /* styleUrls: ['./contacto.component.css'] */
}

) export class ContactoComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Pagina de contacto';
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    // Bloque de instrucciones

  }

}
