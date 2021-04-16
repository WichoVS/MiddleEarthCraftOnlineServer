import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';
import { DiscordComponent } from './discord/discord.component';
import { ServerstatsComponent } from './serverstats/serverstats.component';
import { PreviewComponent } from './preview/preview.component';
import { ModsTituloComponent } from './mods-titulo/mods-titulo.component';
import { ModsDescargaComponent } from './mods-descarga/mods-descarga.component';
import { ApoyaTituloComponent } from './apoya-titulo/apoya-titulo.component';
import { PaypalComponent } from './paypal/paypal.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    PortadaComponent,
    DiscordComponent,
    ServerstatsComponent,
    PreviewComponent,
    ModsTituloComponent,
    ModsDescargaComponent,
    ApoyaTituloComponent,
    PaypalComponent
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
