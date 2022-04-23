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
  lengthPaginator: string = '100';
  pageSizePaginator:string = '10';
  pageSizeOptionsPaginator:Array<number> = [25, 50, 100, 200, 1000];

  displayedColumns: string[] = ['star','planet','distance'];
  dataSource = this.exoplanets;

   constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    this.getExoplanets();
  }

  getExoplanets(){
    this.apiExoplanets.getQuery().subscribe(data => {
      console.log(data[2])
      for (let exoplanets of data){
        this.exoplanets.push(Object.values(exoplanets));
      }
    })
    }




}
