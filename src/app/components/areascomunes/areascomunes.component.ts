import { AreaComun } from './../../interfases/areacomun';
import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { formatDate } from "@angular/common";

import { PaginationModule } from 'ngx-bootstrap/pagination';

export interface AreaComunId extends AreaComun {
  id: string;
}

@Component({
  selector: 'areascomunesComponent',
  templateUrl: './areascomunes.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class AreasComunesComponent implements OnInit {
  public titulo: string;
  areasComunes: any;
  areaComunEditar: any = {
    area: '',
    estado: '',
    fecha: '',
    publicadopor: ''
  };
  nuevoItem: boolean = false;

  constructor(
    private _conexion: ConexionService,
    private localeService: BsLocaleService
  ) {
    this.titulo = 'Areas comunes';
    this._conexion.listaAreasComunes().subscribe(
      data => {
        this.areasComunes = data
        //console.log(this.areasComunes)
      },
      err => console.log(err)
    );
  }
    // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    //console.log(this.nuevoItem);
  }

  onSubmit() {
    /*     if (this.myform.valid) {
          console.log("Form Submitted!");
        } */
  }

  agregarItem() {
    //this.areaComunEditar.uid = this._authS.usuario.uid;
    this.areaComunEditar.publicadopor = 'RAUL';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.areaComunEditar.fecha );
    let str_fecha = formatDate(str_date, format, locale);
    this.areaComunEditar.fecha = str_fecha;
    //this.areaComunEditar.fecha = (new Date()).toString();

    this.areaComunEditar.estado='Por Autorizar';
    //console.log(this.areaComunEditar.fecha);
    this._conexion.addAreaComun(this.areaComunEditar);
  }

  editarItem() {
    this.areaComunEditar.publicadopor = 'RAUL';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.areaComunEditar.fecha );
    let str_fecha = formatDate(str_date, format, locale);
    this.areaComunEditar.fecha = str_fecha;
    //this.areaComunEditar.fecha = (new Date()).toString();

    //console.log(this.areaComunEditar.fecha);
    this._conexion.editAreaComun(this.areaComunEditar);
  }

  nuevo() {
    this.nuevoItem = true;
    //console.log(this.nuevoItem);
    this.areaComunEditar.area = '';
    this.areaComunEditar.fecha = '';
    this.areaComunEditar.estado = '';
    this.areaComunEditar.publicadopor = '';
    //console.log(this.areaComunEditar);
  }
  editar(areaComun: any) {
    this.nuevoItem = false;
    this.areaComunEditar = areaComun;
    //console.log("this.areaComunEditar: ", this.areaComunEditar);
  }

  cancelaReservacion(areaComun: any) {
    this.areaComunEditar = areaComun;
    this.areaComunEditar.estado = 'Cancelada';
    this._conexion.editAreaComun(this.areaComunEditar);
  }


  cancelarOperacion(){
    this.nuevoItem = false;
  }
  eliminar(areaComun: any) {
    //console.log('Estoy en eliminar');
    this._conexion.deleteAreaComun(areaComun);
  }

}
