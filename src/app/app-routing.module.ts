import { InstructorComponent } from './componenents/instructor/instructor.component';
import { Instructor3Component } from './componenents/instructor3/instructor3.component';
import { Instructor2Component } from './componenents/instructor2/instructor2.component';
import { Instructor1Component } from './componenents/instructor1/instructor1.component';
import { AdministradorComponent } from './componenents/administrador/administrador.component';
import { AlumnosComponent } from './componenents/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor1',component:Instructor1Component},
  {path:'instructor2',component:Instructor2Component},
  {path:'instructor3',component:Instructor3Component},
  {path:'instructor',component:InstructorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
