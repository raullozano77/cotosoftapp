import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { CosaPerdida } from '../../interfases/cosasPerdidas';

export interface CosaPerdidaId extends CosaPerdida {
  id: string;
}

@Component({
  selector: 'cosasperdidasComponent',
  templateUrl: './cosasperdidas.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class CosasPerdidasComponent implements OnInit {
  public titulo: string;
  cosasPerdidas: any;
  cosaPerdidaEditar: any = {
    reporte: '',
    fecha: '',
    publicadopor: ''
  };
  nuevoItem: boolean = false;

  constructor(
    private _conexion: ConexionService
  ) {
    this.titulo = 'Cosas Perdidas';
    this._conexion.listaCosasPerdidas().subscribe(
      data => {
        this.cosasPerdidas = data
        ////console.log(this.cosasPerdidas)
      },
      err => console.log(err)
    );
  }
    // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    ////console.log(this.nuevoItem);
  }

  onSubmit() {
    /*     if (this.myform.valid) {
          console.log("Form Submitted!");
        } */
  }

  agregarItem() {
    //this.cosaPerdidaEditar.uid = this._authS.usuario.uid;
    this.cosaPerdidaEditar.publicadopor = 'RAUL';
    this.cosaPerdidaEditar.fecha = (new Date()).toString();
    //console.log(this.cosaPerdidaEditar.fecha);

    this._conexion.addCosaPerdida(this.cosaPerdidaEditar);
  }

  editarItem() {
    this.cosaPerdidaEditar.publicadopor = 'RAUL';
    this.cosaPerdidaEditar.fecha = (new Date()).toString();
    //console.log(this.cosaPerdidaEditar.fecha);
    this._conexion.editCosaPerdida(this.cosaPerdidaEditar);
  }

  nuevo() {
    this.nuevoItem = true;
    //console.log(this.nuevoItem);
    this.cosaPerdidaEditar.reporte = '';
    this.cosaPerdidaEditar.fecha = '';
    this.cosaPerdidaEditar.publicadopor = '';
    //console.log(this.cosaPerdidaEditar);
  }
  editar(cosaPerdida: any) {
    this.nuevoItem = false;
    //console.log(this.nuevoItem);
    //console.log(this.cosaPerdidaEditar);
    this.cosaPerdidaEditar = cosaPerdida;
    //console.log("this.cosaPerdidaEditar: ", this.cosaPerdidaEditar);
  }

  cancelarOperacion(){
    this.nuevoItem = false;
  }
  eliminar(cosaPerdida: any) {
    //console.log('Estoy en eliminar');
    this._conexion.deleteCosaPerdida(cosaPerdida);
  }

}
