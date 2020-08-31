import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footerComponent',
  templateUrl: './footer.component.html'
}

) export class FooterComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Footer';
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    console.log('Entro a ngOnIt');
    this.titulo = 'Pagina Footer';
  }

}
