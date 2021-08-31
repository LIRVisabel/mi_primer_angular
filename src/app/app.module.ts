/*ESTE ES EL MODULO PRINCIPAL*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ContactUsComponent } from './componentes/contact-us/contact-us.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*modulo de material importado al ppal. importacion automatica si se registra el module abajo en IMPORTS*/
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    HomePageComponent
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
