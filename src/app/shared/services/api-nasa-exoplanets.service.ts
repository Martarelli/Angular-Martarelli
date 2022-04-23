import { Exoplanet } from './../../components/models/exoplanet';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaExoplanetsService {

  queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse+from+ps&format=json';

  // queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20%27CONFIRMED%27%20&format=json';

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders()
            .append('access-control-allow-origin', '*')
            .append('Referrer-Policy', 'strict-origin-when-cross-origin');

  getQuery(): Observable<Array<Exoplanet>>{
    return this.httpClient.get<Array<Exoplanet>>(`${this.queryAPI}`, { headers: this.headers });
  }

}
