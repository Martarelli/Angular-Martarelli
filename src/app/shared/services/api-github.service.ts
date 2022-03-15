import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

 apiURL:string = 'https://api.github.com/repos/Martarelli'

 constructor(private httpClient: HttpClient) { }

 getApi():Observable<Object> {

   return this.httpClient.get<Object>(this.apiURL);
 }

}
