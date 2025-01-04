import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessions=[];
  private baseUrl="http://localhost:3000/sessions";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  constructor(private httpClient:HttpClient) { }

  getSession():Observable<Session[]>{
    return this.httpClient.get<Session[]>(this.baseUrl);
  }

  addSession(datedebut : string, description:string,dateFin:string,formation:string): Observable<Session>{
    return this.httpClient.post<Session>(
      this.baseUrl,
      JSON.stringify({
        dateDebut : datedebut,
        description:description,
        dateFin:dateFin,
        formation: formation,
      }),
      this.options
      )
  }
  getSessionById(id: string) : Observable<Session>{
    return this.httpClient.get<Session>(this.baseUrl+"/"+id);
  }

  editSession(session: Session) : Observable<Session>{
  
   return this.httpClient.put<Session>(
    this.baseUrl+"/"+session.id,
    JSON.stringify({
        datedebut :   session.dateDebut,
        description: session.description,
        dateFin : session.dateFin,
        formation:  session.formation,
        formateurs : session.formateurs,
        candidats:   session.candidats,
    }),
    this.options
    )
  }
  deleteSession(id : number):Observable<Session>{
    return this.httpClient.delete<Session>(this.baseUrl+"/"+id)
  }
}



