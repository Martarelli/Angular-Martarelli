import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubProfile } from '../models/github-profile';
import { GithubRepository } from '../models/github-repository';

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

 getProjectOne():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectOne}`);
 }

 getProjectTwo():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectTwo}`);
 }

 getProjectThree():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectThree}`);
 }

 getProjectFour():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectFour}`);
 }

 getProfile():Observable<GithubProfile> {
   return this.httpClient.get<GithubProfile>(this.apiProfile)
 }

}
