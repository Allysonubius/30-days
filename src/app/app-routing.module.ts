import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DayoneComponent } from './page/task/dayone/dayone.component';

const routes: Routes = [
  {
    path:'dayone', component:DayoneComponent
  },
  {
    path:'homePage', component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
