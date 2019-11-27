import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './auth/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './auth/header/header.component';
import { FooterComponent } from './auth/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { PnfComponent } from './auth/pnf/pnf.component';
import { LoginComponent } from './auth/login/login.component';
import { AddimagesComponent } from './auth/addimages/addimages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    PnfComponent,
    LoginComponent,
    AddimagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
