import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ControlContainer } from '@angular/forms';


@Component({
  selector: 'productosComponent',
  templateUrl: './productos.component.html',
}

) export class ProductosComponent implements OnInit {
  public titulo: string;
  public users:any;

  /* constructor( private _http: HttpClient, private _router: Router ) { */
    constructor( private _http: HttpClient ) {
    this.titulo = 'Pagina de productos';
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      data => {
        console.log(data);
        console.log();
        this.users = data;
        console.log("Usuarios: ", this.users);
      }
    )
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    // Bloque de instrucciones

  }

}
