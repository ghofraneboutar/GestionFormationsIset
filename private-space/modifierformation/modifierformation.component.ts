import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../formation.service';
import { Formations } from '../../model/formations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifierformation',
  templateUrl: './modifierformation.component.html',
  styleUrl: './modifierformation.component.css'
})
export class ModifierFormationComponent implements OnInit{
  formation? : Formations
  constructor(
    private activeRoute : ActivatedRoute,
    private formationService : FormationService,
    private router : Router
  ){}

  editFormation(f : NgForm){
    this.formationService.editFormation(this.formation!).subscribe(
      formation => this.router.navigate(['/formations'])
    );
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        this.formationService.getFormationById((parametres['id'])).subscribe(
          formation=>this.formation = formation
        )
    }
  )
}
}


