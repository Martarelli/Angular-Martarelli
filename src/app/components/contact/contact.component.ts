import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmapp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactImage: string = "../../../assets/images/contactsvg.svg"
  linkedin: string = "../../../assets/images/linkedin.png"
  whatsapp: string = "../../../assets/images/whatsapp.png"
  github: string = "../../../assets/images/github.png"

  linkedinProfile: string = "https://www.linkedin.com/in/rmartarelli/"
  whatsappApi: string = "https://api.whatsapp.com/send?phone=018997971831"
  githubProfile: string ="https://github.com/Martarelli"
  ngOnInit(): void {
  }

}
