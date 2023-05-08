import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


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

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService) {
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
    
    event.preventDefault; 
    /* this.autenticacionService.iniciarSecion(this.form.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      //this.ruta.navigate(['/porfolio'])
    }) */
 
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
