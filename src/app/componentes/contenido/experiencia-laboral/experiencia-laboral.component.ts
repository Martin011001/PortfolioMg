import { Component, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { DatePipe } from '@angular/common';

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

  idExperiencia: String = "";

  listaBorrar: any[] = [];

  //--------hijo y Padre------------

  descripcion: String = "";
  imgTrabajo: String = "";
  inicio: DatePipe = new DatePipe('en-US');
  fin: DatePipe = new DatePipe('en-US');


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


  /*   ngOnInit(): void {
      this.datosPorfolio.obtenerdatos().subscribe(data => {
        console.log(data)
  
        this.miPorfolio = data.contenido.tarjeta2;
        this.experiencia = data.contenido.tarjeta2.trabajos;
      });
    } */

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

  capturarId(id: String) {
    this.idExperiencia = id;
  }

  deleteExpe(id: String) {
    this.datosPorfolio.deleteContenido("experiencias/borrar/" + id).subscribe(() => {
      console.log("ok");
    });
  }

  agregarExperiencia() {
    this.setobj();
    this.datosPorfolio.postCreacion("experiencias/crear/", this.obj).subscribe(() => {
      console.log("ok");
    });
  }

  editarExperiencia() {

    this.setobj();
    let experienciaBuscada = this.buscarExperiencia();

    const herramientas = this.herramientas.map(item => {
      return { nombre: item, experiencia_id: this.idExperiencia }
    })

    const puestos = this.herramientas.map(item => {
      return { nombre: item, experiencia_id: this.idExperiencia }
    })

    this.borrarItemsLista("herramienta/traer", "herramienta/borrar/");
    this.borrarItemsLista("puesto/traer", "puesto/borrar/");

    this.agregarLista("herramienta/crear", herramientas);
    this.agregarLista("puesto/crear", puestos);

    this.datosPorfolio.putEdicion("experiencias/editar/" + experienciaBuscada.id, this.obj).subscribe(() => {
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
    this.obj.descripcion = this.descripcion;
    this.obj.imgTrabajo = this.imgTrabajo;
    this.obj.inicio = this.inicio;
    this.obj.fin = this.fin;
  }

  borrarItemsLista(apiUrl: string, apiUrlDelete: string) {
    this.datosPorfolio.getContenido(apiUrl).subscribe(data => {
      this.listaBorrar = data;
      console.log(this.listaBorrar);
      this.borrarLista(apiUrlDelete);
    });
  }

  private borrarLista(apiUrlDelete: string) {
    console.log(this.listaBorrar);
    for (let index = 0; index < this.listaBorrar.length; index++) {
      const element = this.listaBorrar[index];

      if (this.idExperiencia == element.experiencia_id) {
        console.log("hola");
        this.datosPorfolio.deleteContenido(apiUrlDelete + element.id).subscribe(data => {
          console.log("ok");
        });
      }
    } 
  }

  agregarLista(apiUrl: string, lista: any[]) {
    console.log("LISTA QUE ME IMPORTAAAAAAAAAA");
    
    console.log(lista);
    
    lista.forEach(element => {
      this.datosPorfolio.postCreacion(apiUrl, element).subscribe(data => {
        console.log("ok");
      });;
    });
  }



  //--------hijo y Padre------------

  agregarHerramienta() {
    this.herramientas.push(this.herraTexto)
  }

  borrarHerramienta() {
    this.herramientas.pop();
  }


  agregarPuesto() {
    this.puestos.push(this.puestoTexto)
  }

  borrarPuesto() {
    this.puestos.pop();
  }


  //------------------------------














}
