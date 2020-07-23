import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports:[AboutComponent]
})
export class AboutModule { }
