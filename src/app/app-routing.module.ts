import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PnfComponent } from './auth/pnf/pnf.component';
import { LoginComponent } from './auth/login/login.component';
import { AddimagesComponent } from './auth/addimages/addimages.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'signup', component : SignupComponent },
  {path : 'login' , component : LoginComponent},
  {path : 'addimages' , component : AddimagesComponent , canActivate : [AuthGuardGuard]},
  {path : '**', component : PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
