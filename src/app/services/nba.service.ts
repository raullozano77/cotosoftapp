// Primer import a realizar para un SERVICIO
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../components/nba/nba';

@Injectable({
  providedIn: 'root'
}
)
export class NBA_Service {
 public baseUrl = environment.nbaURL;

 constructor(private _http: HttpClient){
   console.log('Base Url: ', this.baseUrl);
 }

 getUser(userId:string): Observable<Team>{
  const url = this.baseUrl + userId;
  return this._http.get<Team>(url);
 }
}
