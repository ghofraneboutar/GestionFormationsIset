import { Component, OnInit } from '@angular/core';

import { Formations } from '../../model/formations';
import { FormationService } from '../formation.service';


@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrl: './listformation.component.css'
})
export class ListformationComponent implements OnInit {
titre:string="liste des formations";
formations?:Formations[];
constructor( private FormationService :FormationService){}


  ngOnInit(): void {
    this.FormationService.getFormations().subscribe(
      formations => this.formations= formations
    );
  }

  deleteFormation(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
      this.FormationService.deleteFormation(id).subscribe(
      formationDeleted => this.formations = this.formations?.filter(formation=>formation!.id !== formationDeleted.id)
      )
   
  }
}
