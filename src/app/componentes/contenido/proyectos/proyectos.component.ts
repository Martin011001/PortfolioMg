import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: any;
  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data)
      this.miPorfolio = data.contenido.tarjeta5;
      this.proyectos = data.contenido.tarjeta5.proyectos;
    });
  }
}
