import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formations } from '../model/formations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formations=[];
  private baseUrl="http://localhost:3000/formations";
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  constructor(private httpClient:HttpClient) { }

  getFormations():Observable<Formations[]>{
    return this.httpClient.get<Formations[]>(this.baseUrl);
  }


  addFormation(titre : string, description:string, chargeHoraire:string,programme:string,niveau:string,motcle:string,categorie:string ): Observable<Formations>{
    return this.httpClient.post<Formations>(
      this.baseUrl,
      JSON.stringify({
        titre : titre,
        description:description,
        chargeHoraire: chargeHoraire,
        programmeUrl: programme,
        niveau:niveau,
        motcle:motcle,
        categories:categorie
        
      }),
      this.options
      )
  }
  getFormationById(id: string) : Observable<Formations>{
    return this.httpClient.get<Formations>(this.baseUrl+"/"+id);
  }

  editFormation(formation: Formations) : Observable<Formations>{
  
   return this.httpClient.put<Formations>(
    this.baseUrl+"/"+formation.id,
    JSON.stringify({
        titre :   formation.titre,
        description: formation.description,
        chargeHoraire : formation.chargeHoraire,
        niveau : formation.niveau,
        programmeUrl:  formation.programmeUrl,
        motCle:   formation.motCle,
        categories:      formation.categories
       
    }),
    this.options
    )
  }
  deleteFormation(id : number):Observable<Formations>{
    return this.httpClient.delete<Formations>(this.baseUrl+"/"+id)
  }
}

