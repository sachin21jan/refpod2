import { ModuleWithProviders }       from '@angular/core';
import { RouterModule }              from '@angular/router';

import { UserHomeComponent }         from './user-home.component';
import { UserJobsComponent }         from './jobs/user-jobs.component';
import { UserProfileComponent }      from './profile/user-profile.component';
import { UserFriendsComponent }      from './friends/user-friends.component';

export const UserRouting: ModuleWithProviders  =   RouterModule.forChild([
                    { 
                        path: 'userhome',
                        component: UserHomeComponent,                     
                        children: [
                            {
                                path: '',
                                component: UserJobsComponent
                            },
                            {
                                path: 'profile',
                                component: UserProfileComponent
                            },
                            {
                                path: 'friends',
                                component: UserFriendsComponent
                            }
                        ]
                     }
]);