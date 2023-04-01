import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {

  @Input() estilo:String = "";
  @Output() salir = new EventEmitter;

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


}
