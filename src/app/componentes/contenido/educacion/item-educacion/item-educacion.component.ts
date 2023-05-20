import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent {

  @Input() itemEdu: any = "";
  @Input() admin: any = "";

  @Output() idEducacionHijo = new EventEmitter();
  @Output() objEdit = new EventEmitter();
  @Output() objDelete = new EventEmitter();
  @Output() loadingSpinner = new EventEmitter();

  descripcion: String = "";
  imgInstitucion: String = "";
  inicio: String = "";
  fin: String = "";
  carrera: String = "";
  titulo: String = "";

  capturarId(id: String) {
    this.idEducacionHijo.emit(id)
  }

  editarEducacion() {
    let obj = {
      "descripcion": this.descripcion, "titulo": this.titulo, "carrera": this.carrera,
      "imgInstitucion": this.imgInstitucion, "inicio": this.inicio, "fin": this.fin
    }
    this.objEdit.emit(obj);
  }

  deleteEducacion() {
    this.objDelete.emit();
  }

}
