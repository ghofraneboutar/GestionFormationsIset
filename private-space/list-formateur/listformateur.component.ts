import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../model/formateur';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-listformateur',
  templateUrl: './listformateur.component.html',
  styleUrl: './listformateur.component.css'
})
export class ListformateurComponent implements OnInit {
title:string="liste des formateurs"
formateurs? : Formateur[];

constructor( private formateurService :FormateurService){}


  ngOnInit(): void {
    this.formateurService.getFormateurs().subscribe(
      formateurs => this.formateurs= formateurs
    );
  }

  deleteFormateur(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
      this.formateurService.deleteFormateur(id).subscribe(
      formateurDeleted => this.formateurs = this.formateurs?.filter(formateur=>formateur!.id !== formateurDeleted.id)
      )
   
  }
}

