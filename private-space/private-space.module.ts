import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateSpaceRoutingModule } from './private-space-routing.module';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { CandidatListComponent } from './list-cndidat/candidat-list.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { ModifierCandidatComponent } from './modifier-candidat/modifier-candidat.component';
import { ModifierSessionComponent } from './modifier-session/modifier-session.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AddsessionComponent } from './add-session/addsession.component';
import { ListformateurComponent } from './list-formateur/listformateur.component';
import { ListformationComponent } from './list-formation/listformation.component';
import { ListsessionComponent } from './list-session/listsession.component';
import { FormsModule } from '@angular/forms';
import { ModifierFormationComponent } from './modifierformation/modifierformation.component';


@NgModule({
  declarations: [
    AdminSpaceComponent,
    CandidatListComponent,
    AddCandidatComponent,
    ModifierCandidatComponent,
    ModifierFormateurComponent,
    ModifierSessionComponent,
    ModifierFormationComponent,
    AddFormateurComponent,
    AddFormationComponent,
    AddsessionComponent,
    ListformateurComponent,
    ListformationComponent,
    ListsessionComponent,
  ],
  imports: [
    CommonModule,
    PrivateSpaceRoutingModule,
    FormsModule
    
  ]
})
export class PrivateSpaceModule { }
