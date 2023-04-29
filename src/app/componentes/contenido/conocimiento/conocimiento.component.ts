import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent {
  miPorfolio:any;
  conocimiento:any;

  frameworks: boolean= true;
  lenguajes: boolean= true;
  habilidadesBlandas: boolean= false;
  buscado: string= "";


  constructor(private datosPorfolio:PorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data;
      this.conocimiento = data.contenido.tarjeta4.conocimientos;
    });
  }


  filtro(): any[] {
  
    let lista: any[]=[];
    for (let i = 0; i < this.conocimiento.length; i++) {

      const element = this.conocimiento[i];
      if (element.tipo === "lenguajes" && this.lenguajes || element.tipo === "frameworks" && this.frameworks|| element.tipo === "habilidadesBlandas" && this.habilidadesBlandas || element.tipo === "Lenguajes" && this.lenguajes) {
        lista.push(element);
      }
      
    }
    console.log(lista)
    return lista;
  }
}
