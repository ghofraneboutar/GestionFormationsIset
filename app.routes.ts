import { RouterModule, Routes } from '@angular/router';
import { AdminSpaceComponent } from './private-space/admin-space/admin-space.component';
import { ListformationComponent } from './private-space/list-formation/listformation.component';
import { ListformateurComponent } from './private-space/list-formateur/listformateur.component';
import { ListsessionComponent } from './private-space/list-session/listsession.component';
import { CandidatListComponent } from './private-space/list-cndidat/candidat-list.component';
import { PrivateSpaceModule } from './private-space/private-space.module';
import { AddCandidatComponent } from './private-space/add-candidat/add-candidat.component';
import { AddFormationComponent } from './private-space/add-formation/add-formation.component';
import { AddsessionComponent } from './private-space/add-session/addsession.component';
import { AddFormateurComponent } from './private-space/add-formateur/add-formateur.component';
import { ModifierCandidatComponent } from './private-space/modifier-candidat/modifier-candidat.component';
import { ModifierFormationComponent } from './private-space/modifierformation/modifierformation.component';
import { ModifierSessionComponent } from './private-space/modifier-session/modifier-session.component';
import { ModifierFormateurComponent } from './private-space/modifier-formateur/modifier-formateur.component';
import { AcceuilComponent } from './public-space/acceuil/acceuil.component';
import { RechercheComponent } from './public-space/recherche/recherche.component';
import { DetailComponent } from './public-space/detail/detail.component';
import { InscrireComponent } from './public-space/inscrire/inscrire.component';
export const routes: Routes = [
    {path:"",component:AcceuilComponent},
    {path:"Admin-space", component:AdminSpaceComponent},
    {path:"formations", component:ListformationComponent},
    {path:"formateurs", component:ListformateurComponent},
    {path:"sessions", component:ListsessionComponent},
    {path:"candidats", component:CandidatListComponent},
    {path:"candidats/add", component:AddCandidatComponent},
    {path:"formations/add", component:AddFormationComponent},
    {path:"sessions/add", component:AddsessionComponent},
    {path:"formateurs/add", component:AddFormateurComponent},
    { path: 'candidats/edit/:id', component: ModifierCandidatComponent },
    { path: 'formations/edit/:id', component:ModifierFormationComponent },
    { path: 'sessions/edit/:id', component:ModifierSessionComponent},
    { path: 'formateurs/edit/:id', component:ModifierFormateurComponent},
    {path: "recherche", component: RechercheComponent },
    { path: "recherche/detail/:id", component: DetailComponent },
    { path: "inscrire", component: InscrireComponent },
  ];



