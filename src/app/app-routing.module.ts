import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './componentes/contenido/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { ConocimientoComponent } from './componentes/contenido/conocimiento/conocimiento.component';
import { ContactoComponent } from './componentes/contenido/contacto/contacto.component';
import { EducacionComponent } from './componentes/contenido/educacion/educacion.component';
import { ProyectosComponent } from './componentes/contenido/proyectos/proyectos.component';

 const routes: Routes =[
  {path: 'Sobre-Mi', component: SobreMiComponent},
  {path: 'Educacion', component: EducacionComponent},
  {path: 'Experiencia', component: ExperienciaLaboralComponent},
  {path: 'Conocimientos', component: ConocimientoComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: '', redirectTo: '/Sobre-Mi', pathMatch: 'full'},
  {path: '**', component: SobreMiComponent}
 ];


@NgModule({
  declarations: [],
  imports: [RouterModule. forRoot (routes)], 
  exports: [RouterModule]

})
export class AppRoutingModuleTs { }