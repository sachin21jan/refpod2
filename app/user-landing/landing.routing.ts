import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const LandingRouting: ModuleWithProviders  = RouterModule.forChild([
                    { 
                        path: 'user', 
                        component: LandingComponent,
                        children: [
                            {
                                path: '',
                                component: SignInComponent
                            },
                            {
                                path: 'signup',
                                component: SignUpComponent
                            }
                        ]
                     }
]);