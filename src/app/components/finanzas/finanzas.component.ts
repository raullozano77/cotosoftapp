import { Pago } from './../../interfases/pago';
import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { formatDate } from "@angular/common";

export interface PagoId extends Pago {
  id: string;
}

@Component({
  selector: 'finanzasComponent',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class FinanzasComponent implements OnInit {
  public titulo: string;
  finanzas: any;
  pagoEditar: any = {
    fecha_vencimiento: '',
    tipo_pago: '',
    referencia: '',
    categoria: '',
    cantidad: '',
    estado: '',
    actualizadopor: '',
  };
  nuevoItem: boolean = false;

  constructor(
    private _conexion: ConexionService,
    private localeService: BsLocaleService
  ) {
    this.titulo = 'Finanzas';
    this._conexion.listaPagos().subscribe(
      data => {
        this.finanzas = data
        //console.log(this.finanzas)
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
    //this.pagoEditar.uid = this._authS.usuario.uid;
    this.pagoEditar.actualizadopor = 'RAUL';
    this.pagoEditar.tipo_pago = '';
    this.pagoEditar.referencia = '';
    this.pagoEditar.estado = 'Vigente';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.pagoEditar.fecha_vencimiento );
    let str_fecha = formatDate(str_date, format, locale);
    this.pagoEditar.fecha_vencimiento = str_fecha;

    //this.pagoEditar.fecha_vencimiento = (new Date()).toString();

    this._conexion.addPago(this.pagoEditar);
  }

  editarItem() {
    this.pagoEditar.actualizadopor = 'RAUL';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.pagoEditar.fecha_vencimiento );
    let str_fecha = formatDate(str_date, format, locale);
    this.pagoEditar.fecha_vencimiento = str_fecha;
    this.pagoEditar.fecha_vencimiento = (new Date()).toString();

    this._conexion.editPago(this.pagoEditar);
  }

  nuevo() {
    this.nuevoItem = true;
    this.pagoEditar.fecha_vencimiento = '';
    this.pagoEditar.tipo_pago = '';
    this.pagoEditar.referencia = '';
    this.pagoEditar.categoria = '';
    this.pagoEditar.cantidad = '';
    this.pagoEditar.estado = '';
    this.pagoEditar.actualizadopor = '';
  }
  editar(pago: any) {
    this.nuevoItem = false;
    this.pagoEditar = pago;
    //console.log("this.pagoEditar: ", this.pagoEditar);
  }

  cancelaPago(pago: any) {
    this.pagoEditar = pago;
    this.pagoEditar.estado = 'Cancelado';
    this._conexion.editPago(this.pagoEditar);
  }

  confirmarPago(pago: any) {
    this.pagoEditar = pago;
    this.pagoEditar.estado = 'Confirmado';
    this._conexion.editPago(this.pagoEditar);
  }

  cancelarOperacion(){
    this.nuevoItem = false;
  }
  eliminar(pago: any) {
    //console.log('Estoy en eliminar');
    this._conexion.deletePago(pago);
  }

}
