import { Component, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  puestoData: any;
  herramientaData: any;
  experiencia: any;

  miPorfolio: any;
  botonEdit: boolean = false;

  idExperiencia: Number = 0;

  listaBorrar: any[] = [];

  //--------hijo y Padre------------

  descripcion: String = "";
  imgTrabajo: String = "";
  inicio: String = "";
  fin: String = "";


  herraTexto: String = "";
  puestoTexto: String = "";

  puestos: String[] = [];
  herramientas: String[] = [];

  obj: any = {
    "descripcion": "",
    "imgTrabajo": "",
    "inicio": "",
    "fin": ""
  }

  herramienta: any = {
    "nombre": "",
    "experiencia": {
      "id": 0
    }
  }
  puesto: any = {
    "nombre": "",
    "experiencia": {
      "id": 0
    }

  }

  //------------------------------


  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.getContenido("experiencias/traer").subscribe(data => {
      console.log(data)
      this.experiencia = data;
    });
    this.datosPorfolio.getContenido("herramienta/traer").subscribe(data => {
      console.log(data)
      this.herramientaData = data;
    });
    this.datosPorfolio.getContenido("puesto/traer").subscribe(data => {
      console.log(data)
      this.puestoData = data;
    });
  }

  editForm(): boolean {
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  public capturarId(id: any){
    this.idExperiencia = id;
    console.log(id);
  }

  agregarExperiencia() {

    this.setobj();

    this.datosPorfolio.postCreacion("experiencias/crear", this.obj).subscribe(response => {
      console.log("ok");

      let expeTraer: any = response;

      const herramientas = this.herramientas.map(item => {
        return { nombre: item, experiencia_id: expeTraer.id }
      })
      const puestos = this.puestos.map(item => {
        return { nombre: item, experiencia_id: expeTraer.id }
      })

      if (herramientas.length > 0) {
        this.agregarLista("herramienta/crear", herramientas);
      }
      if (puestos.length > 0) {
        this.agregarLista("puesto/crear", puestos);
      }

    });

    /* setTimeout(function () {
      window.location.reload();
    }, 3000); */
  }

  editarExperiencia() {
    console.log(this.idExperiencia);

    this.obj = this.buscarExperiencia();
    this.setobj();

    const herramientas = this.herramientas.map(item => {
      return { nombre: item, experiencia_id: this.idExperiencia }
    })
    const puestos = this.puestos.map(item => {
      return { nombre: item, experiencia_id: this.idExperiencia }
    })
    if (herramientas.length > 0) {
      this.borrarLista("herramienta/borrar/", this.herramientaData);
      this.agregarLista("herramienta/crear", herramientas);
    }
    if (puestos.length > 0) {
      this.borrarLista("puesto/borrar/", this.puestoData);
      this.agregarLista("puesto/crear", puestos);
    }

    this.datosPorfolio.putEdicion("experiencias/editar/" + this.obj.id, this.obj).subscribe(() => {
      console.log("ok");
    });
  }


  private buscarExperiencia(): any {
    let experienciaBuscado: any;
    let i = 0;
    while (i < this.experiencia.length && experienciaBuscado == null) {
      if (this.experiencia[i].id == this.idExperiencia) {
        experienciaBuscado = this.experiencia[i];
      } else {
        i++;
      }
    }
    return experienciaBuscado;
  }

  private setobj() {
    if (this.descripcion != "") this.obj.descripcion = this.descripcion;
    if (this.imgTrabajo != "") this.obj.imgTrabajo = this.imgTrabajo;
    if (this.inicio != "") this.obj.inicio = this.inicio;
    if (this.fin != "") this.obj.fin = this.fin;
  }


  private borrarLista(apiUrlDelete: string, lista: any[]) {
    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      if (this.idExperiencia == element.experiencia_id) {
        this.datosPorfolio.deleteContenido(apiUrlDelete + element.id).subscribe(data => {
          console.log("ok");
        });
      }
    }
  }

  agregarLista(apiUrl: string, lista: any[]) {
    lista.forEach(element => {
      this.datosPorfolio.postCreacion(apiUrl, element).subscribe(data => {
        console.log("ok");
      });;
    });
  }

  deleteExpe() {
    console.log(this.idExperiencia);
    this.datosPorfolio.deleteContenido("experiencias/borrar/" + this.idExperiencia).subscribe(() => {

      this.borrarLista("herramienta/borrar/", this.herramientaData)
      this.borrarLista("puesto/borrar/", this.puestoData)
    });
    /* window.location.reload(); */
  }


  //--------hijo y Padre------------

  agregarHerramienta() {
    if (this.herraTexto != "") this.herramientas.push(this.herraTexto);
    this.herraTexto = "";
  }

  borrarHerramienta() {
    this.herramientas.pop();
  }


  agregarPuesto() {
    if (this.puestoTexto != "") this.puestos.push(this.puestoTexto);
    this.puestoTexto = "";
  }

  borrarPuesto() {
    this.puestos.pop();
  }


  //------------------------------














}
