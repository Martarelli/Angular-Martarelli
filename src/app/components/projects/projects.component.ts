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
    {title: 'One', cols: 4, rows: 1, color: 'lightblue', url:' ', imgurl: ' ', description: ' '},
    {title: 'Two', cols: 2, rows: 2, color: 'lightgreen', url:' ', imgurl: ' ', description: ' '},
    {title: 'Three', cols: 2, rows: 1, color: 'lightpink', url:' ', imgurl: ' ', description: ' '},
    {title: 'Four', cols: 2, rows: 1, color: '#DDBDF1', url:' ', imgurl: ' ', description: ' '},
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
