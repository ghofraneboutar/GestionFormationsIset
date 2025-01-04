import { Component } from '@angular/core';
import { Formations } from '../../model/formations';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicService } from '../public.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  formationsFiltrees ?:Formations[];
  constructor(
  private activeRoute : ActivatedRoute,
  private publicService :PublicService,
  private router : Router
) {}

chercherFormation(motcle:string){
  this.publicService.getFormations().subscribe(
    (formations) => {
      this.formationsFiltrees = formations.filter((formation) =>
        formation.motCle.some((m) => m.toLowerCase().includes(motcle.toLowerCase()))
      
      );
    }
  );
}
}

