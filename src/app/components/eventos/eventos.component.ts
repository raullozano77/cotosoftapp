import { Evento } from './../../interfases/evento';
import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { setTheme } from 'ngx-bootstrap/utils';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { formatDate } from "@angular/common";

export interface EventoId extends Evento {
  id: string;
}

@Component({
  selector: 'eventosComponent',
  templateUrl: './eventos.component.html',
  styleUrls: ['./../../../assets/css/secciones.css']
}

) export class EventosComponent implements OnInit {
  // Checking
  cosntructor() {
    setTheme('bs4');
  }
  locale = 'eW';
  locales = listLocales();
  // EndChecking

  public titulo: string;
  eventos: any;
  eventoEditar: any = {
    evento: '',
    asunto:'',
    estado: '',
    fecha: '',
    publicadopor: ''
  };
  nuevoItem: boolean = false;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(
    private _conexion: ConexionService,
    private localeService: BsLocaleService
  ) {
    this.titulo = 'Eventos';
    this._conexion.listaEventos().subscribe(
      data => {
        this.eventos = data
        //console.log(this.eventos)
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
    //this.eventoEditar.uid = this._authS.usuario.uid;
    this.eventoEditar.publicadopor = 'RAUL';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.eventoEditar.fecha );
    let str_fecha = formatDate(str_date, format, locale);
    this.eventoEditar.fecha = str_fecha;
    //this.eventoEditar.fecha = this.eventoEditar.fecha.format('YYYY-MM-DD');
    //this.eventoEditar.fecha = (new Date()).toString();

    this.eventoEditar.estado='Publicado';
    this._conexion.addEvento(this.eventoEditar);
  }

  editarItem() {
    this.eventoEditar.publicadopor = 'RAUL';

    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    var str_date = new Date(this.eventoEditar.fecha );
    let str_fecha = formatDate(str_date, format, locale);
    this.eventoEditar.fecha = str_fecha;
    //this.eventoEditar.fecha = this.eventoEditar.fecha.format('YYYY-MM-DD');
    //this.eventoEditar.fecha = (new Date()).toString();
    //this.eventoEditar.fecha = (new Date()).toString();
    //console.log(this.eventoEditar.fecha);

    this._conexion.editEvento(this.eventoEditar);
  }

  nuevo() {
    this.nuevoItem = true;
    //console.log(this.nuevoItem);
    this.eventoEditar.evento = '';
    this.eventoEditar.asunto = '';
    this.eventoEditar.fecha = '';
    this.eventoEditar.estado = '';
    this.eventoEditar.publicadopor = '';
    //console.log(this.eventoEditar);
  }
  editar(areaComun: any) {
    this.nuevoItem = false;
    this.eventoEditar = areaComun;
    //console.log("this.eventoEditar: ", this.eventoEditar);
  }

  cancelaEvento(evento: any) {
    this.eventoEditar = evento;
    this.eventoEditar.estado = 'Cancelado';
    this._conexion.editEvento(this.eventoEditar);
  }

  cancelarOperacion(){
    this.nuevoItem = false;
  }

  eliminar(evento: any) {
    //console.log('Estoy en eliminar');
    this._conexion.deleteEvento(evento);
  }


  applyLocale(pop: any) {
    this.localeService.use(this.locale);
  }
}
