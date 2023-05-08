import { Component, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { EducacionComponent } from '../educacion.component';


@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent extends EducacionComponent{

  @Input() itemEdu: any = "";

  onDelete(){
    console.log("DELETE");
    
  }
}
