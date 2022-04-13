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
  name: string = '';
  desc: string = '';

  constructor(private apiGithub: ApiGithubService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.apiGithub.getProfile().subscribe(data => {
      this.profile = Object.values(data);
      this.name = this.profile[0];
      this.photo = this.profile[3];
      this.desc = this.profile[24];
    });
  }
}

