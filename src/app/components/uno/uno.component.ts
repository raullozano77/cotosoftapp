 import { Component } from '@angular/core';

 @Component({
  selector: 'unoComponent',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent {
  public titulo: string;
  // Input
  public nombreProducto: string;
  // Output
  public datosDelHijo;
  constructor() {
    this.titulo = 'Mis Tiendas';
  }

  verDatosDos(event) {
    /* console.log("Event: ", event); */
    this.datosDelHijo = event;
  }

}
