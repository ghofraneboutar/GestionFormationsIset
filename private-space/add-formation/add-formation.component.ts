import { Component } from '@angular/core';
import { FormationService } from '../formation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})
export class AddFormationComponent {
  constructor(
    private formationService:FormationService, 
    private router : Router){}
  addFormation(f : NgForm){
    this.formationService.addFormation(f.value.titre, f.value.description,f.value.chargehoraire,f.value.programme,f.value.niveau,f.value.motcle,f.value.categorie).subscribe(
      Formation => this.router.navigate(['/formations'])
    );
  }

}
