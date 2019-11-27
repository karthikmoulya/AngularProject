import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aproject';

  ngOnInit(){
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgiZessmatRBshR5m-putKxf85alUutIM",
    authDomain: "instagram-52b69.firebaseapp.com",
    databaseURL: "https://instagram-52b69.firebaseio.com",
    projectId: "instagram-52b69",
    storageBucket: "instagram-52b69.appspot.com",
    messagingSenderId: "69915623723",
    appId: "1:69915623723:web:4b9aa47f9f9a8d5617c56e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
