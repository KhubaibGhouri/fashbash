import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FollowComponent } from './follow/follow.component';

export const router: Routes = [

    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home',component: HomeComponent },
    { path: 'feeds',component: FeedsComponent },
    { path: 'follow',component: FollowComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);