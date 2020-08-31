import { Producto } from './producto';
import { Component } from '@angular/core';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tresComponent',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent {
  public titulo: string;
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.titulo = 'Tienda';
    this.producto = new Producto('Licuadora', 'Osterizer', 650, true);
    this.productos = [
      new Producto('Licuadora', 'Osterizer', 650, true),
      new Producto('Cafetera', 'Osterizer', 350, true),
      new Producto('Pantalla', 'Samsung', 11500, false),
      new Producto('Batidora', 'Braun', 870, true),
      new Producto('Sarten', 'T-Fal', 1200, true)
    ];
  }




}
