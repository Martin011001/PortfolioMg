import { Component, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  miPorfolio:any;
  buttonSesion:String = "none";
  buttonCrear:String = "none";

  constructor(private datosPorfolio:PorfolioService) {

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data.encabezado;
    });
  }

  iniciaSesion(){
    this.buttonSesion == "flex" ? this.buttonSesion = "none" : this.buttonSesion = "flex";    
  }

  crearCuenta(){
    this.buttonCrear == "none" ? this.buttonCrear = "flex" : this.buttonCrear = "none";
  }

  crearCuentaDesdeInicio(){
    this.iniciaSesion(); 
    this.crearCuenta();  
  }

}
