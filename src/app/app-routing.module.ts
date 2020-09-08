import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CityComponent } from './pages/city/city.component';

const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent },
  {path: 'city', component: CityComponent },
  {
    path: 'map', 
    loadChildren: () => import('./modules/chart/chart.module').then(m => m.ChartModule),
  },
  {path: '', component: HomeComponent},
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
