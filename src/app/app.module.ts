import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuComponent } from './common/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CityComponent } from './pages/city/city.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { FriendsComponent } from './pages/about-us/friends/friends.component';
import { PlansComponent } from './pages/about-us/plans/plans.component';
import { FriendComponent } from './pages/about-us/friends/friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    AboutUsComponent,
    CityComponent,
    RxjsComponent,
    FriendsComponent,
    PlansComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
