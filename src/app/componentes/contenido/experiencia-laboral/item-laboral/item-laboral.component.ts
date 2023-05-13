import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent {

  @Input() itemExpe: any = "";
  @Input() herramientaData: any = "";
  @Input() puestoData: any = "";

  @Output() deleteExperiencia = new EventEmitter();
  @Output() editExperiencia = new EventEmitter();
  @Output() idHijo = new EventEmitter();

  mostrarBtnBorrar: boolean = false;

  descripcion: String = "";
  imgTrabajo: String = "";
  inicio: String = "";
  fin: String = "";

  herraTexto: String = "";
  puestoTexto: String = "";

  puestos: String[] = [];
  herramientas: String[] = [];


  buscarHerramientas(id: string): String[] {
    let listaDevolver: String[] = [];
    for (let i = 0; i < this.herramientaData.length; i++) {
      if (this.herramientaData[i].experiencia_id == id) {
        listaDevolver.push(this.herramientaData[i].nombre);
      }
    }
    return listaDevolver;
  }

  buscarPuestos(id: string): String[] {
    let listaDevolver: String[] = [];
    for (let i = 0; i < this.puestoData.length; i++) {
      if (this.puestoData[i].experiencia_id == id) {
        listaDevolver.push(this.puestoData[i].nombre);
      }
    }
    return listaDevolver;
  }

  capturarId(id: String) {
    this.idHijo.emit(id);
  }

  deleteExperienciaHijo() {
    this.deleteExperiencia.emit()
  }

  editExperienciaHijo() {
    let herramientas = this.herramientas
    let puestos = this.puestos;
    let objEdit = { "descripcion": this.descripcion, "imgTrabajo": this.imgTrabajo, "inicio": this.inicio, "fin": this.fin };
    this.editExperiencia.emit({objEdit, herramientas, puestos})
  }


//--------Logica add elemnts a listas------------

agregarHerramienta() {
  if (this.herraTexto != "") this.herramientas.push(this.herraTexto);
  this.herraTexto = "";
}
borrarHerramienta() {
  this.herramientas.pop();
}
agregarPuesto() {
  if (this.puestoTexto != "") this.puestos.push(this.puestoTexto);
  this.puestoTexto = "";
}
borrarPuesto() {
  this.puestos.pop();
}

//--------Logica add elemnts a listas------------













}


