import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposComponent } from './accueil/propos/propos.component';
import { ActualiteComponent } from './accueil/actualite/actualite.component';
import { ContactComponent } from './accueil/contact/contact.component';
import { FormationComponent } from './accueil/formation/formation.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { GalerieComponent } from './accueil/galerie/galerie.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposComponent,
    ActualiteComponent,
    ContactComponent,
    FormationComponent,
    PartenaireComponent,
    GalerieComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
