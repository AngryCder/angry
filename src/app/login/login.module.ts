import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports :  [FontAwesomeModule,
              CommonModule,
              MatButtonModule,
              RouterModule.forChild(routes)
  ],
  declarations : [LoginComponent],
  exports : [LoginComponent]
})
export class LoginModule{}
