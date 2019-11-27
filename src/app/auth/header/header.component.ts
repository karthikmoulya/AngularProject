import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedin : Boolean = false;
  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit() {
     firebase.auth().onAuthStateChanged(userData => {
       if(userData && userData.emailVerified){
         this.isLoggedin = true;
         this.router.navigate(['/addimages']);
       }
       else{
         this.isLoggedin = false;
         
       }
     })
  }
  logout(user){
    firebase.auth().signOut();
    this.userService.destroy();
    this.router.navigate(['/login']);
  }

}
