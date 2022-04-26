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
  imgJs: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg';
  imgTs: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg';
  imgHtml: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
  imgCss: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg';
  imgAng: string = 'https://camo.githubusercontent.com/b66984194cfc02fbd1d6afc27ef8428796af59b6c59e1b7d127b33ab0302bd84/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63662f416e67756c61725f66756c6c5f636f6c6f725f6c6f676f2e7376672f32343070782d416e67756c61725f66756c6c5f636f6c6f725f6c6f676f2e7376672e706e67';
  imgReact: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg';
  imgPython: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg';
  imgMysql: string = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg';
  imgCoding: string = 'https://images2.imgbox.com/33/35/zF7bJkKo_o.png';

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

