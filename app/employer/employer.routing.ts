import { ModuleWithProviders }           from '@angular/core';
import { RouterModule }                  from '@angular/router';

import { EmployerHomeComponent }         from './employer-home.component';
import { EmployerJobsComponent }         from './jobs/employer-jobs.component';
import { PostJobComponent }              from './post-job/post-job.component';
import { EmployerProfileComponent }      from './profile/employer-profile.component';

export const EmployerRouting: ModuleWithProviders  =   RouterModule.forChild([
                    { 
                        path: 'employerhome',
                        component: EmployerHomeComponent,                     
                        children: [
                            {
                                path: '',
                                component: EmployerJobsComponent
                            },
                            {
                                path: 'postjob',
                                component: PostJobComponent
                            },
                            {
                                path: 'profile',
                                component: EmployerProfileComponent
                            }
                        ]
                     }
]);