import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data)
      this.miPorfolio = data.contenido.tarjeta2;
    });
  }


}
