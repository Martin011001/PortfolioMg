import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienciaLaboralComponent } from '../experiencia-laboral.component';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent extends ExperienciaLaboralComponent{
  
  @Input() itemExpe: any = "";

  mostrarBtnBorrar: boolean = false;


  override editarExperiencia(){
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


}


