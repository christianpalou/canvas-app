import { Component, OnInit } from '@angular/core';
import {GoogleAuthServiceService} from "../services/google-auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: GoogleAuthServiceService ) { }

  ngOnInit() {
  }

  login(){
    this.auth.googleLogin();
  }

  logout(){
    this.auth.signOut() ;
  }


}
