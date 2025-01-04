import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formations } from '../model/formations';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { Formateur } from '../model/formateur';
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private Formations = [];
  private Session = [];
  private formateur =[];
  private baseURL = "http://localhost:3000/formations";
  private baseUrL = "http://localhost:3000/sessions";
  private baseUrl = "http://localhost:3000/formateur";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  constructor(private httpClient : HttpClient) { }


  getFormations() : Observable<Formations[]>{
   
    return this.httpClient.get<Formations[]>(this.baseURL);
  }

  getFormationById(id: string) : Observable<Formations>{
    return this.httpClient.get<Formations>(this.baseURL+"/"+id);
  }
  getSessions(): Observable<Session[]> {
    return this.httpClient.get<Session[]>(this.baseUrL);
  }
  getFormateurs(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.baseUrl);
  }
  getSessionsByFormationId(formationId: number): Observable<Session[]> {
    return this.httpClient.get<Session[]>(this.baseUrL+"/"+formationId);
  }
  getFormateurById(id: string) : Observable<Formateur>{
    return this.httpClient.get<Formateur>(this.baseUrl+"/"+id);
  }

}