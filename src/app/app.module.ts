/*ESTE ES EL MODULO PRINCIPAL*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ContactUsComponent } from './componentes/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*modulo de material importado al ppal. importacion automatica si se registra el module abajo en IMPORTS*/
import { MaterialModule } from './material.module';
import { AboutComponent } from './componentes/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
