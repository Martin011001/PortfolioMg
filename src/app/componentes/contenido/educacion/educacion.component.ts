import { Component, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  estudio: any;
  miPorfolio: any;

  descripcion: String = "";
  urlInstitucion: String = "";
  inicio: String = "";
  fin: String = "";
  carrera: String = "";
  titulo: String = "";

  obj: any = {
    "descripcion": this.descripcion,
    "urlInstitucion": this.urlInstitucion,
    "inicio": this.inicio,
    "fin": this.fin
  }

  botonEdit: boolean = false;
  idEdu: String = "";

  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data)
      this.miPorfolio = data.contenido.tarjeta3;
      this.estudio = data.contenido.tarjeta3.estudios;
    });
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  capturarId(id: String) {
    this.idEdu = id;
  }

  agregarEducacion(){
    console.log(this.obj);
    
    this.datosPorfolio.postCreacion("educacion/crear", this.obj).subscribe(() => {
      console.log("ok");
    });
    window.location.reload();
  }

  deleteEducacion() {
    this.datosPorfolio.deleteContenido("educacion/borrar/" + this.idEdu).subscribe(() => {
      console.log("ok");
    });
    window.location.reload();
  }

  editarEducacion() {
    let eduBuscada: any = this.buscarConocimiento();

    if (eduBuscada != null) {
      if (this.descripcion != "") eduBuscada.descripcion = this.descripcion;
      if (this.urlInstitucion != "") eduBuscada.urlInstitucion = this.urlInstitucion;
      if (this.inicio != "") eduBuscada.inicio = this.inicio;
      if (this.fin != "") eduBuscada.fin = this.fin;

      this.datosPorfolio.putEdicion("educacion/editar/" + eduBuscada.id, this.obj).subscribe(() => {
        console.log("ok");
      });
    }
  }

  private buscarConocimiento(): any {
    let EduBuscada: any;
    let i = 0;
    while (i < this.estudio.length && EduBuscada == null) {
      if (this.estudio[i].id == this.idEdu) {
        EduBuscada = this.estudio[i];
      } else {
        i++;
      }
    }
    return EduBuscada;
  }






}
