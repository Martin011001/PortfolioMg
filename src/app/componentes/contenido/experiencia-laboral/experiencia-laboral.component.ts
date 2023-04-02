import { Component, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from './interfaz-experiencia';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  experiencia: any;
  miPorfolio: any;

  constructor(private datosPorfolio:PorfolioService){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data)
      
      this.miPorfolio = data.contenido.tarjeta2;
      this.experiencia = data.contenido.tarjeta2.trabajos;
    });
  }


}
