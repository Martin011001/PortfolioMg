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
  range1: String = "";

  frameworks: boolean = true;
  lenguajes: boolean = true;
  habilidadesBlandas: boolean = false;
  buscado: string = "";

  idConocimiento: String = "";
  objetoEdit: any = {};


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


  public capturarId(id: any) {
    this.idConocimiento = id;
  }

  editarConocimiento(obj: any) {
    console.log(obj);
    
    let conocimientoBuscado: any = this.buscarConocimiento();
    if (conocimientoBuscado != null) {
      if (obj.range != "") conocimientoBuscado.titulo = obj.range;
      if (obj.conocimiento != "") conocimientoBuscado.img = obj.conocimiento;
      if (obj.urlLogo != "") conocimientoBuscado.tipo = obj.urlLogo;
      if (obj.tipoConocimiento != "") conocimientoBuscado.inicio = obj.tipoConocimiento;

      this.datosPorfolio.putEdicion("conocimiento/editar/" + conocimientoBuscado.id, obj).subscribe(() => {
        console.log("ok");
      });
    }
    window.location.reload();
  }
  
  /* editarSobreMi(apiUrl: string): void {
    this.datosPorfolio.putEdicion("conocimiento/editar/" + conocimientoBuscado.id, obj).subscribe(() => {
      console.log("ok");
    });
  } */

  public buscarConocimiento(): any {
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





}


