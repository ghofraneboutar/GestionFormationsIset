import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../model/candidat';
import { CandidatService } from '../candidat.service';
@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrl: './candidat-list.component.css'
})
export class CandidatListComponent implements OnInit{
  candidats? : Candidat[];
  title:string="liste des candidats";
  constructor( private candidatService :CandidatService){}


  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      candidats => this.candidats = candidats
    );
  }

  deleteCandidat(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
      this.candidatService.deleteCandidat(id).subscribe(
        bookDeleted => this.candidats = this.candidats?.filter(book=>book!.id !== bookDeleted.id)
      )
   
  }
}
