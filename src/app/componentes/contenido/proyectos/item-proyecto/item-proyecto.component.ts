import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent{

  @Input() itemProyecto: any = "";
  @Output() idProyectoHijo = new EventEmitter();
  @Output() objEdit = new EventEmitter();
  @Output() objDelete = new EventEmitter();

  titulo: String = "";
  detalle: String = "";
  descripcion: String = "";

  capturarId(id:String){
    this.idProyectoHijo.emit(id)
  }

  editarProyecto(){
    let obj = {"descripcion":this.descripcion, "titulo":this.titulo, "detalle":this.detalle}
    this.objEdit.emit(obj);
  }

  deleteProyecto(){
    this.objDelete.emit();
  }
}
