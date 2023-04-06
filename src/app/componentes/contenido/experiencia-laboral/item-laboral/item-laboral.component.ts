import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-laboral',
  templateUrl: './item-laboral.component.html',
  styleUrls: ['./item-laboral.component.css']
})
export class ItemLaboralComponent {

  @Input() itemExpe:any = "";

  constructor(){
    
  }

  onDelete(){
    console.log("DELETE");
    
  }
}
