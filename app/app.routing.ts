import { RouterModule } from '@angular/router';

export const AppRouting = RouterModule.forRoot([
                    
                    { path: '', redirectTo: '/user', pathMatch: 'full'}
                    //{ path: '', component: LandingComponent}	
                    //{ path: 'signup', component: SignupLandingComponent}				                    
                    // { path: 'user', component: UserHomeComponent}
                    // { path: 'users', component: UsersComponent },
                    // { path: 'users/new', component: UserFormComponent },
                    // { path: 'users/:id', component: UserFormComponent },
		            // { path: '**', component: NotFoundComponent}
]);