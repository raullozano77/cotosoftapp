import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//Necesario para Pasar parametros por URL
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/users.service';
import { User } from './usuarios';

@Component({
  selector: 'usuariosComponent',
  templateUrl: './usuarios.component.html'
}

) export class UsuariosComponent implements OnInit {
  public titulo: string;
  public parametro;
  public user: User;

  constructor(
    //Inyectar valor al servicio
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Pagina de usuarios';
    console.log(this.titulo);

  }

  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit(
  ) {
    // Bloque de instrucciones para recoger todos los valores de la URL
    this._route.params.forEach((params: Params) => {
      this.parametro = params['id']
    })
    console.log('IdParam: ', this.parametro);
    this.getUser(this.parametro)

  }

  getUser(userId: string) {
    this._userService.getUser(userId).subscribe(
      userFromApi => {
        console.log(userFromApi);
        this.user = userFromApi;
        (err: any) => {
          console.log(err);
        }
      }
    );
  }

}
