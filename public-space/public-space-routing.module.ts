import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DetailComponent } from './detail/detail.component';
import { InscrireComponent } from './inscrire/inscrire.component';

const routes: Routes = [
  {path:"", component:AcceuilComponent},
  {path: "recherche", component: RechercheComponent },
  { path: 'details', component: DetailComponent },
  { path: "recherche/detail/inscrire", component: InscrireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSpaceRoutingModule { }
