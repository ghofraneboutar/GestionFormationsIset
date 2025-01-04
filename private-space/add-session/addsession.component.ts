import { Component } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrl: './addsession.component.css'
})
export class AddsessionComponent {
  constructor(
    private sessionService:SessionService, 
    private router : Router){}

  addSession(f : NgForm){
    this.sessionService.addSession(f.value.datedebut, f.value.description,f.value.datefin,f.value.formation).subscribe(
      Session => this.router.navigate(['/sessions'])
    );
  }

}
