import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ApiNasaExoplanetsService } from './../../shared/services/api-nasa-exoplanets.service';

@Component({
  selector: 'rmapp-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.css']
})
export class ExoplanetsComponent implements OnInit {

  exoplanets: Array<any> = [];
  lengthPaginator: string = '10';
  pageSizePaginator:string = '10';
  pageSizeOptionsPaginator: number[] = [15, 30, 50, 200, 500];

  dataSource = new MatTableDataSource(this.exoplanets) ;
  displayedColumns: string[] = ['star','planet', 'period','distance','method', 'year', 'mass'];


   constructor(private apiExoplanets: ApiNasaExoplanetsService, private pageEvent: PageEvent) { }

  ngOnInit(): void {
    // this.getExoplanets();
    this.getExoplanetsArray();
    this.lengthPaginator = `${this.exoplanets.length}`
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptionsPaginator = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  // getExoplanets(){
  //   this.apiExoplanets.getQuery().subscribe(data => {
  //     console.log(data[2])
  //     for (let exoplanets of data){
  //       this.exoplanets.push(Object.values(exoplanets));
  //     }
  //   })
  //   }

  getExoplanetsArray(){
    let data = this.apiExoplanets.getArray();
    for (let exoplanet of data){
      exoplanet.sy_dist ? exoplanet.sy_dist = Math.round((exoplanet.sy_dist * 3.2616) *100 ) /100 : exoplanet.sy_dist = 0;
      exoplanet.pl_orbper ? exoplanet.pl_orbper = Math.round(exoplanet.pl_orbper *100 ) /100 : exoplanet.pl_orbper = 0;
      exoplanet.pl_masse ? exoplanet.pl_masse = Math.round(exoplanet.pl_masse *100 ) /100 : exoplanet.pl_masse = 0;
      this.exoplanets.push(Object.values(exoplanet));
    };
  }




}
