import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienciaLaboralComponent } from '../experiencia-laboral.component';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent extends ExperienciaLaboralComponent {

  @Input() itemExpe: any = "";

  mostrarBtnBorrar: boolean = false;


  override editarExperiencia() {
    this.itemExpe.descripcion = this.descripcion;
    this.itemExpe.imgTrabajo = this.imgTrabajo;
    this.itemExpe.inicio = this.inicio;
    this.itemExpe.fin = this.fin;
    /* this.descripcion= this.itemExpe.descripcion;
    this.imgTrabajo = this.itemExpe.imgTrabajo;
    this.inicio = this.itemExpe.inicio;
    this.fin = this.itemExpe.fin; */
    super.editarExperiencia()
  }

  buscarHerramientas(id: string): String[] {
    let listaDevolver: String[] = [];
    for (let i = 0; i < this.herramientaData.length; i++) {
      if (this.herramientaData[i].experiencia_id == id) {
        listaDevolver.push(this.herramientaData[i].nombre);
      } 
    }
    console.log("Lista Herramientasssssssssssssssssssssssssssssssssss");
    console.log(listaDevolver);

    return listaDevolver;
  }

  buscarPuestos(id: string): String[] {
    let listaDevolver: String[] = [];
    for (let i = 0; i < this.puestoData.length; i++) {
      if (this.puestoData[i].experiencia_id == id) {
        listaDevolver.push(this.puestoData[i].nombre);
      } 
    }
    console.log("Lista Puestooooooooooooooooooo");
    console.log(listaDevolver);
    
    return listaDevolver;
  }




}


