import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-conocimiento',
  templateUrl: './item-conocimiento.component.html',
  styleUrls: ['./item-conocimiento.component.css']
})
export class ItemConocimientoComponent {
  
  color: String = "";

  @Input() itemConocimiento:any = "";

  constructor(){
    
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

}
