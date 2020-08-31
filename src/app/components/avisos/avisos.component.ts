import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { Aviso } from '../../interfases/aviso';

export interface AvisoId extends Aviso {
  id: string;
}

@Component({
  selector: 'avisosComponent',
  templateUrl: './avisos.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class AvisosComponent implements OnInit {
  public titulo: string;
  avisos: any;
  avisoEditar: any = {
    aviso: '',
    fecha: '',
    publicadopor: ''
  };
  nuevoItem: boolean = false;

  constructor(
    private _conexion: ConexionService
  ) {
    this.titulo = 'Avisos';
    this._conexion.listaAvisos().subscribe(
      data => {
        this.avisos = data
        //console.log(this.avisos)
      },
      err => console.log(err)
    );
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    //console.log('Entro a ngOnIt en Avisos');
    //this.titulo = 'Pagina avisos';
    //console.log(this.nuevoItem);
  }

  onSubmit() {
    /*     if (this.myform.valid) {
          console.log("Form Submitted!");
        } */
  }

  agregarProducto() {
    //this.avisoEditar.uid = this._authS.usuario.uid;
    this.avisoEditar.publicadopor = 'RAUL';
    this.avisoEditar.fecha = (new Date()).toString();
    //console.log(this.avisoEditar.fecha);

    this._conexion.addAviso(this.avisoEditar);
  }

  editarProducto() {
    this.avisoEditar.publicadopor = 'RAUL';
    this.avisoEditar.fecha = (new Date()).toString();
    //console.log(this.avisoEditar.fecha);
    this._conexion.editAviso(this.avisoEditar);
  }

  nuevo() {
    this.nuevoItem = true;
    //console.log(this.nuevoItem);
    this.avisoEditar.aviso = '';
    this.avisoEditar.fecha = '';
    this.avisoEditar.publicadopor = '';
    //console.log(this.avisoEditar);
  }
  editar(aviso: any) {
    this.nuevoItem = false;
    //console.log(this.nuevoItem);
    //console.log(this.avisoEditar);
    this.avisoEditar = aviso;
    //console.log("this.avisoEditar: ", this.avisoEditar);
  }

  cancelarOperacion(){
    this.nuevoItem = false;
  }
  eliminar(aviso: any) {
    //console.log('Estoy en eliminar');
    this._conexion.deleteAviso(aviso);
  }

}
