import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'departamentosComponent',
  templateUrl: './departamentos.component.html'
}

) export class DepartamentosComponent implements OnInit {
  public titulo: string;
  public users: any;

  constructor(
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Pagina de departamentos';
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        console.log(data);
        console.log();
        this.users = data;
        console.log('Usuarios: ', this.users);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err.message);
      },
      () => { console.log('Petición Finalizo'); }
    );

  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    // Bloque de instrucciones

  }

  redirigir(id: string) {
    this._router.navigate(['/usuarios/',id]);
  }

}
