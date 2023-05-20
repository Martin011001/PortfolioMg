import { Component } from '@angular/core';
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
  imgInstitucion: String = "";
  inicio: String = "";
  fin: String = "";
  carrera: String = "";
  titulo: String = "";

  obj: any = {
    "descripcion": "",
    "imgInstitucion": "",
    "titulo": "",
    "carrera": "",
    "inicio": "",
    "fin": ""
  }

  botonEdit: boolean = false;

  idEducacion: Number = 0;
  mostrar: boolean = false;
  user = { "vista": false, "admin": false };

  loading: boolean = false;

  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.getContenido("educacion/traer").subscribe(data => {
      console.log(data)
      this.estudio = data;
    });
    this.mostrarUser();
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  capturarId(id: Number) {
    console.log(id);
    this.idEducacion = id;
    console.log(this.idEducacion);
  }

  agregarEducacion() {
    this.loading = true;
    console.log(this.obj);
    this.setObj();
    this.datosPorfolio.postCreacion("educacion/crear", this.obj).subscribe(() => {
      console.log("ok");
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  deleteEducacion() {
    this.loading = true;
    console.log(this.idEducacion);

    this.datosPorfolio.deleteContenido("educacion/borrar/" + this.idEducacion).subscribe(() => {
      console.log("ok");
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  setObj() {
    this.obj.descripcion = this.descripcion,
      this.obj.imgInstitucion = this.imgInstitucion,
      this.obj.titulo = this.titulo,
      this.obj.carrera = this.carrera,
      this.obj.inicio = this.inicio,
      this.obj.fin = this.fin
  }

  editarEducacion(objEdit: any) {
    this.loading = true;
    let eduBuscada: any = this.buscarConocimiento();

    if (eduBuscada != null) {
      if (objEdit.descripcion != "") eduBuscada.descripcion = objEdit.descripcion;
      if (objEdit.imgInstitucion != "") eduBuscada.imgInstitucion = objEdit.imgInstitucion;
      if (objEdit.carrera != "") eduBuscada.carrera = objEdit.carrera;
      if (objEdit.titulo != "") eduBuscada.titulo = objEdit.titulo;
      if (objEdit.inicio != "") eduBuscada.inicio = objEdit.inicio;
      if (objEdit.fin != "") eduBuscada.fin = objEdit.fin;

      this.datosPorfolio.putEdicion("educacion/editar/" + eduBuscada.id, eduBuscada).subscribe(() => {
        console.log("ok");
      });
    }
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  private buscarConocimiento(): any {
    let EduBuscada: any;
    let i = 0;
    while (i < this.estudio.length && EduBuscada == null) {
      if (this.estudio[i].id == this.idEducacion) {
        EduBuscada = this.estudio[i];
      } else {
        i++;
      }
    }
    return EduBuscada;
  }

  mostrarUser(): any {
    let permisos = this.datosPorfolio.validators()
    this.user.admin = permisos.admin;
    this.user.vista = permisos.vista;
    this.mostrar = permisos.vista;
  }


}
