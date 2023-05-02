import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  miPorfolio: any;
  mensajeEdit: boolean = false;

  urlCv: String = "";
  urlImage: String = "";
  descripcion: String = "";

  constructor(private datosPorfolio: PorfolioService) {

  }

  /* ngOnInit(): void{
    this.datosPorfolio.obtenerdatos().subscribe(data =>{
      console.log(data)
      this.miPorfolio = data.contenido.tarjeta1;
    });
  } */

  ngOnInit(): void {
    this.datosPorfolio.getContenido("sobreMi/traer").subscribe(data => {
      console.log(data)
      this.miPorfolio = data[0];
      this.setDescripcion(this.miPorfolio.texto);
      this.setUrlCv(this.miPorfolio.urlCv);
      this.setUrImage(this.miPorfolio.imageCv);
    });
  }

  editarSobreMi(apiUrl: string): void {
    this.datosPorfolio.putEdicion(apiUrl, this.miPorfolio).subscribe(data => {
      window.location.reload();
    });
  }

  private setUrlCv(texto: String) {
    this.urlCv = texto;
  }

  private setUrImage(texto: String) {
    this.urlImage = texto;
  }

  private setDescripcion(texto: String) {
    this.descripcion = texto;
  }

  guardarCambios(id: String) {
    if (id == this.miPorfolio.id) {
      this.miPorfolio.texto = this.descripcion == "" ? this.miPorfolio.texto : this.descripcion;
      this.miPorfolio.urlCv = this.urlCv == "" ? this.miPorfolio.urlCv : this.urlCv;
      this.miPorfolio.imageCv = this.urlImage == "" ? this.miPorfolio.imageCv : this.urlImage;
      this.editarSobreMi("sobreMi/editar/" + this.miPorfolio.id);
    }

  }


}

