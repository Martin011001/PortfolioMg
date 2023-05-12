import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienciaLaboralComponent } from '../experiencia-laboral.component';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent extends ExperienciaLaboralComponent {

  @Input() itemExpe: any = "";
  @Output() idExpe = new EventEmitter();

  mostrarBtnBorrar: boolean = false;


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

  capturarIdHijo(id: Number) {
    console.log(id);
    
    this.idExpe.emit(id)
  }


}


