import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent {

  @Input() itemProyecto: any = "";


  onDelete(){
    console.log("DELETE");
    
  }
}