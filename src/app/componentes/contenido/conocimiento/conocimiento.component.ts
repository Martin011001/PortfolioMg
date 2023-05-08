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
  lenguajes: boolean = true;
  habilidadesBlandas: boolean = false;
  buscado: string = "";

  idConocimiento: String = "";
  objCreate: any = {};

  
  botonEdit:boolean = false;

  constructor(private datosPorfolio: PorfolioService) {

  }

  /* ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data;
      this.conocimiento = data.contenido.tarjeta4.conocimientos;
    });
  } */

  ngOnInit(): void {
    this.datosPorfolio.getContenido("conocimientoSaber/traer").subscribe(data => {
      console.log(data)
      this.conocimiento = data;
    });
  }

  filtro(): any[] {

    let lista: any[] = [];
    for (let i = 0; i < this.conocimiento.length; i++) {
      const element = this.conocimiento[i];
      if (element.tipo === "Lenguaje" && this.lenguajes || element.tipo === "Framework" && this.frameworks || element.tipo === "Habilidades Blandas" && this.habilidadesBlandas || element.tipo === "Lenguajes" && this.lenguajes) {
        lista.push(element);
      }
    }
    return lista;
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  public capturarId(id: any) {
    this.idConocimiento = id;
  }

  agregarConocimiento(){
    console.log(this.objCreate);
    
    this.datosPorfolio.postCreacion("conocimiento/crear", this.objCreate).subscribe(() => {
      console.log("ok");
    });
    window.location.reload();
  }

  editarConocimiento(obj: any) {
    let conocimientoBuscado: any = this.buscarConocimiento();

    if (conocimientoBuscado != null) {
      if (obj.progreso != "") conocimientoBuscado.progreso = obj.progreso;
      if (obj.conocimiento != "") conocimientoBuscado.conocimiento = obj.conocimiento;
      if (obj.logo != "") conocimientoBuscado.logo = obj.logo;
      if (obj.tipo != "") conocimientoBuscado.tipo = obj.tipo;

      this.datosPorfolio.putEdicion("conocimiento/editar/" + conocimientoBuscado.id, obj).subscribe(() => {
        console.log("ok");
      });
    }
    window.location.reload();
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
    this.datosPorfolio.deleteContenido("conocimiento/borrar/" + this.idConocimiento).subscribe(() => {
      console.log("ok");
    });
    window.location.reload();
  }




}


