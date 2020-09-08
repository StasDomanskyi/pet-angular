import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CityComponent } from './pages/city/city.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'city', component: CityComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
