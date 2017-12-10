import { Component, OnInit } from '@angular/core';
import {GoogleAuthServiceService} from "../services/google-auth-service.service";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authenticated :boolean=false;
  userName:String="";
  srcPhoto:String="";

  constructor(private auth: GoogleAuthServiceService, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {});

  }

  ngOnInit() {
    this.auth.currentUserObservable.subscribe(observer => {
      if (observer!= null){
        this.authenticated=true;
        this.userName= observer.displayName;
        this.srcPhoto=observer.photoURL
      }else{
        this.authenticated=false;
        this.userName="";
      }
    });
  }

  login(){
    this.auth.googleLogin();
  }

  logout(){
    this.auth.signOut() ;
  }


}
