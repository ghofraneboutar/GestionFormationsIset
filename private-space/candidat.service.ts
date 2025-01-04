import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidat } from '../model/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private candidat=[];
  private baseUrl="http://localhost:3000/candidats";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }

  constructor(private httpClient:HttpClient) { }

  getCandidats():Observable<Candidat[]>{
    return this.httpClient.get<Candidat[]>(this.baseUrl);
  }
  addCandidat(nom : string, prenom : string,email : number,numCarte:string,photo:string,pw:string): Observable<Candidat>{
    return this.httpClient.post<Candidat>(
      this.baseUrl,
      JSON.stringify({
        nom : nom,
        prenom: prenom,
        email : email,
        numCarteId:numCarte,
        photo:photo,
        pw:pw
      }),
      this.options
      )
  }
  getCandidatById(id: string) : Observable<Candidat>{
    return this.httpClient.get<Candidat>(this.baseUrl+"/"+id);
  }

  editCandidat(candidat : Candidat) : Observable<Candidat>{
  
   return this.httpClient.put<Candidat>(
    this.baseUrl+"/"+candidat.id,
    JSON.stringify({
        nom : candidat.nom,
        prenom: candidat.prenom,
        email : candidat.email,
        numCarteId:candidat.numCarteId,
        photo:candidat.photo,
        pw:candidat.pw
    }),
    this.options
    )
  }
  deleteCandidat(id : number):Observable<Candidat>{
    return this.httpClient.delete<Candidat>(this.baseUrl+"/"+id)
  }
}
