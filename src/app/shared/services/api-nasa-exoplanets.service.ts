import { Exoplanet } from './../../components/models/exoplanet';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaExoplanetsService {

  queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse+from+ps&format=json';

  exoplanetsArray: Array<Exoplanet> = [
    {"pl_name": "Kepler-11 c",
    "hostname": "Kepler-11",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 13.02502000,
    "pl_masse": 13.50000},
    {"pl_name": "Kepler-11 f",
    "hostname": "Kepler-11",
    "discoverymethod": "Transit",
    "disc_year": 2010,
    "pl_orbper": 46.68876000,
    "pl_masse": 2.30000},
    {"pl_name": "OGLE-TR-10 b",
    "hostname": "OGLE-TR-10",
    "discoverymethod": "Transit",
    "disc_year": 2004,
    "pl_orbper": 3.10127800,
    "pl_masse": 197.04600},
    {"pl_name": "HD 210702 b",
    "hostname": "HD 210702",
    "discoverymethod": "Radial Velocity",
    "disc_year": 2007,
    "pl_orbper": 354.29000000,
    "pl_masse": null},]

  // queryAPI:string = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20%27CONFIRMED%27%20&format=json';

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*')
            .append('Referrer-Policy', 'strict-origin-when-cross-origin');

  getQuery(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${this.queryAPI}`, { headers: this.headers });
  }

  getArray(){
    return this.exoplanetsArray;
  }
}
