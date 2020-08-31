import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dosComponent",
  templateUrl: "./dos.component.html",
  styleUrls: ["./dos.component.css"]
})
export class DosComponent {
  @Input() nombre: string;
  precio: number;
  @Input() marca: string;
  status: boolean;
  categoria: string;
  //Output
  @Output() datosPasar = new EventEmitter();

  constructor() {
    this.nombre = "Licuadora";
    this.precio = 550;
    this.marca = "Oster";
    this.status = true;
    this.categoria = "Electrodomésticos";
  }

  emitirEvento(event) {
    this.datosPasar.emit({
      nombre: this.nombre,
      precio: this.precio,
      marca: this.marca,
      status: this.status,
      categoria:this.categoria
    })

  }

}
