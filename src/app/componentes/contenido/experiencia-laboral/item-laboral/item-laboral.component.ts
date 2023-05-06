import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent {

  @Input() itemExpe: any = "";

  descripcion: String = "";
  imgTrabajo: String = "";
  inicio: String = "";
  fin: String = "";
  herra: String = "";
  puesto: String = "";

  puestos: String[] = [];
  herramientas: String[] = [];
  mostrarBtnBorrar: boolean = false;

  obj: any = {
    "descripcion": "",
    "imgTrabajo": "",
    "inicio": "",
    "fin": ""
  };

  constructor() {

  }

  onDelete() {
    console.log("DELETE");

  }

  agregarHerramienta() {
    this.herramientas.push(this.herra)
  }

  borrarHerramienta(item: String) {
    let herramienta = this.buscarHerramienta(item);
    delete this.herramientas[herramienta];
  }

  buscarHerramienta(item: String): any {
    let itemBuscado = null;
    let i = 0;
    while (i < this.herramientas.length && itemBuscado == null) {
      if (this.herramientas[i] == item) {
        itemBuscado = this.herramientas[i];
      } else {
        i++;
      }
    }
    return i;
  }

  agregarPuesto() {
    this.puestos.push(this.puesto)
  }

  borrarPuesto(item: String) {
    let puesto = this.buscarPuesto(item);
    delete this.puestos[puesto];
  }

  buscarPuesto(item: String): any {
    let itemBuscado = null;
    let i = 0;
    while (i < this.puestos.length && itemBuscado == null) {
      if (this.puestos[i] == item) {
        itemBuscado = this.puestos[i];
      } else {
        i++;
      }
    }
    return i;
  }









}
