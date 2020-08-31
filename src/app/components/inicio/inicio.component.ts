import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'inicioComponent',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
}

) export class InicioComponent implements OnInit {
  public titulo: string;
  morosos: any;
  morosoEditar: any = {
    condomino: '',
    casa: '',
    no_pagos: '',
    deuda: ''
  };
  nuevoItem: boolean = false;

  constructor(
    private _conexion: ConexionService,
    public _authS: AuthService
  ) {
    this.titulo = 'Inicio';
    this._conexion.listaMorosos().subscribe(
      data => {
        this.morosos = data
      },
      err => console.log(err)
    );
  }
    // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    //console.log(this.nuevoItem);
  }


}
