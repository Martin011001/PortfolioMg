import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './componentes/contenido/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { ConocimientoComponent } from './componentes/contenido/conocimiento/conocimiento.component';
import { ContactoComponent } from './componentes/contenido/contacto/contacto.component';

 const routes: Routes =[
  {path: 'Sobre-Mi', component: SobreMiComponent},
  {path: 'Experiencia', component: ExperienciaLaboralComponent},
  {path: 'Conocimientos', component: ConocimientoComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: '', redirectTo: '/Sobre-Mi', pathMatch: 'full'},
  {path: '**', component: SobreMiComponent}
 ];


@NgModule({
  declarations: [],
  imports: [RouterModule. forRoot (routes)], 
  exports: [RouterModule]

})
export class AppRoutingModuleTs { }