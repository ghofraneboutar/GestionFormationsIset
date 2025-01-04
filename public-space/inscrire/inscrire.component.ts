import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandidatService } from '../../private-space/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrl: './inscrire.component.css'
})
export class InscrireComponent {
  
  constructor(
    private candidatService:CandidatService, 
    private router : Router){}

  addCandidat(f : NgForm){
    this.candidatService.addCandidat(f.value.nom, f.value.prenom,f.value.email,f.value.numCarte,f.value.photo,f.value.pw).subscribe(
      Candidat => this.router.navigate(['/inscrire'])
    );
  }
}
