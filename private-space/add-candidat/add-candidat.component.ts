import { Component } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';
import { Candidat } from '../../model/candidat';
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrl: './add-candidat.component.css'
})
export class AddCandidatComponent {
  constructor(
    private candidatService:CandidatService, 
    private router : Router){}

  addCandidat(f : NgForm){
    this.candidatService.addCandidat(f.value.nom, f.value.prenom,f.value.email,f.value.numCarte,f.value.photo,f.value.pw).subscribe(
      Candidat => this.router.navigate(['/candidats'])
    );
  }

}






