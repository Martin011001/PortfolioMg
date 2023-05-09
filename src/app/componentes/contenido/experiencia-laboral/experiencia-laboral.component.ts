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
  herramientaData:any;
  experiencia:any;

  miPorfolio: any;
  botonEdit: boolean = false;

  idExperiencia: String = "";


  //--------hijo y Padre------------

  descripcion: String = "";
  imgTrabajo: String = "";
  inicio: DatePipe = new DatePipe('en-US');
  fin: DatePipe = new DatePipe('en-US');


  herraTexto:String = "";
  puestoTexto:String = "";

  puestos: String[] = [];
  herramientas: String[] = [];
  idexpe: String = "";

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
    this.datosPorfolio.getContenido("puestos/traer").subscribe(data => {
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

  deleteExpe(id:String){
    this.datosPorfolio.deleteContenido("experiencias/borrar/" + id).subscribe(() => {
      console.log("ok");
    });
  }

  agregarExperiencia(){
    this.setobj();
    this.datosPorfolio.postCreacion("experiencias/crear/", this.obj).subscribe(() => {
      console.log("ok");
    });
  }

  editarExperiencia() {
    this.setobj(); 
    let experienciaBuscada = this.buscarExperiencia();
    const herramientas = this.herramientas.map(item =>  {
      return {nombre:item, experiencia:{id:this.idexpe}}
    })

    this.borrarItemsLista("herramienta/traer", "herramienta/borrar/");
    this.borrarItemsLista("puestos/traer", "puesto/borrar/");
    this.agregarLista("herramienta/crear", this.herramientas);

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

  private setobj(){
  this.obj.descripcion = this.descripcion;
  this.obj.imgTrabajo = this.imgTrabajo;
  this.obj.inicio = this.inicio;
  this.obj.fin = this.fin;
  }

  borrarItemsLista(apiUrl: string, apiUrlDelete: string) {
    let listaBorrar: any[] = [];
    this.datosPorfolio.getContenido(apiUrl).subscribe(data => {
      listaBorrar = data;
    });
    listaBorrar.forEach(element => {
      if (this.idExperiencia == element.experiencia_id) {
        this.datosPorfolio.deleteContenido(apiUrlDelete + this.idExperiencia);
      }
    });
  }

  agregarLista(apiUrl: string, herramientas: any[]) {
    herramientas.forEach(element => {
      this.datosPorfolio.postCreacion(apiUrl, element);
      console.log("ok");
    });

  }



  //--------hijo y Padre------------

  agregarHerramienta() {
   this.herramientas.push(this.herraTexto)
    console.log(this.herramientas);
    
  }

  borrarHerramienta() {
    this.herramientas.pop();
  }


  agregarPuesto() {
    this.puestos.push(this.puestoTexto)
    console.log(this.puestos);

  }

  borrarPuesto() {
    this.puestos.pop();
  }


  //------------------------------














}
