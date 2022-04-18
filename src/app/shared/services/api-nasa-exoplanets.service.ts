import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaExoplanetsService {

  queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20%27CONFIRMED%27%20&format=json';

  constructor(private httpClient: HttpClient) { }

  getQuery(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${this.queryAPI}`);
  }

}
