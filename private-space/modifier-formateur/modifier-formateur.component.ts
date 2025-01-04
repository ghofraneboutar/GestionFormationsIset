import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from '../formateur.service';
import { Formateur } from '../../model/formateur';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrl: './modifier-formateur.component.css'
})
export class ModifierFormateurComponent {
  formateur? : Formateur;
  constructor(
    private activeRoute : ActivatedRoute,
    private formateurService : FormateurService,
    private router : Router
  ){}

  editFormateur(f : NgForm){
    this.formateurService.editFormateur(this.formateur!).subscribe(
      formateur => this.router.navigate(['/formateurs'])
    );
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        this.formateurService.getFormateurById((parametres['id'])).subscribe(
          formateur=>this.formateur = formateur
        )
    }
  )
}
}
