import { Photo } from './../../components/models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

 apiURL:string = 'https://api.github.com/repos/Martarelli'
 apiProfile: string = 'https://api.github.com/users/Martarelli'
 projectOne:string = 'Calculadora-EstacaJS'
 projectTwo:string = 'diretivasAngular-DIO'
 projectThree:string = 'CRUD-Cod3r'
 projectFour:string = 'Netflix'

 constructor(private httpClient: HttpClient) { }

 getProjectOne():Observable<Object> {
   return this.httpClient.get<Object>(`${this.apiURL}/${this.projectOne}`);
 }

 getProjectTwo():Observable<Object> {
   return this.httpClient.get<Object>(`${this.apiURL}/${this.projectTwo}`);
 }

 getProjectThree():Observable<Object> {
   return this.httpClient.get<Object>(`${this.apiURL}/${this.projectThree}`);
 }

 getProjectFour():Observable<Object> {
   return this.httpClient.get<Object>(`${this.apiURL}/${this.projectFour}`);
 }

 getProfile():Observable<Object> {
   return this.httpClient.get<Object>(this.apiProfile)
 }

}
