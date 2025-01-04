import { Component, OnInit } from '@angular/core';
import { Session } from '../../model/session';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier-session',
  templateUrl: './modifier-session.component.html',
  styleUrl: './modifier-session.component.css'
})
export class ModifierSessionComponent implements OnInit{
  session? : Session
  constructor(
    private activeRoute : ActivatedRoute,
    private sessionService : SessionService,
    private router : Router
  ){}

  editSession(f : NgForm){
    this.sessionService.editSession(this.session!).subscribe(
      session => this.router.navigate(['/sessions'])
    );
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        this.sessionService.getSessionById((parametres['id'])).subscribe(
          session=>this.session = session
        )
    }
  )
}
}


