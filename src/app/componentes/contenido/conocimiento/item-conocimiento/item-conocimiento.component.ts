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
  obj = {
    "progreso": "",
    "conocimiento": "",
    "logo": "",
    "tipo": ""
  }

  @Output() idConocimiento = new EventEmitter();
  @Output() objetoEdit = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  @Input() itemConocimiento: any = "";

  constructor(private datosPorfolio: PorfolioService) {
    //this.setObj(this.itemConocimiento);
  }

  setObj(obj:any){
    this.obj = obj;
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
    this.itemConocimiento = this.obj    
    this.objetoEdit.emit(this.obj);
  }

  deleteConocimiento(){
    this.deleteItem.emit();
  }
  

}
