import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FollowComponent }  from './components/follow/follow.component';
import { UserprofileComponent }  from './components/userprofile/userprofile.component';
import { OtherProfileComponent }  from './components/otherprofile/otherprofile.component';
import { FeedsComponent }  from './components/feed/feeds.component';
export const router: Routes = [

    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home',component: HomeComponent },
    { path: 'follow',component: FollowComponent },
    { path: 'profile',component: UserprofileComponent },
     { path: 'otheruser',component: OtherProfileComponent },
     { path: 'feeds',component: FeedsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);