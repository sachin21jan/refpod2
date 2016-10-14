import { NgModule }                                from '@angular/core';
import { CommonModule }                            from '@angular/common';
import { HttpModule }                              from '@angular/http';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

//Custom modules
import { SharedModule }                            from  '../shared/shared.module'

//Components
import { UserHomeComponent }                       from './user-home.component';
import { UserNavbarComponent }                     from './user-navbar.component' 
import { UserProfileComponent }                    from './profile/user-profile.component';
import { UserFriendsComponent }                    from './friends/user-friends.component';
import { UserJobsComponent }                       from './jobs/user-jobs.component';
import { UserAccountComponent }                    from './side-nav/user-account.component';
import { UserFavoritesComponent }                  from './side-nav/user-favorites.component';
import { UserSideNavComponent }                    from './side-nav/user-sidenav.component';

import { UserJobsService }                         from './services/user-jobs.service';

//Routing
import { UserRouting }                             from './user.routing';


@NgModule({
  imports:  [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,   
    UserRouting
  ],

  declarations: [ 
     UserHomeComponent,
     UserNavbarComponent,
     UserProfileComponent,
     UserFriendsComponent,
     UserJobsComponent,
     UserAccountComponent,
     UserFavoritesComponent,
     UserSideNavComponent
  ],

exports: [ UserHomeComponent ],

providers: [
    UserJobsService
  ]
})

export class UserModule {
}