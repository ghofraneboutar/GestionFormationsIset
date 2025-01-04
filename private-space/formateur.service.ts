import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../model/formateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private formateur=[];
  private baseUrl="http://localhost:3000/formateurs";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }

  constructor(private httpClient:HttpClient) { }

  getFormateurs():Observable<Formateur[]>{
    return this.httpClient.get<Formateur[]>(this.baseUrl);
  }

  addFormateur(nom : string, prenom:string, email:string,numCarte:string,numtel:string,photo:string,cv:string ): Observable<Formateur>{
    return this.httpClient.post<Formateur>(
      this.baseUrl,
      JSON.stringify({
        nom : nom,
        prenom: prenom,
        email : email,
        cin:numCarte,
        telephone:numtel,
        photo:photo,
        cv:cv
        
      }),
      this.options
      )
  }
  getFormateurById(id: string) : Observable<Formateur>{
    return this.httpClient.get<Formateur>(this.baseUrl+"/"+id);
  }

  editFormateur(formateur: Formateur) : Observable<Formateur>{
  
   return this.httpClient.put<Formateur>(
    this.baseUrl+"/"+formateur.id,
    JSON.stringify({
        nom :   formateur.nom,
        prenom: formateur.prenom,
        email : formateur.email,
        numCarteId : formateur.cin,
        numTel:  formateur.telephone,
        photo:   formateur.photo,
        cv:      formateur.cv
       
    }),
    this.options
    )
  }
  deleteFormateur(id : number):Observable<Formateur>{
    return this.httpClient.delete<Formateur>(this.baseUrl+"/"+id)
  }
}

