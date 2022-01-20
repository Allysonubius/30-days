import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DayoneComponent } from './page/task/dayone/dayone.component';
import { DaytwoComponent } from './page/task/daytwo/daytwo.component';

const routes: Routes = [

  {
    path:'homePage', component:HomePageComponent
  },
  {
    path:'dayone', component:DayoneComponent
  },
  {
    path:'daytwo', component:DaytwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
