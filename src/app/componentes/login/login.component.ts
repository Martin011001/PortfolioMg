import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  @Input() estilo:String = "";
  @Output() salir = new EventEmitter;
  @Output() irAlNav = new EventEmitter;


  buttonCrear:String = "none";
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      mail:['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get password(){
    return this.form.get("password");
  }
 
  get mail(){
   return this.form.get("mail");
  }

  get passwordValid(){
    return this.password?.touched && !this.password?.valid;
  }

  get mailValid() {
    return false
  }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

  salirDeLogin(){
    this.salir.emit();
  }

  irACrearCuenta(){
    this.irAlNav.emit();
  }

}
