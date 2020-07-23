import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub,faTwitter,faGoogle,faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Router} from '@angular/router';
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',"../../assets/fonts.css"]
})
export class LoginComponent implements OnInit {

  constructor(private library: FaIconLibrary,private router:Router,private httpservice:HttpService) {
    library.addIcons(faGithub,faTwitter,faGoogle,faInstagram);
   }

  ngOnInit(): void {
    this.httpservice.test().subscribe((res:any)=>{console.log(res);
    })
  }

  goToAbout(){
    this.router.navigate(['./about'])
  }

}
