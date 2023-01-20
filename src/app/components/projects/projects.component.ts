import { GithubRepository } from './../../shared/models/github-repository';
import { ApiGithubService } from './../../shared/services/api-github.service';
import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../shared/models/Project';

@Component({
  selector: 'rmapp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectInterface[] = [
    {title: ' ', url:' ', imgurl: 'https://live.staticflickr.com/65535/52030345231_dcb8824e5a_b.jpg', description: ' '},
    {title: ' ', url:' ', imgurl: 'https://live.staticflickr.com/65535/52030380253_e2436f8556_b.jpg', description: ' '},
    {title: ' ', url:' ', imgurl: 'https://live.staticflickr.com/65535/52029298937_7df90677a6_h.jpg', description: ' '},
    {title: ' ', url:' ', imgurl: 'https://live.staticflickr.com/65535/52030594999_23771aa987_h.jpg', description: ' '},
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
      this.projects[0].title = data.name;
      this.projects[0].url = data.url;
      this.projects[0].description = data.description;
    });
  }

  getProjectTwo() {
    this.apiGithub.getProjectTwo().subscribe(data => {
      this.projects[1].title = data.name;
      this.projects[1].url = data.url;
      this.projects[1].description = data.description;
    });
  }

  getProjectThree(){
    this.apiGithub.getProjectThree().subscribe(data => {
      this.projects[2].title = data.name;
      this.projects[2].url = data.url;
      this.projects[2].description = data.description;
    });
  }

  getProjectFour(){
    this.apiGithub.getProjectFour().subscribe(data => {
      this.projects[3].title = data.name;
      this.projects[3].url = data.url;
      this.projects[3].description = data.description;
    });
  }

}
