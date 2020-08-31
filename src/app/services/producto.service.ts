import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {
  public nombre_producto = 'Cafetera';

  public catalogo_productos = [
    'Lavadora Blanca',
    'Licuadora de Cristal',
    'Cafetera Negra'
  ];

  prueba(nombre_producto: string) {
    // Instrucciones a ejecutar
    return nombre_producto;
  }

  addProducto(nombre_producto: string): Array<string> {
    this.catalogo_productos.push(nombre_producto);
    return this.catalogo_productos;
  }

  deleteProducto(index: number): Array<string> {
    this.catalogo_productos.splice(index, 1);
    return this.catalogo_productos;
  }

  getProducto(): Array<string> {
    return this.catalogo_productos;
  }

}

/* Servicio Básico
import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {
  public nombre_producto = 'Cafetera';

  prueba(){
    // Instrucciones a ejecutar
    return this.nombre_producto;
  }
}
*/
