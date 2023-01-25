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
 projectOne:string = 'ecommerce-capgemini'
 projectTwo:string = 'calculadora-ReactJS'
 projectThree:string = 'CRUD-Cod3r'
 projectFour:string = 'diretivasAngular-DIO'
 projectFive:string = 'Calculadora-EstacaJS'
 projectSix:string = 'Netflix'

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

 getProjectFive():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectFive}`);
 }

 getProjectSix():Observable<GithubRepository> {
   return this.httpClient.get<GithubRepository>(`${this.apiURL}/${this.projectSix}`);
 }

 getProfile():Observable<GithubProfile> {
   return this.httpClient.get<GithubProfile>(this.apiProfile)
 }

}
