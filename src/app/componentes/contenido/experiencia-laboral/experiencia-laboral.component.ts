import { Component, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from './interfaz-experiencia';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  experiencia: any;
  miPorfolio: any;
  botonEdit: boolean = false;

  idExperiencia:String = "";

  constructor(private datosPorfolio:PorfolioService){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data)
      
      this.miPorfolio = data.contenido.tarjeta2;
      this.experiencia = data.contenido.tarjeta2.trabajos;
    });
  }

  EditForm(): boolean{
    return this.botonEdit == false ? this.botonEdit = true : this.botonEdit = false;
  }

  capturarId(id:String){
    this.idExperiencia = id;
  }

  editarExperiencia(obj:any, herramientas:String[], puestos:String[]){
    let experienciaBuscada = this.buscarExperiencia();
    this.borrarItemsLista("herramienta/traer", "herramienta/borrar/");
    this.borrarItemsLista("puesto/traer", "puesto/borrar/")
  


    this.datosPorfolio.putEdicion("experiencia/editar/" + experienciaBuscada.id, obj).subscribe(() => {
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

  borrarItemsLista(apiUrl:string, apiUrlDelete:string){
    let listaBorrar: any[] = []; 
    this.datosPorfolio.getContenido(apiUrl).subscribe(data => {
      listaBorrar = data;
    });
    listaBorrar.forEach(element => {
      if(this.idExperiencia == element.experiencia.id){
        this.datosPorfolio.deleteContenido(apiUrlDelete + this.idExperiencia);
      }
    });
  }


















}
