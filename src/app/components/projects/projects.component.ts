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
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
    {title: ' ', url:' ', imgurl: ' ', description: ' '},
  ];

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProjectOne();
    this.getProjectTwo();
    this.getProjectThree();
    this.getProjectFour();
    this.getProjectFive();
    this.getProjectSix();
  }

  getProjectOne(){
    this.apiGithub.getProjectOne().subscribe((data: GithubRepository) => {
      this.projects[0].title = data.name;
      this.projects[0].url = data.html_url;
      this.projects[0].imgurl = '../../../assets/images/ecommerceAngular.png';
      this.projects[0].description = data.description;
    });
  }

  getProjectTwo() {
    this.apiGithub.getProjectTwo().subscribe((data: GithubRepository) => {
      this.projects[1].title = data.name;
      this.projects[1].url = data.html_url;
      this.projects[1].imgurl = '../../../assets/images/calcReact.png';
      this.projects[1].description = data.description;
    });
  }

  getProjectThree(){
    this.apiGithub.getProjectThree().subscribe((data: GithubRepository)=> {
      this.projects[2].title = data.name;
      this.projects[2].url = data.html_url;
      this.projects[2].imgurl = '../../../assets/images/coderAngular.jpg';
      this.projects[2].description = data.description;
    });
  }

  getProjectFour(){
    this.apiGithub.getProjectFour().subscribe((data: GithubRepository) => {
      this.projects[3].title = data.name;
      this.projects[3].url = data.html_url;
      this.projects[3].imgurl = '../../../assets/images/diretivasAngular.jpg';
      this.projects[3].description = data.description;
    });
  }

  getProjectFive(){
    this.apiGithub.getProjectFive().subscribe((data: GithubRepository) => {
      this.projects[4].title = data.name;
      this.projects[4].url = data.html_url;
      this.projects[4].imgurl = '../../../assets/images/calculadoraJS.jpg';
      this.projects[4].description = data.description;
    });
  }

  getProjectSix(){
    this.apiGithub.getProjectSix().subscribe((data: GithubRepository) => {
      this.projects[5].title = data.name;
      this.projects[5].url = data.html_url;
      this.projects[5].imgurl = '../../../assets/images/netflixJs.jpg';
      this.projects[5].description = data.description;
    });
  }

}
