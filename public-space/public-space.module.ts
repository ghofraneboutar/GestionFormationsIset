import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSpaceRoutingModule } from './public-space-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { InscrireComponent } from './inscrire/inscrire.component';


@NgModule({
  declarations: [
    AcceuilComponent,
    RechercheComponent,
    DetailComponent,
    InscrireComponent
  ],
  imports: [
    CommonModule,
    PublicSpaceRoutingModule,
    FormsModule
  ]
})
export class PublicSpaceModule { }
