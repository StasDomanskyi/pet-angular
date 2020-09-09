import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CityComponent } from './pages/city/city.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { FriendsComponent } from './pages/about-us/friends/friends.component';
import { PlansComponent } from './pages/about-us/plans/plans.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'about-us',
    component: AboutUsComponent,
    children: [
      { path: 'friends', component: FriendsComponent },
      { path: 'plans', component: PlansComponent }
    ]
  },
  {path: 'city', component: CityComponent },
  {path: 'rxjs', component: RxjsComponent },
  
  {
    path: 'map', 
    loadChildren: () => import('./modules/chart/chart.module').then(m => m.ChartModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
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
