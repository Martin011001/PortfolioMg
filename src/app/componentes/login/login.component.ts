import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  @Input() estilo:String = "";
  @Output() salir = new EventEmitter;
  @Output() irAlNav = new EventEmitter;

  respuesta:any;

  buttonCrear:String = "none";
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private datosPorfolio: PorfolioService) {
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get password(){
    return this.form.get("password");
  }
 
  get email(){
   return this.form.get("email");
  }

  get passwordValid(){
    return this.password?.touched && !this.password?.valid;
  }

  get emailValid() {
    return false
  }


  onEnviar(event: Event){
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
      //console.log("Data:" +JSON.stringify(data));
      this.respuesta = data;
      this.datosPorfolio.infouser(data);
    })
 
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
