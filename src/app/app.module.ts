import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModuleTs } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { SobreMiComponent } from './componentes/contenido/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { ConocimientoComponent } from './componentes/contenido/conocimiento/conocimiento.component';
import { ContactoComponent } from './componentes/contenido/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { EducacionComponent } from './componentes/contenido/educacion/educacion.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { ItemLaboralComponent } from './componentes/contenido/experiencia-laboral/item-laboral/item-laboral.component';
import { ItemEducacionComponent } from './componentes/contenido/educacion/item-educacion/item-educacion.component';
import { ItemConocimientoComponent } from './componentes/contenido/conocimiento/item-conocimiento/item-conocimiento.component';
import { ItemProyectoComponent } from './componentes/contenido/proyectos/item-proyecto/item-proyecto.component';
import { AdicionalContactoComponent } from './componentes/contenido/contacto/adicional-contacto/adicional-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavComponent,
    BarraLateralComponent,
    FooterComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    ConocimientoComponent,
    ContactoComponent,
    LoginComponent,
    EducacionComponent,
    CrearCuentaComponent,
    ItemLaboralComponent,
    ItemEducacionComponent,
    ItemConocimientoComponent,
    ItemProyectoComponent,
    AdicionalContactoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTs,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
