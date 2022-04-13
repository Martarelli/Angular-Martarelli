import { ApiGithubService } from './../../shared/services/api-github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rmapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: Array<any> = [];
  photo: string = '';

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProfile();
    this.getPhoto();
  }

  getProfile() {
    this.apiGithub.getProfile().subscribe(data => {
      this.profile = Object.values(data);
      console.log(this.profile);
    });
  }
  getPhoto() {
    this.photo = this.profile[3];
    // this.apiGithub.getProfile().subscribe(data => {
    //   this.photo = Object.values(data);
    //   console.log(this.photo);
    };
}

