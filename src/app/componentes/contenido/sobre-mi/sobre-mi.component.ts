import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  miPorfolio:any;
  mensajeEdit:boolean = false;

  urlCv:String = "";
  imagenCv:String = "";

  constructor(private datosPorfolio:PorfolioService){

  }

  /* ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data.contenido.tarjeta1;
    });
  } */

  ngOnInit(): void{
    this.datosPorfolio.getContenido("sobreMi/traer").subscribe(data =>{
      console.log(data)
      this.miPorfolio = data[0];
    });
  }

  noEnviarMensaje(){
    this.mensajeEdit = false;
  }

  enviarMensaje(){
    this.mensajeEdit = false;
  }

  getmensajeVer(){
    return this.mensajeEdit
  }
  

  onClick() {
    this.mensajeEdit = true;
    console.log("estoy en true");
    
  }


  getVariable(){
    console.log(this.imagenCv);
    console.log(this.urlCv);
    
  }
}
