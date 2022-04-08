import { ApiGithubService } from './../../shared/services/api-github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rmapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photo: any ;

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.photo = this.apiGithub.getProfilePic();
  }

}
