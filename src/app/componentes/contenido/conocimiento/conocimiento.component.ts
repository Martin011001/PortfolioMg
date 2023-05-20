import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent {

  miPorfolio: any;
  conocimiento: any;

  frameworks: boolean = true;
  herramientas: boolean = true;
  lenguajes: boolean = true;
  habilidadesBlandas: boolean = false;
  buscado: string = "";

  idConocimiento: Number = 0;
  objCreate = { "progreso": "50", "conocimiento": "", "logo": "", "tipo": "Lenguaje" }

  botonEdit: boolean = false;
  mostrar:boolean = false;
  user = { "vista": false, "admin": false };


  loading: boolean = false;
  
  constructor(private datosPorfolio: PorfolioService) {
  }

  ngOnInit(): void {
    this.datosPorfolio.getContenido("conocimientoSaber/traer").subscribe(data => {
      console.log(data)
      this.conocimiento = data;
    });
    this.mostrarUser();
  }

  filtro(): any[] {
    let lista: any[] = [];

    for (let i = 0; i < this.conocimiento.length; i++) {
      const element = this.conocimiento[i];
      if (element.tipo === "Lenguaje" && this.lenguajes || element.tipo === "Framework" && this.frameworks || element.tipo === "Habilidades Blandas" && this.habilidadesBlandas || element.tipo === "Lenguajes" && this.lenguajes || element.tipo === "Herramientas" && this.herramientas) {
        lista.push(element);
      }
    }
    return lista;
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  public capturarId(id: Number) {
    this.idConocimiento = id;
  }

  agregarConocimiento() {
    this.loading = true;
    console.log(this.objCreate);
    this.datosPorfolio.postCreacion("conocimiento/crear", this.objCreate).subscribe(() => {
      console.log("ok");
    });
    setTimeout( () => {
      window.location.reload();
    }, 2000);
  }

  editarConocimiento(obj: any) {
    this.loading = true;
    let conocimientoBuscado: any = this.buscarConocimiento();
    if (obj.progreso != "") conocimientoBuscado.progreso = obj.progreso;
    if (obj.conocimiento != "") conocimientoBuscado.conocimiento = obj.conocimiento;
    if (obj.logo != "") conocimientoBuscado.logo = obj.logo;
    if (obj.tipo != "") conocimientoBuscado.tipo = obj.tipo;

    this.datosPorfolio.putEdicion("conocimiento/editar/" + conocimientoBuscado.id, obj).subscribe(() => {
      console.log("ok");
    });

    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  private buscarConocimiento(): any {
    let conocimientoBuscado: any;
    let i = 0;
    while (i < this.conocimiento.length && conocimientoBuscado == null) {
      if (this.conocimiento[i].id == this.idConocimiento) {
        conocimientoBuscado = this.conocimiento[i];
      } else {
        i++;
      }
    }
    return conocimientoBuscado;
  }

  deleteConocimiento() {
    this.loading = true;
    this.datosPorfolio.deleteContenido("conocimiento/borrar/" + this.idConocimiento).subscribe(() => {
      console.log("ok");
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  mostrarUser():any{
    let permisos = this.datosPorfolio.validators()
    this.user.admin = permisos.admin;
    this.user.vista = permisos.vista;
    this.mostrar = permisos.vista;
   }
}




