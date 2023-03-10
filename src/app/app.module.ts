import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
