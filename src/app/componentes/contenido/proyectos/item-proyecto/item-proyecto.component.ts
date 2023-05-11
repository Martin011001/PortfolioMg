import { Component, Input } from '@angular/core';
import { ProyectosComponent } from '../proyectos.component';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent extends ProyectosComponent{

  @Input() itemProyecto: any = "";


  onDelete(){
    console.log("DELETE");
    
  }
}
