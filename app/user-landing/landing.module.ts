import { NgModule }                                from '@angular/core';
import { CommonModule }                            from '@angular/common';
import { HttpModule }                              from '@angular/http';
import { RouterModule }                            from '@angular/router';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

//Custom modules
import { SharedModule }                            from  '../shared/shared.module'

//Components
import { LandingComponent }               from './landing.component';
import { HomeBannerComponent }            from './home-banner/home-banner.component';
import { NavbarComponent }                from './navbar/navbar.component';
import { SignInComponent }                from './sign-in/sign-in.component';
import { SignUpComponent }                from './sign-up/sign-up.component';
import { HowItWorksComponent }            from './how-it-works/how-it-works.component';
import { FeaturedEmployerComponent }      from './featured-employer/featured-employer.component';
import { ClientTestimonialComponent }     from './client-testimonial/client-testimonial.component';
import { ContactUsComponent }             from './contact-us/contact-us.component';


import { AuthenticationService } from './services/authentication.service';

//Routing
import { LandingRouting }       from './landing.routing';

@NgModule({
  imports:  [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    LandingRouting
  ],

  declarations: [ 
     LandingComponent,
     HomeBannerComponent,
     NavbarComponent,
     SignInComponent,
     SignUpComponent,
     HowItWorksComponent,
     FeaturedEmployerComponent,
     ClientTestimonialComponent,
     ContactUsComponent
     ],

  exports: [ LandingComponent ],  
  providers: [
    AuthenticationService
  ]
})

export class LandingModule {
}