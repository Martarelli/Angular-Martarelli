import { Exoplanet } from './../models/exoplanet';
import { ApiNasaExoplanetsService } from './../../shared/services/api-nasa-exoplanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmapp-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.css']
})
export class ExoplanetsComponent implements OnInit {

  exoplanets: Array<any> = [];
  lengthPaginator: string = '10';
  pageSizePaginator:string = '10';
  pageSizeOptionsPaginator:Array<number> = [15, 30, 50, 200, 500];

  displayedColumns: string[] = ['star','planet', 'period','distance','method', 'year', 'mass'];
  dataSource = this.exoplanets;

   constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    this.getExoplanets();
    this.getExoplanetsArray();
    this.lengthPaginator = `${this.exoplanets.length}`
  }

  getExoplanets(){
    this.apiExoplanets.getQuery().subscribe(data => {
      console.log(data[2])
      for (let exoplanets of data){
        this.exoplanets.push(Object.values(exoplanets));
      }
    })
    }

  getExoplanetsArray(){
    let data = this.apiExoplanets.getArray();
    for (let exoplanet of data){
      exoplanet.sy_dist ? exoplanet.sy_dist = Math.round((exoplanet.sy_dist * 3.2616) *100 ) /100 : 0;
      this.exoplanets.push(Object.values(exoplanet));
    };
  }




}
