import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

 apiURL:string = 'https://api.github.com/repos/Martarelli'
 projectOne:string = 'Calculadora-EstacaJS'

 constructor(private httpClient: HttpClient) { }

 getProjectOne():Observable<Object> {
   return this.httpClient.get<Object>(`${this.apiURL}/${this.projectOne}`);
 }

}
