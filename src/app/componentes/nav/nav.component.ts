import { Component, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  tarjetaLogin: boolean = false;

  constructor(private accionarTarjeta: LoginComponent) {

  }

  public navIniciaSesion(): void {
    console.log("ACA ESTAMOS EN EL CICKKKKKK")
    this.tarjetaLogin = true;
    console.log("ACA ESTAMOS EN EL CICKKKKKK")
    this.accionarTarjeta.loginMostrarTarjeta();

  }

}
