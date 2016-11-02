import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
//import { ProfileComponent } from './profile.component';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent }//,
  //{ path: 'profile', component: ProfileComponent }
];