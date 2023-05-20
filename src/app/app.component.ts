import { Component } from '@angular/core';
import { PorfolioService } from './servicios/porfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = true;
  title = 'proyecto-portafolios-Mg';
  sobreMi: any;

  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit() {
    this.datosPorfolio.getContenido("sobreMi/traer").subscribe(data => {
      this.sobreMi = data;
      if (data.length > 0) {
        this.loading = false;
      }
    });
  }

}
