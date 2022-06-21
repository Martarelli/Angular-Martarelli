import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ApiNasaExoplanetsService } from './../../shared/services/api-nasa-exoplanets.service';
import { Exoplanet } from '../../shared/models/exoplanet';


@Component({
  selector: 'rmapp-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.css']
})


export class ExoplanetsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  exoplanets: Exoplanet[] = [];

  length: string = '';
  pageSize:string = '';
  pageSizeOptions: number[] = [10, 25, 50, 100];

  dataSource = new MatTableDataSource<Exoplanet>();

  displayedColumns: string[] = ['hostname', 'pl_name', 'pl_orbper', 'discoverymethod', 'disc_year','sy_dist', 'pl_masse'];

   constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    this.getExoplanetsArray();
  }

  getExoplanetsArray(){
    let data = this.apiExoplanets.getArray();
    for (let exoplanet of data){
      exoplanet.sy_dist ? exoplanet.sy_dist = Math.round((exoplanet.sy_dist * 3.2616) *100 ) /100 : exoplanet.sy_dist = 0;
      exoplanet.pl_orbper ? exoplanet.pl_orbper = Math.round(exoplanet.pl_orbper *100 ) /100 : exoplanet.pl_orbper = 0;
      exoplanet.pl_masse ? exoplanet.pl_masse = Math.round(exoplanet.pl_masse *100 ) /100 : exoplanet.pl_masse = 0;
      this.exoplanets.push(exoplanet);
    };
    this.dataSource.data = this.exoplanets;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }





}
