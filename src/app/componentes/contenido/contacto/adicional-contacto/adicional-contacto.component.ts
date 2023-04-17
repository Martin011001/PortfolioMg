import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-adicional-contacto',
  templateUrl: './adicional-contacto.component.html',
  styleUrls: ['./adicional-contacto.component.css']
})
export class AdicionalContactoComponent {

  miPorfolio: any;

  constructor(private datosPorfolio:PorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data;
    });
  }
}
