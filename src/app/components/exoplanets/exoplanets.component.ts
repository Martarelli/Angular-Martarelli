import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ApiNasaExoplanetsService } from './../../shared/services/api-nasa-exoplanets.service';

@Component({
  selector: 'rmapp-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.css']
})


export class ExoplanetsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;

  exoplanets: Array<any> = [];
  length: string = '';
  pageSize:string = '';
  pageSizeOptions: number[] = [15, 30, 50, 100];

  dataSource = new MatTableDataSource(this.exoplanets) ;
  displayedColumns: string[] = ['star','planet', 'period','distance','method', 'year', 'mass'];

   constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    // this.getExoplanets();
    this.getExoplanetsArray();
    this.length = `${this.exoplanets.length}`
  }

  getExoplanetsArray(){
    let data = this.apiExoplanets.getArray();
    for (let exoplanet of data){
      exoplanet.sy_dist ? exoplanet.sy_dist = Math.round((exoplanet.sy_dist * 3.2616) *100 ) /100 : exoplanet.sy_dist = 0;
      exoplanet.pl_orbper ? exoplanet.pl_orbper = Math.round(exoplanet.pl_orbper *100 ) /100 : exoplanet.pl_orbper = 0;
      exoplanet.pl_masse ? exoplanet.pl_masse = Math.round(exoplanet.pl_masse *100 ) /100 : exoplanet.pl_masse = 0;
      this.exoplanets.push(Object.values(exoplanet));
    };
  }

  ngAfterViewInit(): void {

    console.log(this.paginator?.page.subscribe(data => {
      console.log(data.pageSize);
      console.log(data.pageIndex);

    }));


  }
  // getExoplanets(){
  //   this.apiExoplanets.getQuery().subscribe(data => {
  //     console.log(data[2])
  //     for (let exoplanets of data){
  //       this.exoplanets.push(Object.values(exoplanets));
  //     }
  //   })
  //   }





}
