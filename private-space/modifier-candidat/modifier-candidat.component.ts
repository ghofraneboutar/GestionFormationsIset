import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Candidat } from '../../model/candidat';
@Component({
  selector: 'app-modifier-candidat',
  templateUrl: './modifier-candidat.component.html',
  styleUrl: './modifier-candidat.component.css'
})
export class ModifierCandidatComponent implements OnInit {
  candidat? : Candidat;
  constructor(
    private activeRoute : ActivatedRoute,
    private candidatService : CandidatService,
    private router : Router
  ){}

  editCandidat(f : NgForm){
    this.candidatService.editCandidat(this.candidat!).subscribe(
      candidat => this.router.navigate(['/candidats'])
    );
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        this.candidatService.getCandidatById((parametres['id'])).subscribe(
          candidat=>this.candidat = candidat
        )
    }
  )
}
}
