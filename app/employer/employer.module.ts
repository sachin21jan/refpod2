import { NgModule }                                    from '@angular/core';
import { CommonModule }                                from '@angular/common';
import { HttpModule }                                  from '@angular/http';
import { FormsModule, ReactiveFormsModule }            from '@angular/forms';

//Custom modules
import { SharedModule }                                from  '../shared/shared.module'

//Components
import { EmployerHomeComponent }                       from './employer-home.component';
import { EmployerNavbarComponent }                     from './employer-navbar.component' 
import { EmployerProfileComponent }                    from './profile/employer-profile.component';
import { EmployerJobsComponent }                       from './jobs/employer-jobs.component';
import { PostJobComponent }                            from './post-job/post-job.component';
import { CompanyProfileComponent }                     from './side-nav/company-profile.component';
import { JobListingComponent }                         from './side-nav/job-listing.component';
import { EmployerSideNavComponent }                    from './side-nav/employer-sidenav.component';

import { EmployerJobsService }                         from './services/employer-jobs.service';

//Routing
import { EmployerRouting }                             from './employer.routing';


@NgModule({
  imports:  [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,   
    EmployerRouting
  ],

  declarations: [ 
     EmployerHomeComponent,
     EmployerNavbarComponent,
     EmployerProfileComponent,
     EmployerJobsComponent,
     PostJobComponent,
     JobListingComponent,
     CompanyProfileComponent,
     EmployerSideNavComponent
  ],

exports: [ EmployerHomeComponent ],

providers: [
    EmployerJobsService
  ]
})

export class EmployerModule {
}