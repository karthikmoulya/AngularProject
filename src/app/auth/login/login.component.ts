import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { MyfireService } from 'src/app/services/myfire.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastService : ToastrService,
    private myfire : MyfireService,
    private userservice : UserService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  submit(form : NgForm){
  const email = form.value.email;
  const password = form.value.password;
  firebase.auth().signInWithEmailAndPassword(email , password)
  .then(userData => {
      if(userData.user.emailVerified){
      this.myfire.getDataFromDatabase(userData.user.uid)
      .then(userDataFromDatabase => {
        this.userservice.set(userDataFromDatabase);
        const message = `${email} has been succesfully verified`;
        this.toastService.success(message);
        this.router.navigate(['/addimages']);
      }).catch(err => console.log(err));
      
    }else{
      const message = `${email} yet to be verified please check your email address and verify it`;
      this.toastService.error(message);
    }
  })
  .catch(err => {
    this.toastService.error(err.message);
    firebase.auth().signOut();
  })
  }
}
