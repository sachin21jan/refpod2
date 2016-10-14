import { NgModule }                                 from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { HttpModule }                               from '@angular/http';
import { RouterModule }                             from '@angular/router';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

//Custom modules
import { SharedModule }                             from  '../shared/shared.module'

//Components
import { EmployerLandingComponent }                  from './employer-landing.component';
import { EmployerHomeBannerComponent }               from './home-banner/employer-home-banner.component';
import { EmployerLandingNavbarComponent }            from './navbar/employer-landing-navbar.component';
import { EmployerSignInComponent }                   from './sign-in/employer-sign-in.component';
import { EmployerSignUpComponent }                   from './sign-up/employer-sign-up.component';
import { EmployerHowItWorksComponent }               from './how-it-works/employer-how-it-works.component';
import { EmployerValueBenefitComponent }             from './value-benefit/employer-value-benefit.component';
import { EmployerCaseStudyComponent }                from './case-study/employer-case-study.component';
import { EmployerContactUsComponent }                from './contact-us/employer-contact-us.component';


import { AuthenticationService } from './services/authentication.service';

//Routing
import { EmployerLandingRouting }       from './employer-landing.routing';

@NgModule({
  imports:  [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    EmployerLandingRouting
  ],

  declarations: [ 
     EmployerLandingComponent,
     EmployerHomeBannerComponent,
     EmployerLandingNavbarComponent,
     EmployerSignInComponent,
     EmployerSignUpComponent,
     EmployerHowItWorksComponent,
     EmployerValueBenefitComponent,
     EmployerCaseStudyComponent,
     EmployerContactUsComponent
     ],

  exports: [ EmployerLandingComponent ],  
  providers: [
    AuthenticationService
  ]
})

export class EmployerLandingModule {
}