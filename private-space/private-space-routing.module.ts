import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListformationComponent } from './list-formation/listformation.component';
import { ListformateurComponent } from './list-formateur/listformateur.component';
import { ListsessionComponent } from './list-session/listsession.component';
import { CandidatListComponent } from './list-cndidat/candidat-list.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';

const routes: Routes = [
  {path:"Admin-space", component:AdminSpaceComponent},
  {path:"formations", component:ListformationComponent},
  {path:"formateurs", component:ListformateurComponent},
  {path:"sessions", component:ListsessionComponent},
  {path:"candidats", component:CandidatListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSpaceRoutingModule { }
