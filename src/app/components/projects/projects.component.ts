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
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  dataOne: Array<any> = [];
  dataTwo:Object = {};
  dataThree:Object = {};
  dataFour:Object = {};

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProjectOne();
    this.getProjectTwo();
    this.getProjectThree();
    this.getProjectFour();
    //

  }

  getProjectOne(){
    this.apiGithub.getProjectOne().subscribe(data => {
      let dataOne = data
      console.log(dataOne)
      this.dataOne = Object.values(dataOne)
      this.tiles[0].text = this.dataOne[3];
    });
  }

  getProjectTwo() {
    this.apiGithub.getProjectTwo().subscribe(data => {
      this.dataTwo = data;
      console.log(this.dataTwo)
    });
  }

  getProjectThree(){
    this.apiGithub.getProjectThree().subscribe(data => {
      this.dataThree = data
      console.log(this.dataThree)
    });
  }

  getProjectFour(){
    this.apiGithub.getProjectFour().subscribe(data => {
      this.dataFour = data
      console.log(this.dataFour)
    });
  }



}
