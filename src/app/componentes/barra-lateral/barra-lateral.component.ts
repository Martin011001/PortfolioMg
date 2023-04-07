import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {

  isFixed = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event) {
    if (window.pageYOffset > 555) {
      this.isFixed = true;
    } else { 
      this.isFixed = false;
    }
  }
}
