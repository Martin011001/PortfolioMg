import { Component, Injectable } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
  
})

export class LoginComponent {

  style: String= "none";
  variable: String="none"

  constructor() {

  }

  loginMostrarTarjeta(): String {
    console.log("ACA ESTAMOS EN EL CICKKKKKK")
    this.variable = "flex";
    return this.variable;
  }


}
