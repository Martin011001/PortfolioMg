import { Component, Input, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-item-conocimiento',
  templateUrl: './item-conocimiento.component.html',
  styleUrls: ['./item-conocimiento.component.css']
})
export class ItemConocimientoComponent {
  
  color: String = "";
  range:String = "";

  conocimiento:String = "";
  urlLogo:String = "";
  tipoConocimiento:String = "";

  @Output() idConocimiento:any;
  @Input() itemConocimiento:any = "";

  constructor(private datosPorfolio:PorfolioService){
    
  }

  colorProgreso(): String{
    if(this.itemConocimiento.progreso <= 25 ){
      this.color = "progress-bar bg-danger" 
    }else if(this.itemConocimiento.progreso > 25 && this.itemConocimiento.progreso <= 50){
      this.color = "progress-bar bg-info text-dark"
    }else if(this.itemConocimiento.progreso > 50 && this.itemConocimiento.progreso <= 75){
      this.color = "progress-bar bg-warning text-dark"
    }else{
      this.color = "progress-bar bg-success"
    }

    return  this.color;
  }

  editarConocimiento(id:String){
    this.editarConocimientoPut("conocimiento/crear" + id);
    
  }

  editarConocimientoPut(apiUrl: string): void {
    this.datosPorfolio.putEdicion(apiUrl, this.itemConocimiento).subscribe(data => { 
      window.location.reload();     
    });
  }

}
