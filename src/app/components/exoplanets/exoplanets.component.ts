import { ApiNasaExoplanetsService } from './../../shared/services/api-nasa-exoplanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmapp-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.css']
})
export class ExoplanetsComponent implements OnInit {

  exoplanets: Array<any> = [];

  constructor(private apiExoplanets: ApiNasaExoplanetsService) { }

  ngOnInit(): void {
    this.getExoplanets();
  }

  getExoplanets(){
    this.apiExoplanets.getQuery().subscribe(data => {
      this.exoplanets = data;
      console.log(data);
      console.log(this.exoplanets)
    })
  }
}
