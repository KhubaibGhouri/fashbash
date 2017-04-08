import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { NavbarComponent }  from './components/navbars/navbar.component';
import { HomeComponent }  from './components/home/home.component';
import { FooterComponent }  from './components/footer/footer.component';
import { FollowComponent }  from './components/follow/follow.component';
import { Navbar_twoComponent }  from './components/navbars/navbar_two.component';
import { UserprofileComponent }  from './components/userprofile/userprofile.component';
import { OtherProfileComponent }  from './components/otherprofile/otherprofile.component';
import { FeedsComponent }  from './components/feed/feeds.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,routes ],
  declarations: [ 
   
    AppComponent ,
    NavbarComponent,
    FooterComponent,
    FollowComponent,
    Navbar_twoComponent,
    UserprofileComponent,
    OtherProfileComponent,
    FeedsComponent,
    HomeComponent
    
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
