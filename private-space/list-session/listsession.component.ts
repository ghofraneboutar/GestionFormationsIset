import { Component, OnInit } from '@angular/core';
import { Session } from '../../model/session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-listsession',
  templateUrl: './listsession.component.html',
  styleUrl: './listsession.component.css'
})
export class ListsessionComponent implements OnInit {
    titre:string="liste des sessions"
     sessions? : Session[];
    
    constructor( private sessionService :SessionService){}
    
    
      ngOnInit(): void {
        this.sessionService.getSession().subscribe(
          sessions => this.sessions= sessions
        );
      }
    
      deleteSession(id : number){
        if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?"))
          this.sessionService.deleteSession(id).subscribe(
          sessionDeleted => this.sessions = this.sessions?.filter(session=>session!.id !== sessionDeleted.id)
          )
       
      }
    }
    
    

