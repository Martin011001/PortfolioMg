import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-conocimiento',
  templateUrl: './item-conocimiento.component.html',
  styleUrls: ['./item-conocimiento.component.css']
})
export class ItemConocimientoComponent {

  @Input() itemConocimiento:any = "";

  constructor(){
    
  }
}
