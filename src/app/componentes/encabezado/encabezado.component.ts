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

  mostrar:boolean = false;
  user = { "vista": false, "admin": false };
  loading: boolean = false;

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
    });

    this.mostrarUser()
  }

  guardarCambios(id: String) {
    if (id == this.miPorfolio.id && this.user.admin) {
      this.miPorfolio.nombre = this.nombre == "" ? this.miPorfolio.nombre : this.nombre;
      this.miPorfolio.apellido = this.apellido == "" ? this.miPorfolio.apellido : this.apellido;
      this.miPorfolio.trabajoActual = this.trabajoActual == "" ? this.miPorfolio.trabajoActual : this.trabajoActual;
      this.miPorfolio.ubicacion = this.ubicacion == "" ? this.miPorfolio.ubicacion : this.ubicacion;
      this.miPorfolio.imgPerfil = this.imgPerfil == "" ? this.miPorfolio.imgPerfil : this.imgPerfil;
      this.miPorfolio.empresa = this.empresa == "" ? this.miPorfolio.empresa : this.empresa;
      this.miPorfolio.estudio = this.estudio == "" ? this.miPorfolio.estudio : this.estudio;
      this.editarPersona("personas/editar/" + this.miPorfolio.id);
    }else{
      console.log("El usuario no es admin");
      
    }
  }

  editarPersona(apiUrl: string) {
    this.loading = true;
    this.datosPorfolio.putEdicion(apiUrl, this.miPorfolio).subscribe(data => {
      window.location.reload();
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
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

  mostrarUser():any{
    let permisos = this.datosPorfolio.validators()
    this.user.admin = permisos.admin;
    this.user.vista = permisos.vista;
    this.mostrar = permisos.vista;
   }
}
