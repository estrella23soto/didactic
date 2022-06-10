import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './componenents/alumnos/alumnos.component';
import { AdministradorComponent } from './componenents/administrador/administrador.component';
import { Instructor1Component } from './componenents/instructor1/instructor1.component';
import { Instructor2Component } from './componenents/instructor2/instructor2.component';
import { LogeoComponent } from './components/logeo/logeo.component';
import { Instructor3Component } from './componenents/instructor3/instructor3.component';
import { InstructorComponent } from './componenents/instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnosComponent,
    AdministradorComponent,
    Instructor1Component,
    Instructor2Component,
    LogeoComponent,
    Instructor3Component,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
