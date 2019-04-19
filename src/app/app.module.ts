import { MapaComponent } from './pages/mapa/mapa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './share/encabezado/encabezado.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PiePagComponent } from './share/pie-pag/pie-pag.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    PiePagComponent,
    MapaComponent,
    LoginComponent,
    ContactoComponent,
    ConocenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
