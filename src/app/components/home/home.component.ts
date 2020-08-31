import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductoService]
}

) export class HomeComponent implements OnInit {
  public titulo: string;
  public catalogo_productos: Array<String>;
  public producto_a_guardar: string;

  constructor(
    private _productoService: ProductoService
  ) {
    this.titulo = 'Home';
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    this.titulo = 'Pagina HOME';
    console.log(this._productoService.prueba("Sofa Cama"));
    this.catalogo_productos = this._productoService.getProducto();
    console.log(this.catalogo_productos);
  }


  guardarProducto() {
    this._productoService.addProducto(this.producto_a_guardar);
  }

   eliminarProducto(index: number){
     /* alert(index); */
    this._productoService.deleteProducto(index);
  }
}
