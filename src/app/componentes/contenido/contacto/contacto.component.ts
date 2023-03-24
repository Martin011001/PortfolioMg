import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  miPorfolio: any;
  form: FormGroup;

  constructor(private datosPorfolio:PorfolioService, private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      nombre:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      apellido:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mail:['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      asunto:['', [Validators.required, Validators.maxLength(100)]],
      mensaje:['', [Validators.required, Validators.maxLength(3000)]]
    });
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data;
    });
  }

  get nombre(){
    return this.form.get("nombre");
  }
  get nombreRequired(){
    return false;
  }

  get apellido(){
    return this.form.get("apellido");
  }
  get apellidoRequired(){
    return false;
  }

  get mail(){
    return this.form.get("mail");
  }
  get asunto(){
    return this.form.get("asunto");
  }
  get mensaje(){
    return this.form.get("mensaje");
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

}

