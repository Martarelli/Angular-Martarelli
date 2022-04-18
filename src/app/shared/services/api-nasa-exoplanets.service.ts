import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaExoplanetsService {

  queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse+from+ps+order%20by+pl_name+desc&format=json';

  constructor(private httpClient: HttpClient) { }

  getQuery(): Observable<Object>{
    return this.httpClient.get<Object>(`${this.queryAPI}`);
  }

}
