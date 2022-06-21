import { GithubRepository } from './../../shared/models/github-repository';
import { ApiGithubService } from './../../shared/services/api-github.service';
import { Component, OnInit } from '@angular/core';
import { GridInterface } from '../../shared/models/grid-model';

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

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProjectOne();
    this.getProjectTwo();
    this.getProjectThree();
    this.getProjectFour();
  }

  getProjectOne(){
    this.apiGithub.getProjectOne().subscribe(data => {
      this.tiles[0].title = data.name;
      this.tiles[0].url = data.url;
      this.tiles[0].description = data.description;
    });
  }

  getProjectTwo() {
    this.apiGithub.getProjectTwo().subscribe(data => {
      this.tiles[1].title = data.name;
      this.tiles[1].url = data.url;
      this.tiles[1].description = data.description;
    });
  }

  getProjectThree(){
    this.apiGithub.getProjectThree().subscribe(data => {
      this.tiles[2].title = data.name;
      this.tiles[2].url = data.url;
      this.tiles[2].description = data.description;
    });
  }

  getProjectFour(){
    this.apiGithub.getProjectFour().subscribe(data => {
      this.tiles[3].title = data.name;
      this.tiles[3].url = data.url;
      this.tiles[3].description = data.description;
    });
  }

}
