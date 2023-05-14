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
  
  mostrar:boolean = false;
  user = { "vista": false, "admin": false };

  urlCv: String = "";
  urlImage: String = "";
  descripcion: String = "";

  constructor(private datosPorfolio: PorfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.getContenido("sobreMi/traer").subscribe(data => {
      console.log(data)
      this.miPorfolio = data[0];
      this.setDescripcion(this.miPorfolio.texto);
      this.setUrlCv(this.miPorfolio.urlCv);
      this.setUrImage(this.miPorfolio.imageCv);
    });
    this.mostrarUser()
  }

  editarSobreMi(apiUrl: string): void {
    this.datosPorfolio.putEdicion(apiUrl, this.miPorfolio).subscribe(data => {
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
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
    if (id == this.miPorfolio.id && this.user.admin) {
      this.miPorfolio.texto = this.descripcion == "" ? this.miPorfolio.texto : this.descripcion;
      this.miPorfolio.urlCv = this.urlCv == "" ? this.miPorfolio.urlCv : this.urlCv;
      this.miPorfolio.imageCv = this.urlImage == "" ? this.miPorfolio.imageCv : this.urlImage;
      this.editarSobreMi("sobreMi/editar/" + this.miPorfolio.id);
    }

  }

 mostrarUser():any{
  let permisos = this.datosPorfolio.validators()
  this.user.admin = permisos.admin;
  this.user.vista = permisos.vista;
  this.mostrar = permisos.vista;
 }

}

