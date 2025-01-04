import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicService } from '../public.service';
import { Formations } from '../../model/formations';
import { Session } from '../../model/session';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  formation ? : Formations;
  sessions?: Session[]=[];
  formateurs?:string[]=[]
  constructor(
    private activeRoute : ActivatedRoute,
    private publicService : PublicService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      
      parametres => {
        this.publicService.getFormationById((parametres['id'])).subscribe(
          formation=>this.formation = formation
        )
        this.publicService.getSessionsByFormationId((parametres['id'])).subscribe(
          sessions => this.sessions = sessions
      
        );
        console.log(this.sessions);
      })
      
    }
    
  }