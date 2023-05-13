import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-item-conocimiento',
  templateUrl: './item-conocimiento.component.html',
  styleUrls: ['./item-conocimiento.component.css']
})
export class ItemConocimientoComponent {

  color: String = "";

  idCapturado: String = "";

  progreso: string = "50";
  conocimiento: string = "";
  logo: string = "";
  tipo: string = "";



  @Output() idConocimiento = new EventEmitter();
  @Output() objetoEdit = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  @Input() itemConocimiento: any = "";

  constructor(private datosPorfolio: PorfolioService) {
    this.setVariables()
  }

  private setVariables() {
    this.progreso = this.itemConocimiento.progreso;
    this.conocimiento = this.itemConocimiento.conocimiento;
    this.logo = this.itemConocimiento.logo;
    this.tipo = this.itemConocimiento.tipo;
  }


  colorProgreso(): String {
    if (this.itemConocimiento.progreso <= 25) {
      this.color = "progress-bar bg-danger"
    } else if (this.itemConocimiento.progreso > 25 && this.itemConocimiento.progreso <= 50) {
      this.color = "progress-bar bg-info text-dark"
    } else if (this.itemConocimiento.progreso > 50 && this.itemConocimiento.progreso <= 75) {
      this.color = "progress-bar bg-warning text-dark"
    } else {
      this.color = "progress-bar bg-success"
    }
    return this.color;
  }

  capturarId(id: String) {
    this.idCapturado = id;
    this.idConocimiento.emit(id);
  }

  editarConocimientoPut() {
    let obj = { "progreso": this.progreso, "conocimiento": this.conocimiento, "logo": this.logo, "tipo": this.tipo }
    this.objetoEdit.emit(obj);
  }

  deleteConocimiento() {
    this.deleteItem.emit();
  }




}
