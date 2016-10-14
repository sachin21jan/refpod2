import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployerLandingComponent } from './employer-landing.component';
import { EmployerSignInComponent } from './sign-in/employer-sign-in.component';
import { EmployerSignUpComponent } from './sign-up/employer-sign-up.component';

export const EmployerLandingRouting: ModuleWithProviders  = RouterModule.forChild([
                    { 
                        path: 'employer', 
                        component: EmployerLandingComponent,
                        children: [
                            {
                                path: '',
                                component: EmployerSignInComponent
                            },
                            {
                                path: 'signup',
                                component: EmployerSignUpComponent
                            }
                        ]
                     }
]);