import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPorfolio: any;
  intereses: any;
  imagenes: any = ["hola"];

  nombre: String = "";
  apellido: String = "";
  trabajoActual: String = "";
  ubicacion: String = "";
  imgPerfil: String = "";
  empresa: String = "";
  estudio: String = "";


  constructor(private datosPorfolio: PorfolioService) {

  }


  ngOnInit(): void {
    this.datosPorfolio.getContenido("personas/traer").subscribe(data => {
      console.log(data)
      this.miPorfolio = data[0];
      this.setVariables();
    });

    this.datosPorfolio.getContenido("interes/traer").subscribe(data => {
      this.intereses = data;
      console.log(this.intereses);
      console.log("acaaaaaaaaaaaaaaaaaaa");
      console.log(this.intereses[0].nombre);
    });
  }

  guardarCambios(id: String) {
    if (id == this.miPorfolio.id) {
      this.miPorfolio.nombre = this.nombre == "" ? this.miPorfolio.nombre : this.nombre;
      this.miPorfolio.apellido = this.apellido == "" ? this.miPorfolio.apellido : this.apellido;
      this.miPorfolio.trabajoActual = this.trabajoActual == "" ? this.miPorfolio.trabajoActual : this.trabajoActual;
      this.miPorfolio.ubicacion = this.ubicacion == "" ? this.miPorfolio.ubicacion : this.ubicacion;
      this.miPorfolio.imgPerfil = this.imgPerfil == "" ? this.miPorfolio.imgPerfil : this.imgPerfil;
      this.miPorfolio.empresa = this.empresa == "" ? this.miPorfolio.empresa : this.empresa;
      this.miPorfolio.estudio = this.estudio == "" ? this.miPorfolio.estudio : this.estudio;
      this.editarPersona("persona/editar/" + this.miPorfolio.id);
    }
  }

  editarPersona(apiUrl: string) {
    this.datosPorfolio.putEdicion(apiUrl, this.miPorfolio).subscribe(data => {
      window.location.reload();
    });
  }

  private setVariables() {
    this.nombre = this.miPorfolio.nombre;
    this.apellido = this.miPorfolio.apellido;
    this.trabajoActual = this.miPorfolio.trabajoActual;
    this.ubicacion = this.miPorfolio.ubicacion;
    this.imgPerfil = this.miPorfolio.imgPerfil;
    this.empresa = this.miPorfolio.empresa;
    this.estudio = this.miPorfolio.estudio;
  }

}
