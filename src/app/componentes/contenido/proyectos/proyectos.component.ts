import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: any;
  miPorfolio: any;

  botonEdit: boolean = false;

  idProyecto: Number = 0;
  objCreate = { "titulo": "", "detalle": "", "descripcion": "" }

  titulo: string = "";
  detalle: string = "";
  descripcion: string = "";

  mostrar: boolean = false;
  user = { "vista": false, "admin": false };
  loading: boolean = false;

  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.getContenido("proyecto/traer").subscribe(data => {
      console.log(data)
      this.proyectos = data;
    });
    this.mostrarUser();
  }

  capturarId(id: Number) {
    console.log(id);
    this.idProyecto = id;
    console.log(this.idProyecto);
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  agregarProyecto() {
    this.loading = true;
    if (this.user.admin) {
      this.setObj();
      this.datosPorfolio.postCreacion("proyecto/crear", this.objCreate).subscribe(() => {
        console.log("ok");
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }

  setObj() {
    this.objCreate.descripcion = this.descripcion,
      this.objCreate.detalle = this.detalle,
      this.objCreate.titulo = this.titulo
  }

  editarProyecto(obj: any) {
    this.loading = true;
    let proyectoBuscado: any = this.buscarproyecto();

    if (proyectoBuscado != null && this.user.admin) {
      if (obj.titulo != "") proyectoBuscado.titulo = obj.titulo;
      if (obj.detalle != "") proyectoBuscado.detalle = obj.detalle;
      if (obj.descripcion != "") proyectoBuscado.descripcion = obj.descripcion;

      this.datosPorfolio.putEdicion("proyecto/editar/" + proyectoBuscado.id, proyectoBuscado).subscribe(() => {
        console.log("ok");
      });
    }
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  private buscarproyecto(): any {
    let proyectoBuscado: any;
    let i = 0;
    while (i < this.proyectos.length && proyectoBuscado == null) {
      if (this.proyectos[i].id == this.idProyecto) {
        proyectoBuscado = this.proyectos[i];
      } else {
        i++;
      }
    }
    return proyectoBuscado;
  }

  deleteProyecto() {
    this.loading = true;
    if (this.user.admin) {
      this.datosPorfolio.deleteContenido("proyecto/borrar/" + this.idProyecto).subscribe(() => {
        console.log("ok");
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }


  mostrarUser(): any {
    let permisos = this.datosPorfolio.validators()
    this.user.admin = permisos.admin;
    this.user.vista = permisos.vista;
    this.mostrar = permisos.vista;
  }
}

