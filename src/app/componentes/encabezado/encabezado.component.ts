import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPorfolio:any;
  imagenes:any = ["hola"];

  nombre:String = "";
  apellido:String = "";
  trabajoActual:String = "";
  ubicacion:String = "";
  imgPerfil:String = "";
  empresa:String = "";
  estudio:String = "";


  constructor(private datosPorfolio:PorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data + "Aca estamos en data")
      this.miPorfolio = data;
    });
  }

  cambioImagenes(): void{

  }

}
