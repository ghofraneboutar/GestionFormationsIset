import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { Formations } from '../../model/formations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements OnInit{
  formations? : Formations[];

  constructor(
    private PublicService:PublicService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ){}
  
  ngOnInit(): void {
    this.PublicService.getFormations().subscribe(
      formations => this.formations = formations
    );
  }
 
}
