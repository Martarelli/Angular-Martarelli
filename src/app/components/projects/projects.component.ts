import { ApiGithubService } from './../../shared/services/api-github.service';
import { Component, OnInit } from '@angular/core';
import { GridInterface } from '../models/grid-model';

@Component({
  selector: 'rmapp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  tiles: GridInterface[] = [
    {title: ' ', cols: 4, rows: 1, url:' ', imgurl: 'url(https://live.staticflickr.com/65535/52030345231_dcb8824e5a_b.jpg)', description: ' '},
    {title: ' ', cols: 2, rows: 2, url:' ', imgurl: 'url(https://live.staticflickr.com/65535/52030380253_e2436f8556_b.jpg)', description: ' '},
    {title: ' ', cols: 2, rows: 1, url:' ', imgurl: 'url(https://live.staticflickr.com/65535/52029298937_7df90677a6_h.jpg)', description: ' '},
    {title: ' ', cols: 2, rows: 1, url:' ', imgurl: 'url(https://live.staticflickr.com/65535/52030594999_23771aa987_h.jpg)', description: ' '},
  ];

  dataOne: Array<any> = [];
  dataTwo: Array<any> = [];
  dataThree: Array<any> = [];
  dataFour: Array<any> = [];

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProjectOne();
    this.getProjectTwo();
    this.getProjectThree();
    this.getProjectFour();
  }

  getProjectOne(){
    this.apiGithub.getProjectOne().subscribe(data => {
      this.dataOne = Object.values(data)
      this.tiles[0].title = this.dataOne[2];
      this.tiles[0].url = this.dataOne[6];
      this.tiles[0].description = this.dataOne[7];
    });
  }

  getProjectTwo() {
    this.apiGithub.getProjectTwo().subscribe(data => {
      this.dataTwo = Object.values(data)
      this.tiles[1].title = this.dataTwo[2];
      this.tiles[1].url = this.dataTwo[6];
      this.tiles[1].description = this.dataTwo[7];
    });
  }

  getProjectThree(){
    this.apiGithub.getProjectThree().subscribe(data => {
      this.dataThree = Object.values(data)
      this.tiles[2].title = this.dataThree[2];
      this.tiles[2].url = this.dataThree[6];
      this.tiles[2].description = this.dataThree[7];
    });
  }

  getProjectFour(){
    this.apiGithub.getProjectFour().subscribe(data => {
      this.dataFour = Object.values(data)
      this.tiles[3].title = this.dataFour[2];
      this.tiles[3].url = this.dataFour[6];
      this.tiles[3].description = this.dataFour[7];
    });
  }

}
