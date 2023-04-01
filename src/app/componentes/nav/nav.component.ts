import { Component, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  buttonSesion:String = "none";
  buttonCrear:String = "none";

  constructor() {

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
