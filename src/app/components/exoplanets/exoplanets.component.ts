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

  constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    this.getExoplanets();
  }

  getExoplanets(){
    this.apiExoplanets.getQuery().subscribe(data => {
      for (let exoplanet of data){
        this.exoplanets.push(Object.values(exoplanet));
      }
      console.log(this.exoplanets)
    })
  }
}
